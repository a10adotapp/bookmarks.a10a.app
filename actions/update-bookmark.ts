"use server";

import { authOptions } from "@/lib/auth/auth-options";
import { sharedClient } from "@/lib/prisma-client";
import { Bookmark } from "@/prisma/generated/client";
import { getServerSession } from "next-auth";
import { ActionResult } from "./action-result";

export async function updateBookmark({
  bookmark,
  clickCount,
}: {
  bookmark: Bookmark;
  clickCount?: number;
}): Promise<
  ActionResult<{
    bookmark: Bookmark;
  }>
> {
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      throw new Error("unauthorized");
    }

    const bookmarkUpdated = await sharedClient.bookmark.update({
      where: {
        id: bookmark.id,
        userId: session.user.id,
      },
      data: {
        clickCount,
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
