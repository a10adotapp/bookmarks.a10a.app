"use server";

import { auth } from "@/lib/auth/auth";
import { sharedClient } from "@/lib/prisma-client";
import { Bookmark } from "@/prisma/client";
import { ActionResult } from "./action-result";

export async function deleteBookmark({
  bookmark,
}: {
  bookmark: Bookmark;
}): Promise<
  ActionResult<{
    bookmark: Bookmark;
  }>
> {
  try {
    const session = await auth();

    if (!session) {
      throw new Error("unauthorized");
    }

    const bookmarkUpdated = await sharedClient.bookmark.update({
      where: {
        id: bookmark.id,
        userId: session.user.id,
      },
      data: {
        deletedAt: new Date(),
      },
    });

    return {
      success: true,
      result: {
        bookmark: bookmarkUpdated,
      },
    };
  } catch (err) {
    return {
      success: false,
      error: {
        message: `${err}`,
      },
    };
  }
}
