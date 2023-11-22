"use server";

import { auth } from "@/lib/auth/auth";
import { sharedClient } from "@/lib/prisma-client";
import { Bookmark } from "@/prisma/client";
import { ActionResult } from "./action-result";

export async function listBookmark({
  page,
  perPage,
}: {
  page?: number;
  perPage?: number;
}): Promise<
  ActionResult<{
    bookmarks: Bookmark[];
    currentPage: number;
    totalPage: number;
  }>
> {
  try {
    const session = await auth();

    if (!session) {
      throw new Error("unauthorized");
    }

    const take = perPage ?? 30;
    const currentPage = page ?? 1;

    const totalBookmarkCount = await sharedClient.bookmark.count();

    const bookmarks = await sharedClient.bookmark.findMany({
      where: {
        userId: session.user.id,
        deletedAt: null,
      },
      take,
      skip: take * (currentPage - 1),
      orderBy: [
        {
          clickCount: "desc",
        },
        {
          id: "desc",
        },
      ],
    });

    return {
      success: true,
      result: {
        bookmarks,
        currentPage,
        totalPage: Math.ceil(totalBookmarkCount / take),
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
