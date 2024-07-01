import { Inter as FontSans } from "next/font/google";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { Toaster } from "react-hot-toast";
import { RegisterWebauthnCredentialButton } from "./_components/register-webauthn-credential-button";
import "./globals.css";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <Toaster />

        <div className="m-auto max-w-sm">
          <div className="px-2 pt-4 pb-8">
            <div className="flex flex-col gap-2">
              <div className="flex justify-between gap-2">
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

                <RegisterWebauthnCredentialButton />
              </div>

              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
