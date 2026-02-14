"use client";

import { Card, CardContent, CardDescription, CardTitle } from "../ui/card";
import Image from "next/image";
import TaskManagement from "@/assets/features/task.svg";
import Sanad from "@/assets/features/sanad.svg";
import AutoPilot from "@/assets/features/autoPilot.svg";
import TaskOrchestration from "@/assets/features/task.svg";
import SnagLists from "@/assets/features/snag.svg";
import UsersVisitorsFeedback from "@/assets/features/Icon.svg";
import { useTranslations } from "next-intl";

export const FeaturesPage = () => {
    const t = useTranslations("features.page");
    
    const features = [
        {
            title: t("sanad.title"),
            description: t("sanad.description"),
            useImage: true,
            imageSrc: Sanad,

        },
        {
            title: t("autoPilot.title"),
            description: t("autoPilot.description"),
            useImage: true,
            imageSrc: AutoPilot,

        },
        {
            title: t("taskOrchestration.title"),
            description: t("taskOrchestration.description"),
            icon: TaskOrchestration,
            iconColor: "text-blue-400",
            iconBg: "bg-blue-50",
            useImage: true,
            imageSrc: TaskManagement

        },
        {
            title: t("snagLists.title"),
            description: t("snagLists.description"),
            icon: SnagLists,
            iconColor: "text-orange-400",
            iconBg: "bg-orange-50",
            useImage: true,
            imageSrc: SnagLists
        },
        {
            title: t("usersVisitorsFeedback.title"),
            description: t("usersVisitorsFeedback.description"),
            icon: UsersVisitorsFeedback,
            iconColor: "text-purple-400",
            iconBg: "bg-purple-50",
            useImage: true,
            imageSrc: UsersVisitorsFeedback
        }
    ];

    return (
        <section className="py-16 md:py-24  min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Title */}
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold main-color text-center mb-12 md:mb-16">
                    {t("title")}
                </h2>

                {/* Features Grid - 2-2-1 Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {features.map((feature, index) => (
                        <Card
                            key={index}
                            className={`relative bg-white border-gray-100 shadow-xl rounded-3xl p-6 hover:shadow-2xl transition-shadow ${index === 4 ? 'md:col-span-2 md:max-w-2xl md:mx-auto' : ''
                                }`}
                        >
                            {/* Icon positioned at top-right */}
                            <div className="absolute top-6 right-6">
                                {feature.useImage ? (
                                    <div className="w-12 h-12 flex items-center justify-center">
                                        <Image
                                            src={feature.imageSrc}
                                            alt={feature.title}
                                            width={48}
                                            height={48}
                                            className="object-contain"
                                        />
                                    </div>
                                ) : (
                                    <div className={`w-12 h-12 rounded-lg ${feature.iconBg} flex items-center justify-center`}>
                                        <feature.icon className={`w-6 h-6 ${feature.iconColor}`} />
                                    </div>
                                )}
                            </div>

                            <CardContent className="pt-0 pr-16">
                                <CardTitle className="text-xl font-semibold main-color mb-4">
                                    {feature.title}
                                </CardTitle>
                                <CardDescription className="text-gray-600 text-sm leading-relaxed">
                                    {feature.description}
                                </CardDescription>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

