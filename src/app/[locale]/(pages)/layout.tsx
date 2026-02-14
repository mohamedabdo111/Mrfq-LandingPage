import { Inter } from "next/font/google";
import "../globals.css";
import { SmallFooter } from "@/components/shared/smallFooter";
import { hasLocale } from "next-intl";
import { routing } from '@/i18n/routing';
import { notFound } from "next/navigation";

const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
});

export default async function RootLayout({
    children,
    params,
}: Readonly<{
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
}>) {
    const { locale } = await params;
    if (!hasLocale(routing.locales, locale)) {
        notFound();
    }

    return (
        <html lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'}>
            <body
                className={`${inter.variable} antialiased`}
            >
                {children}
                <SmallFooter />
            </body>
        </html>
    );
}
