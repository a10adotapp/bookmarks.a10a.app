"use server";

import { authOptions } from "@/lib/auth/auth-options";
import { sharedClient } from "@/lib/prisma-client";
import { ServerActionError, serverActionError } from "@/lib/server-action-error";
import { Passkey } from "@/prisma/generated/client";
import { getServerSession } from "next-auth";

export async function listPasskey(): Promise<Passkey[] | ServerActionError> {
  try {
    const session = await getServerSession(authOptions);

    const googleUser = session?.user?.googleUsers.at(0);

    if (!googleUser) {
      return new Error("unauthorized");
    }

    const passkeys = await sharedClient.passkey.findMany({
      where: {
        deletedAt: null,
        userId: googleUser.userId,
      },
    });

    return passkeys;
  } catch (err) {
    console.error({ error: err });

    return serverActionError(err);
  }
}
