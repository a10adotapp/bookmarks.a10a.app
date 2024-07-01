"use client";

import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
import { useCallback } from "react";

export function GoogleSignInButton() {
  const click = useCallback(() => {
    signIn("google", {
      callbackUrl: "/",
    });
  }, []);

  return (
    <Button onClick={click}>
      Googleログイン
    </Button>
  );
}
