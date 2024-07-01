import { AuthOptions } from "next-auth";
import { isServerActionError } from "../server-action-error";
import { CredentialsProvider } from "./credentials-provider";
import { getPasskey } from "./get-passkey";
import { getUser } from "./get-user";
import { GoogleProvider } from "./google-provider";
import { registerGoogleAccount } from "./register-google-account";

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider(),
    GoogleProvider(),
  ],
  pages: {
    signIn: "/sign-in",
  },
  callbacks: {
    jwt: async ({ token, user, account, profile, trigger }) => {
      if (trigger === "signIn") {
        if (account?.provider === "google" && profile) {
          const user = await registerGoogleAccount(profile);

          token.id = user.id;
        }

        if (account?.provider === "credentials" && user) {
          const passkey = await getPasskey(user.id);

          if (isServerActionError(passkey)) {
            throw passkey;
          }

          token.id = passkey.user.id;
        }
      }

      return token;
    },
    session: async ({ session, user, token, trigger }) => {
      if (trigger === undefined) {
        session.user = await getUser(token.id);
      }

      return session;
    },
  },
};
