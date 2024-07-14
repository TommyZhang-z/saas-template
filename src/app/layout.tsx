import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Providers } from "./components/providers";
import "./globals.css";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Providers>
        <body>
          {/* 未登录，则显示SignedOut里的内容 */}
          <SignedOut>
            <SignInButton />
          </SignedOut>
          {/* 登录，则显示SignedIns里的内容 */}
          <SignedIn>
            <UserButton />
          </SignedIn>
          {children}
        </body>
      </Providers>
    </html>
  );
}
