import { auth } from "@/lib/auth/auth";
import { ImportBookmarksForm } from "./_components/import-bookmarks-form";

export default async function Page() {
  const session = await auth();

  return <div>{session?.user.id && <ImportBookmarksForm />}</div>;
}
