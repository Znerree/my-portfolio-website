import type { Metadata } from "next";
//import { Inter } from "next/font/google";
import "./globals.css";
import nexa from "next/font/local";

//const inter = Inter({ subsets: ["latin"] });

const nexaF = nexa({
  src: "../public/fonts/Nexa.ttf",
});

export const metadata: Metadata = {
  title: "Znerre",
  description: "Get to know me and my work",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={nexaF.className}>{children}</body>
    </html>
  );
}
