import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { MobileFixedCta } from "@/components/layout/mobile-fixed-cta";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.coera-example.jp"),
  title: {
    default: "Coeraボイストレーニングスクール｜香川県のビジネスボイス専門",
    template: "%s｜Coeraボイストレーニングスクール",
  },
  description:
    "香川県・オンライン対応のCoeraボイストレーニングスクール。ビジネスシーンで伝わる声をつくる個別最適レッスンを提供します。",
  openGraph: {
    title: "Coeraボイストレーニングスクール",
    description:
      "香川県・オンライン対応のビジネス特化ボイストレーニング。理論にもとづき、あなたに合わせたレッスンを行います。",
    type: "website",
    locale: "ja_JP",
    url: "https://www.coera-example.jp",
  },
  alternates: {
    canonical: "https://www.coera-example.jp",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-brand-primary-light/30 text-brand-text`}
      >
        <div className="flex min-h-screen flex-col">
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
          <MobileFixedCta />
        </div>
      </body>
    </html>
  );
}
