"use client";

import { Button } from "@/components/ui/button";
import { isServerActionError } from "@/lib/server-action-error";
import { startAuthentication } from "@simplewebauthn/browser";
import { signIn } from "next-auth/react";
import { useCallback } from "react";
import { credentialRequestOptions } from "./_actions/credential-request-options";
import { verifyCredential } from "./_actions/verify-credential";

export function WebauthnSignInButton() {
  const click = useCallback(async () => {
    const options = await credentialRequestOptions();

    if (isServerActionError(options)) {
      return alert(options.message);
    }

    const response = await startAuthentication(options);

    const passkeyId = await verifyCredential(response);

    if (isServerActionError(passkeyId)) {
      return alert(passkeyId.message);
    }

    await signIn("credentials", {
      passkeyId,
    });
  }, []);

  return (
    <Button onClick={click}>
      ログイン
    </Button>
  );
}
