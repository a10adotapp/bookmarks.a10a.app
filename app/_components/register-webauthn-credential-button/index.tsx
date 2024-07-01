"use client";

import { Button } from "@/components/ui/button";
import { isServerActionError } from "@/lib/server-action-error";
import { startRegistration } from "@simplewebauthn/browser";
import { useCallback } from "react";
import { credentialCreationOptions } from "./_actions/credential-creation-options";
import { registerCredential } from "./_actions/register-credential";

export function RegisterWebauthnCredentialButton() {
  const click = useCallback(async () => {
    const options = await credentialCreationOptions();

    if (isServerActionError(options)) {
      return alert(options.message);
    }

    const response = await startRegistration(options);

    await registerCredential(response);
  }, []);

  return (
    <Button
      variant="outline"
      onClick={click}>
      Register
    </Button>
  );
}
