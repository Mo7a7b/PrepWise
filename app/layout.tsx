import type { Metadata } from "next";
import { Mona_Sans } from "next/font/google";
import "./globals.css";
import { redirect } from "next/navigation";
import { isAuthenticated } from "@/lib/auth/auth.action";

const MonaSans = Mona_Sans({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "PrepWise",
  description: "An AI Interview builder.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const isUserAuthenticated = await isAuthenticated();
  // if (!isUserAuthenticated) redirect("/sign-up");

  return (
    <html lang="en">
      <body
        className={`${MonaSans.className} antialiased w-screen h-screen bg-[#131212] bg-[url(/assets/pattern.png)] fixed bg-no-repeat`}
      >
        {children}
      </body>
    </html>
  );
}
