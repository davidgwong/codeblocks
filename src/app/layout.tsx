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
        <div className="mx-auto"><Link href="/" className="mx-auto">CodeBlocks</Link></div>
        <div className="container mx-auto my-20">{children}</div>
      </body>
    </html>
  );
}
