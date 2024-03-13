import type { Metadata } from "next";
import { Nunito, Nunito_Sans } from "next/font/google";
import clsx from "clsx";
import "./globals.css";
import { createClient } from "@/prismicio";

const nunito = Nunito({ subsets: ["latin"], variable: "--font-nunito" });
const nunito_sans = Nunito_Sans({
  subsets: ["latin"],
  variable: "--font-nunito-sans",
});

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();

  const page = await client.getSingle("settings");

  return {
    title: page.data.site_title || "Flowrise fallback",
    description:
      page.data.meta_description || "Flowrise is the relaxing app for u",
    openGraph: {
      images: [page.data.og_image.url || ""],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={clsx(nunito.variable, nunito_sans.variable)}>
        <header>header!</header>
        {children}
        <footer>footer!</footer>
      </body>
    </html>
  );
}
