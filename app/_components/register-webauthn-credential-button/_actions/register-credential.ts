"use server";

import { authOptions } from "@/lib/auth/auth-options";
import { sharedClient } from "@/lib/prisma-client";
import { serverActionError } from "@/lib/server-action-error";
import { verifyRegistrationResponse } from "@simplewebauthn/server";
import { RegistrationResponseJSON } from "@simplewebauthn/types";
import { getServerSession } from "next-auth";

export async function registerCredential(
  registrationResponse: RegistrationResponseJSON,
) {
  try {
    const session = await getServerSession(authOptions);

    const googleUser = session?.user?.googleUsers.at(0);

    if (!googleUser) {
      throw new Error("unauthorized");
    }

    const verification = await verifyRegistrationResponse({
      response: registrationResponse,
      expectedChallenge: () => (true),
      expectedOrigin: process.env.WEBAUTHN_RP_ORIGIN || "http://localhost:3000",
    });

    if (!verification.verified || verification.registrationInfo === undefined) {
      throw new Error("verification failed");
    }

    const passkey = await sharedClient.passkey.create({
      data: {
        userId: googleUser.userId,
        id: verification.registrationInfo.credentialID,
        publicKey: Buffer.from(verification.registrationInfo.credentialPublicKey),
        counter: verification.registrationInfo.counter,
        deviceType: verification.registrationInfo.credentialDeviceType,
        backedUp: verification.registrationInfo.credentialBackedUp,
        transports: registrationResponse.response.transports?.join(",") || "",
      },
    });

    console.log("registerCredential", { passkey });
  } catch (err) {
    console.error({ error: err });

    return serverActionError(err);
  }
}
