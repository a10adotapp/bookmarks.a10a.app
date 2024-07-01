import Credentials from "next-auth/providers/credentials";
import { Provider } from "next-auth/providers/index";

export function CredentialsProvider(): Provider {
  return Credentials({
    credentials: {
      passkeyId: {
        type: "text",
      },
    },
    authorize: async (credentials) => {
      if (credentials?.passkeyId === undefined) {
        return null;
      }

      return {
        id: credentials?.passkeyId,
      };
    }
  });
}
