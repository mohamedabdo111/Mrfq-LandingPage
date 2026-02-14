import platForm from "@/assets/home/platform.png"
import Image from "next/image";
import { useTranslations } from "next-intl";

export const RoleSection = () => {
    const t = useTranslations("roles");

    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
            <div className="md:px-20 px-10 md:py-15 py-10 rounded-4xl my-16 bg-[#D9E5FF]">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold main-color text-center mb-3 md:mb-5">
                    {t("title")}
                </h2>
                <p className="text-center text-lg text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">{t("description")}</p>


                <Image src={platForm} alt="Platform" width={1000} height={1000} className="w-full h-full object-cover" />
            </div>
        </section>
    )
}