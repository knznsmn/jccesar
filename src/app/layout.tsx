import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Background } from "@/components/Background";
import { ScrollReveal } from "@/components/ScrollReveal";
import contents from "@/data/contents.json";
import "@/styles/globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "800"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL(contents.website.link),
  title: {
    default: contents.website.metadata.defaultTitle,
    template: contents.website.metadata.titleTemplate,
  },
  description: contents.website.metadata.defaultDescription,
  openGraph: {
    title: contents.website.metadata.defaultTitle,
    description: contents.website.metadata.defaultDescription,
    url: contents.website.link,
    siteName: contents.website.name,
    images: [
      {
        url: contents.website.metadata.defaultOgImage,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: contents.website.metadata.defaultTitle,
    description: contents.website.metadata.defaultDescription,
    images: [contents.website.metadata.defaultOgImage],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <Background />
        <ScrollReveal />
        <div className="appContent">{children}</div>
      </body>
    </html>
  );
}
