import "next-auth";
import { GoogleUser, User } from "./prisma/generated/client";

declare module "next-auth" {
  interface Session {
    user: User & {
      googleUsers: GoogleUser[];
    };
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: int;
  }
}
