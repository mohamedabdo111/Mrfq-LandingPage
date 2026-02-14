import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from '@/i18n/routing';
import { generateMetadata as genMeta } from '@/lib/metadata';

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return genMeta({ locale }, "home");
}

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {

  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  return (
    <html lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'}>

      <body
        className={`${outfit.variable} antialiased`}
      >
        {/* <Navbar /> */}
        <NextIntlClientProvider>
          {children}
        </NextIntlClientProvider>


      </body>
    </html>
  );
}
