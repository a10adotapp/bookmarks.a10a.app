import { Inter as FontSans } from "next/font/google";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

import { buttonVariants } from "@/components/ui/button";
import { auth } from "@/lib/auth/auth";
import Link from "next/link";
import { redirect } from "next/navigation";
import { Toaster } from "react-hot-toast";
import "./globals.css";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  if (!session) {
    return redirect(`/api/auth/signin/google`);
  }

  return (
    <html>
      <body>
        <Toaster />

        <div className="m-auto max-w-sm">
          <div className="px-2 pt-4 pb-8">
            <div className="flex flex-col gap-2">
              <div className="flex gap-2">
                <Link
                  href="/"
                  className={buttonVariants({ variant: "default" })}
                >
                  Home
                </Link>

                <Link
                  href="/import"
                  className={buttonVariants({ variant: "outline" })}
                >
                  Import
                </Link>

                <Link
                  href="/new"
                  className={buttonVariants({ variant: "outline" })}
                >
                  New
                </Link>
              </div>

              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
