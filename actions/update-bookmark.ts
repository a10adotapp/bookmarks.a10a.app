"use server";

import { sharedClient } from "@/lib/prisma-client";
import { Bookmark } from "@/prisma/client";
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
    const bookmarkUpdated = await sharedClient.bookmark.update({
      where: {
        id: bookmark.id,
      },
      data: {
        clickCount,
      },
    });

    return {
      success: true,
      result: {
        bookmark: bookmark,
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
