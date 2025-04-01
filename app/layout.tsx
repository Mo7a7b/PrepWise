import type { Metadata } from "next";
import { Mona_Sans } from "next/font/google";
import "./globals.css";

const MonaSans = Mona_Sans({
  subsets: ["latin"],
  weight:["200","300","400","500","600","700","800"]
});

export const metadata: Metadata = {
  title: "PrepWise",
  description: "An AI Interview builder.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
