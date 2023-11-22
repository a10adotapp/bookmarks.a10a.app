import { auth } from "@/lib/auth/auth";
import { CreateBookmarkForm } from "./_components/create-bookmark-form";

export default async function Page() {
  const session = await auth();

  return <div>{session?.user.id && <CreateBookmarkForm />}</div>;
}
