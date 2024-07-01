import { authOptions } from "@/lib/auth/auth-options";
import { getServerSession } from "next-auth";
import { CreateBookmarkForm } from "./_components/create-bookmark-form";

export default async function Page() {
  const session = await getServerSession(authOptions);

  return <div>{session?.user.id && <CreateBookmarkForm />}</div>;
}
