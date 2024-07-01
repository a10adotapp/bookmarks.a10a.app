"use server"

import { sharedClient } from "@/lib/prisma-client";
import { User } from "@/prisma/generated/client";
import { z } from "zod";

export async function registerGoogleAccount(profile: unknown): Promise<User> {
  try {
    const profileSchema = z.object({
      sub: z.string(),
      email: z.string(),
      name: z.string().optional(),
    });

    const parsedProfile = profileSchema.parse(profile);

    let user: User;

    let googleUser = await sharedClient.googleUser.findFirst({
      where: {
        deletedAt: null,
        id: parsedProfile.sub,
      },
    });

    if (googleUser) {
      user = await sharedClient.user.findFirstOrThrow({
        where: {
          deletedAt: null,
          id: googleUser.userId,
        },
      });
    } else {
      user = await sharedClient.user.create({});

      googleUser = await sharedClient.googleUser.create({
        data: {
          userId: user.id,
          id: parsedProfile.sub,
          email: parsedProfile.email,
          name: parsedProfile.name,
        },
      });
    }

    return user;
  } catch (err) {
    console.error("registerGoogleAccount", { error: err });

    throw err;
  }
}
