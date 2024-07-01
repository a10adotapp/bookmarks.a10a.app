import { GoogleSignInButton } from "./_components/google-sign-in-button";
import { WebauthnSignInButton } from "./_components/webauthn-sign-in-button";

export default async function Page() {
  return (
    <div className="py-4">
      <div className="flex flex-col gap-4">
        <WebauthnSignInButton />

        <hr />

        <GoogleSignInButton />
      </div>
    </div>
  );
}
