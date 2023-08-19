import "./globals.css";

import { Suspense } from "react";
import { Analytics } from "@vercel/analytics/react";
import cx from "classnames";

import Footer from "@/components/layout/footer";
import Nav from "@/components/layout/nav";

import { inter, sfPro } from "./fonts";

export const metadata = {
  title: "Precedent - Building blocks for your Next.js project",
  description:
    "Precedent is the all-in-one solution for your Next.js project. It includes a design system, authentication, analytics, and more.",
  twitter: {
    card: "summary_large_image",
    title: "Precedent - Building blocks for your Next.js project",
    description:
      "Precedent is the all-in-one solution for your Next.js project. It includes a design system, authentication, analytics, and more.",
    creator: "@steventey",
  },
  metadataBase: new URL("https://precedent.dev"),
  themeColor: "#FFF",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cx(sfPro.variable, inter.variable)}>
        <main className="min-h-screen w-full bg-white">{children}</main>
        <Analytics />
      </body>
    </html>
  );
}
