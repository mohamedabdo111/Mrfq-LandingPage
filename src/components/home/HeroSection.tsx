import { Button } from "@/components/ui/button";
import heroSectionBg from "@/assets/home/heroSectionBg.png";
import TrustedBy from "@/assets/trusted/trustedBy.svg";
import Image from "next/image";
import { Navbar } from "../shared/navbar";
import Link from "next/link";
import { useTranslations } from "next-intl";


export const HeroSection = () => {
    const t = useTranslations("hero");

    return (
        <section className="heroSectionBg min-h-screen flex flex-col">
            <Navbar />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-1 flex flex-col">
                {/* Top Section - Headline and CTAs */}
                <div className="pt-16 pb-8 text-center">
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold main-color mb-6 max-w-6xl mx-auto leading-tight">
                        {t("title")}
                    </h1>
                    <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
                        {t("description")}
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link href="/book-a-demo">
                            <Button
                                className="bg-[#003350] text-white hover:bg-[#003350]/90 px-8 py-6 rounded-xl font-medium"
                            >
                                {t("bookDemo")}
                            </Button>
                        </Link>
                        <Button
                            variant="outline"
                            className="border-2 border-[#003350] text-[#003350] hover:bg-[#003350]/5 px-8 py-6 rounded-xl font-medium bg-white"
                        >
                            {t("registerInterest")}
                        </Button>
                    </div>
                </div>

                <Image src={heroSectionBg} alt="Dashboard Preview" width={1000} height={1000} className="w-full h-full object-cover" />

                <div className="pb-16 pt-8 flex flex-col md:flex-row items-center gap-4 justify-center">
                    <p className="text-center text-[#6B7280]  text-lg font-semibold">
                        {t("trustedBy")}
                    </p>
                    <Image src={TrustedBy} alt="Trusted By" width={551} height={500} />
                </div>
            </div>
        </section>
    )
}