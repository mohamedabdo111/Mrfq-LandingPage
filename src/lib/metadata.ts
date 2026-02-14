import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

type MetadataParams = {
  locale: string;
  path?: string;
};

export async function generateMetadata(
  params: MetadataParams,
  page: "home" | "features" | "contact" = "home"
): Promise<Metadata> {
  const { locale } = params;
  const t = await getTranslations({ locale });
  const pageT = await getTranslations({ locale });

  const title = pageT(`metadata.${page}.title`);
  const description = pageT(`metadata.${page}.description`);
  const siteName = t("metadata.siteName");
  const siteDescription = t("metadata.siteDescription");

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://mrfq.sa";
  const url = `${baseUrl}/${locale}${params.path || ""}`;
  const imageUrl = `${baseUrl}/og-image.jpg`;

  return {
    title,
    description,
    keywords: [
      "property management",
      "facility management",
      "AI property operations",
      "Saudi Arabia",
      "automated property management",
      "MRFQ",
      locale === "ar" ? "إدارة الممتلكات" : "",
      locale === "ar" ? "إدارة المرافق" : "",
    ].filter(Boolean),
    authors: [{ name: "MRFQ" }],
    creator: "MRFQ",
    publisher: "MRFQ",
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: url,
      languages: {
        "en": `${baseUrl}/en${params.path || ""}`,
        "ar": `${baseUrl}/ar${params.path || ""}`,
        "x-default": `${baseUrl}/en${params.path || ""}`,
      },
    },
    openGraph: {
      type: "website",
      locale: locale === "ar" ? "ar_SA" : "en_US",
      url,
      title,
      description,
      siteName,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
      creator: "@mrfq",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    verification: {
      google: process.env.GOOGLE_VERIFICATION,
      yandex: process.env.YANDEX_VERIFICATION,
    },
  };
}

