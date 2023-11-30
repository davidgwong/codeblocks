import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CodeBlocks",
  description: "Store your blocks of code here!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="mx-10 my-5"><Link href="/" className="text-4xl font-bold">CodeBlocks</Link></div>
        <div className="container max-w-lg mx-auto my-20">{children}</div>
      </body>
    </html>
  );
}
