"use server";

import { ServerActionError, serverActionError } from "@/lib/server-action-error";
import { generateAuthenticationOptions } from "@simplewebauthn/server";
import { PublicKeyCredentialRequestOptionsJSON } from "@simplewebauthn/types";

export async function credentialRequestOptions(): Promise<
  PublicKeyCredentialRequestOptionsJSON | ServerActionError
> {
  try {
    const options = await generateAuthenticationOptions({
      rpID: process.env.WEBAUTHN_RP_ID || "localhost",
    });

    return options;
  } catch (err) {
    console.error({ error: err });

    return serverActionError(err);
  }
}
