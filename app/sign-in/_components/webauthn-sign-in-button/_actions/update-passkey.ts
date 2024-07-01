"use server";

import { sharedClient } from "@/lib/prisma-client";
import { ServerActionError, serverActionError } from "@/lib/server-action-error";
import { Passkey } from "@/prisma/generated/client";

export async function updatePasskey(
  id: string,
  data: {
    counter: number;
  },
): Promise<Passkey | ServerActionError> {
  try {
    return await sharedClient.passkey.update({
      where: {
        deletedAt: null,
        id,
      },
      data: {
        counter: data.counter,
      },
    });
  } catch (err) {
    console.error({ error: err });

    return serverActionError(err);
  }
}
