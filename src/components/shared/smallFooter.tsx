import Link from "next/link"
import FooterLogo from "@/assets/footer/footerLogo.svg"
import Image from "next/image"
import { useLocale, useTranslations } from "next-intl"

export const SmallFooter = () => {
    const t = useTranslations("footer");
    const locale = useLocale();
    const isArabic = locale === "ar";
    const ArabicURL = "https://foul-iberis-19f.notion.site/a2f05d17733082d4bbbc01d0d3b683f0?pvs=105";
    const EnglishURL = "https://foul-iberis-19f.notion.site/30805d177330801888bac1d4b4fc66aa";
    return (
        <footer className=" text-white bg-[#F9FAFD] p-8">


            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-4">
                    {/* Logo Section - Left */}
                    <div className="flex items-center">
                        <div className="w-16 h-16 rounded-full bg-[#003350] flex flex-col items-center justify-center shrink-0">
                            <Image src={FooterLogo} alt="Footer Logo" width={100} height={100} />
                        </div>
                    </div>

                    {/* Navigation Links - Center */}
                    <div className="flex items-center gap-6 md:gap-8 flex-wrap justify-center">
                        <Link
                            href="/features"
                           
                            className="text-gray-600 hover:text-gray-800 transition-colors font-medium text-sm md:text-base"
                        >
                            {t("features")}
                        </Link>
                        <Link
                            href="https://outlook.office.com/bookwithme/user/1ccbc085e5644490be03ef89e7c11d72@mrfq.sa/meetingtype/WwLAd6RazkmHD21G58pFJg2?bookingcode=a86deb3b-1168-471a-a6d3-5c7b56047132&anonymous&ismsaljsauthenabled&ep=mlink"
                            target="_blank"
                            className="text-gray-600 hover:text-gray-800 transition-colors font-medium text-sm md:text-base"
                        >
                            {t("bookDemo")}
                        </Link>
                        <Link
                            href={isArabic ? ArabicURL : EnglishURL}
                            target="_blank"
                            className="text-gray-600 hover:text-gray-800 transition-colors font-medium text-sm md:text-base"
                        >
                            {t("contactUs")}
                        </Link>
                        <Link
                            href="/privacy"
                            
                            className="text-gray-600 hover:text-gray-800 transition-colors font-medium text-sm md:text-base"
                        >
                            {t("privacyPolicy")}
                        </Link>
                    </div>

                    {/* Copyright - Right */}
                    <div className="text-gray-600 text-sm md:text-base font-medium">
                        {t("copyright")}
                    </div>
                </div>
            </div>
        </footer>
    )
}