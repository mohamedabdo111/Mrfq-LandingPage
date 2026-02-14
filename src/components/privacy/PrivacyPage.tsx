"use client";

import { Shield, Database, MessageCircle, Eye, Lock, UserCheck, Mail } from "lucide-react";
import { useTranslations } from "next-intl";

export const PrivacyPage = () => {
    const t = useTranslations("privacy");

    const sections = [
        {
            icon: Database,
            title: t("sections.informationWeCollect.title"),
            type: "list",
            items: t.raw("sections.informationWeCollect.items") as string[],
        },
        {
            icon: MessageCircle,
            title: t("sections.whatsappAiProcessing.title"),
            type: "text",
            description: t("sections.whatsappAiProcessing.description"),
        },
        {
            icon: Eye,
            title: t("sections.howWeUseYourData.title"),
            type: "list",
            items: t.raw("sections.howWeUseYourData.items") as string[],
        },
        {
            icon: Lock,
            title: t("sections.dataSecurity.title"),
            type: "text",
            description: t("sections.dataSecurity.description"),
        },
        {
            icon: UserCheck,
            title: t("sections.yourRights.title"),
            type: "text",
            description: t("sections.yourRights.description"),
        },
        {
            icon: Mail,
            title: t("sections.contactUs.title"),
            type: "contact",
            description: t("sections.contactUs.description"),
            email: t("sections.contactUs.email"),
        },
    ];

    return (
        <section className="py-16 md:py-24 min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12 md:mb-16">
                    <div className="flex items-center justify-center mb-6">
                        <div className="w-16 h-16 rounded-full bg-[#003350]/10 flex items-center justify-center">
                            <Shield className="w-8 h-8 text-[#003350]" />
                        </div>
                    </div>
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold main-color mb-6">
                        {t("title")}
                    </h1>
                    <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                        {t("intro")}
                    </p>
                </div>

                {/* Sections */}
                <div className="space-y-6">
                    {sections.map((section, index) => {
                        const IconComponent = section.icon;
                        return (
                            <div
                                key={index}
                                className="bg-white rounded-3xl shadow-xl p-8 md:p-12"
                            >
                                <div className="flex items-start gap-6">
                                    {/* Icon */}
                                    <div className="shrink-0 w-12 h-12 rounded-lg bg-[#003350]/10 flex items-center justify-center">
                                        <IconComponent className="w-6 h-6 text-[#003350]" />
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1">
                                        <h2 className="text-xl md:text-2xl font-semibold main-color mb-4">
                                            {section.title}
                                        </h2>

                                        {section.type === "list" && section.items && (
                                            <ul className="space-y-3">
                                                {section.items.map((item, itemIndex) => (
                                                    <li
                                                        key={itemIndex}
                                                        className="flex items-start gap-3 text-gray-700 leading-relaxed"
                                                    >
                                                        <span className="text-[#003350] mt-1.5">•</span>
                                                        <span>{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}

                                        {section.type === "text" && (
                                            <p className="text-gray-700 leading-relaxed">
                                                {section.description}
                                            </p>
                                        )}

                                        {section.type === "contact" && (
                                            <div className="space-y-3">
                                                <p className="text-gray-700 leading-relaxed">
                                                    {section.description}
                                                </p>
                                                <a
                                                    href={`mailto:${section.email}`}
                                                    className="inline-flex items-center gap-2 text-[#003350] hover:text-[#003350]/80 font-medium transition-colors"
                                                >
                                                    <Mail className="w-5 h-5" />
                                                    {section.email}
                                                </a>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

