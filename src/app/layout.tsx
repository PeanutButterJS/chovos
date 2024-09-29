import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const rubik = Rubik({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Chovos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="ltr">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
      </head>
      <body className={`body ${rubik.className}`}>
        <header className="header">
          <div />
          <Link href="/">Chovos</Link>
        </header>
        <main className="main">{children}</main>
      </body>
    </html>
  );
}
