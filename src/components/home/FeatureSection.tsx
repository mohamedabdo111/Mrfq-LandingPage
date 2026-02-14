import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import AutoPilot from "@/assets/features/Control.svg";
import Image from "next/image";
import TaskManagement from "@/assets/features/Task Orchestration.svg";
import iphone from "@/assets/features/Iphone 2.png";
import Link from "next/link";
import { useTranslations } from "next-intl";

const CardsInLargeScreen = ({ className }: { className: string }) => {
    const t = useTranslations("features");
    return (
        <div className={` ${className}`}>
            <Card className="p-6 flex flex-col items-center justify-center w-full h-full border-gray-100 lg:div1 shadow-xl rounded-3xl">

                <div className="flex flex-col items-center gap-4 justify-center md:w-[80%]">
                    <CardHeader className="w-full ">
                        <Image src={AutoPilot} alt="Sanad" width={300} height={50} className="mx-auto object-cover" />
                    </CardHeader>
                    <CardTitle className="text-center text-xl font-semibold main-color ">
                        {t("autoPilot.title")}
                    </CardTitle>
                    <CardDescription className="text-center ">
                        {t("autoPilot.description")}
                    </CardDescription>
                </div>
            </Card>
            <Card className="p-6 flex flex-col items-center justify-center w-full h-full border-gray-100 lg:div2 shadow-xl rounded-3xl">

                <div className="flex flex-col items-center gap-4 justify-center md:w-[80%]">
                    <CardHeader className="w-full ">
                        <Image src={TaskManagement} alt="Sanad" width={300} height={50} className="mx-auto object-cover" />
                    </CardHeader>
                    <CardTitle className="text-center text-xl font-semibold main-color ">
                        {t("taskOrchestration.title")}
                    </CardTitle>
                    <CardDescription className="text-center ">
                        {t("taskOrchestration.description")}                            </CardDescription>
                </div>
            </Card>
            <Card className="px-6 pt-6 pb-0 flex flex-col items-center justify-end w-full h-full border-gray-100 div3 shadow-xl rounded-3xl">

                <div className="flex flex-col items-center gap-4 justify-center md:w-[80%]">

                    <CardTitle className="text-center text-xl font-semibold main-color ">
                        {t("aiFacilityManager.title")}                            </CardTitle>
                    <CardDescription className="text-center ">
                        {t("aiFacilityManager.description")}                            </CardDescription>
                    <CardFooter className="w-full ">
                        <Image src={iphone} alt="Sanad" width={300} height={50} className="mx-auto object-cover" />
                    </CardFooter>
                </div>
            </Card>

        </div>
    )
}

const CardsInSmallScreen = ({ className }: { className: string }) => {
    const t = useTranslations("features");
    return (
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 ${className}`}>
            <Card className="p-6 flex flex-col items-center justify-center w-full h-full border-gray-100 shadow-xl rounded-3xl">

                <div className="flex flex-col items-center gap-4 justify-center md:w-[80%]">
                    <CardHeader className="w-full ">
                        <Image src={AutoPilot} alt="Sanad" width={300} height={50} className="mx-auto object-cover" />
                    </CardHeader>
                    <CardTitle className="text-center text-xl font-semibold main-color ">
                        {t("autoPilot.title")}
                    </CardTitle>
                    <CardDescription className="text-center ">
                        {t("autoPilot.description")}
                    </CardDescription>
                </div>
            </Card>
            <Card className="p-6 flex flex-col items-center justify-center w-full h-full border-gray-100 shadow-xl rounded-3xl">

                <div className="flex flex-col items-center gap-4 justify-center md:w-[80%]">
                    <CardHeader className="w-full ">
                        <Image src={TaskManagement} alt="Sanad" width={300} height={50} className="mx-auto object-cover" />
                    </CardHeader>
                    <CardTitle className="text-center text-xl font-semibold main-color ">
                        {t("taskOrchestration.title")}
                    </CardTitle>
                    <CardDescription className="text-center ">
                        {t("taskOrchestration.description")}                            </CardDescription>
                </div>
            </Card>
            <Card className="px-6 pt-6 pb-0 flex flex-col items-center justify-end w-full h-full border-gray-100 shadow-xl rounded-3xl">

                <div className="flex flex-col items-center gap-4 justify-center md:w-[80%]">

                    <CardTitle className="text-center text-xl font-semibold main-color ">
                        {t("aiFacilityManager.title")}                            </CardTitle>
                    <CardDescription className="text-center ">
                        {t("aiFacilityManager.description")}                            </CardDescription>
                    <CardFooter className="w-full ">
                        <Image src={iphone} alt="Sanad" width={300} height={50} className="mx-auto object-cover" />
                    </CardFooter>
                </div>
            </Card>

        </div>
    )
}
export const FeatureSection = () => {
    const t = useTranslations("features");
    return (
        <section className="py-16 md:py-24 bg-[#F9FAFD]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Title */}
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold main-color text-center mb-12 md:mb-16">
                    {t("title")}
                </h2>

                {/* Features Grid */}
                <CardsInLargeScreen className="hidden md:grid md:gap-11 md:parent" />
                <CardsInSmallScreen className="md:hidden" />

                {/* Call to Action Button */}
                <div className="flex justify-center mt-12">
                    <Link href="/features">
                        <Button
                            variant="outline"
                            className="border-2 border-[#003350] text-[#003350] hover:bg-blue-50 px-8 py-6 rounded-xl font-semibold bg-white"
                        >
                            {t("exploreAll")}
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

