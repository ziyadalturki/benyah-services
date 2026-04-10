import type { Metadata } from "next";
import { Geist_Mono, IBM_Plex_Sans_Arabic, Manrope } from "next/font/google";

import {
  getDefaultSocialImageUrl,
  getOpenGraphLocale,
  getSiteUrl,
  siteConfig,
} from "@/config/site";
import "./globals.css";

const sans = Manrope({
  variable: "--font-sans-latin",
  subsets: ["latin"],
  display: "swap",
});

const arabic = IBM_Plex_Sans_Arabic({
  variable: "--font-sans-arabic",
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const mono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

const socialImage = getDefaultSocialImageUrl();

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  category: "business",
  referrer: "origin-when-cross-origin",
  icons: {
    icon: [
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
      {
        url: "/favicon.ico",
        sizes: "any",
      },
    ],
    shortcut: "/icon.svg",
    other: [
      {
        rel: "mask-icon",
        url: "/icon.svg",
        color: "#162127",
      },
    ],
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    type: "website",
    url: getSiteUrl(),
    locale: getOpenGraphLocale(siteConfig.defaultLocale),
    alternateLocale: siteConfig.locales
      .filter((locale) => locale !== siteConfig.defaultLocale)
      .map((locale) => getOpenGraphLocale(locale)),
    images: socialImage
      ? [
          {
            url: socialImage,
            alt: `${siteConfig.name} social preview`,
          },
        ]
      : undefined,
  },
  twitter: {
    card: socialImage ? "summary_large_image" : "summary",
    title: siteConfig.name,
    description: siteConfig.description,
    images: socialImage ? [socialImage] : undefined,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      className={`${sans.variable} ${arabic.variable} ${mono.variable} bg-background antialiased`}
      suppressHydrationWarning
    >
      <body>{children}</body>
    </html>
  );
}
