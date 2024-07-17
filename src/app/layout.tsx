import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Providers } from "@/components/providers";
import "./globals.css";
import { ModeToggle } from "@/components/mode-toggle";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>
          <ModeToggle />
          <header>
            <SignedOut>
              <SignInButton />
            </SignedOut>
            <SignedIn>
              <UserButton
                appearance={{
                  elements: {
                    userButtonAvatarBox: "size-12",
                  },
                }}
              />
            </SignedIn>
          </header>
          {children}
        </Providers>
      </body>
    </html>
  );
}
