"use server";

import { authOptions } from "@/lib/auth/auth-options";
import { isTransport } from "@/lib/is-transport";
import { ServerActionError, isServerActionError, serverActionError } from "@/lib/server-action-error";
import { generateRegistrationOptions } from "@simplewebauthn/server";
import { AuthenticatorTransportFuture, PublicKeyCredentialCreationOptionsJSON } from "@simplewebauthn/types";
import base64url from "base64url";
import { getServerSession } from "next-auth";
import { listPasskey } from "./list-passkey";

export async function credentialCreationOptions(): Promise<
  PublicKeyCredentialCreationOptionsJSON | ServerActionError
> {
  try {
    const session = await getServerSession(authOptions);

    const googleUser = session?.user?.googleUsers.at(0);

    if (!googleUser) {
      return new Error("unauthorized");
    }

    const passkeys = await listPasskey();

    if (isServerActionError(passkeys)) {
      throw passkeys;
    }

    const options = await generateRegistrationOptions({
      rpID: process.env.WEBAUTHN_RP_ID || "localhost",
      rpName: process.env.WEBAUTHN_RP_NAME || "bookmarks.a10a.app",
      userID: Uint8Array.from(base64url.toBuffer(`${googleUser.userId}`)),
      userName: googleUser.email,
      excludeCredentials: passkeys.map((passkey) => ({
        id: passkey.id,
        transports: passkey.transports
          .split(",")
          .filter((transport) => (isTransport(transport)))
          .map((transport) => (transport as AuthenticatorTransportFuture)),
      })),
    });

    return options;
  } catch (err) {
    console.error({ error: err });

    return serverActionError(err);
  }
}
