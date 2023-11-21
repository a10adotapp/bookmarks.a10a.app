import { listBookmark } from "@/actions/list-bookmark";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { redirect } from "next/navigation";
import { BookmarkListitem } from "./_components/bookmark-listitem";

export default async function Home({
  searchParams,
}: {
  searchParams: {
    page: string;
  };
}) {
  const page = Number.parseInt(searchParams.page);

  if (Number.isNaN(page) || page < 0) {
    redirect(
      `?${new URLSearchParams({
        ...searchParams,
        page: "1",
      }).toString()}`,
    );
  }

  const bookmarkListed = await listBookmark({ page, perPage: 1000 });

  return (
    <div>
      {!bookmarkListed.success && (
        <Alert variant="destructive">
          <AlertTitle>Error</AlertTitle>

          <AlertDescription>{bookmarkListed.error.message}</AlertDescription>
        </Alert>
      )}

      {bookmarkListed.success && (
        <div className="flex flex-col gap-4">
          {bookmarkListed.result.bookmarks.map((bookmark) => (
            <BookmarkListitem key={bookmark.id} bookmark={bookmark} />
          ))}
        </div>
      )}
    </div>
  );
}
