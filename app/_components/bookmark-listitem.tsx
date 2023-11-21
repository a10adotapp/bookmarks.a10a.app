"use client";

import { updateBookmark } from "@/actions/update-bookmark";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Bookmark } from "@/prisma/client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useCallback } from "react";

export function BookmarkListitem({ bookmark }: { bookmark: Bookmark }) {
  const router = useRouter();

  const click = useCallback(async () => {
    window.open(bookmark.url);

    await updateBookmark({
      bookmark,
      clickCount: bookmark.clickCount + 1,
    });

    router.refresh();
  }, [bookmark, router]);

  return (
    <div className="flex flex-col gap-1 relative" onClick={click}>
      <a
        onClick={click}
        className="absolute inset-x-0 inset-y-0 cursor-pointer"
      />

      <AspectRatio ratio={16 / 9}>
        {bookmark.imageUrl && bookmark.imageUrl.startsWith("/") && (
          <Image
            width={368}
            height={(368 * 9) / 16}
            alt={bookmark.title}
            src={bookmark.imageUrl}
            className="rounded-md object-cover"
            style={{ width: "100%", aspectRatio: "16 / 9" }}
          />
        )}

        {bookmark.imageUrl && !bookmark.imageUrl.startsWith("/") && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            width={368}
            height={(368 * 9) / 16}
            alt={bookmark.title}
            src={bookmark.imageUrl}
            className="rounded-md object-cover"
            style={{ width: "100%", aspectRatio: "16 / 9" }}
          />
        )}
      </AspectRatio>

      <p className="text-sm font-medium leading-none">{bookmark.title}</p>
    </div>
  );
}
