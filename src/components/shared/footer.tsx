import Link from "next/link"
import FooterLogo from "@/assets/footer/footerLogo.svg"
import Image from "next/image"
import { BookingDemo } from "./BookingDemo"
import { useTranslations } from "next-intl"

export const Footer = () => {
    const t = useTranslations("footer");
    
    return (
        <footer className="footerBg text-white pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center justify-center mb-15">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold main-color text-center mb-3 md:mb-5 max-w-3xl mx-auto ">
                        {t("title1")}

                    </h2>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold main-color text-center mb-3 md:mb-5 max-w-3xl mx-auto ">
                        {t("title2")}
                    </h2>

                    <p className="text-center text-lg text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
                        {t("description")}
                    </p>

                    <BookingDemo />
                </div>
            </div>

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
                            href="https://meetings-eu1.hubspot.com/yalrashod"
                            target="_blank"
                            className="text-gray-600 hover:text-gray-800 transition-colors font-medium text-sm md:text-base"
                        >
                            {t("bookDemo")}
                        </Link>
                        <Link
                            href="/contact"
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