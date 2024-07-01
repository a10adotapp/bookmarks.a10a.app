"use server";

import { sharedClient } from "@/lib/prisma-client";
import { ServerActionError, serverActionError } from "@/lib/server-action-error";
import { Passkey, User } from "@/prisma/generated/client";

export async function getPasskey(id: string): Promise<
  (Passkey & {
    user: User;
  }) | ServerActionError
> {
  try {
    return await sharedClient.passkey.findFirstOrThrow({
      include: {
        user: true,
      },
      where: {
        deletedAt: null,
        id,
      },
    });
  } catch (err) {
    console.error({ error: err });

    return serverActionError(err);
  }
}
