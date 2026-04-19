import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import { Background } from "@/components/Background";
import { ScrollReveal } from "@/components/ScrollReveal";
import contents from "@/data/contents.json";
import { THEME_STORAGE_KEY } from "@/lib/theme";
import "@/styles/globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "800"],
  style: ["normal"],
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

const themeInitScript = `(() => {
  try {
    const storedTheme = window.localStorage.getItem("${THEME_STORAGE_KEY}");
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    const initialTheme = storedTheme === "dark" || storedTheme === "light" ? storedTheme : systemTheme;

    document.documentElement.setAttribute("data-theme", initialTheme);
    document.documentElement.style.colorScheme = initialTheme;
  } catch {
    // Ignore initialization errors and keep default styling.
  }
})();`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body>
        <Script id="theme-init" strategy="beforeInteractive">
          {themeInitScript}
        </Script>
        <Background />
        <ScrollReveal />
        <div className="appContent">{children}</div>
      </body>
    </html>
  );
}
