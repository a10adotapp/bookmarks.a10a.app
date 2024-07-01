import { authOptions } from "@/lib/auth/auth-options";
import { getServerSession } from "next-auth";
import { ImportBookmarksForm } from "./_components/import-bookmarks-form";

export default async function Page() {
  const session = await getServerSession(authOptions);

  return <div>{session?.user.id && <ImportBookmarksForm />}</div>;
}
