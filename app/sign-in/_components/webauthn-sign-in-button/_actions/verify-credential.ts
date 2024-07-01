"use server";

import { isTransport } from "@/lib/is-transport";
import { ServerActionError, isServerActionError, serverActionError } from "@/lib/server-action-error";
import { verifyAuthenticationResponse } from "@simplewebauthn/server";
import { AuthenticationResponseJSON, AuthenticatorTransportFuture } from "@simplewebauthn/types";
import { getPasskey } from "./get-passkey";
import { updatePasskey } from "./update-passkey";

export async function verifyCredential(
  authenticationResponse: AuthenticationResponseJSON,
): Promise<string | ServerActionError> {
  try {
    const passkey = await getPasskey(authenticationResponse.id);

    if (isServerActionError(passkey)) {
      throw passkey;
    }

    const verification = await verifyAuthenticationResponse({
      response: authenticationResponse,
      expectedRPID: process.env.WEBAUTHN_RP_ID || "localhost",
      expectedOrigin: process.env.WEBAUTHN_RP_ORIGIN || "http://localhost:3000",
      expectedChallenge: () => (true),
      authenticator: {
        credentialID: passkey.id,
        credentialPublicKey: passkey.publicKey,
        counter: Number(passkey.counter),
        transports: passkey.transports
          .split(",")
          .filter((transport) => (isTransport(transport)))
          .map((transport) => (transport as AuthenticatorTransportFuture)),
      },
    });

    if (!verification.verified) {
      throw new Error("verification failed");
    }

    const updatedPasskey = await updatePasskey(verification.authenticationInfo.credentialID, {
      counter: verification.authenticationInfo.newCounter,
    });

    if (isServerActionError(updatedPasskey)) {
      throw updatedPasskey;
    }

    return updatedPasskey.id;
  } catch (err) {
    console.error({ error: err });

    return serverActionError(err);
  }
}
