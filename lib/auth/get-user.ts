"use server";

import { GoogleUser, User } from "@/prisma/generated/client";
import { sharedClient } from "../prisma-client";

export async function getUser(id: number): Promise<
  User & {
    googleUsers: GoogleUser[];
  }
> {
  try {
    return await sharedClient.user.findFirstOrThrow({
      include: {
        googleUsers: {
          where: {
            deletedAt: null,
          },
          orderBy: [
            {
              createdAt: "desc",
            },
          ],
        },
      },
      where: {
        deletedAt: null,
        id,
      }
    });
  } catch (err) {
    console.error("getUser", { error: err });

    throw err;
  }
}
