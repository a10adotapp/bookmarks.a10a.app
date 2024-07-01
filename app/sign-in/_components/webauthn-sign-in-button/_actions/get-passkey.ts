"use server";

import { sharedClient } from "@/lib/prisma-client";
import { ServerActionError, serverActionError } from "@/lib/server-action-error";
import { Passkey } from "@/prisma/generated/client";

export async function getPasskey(id: string): Promise<Passkey | ServerActionError> {
  try {
    return await sharedClient.passkey.findFirstOrThrow({
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
