import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import Navbar from "./components/navbar";

import clsx from "clsx";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head />
      <body className={clsx("min-h-screen bg-background font-sans antialiased")}>
        <div className="relative flex flex-col h-screen">
          <Navbar />
          <main className="container mx-auto max-w-7xl py-8 px-6 flex-grow">{children}</main>
        </div>
      </body>
    </html>
  );
}
