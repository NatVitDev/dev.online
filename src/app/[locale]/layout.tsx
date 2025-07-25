import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";

import { NextIntlClientProvider } from "next-intl";
import { Locale, routing } from "@/i18n/routing";

import { notFound } from "next/navigation";
import { getMessages } from "next-intl/server";
import Header from "@/components/Header/Header";
import { golos } from "@/utils/fonts";
import Footer from "@/components/Footer/Footer";

import "@/styles/globals.scss";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SCSS",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (!routing.locales.includes(locale as Locale)) {
    notFound();
  }

  const messages = await getMessages();
  return (
    <html lang={locale} suppressHydrationWarning={true}>
      <body className={`${golos.className} ${geistMono.variable}`}>
        <NextIntlClientProvider messages={messages}>
          <Header />

          <main>{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
