"use client";

import { deleteBookmark } from "@/actions/delete-bookmark";
import { updateBookmark } from "@/actions/update-bookmark";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Bookmark } from "@/prisma/client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useCallback } from "react";
import toast from "react-hot-toast";

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

  const deleteButtonClick = useCallback(async () => {
    const confirmed = confirm("Are you sure you want to delete this item?");

    if (!confirmed) {
      return;
    }

    await toast.promise(
      deleteBookmark({
        bookmark,
      }),
      {
        loading: "Deleting...",
        success: "Finished!",
        error: (err) => {
          return `${err}`;
        },
      },
    );

    router.refresh();
  }, [bookmark, router]);

  return (
    <div className="flex flex-col gap-1 relative">
      <a onClick={click}>
        <AspectRatio ratio={16 / 9}>
          <Image
            width={368}
            height={(368 * 9) / 16}
            alt={bookmark.title}
            src={`/api/bookmarks/${bookmark.id}/image`}
            className="rounded-md object-cover"
            style={{ width: "100%", aspectRatio: "16 / 9" }}
          />
        </AspectRatio>
      </a>

      <div className="flex gap-2">
        <Dialog>
          <DialogTrigger>👆</DialogTrigger>

          <DialogContent>
            <DialogHeader>
              <DialogTitle>{bookmark.title}</DialogTitle>
            </DialogHeader>

            <div className="flex flex-col gap-2">
              <Button
                variant="destructive"
                onClick={deleteButtonClick}
              >{`🗑️ Delete`}</Button>
            </div>
          </DialogContent>
        </Dialog>

        <a onClick={click} className="text-sm font-medium leading-none">
          {bookmark.title}
        </a>
      </div>
    </div>
  );
}
