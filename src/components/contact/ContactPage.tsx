"use client";

import { Button } from "../ui/button";
import { Phone, Mail, FileText, Instagram, Linkedin } from "lucide-react";
import { Input } from "../ui/input";
import { useTranslations } from "next-intl";

export const ContactPage = () => {
    const t = useTranslations("contact");

    return (
        <section className="py-16 md:py-24 min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold main-color text-center mb-12 md:mb-16">
                    {t("title")}
                </h1>

                {/* Contact Form Card */}
                <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-12 md:mb-16">
                    <form className="space-y-6">
                        {/* Two Column Input Fields */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Left Column */}
                            <div className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium main-color mb-2">
                                        {t("form.firstName")}
                                    </label>
                                    <Input placeholder={t("form.firstNamePlaceholder")} className="border-gray-300" />
                                </div>
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium main-color mb-2">
                                        {t("form.phone")}
                                    </label>
                                    <Input placeholder={t("form.phonePlaceholder")} type="tel" className="border-gray-300" />
                                </div>
                            </div>

                            {/* Right Column */}
                            <div className="space-y-6">
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium main-color mb-2">
                                        {t("form.email")}
                                    </label>
                                    <Input placeholder={t("form.emailPlaceholder")} type="email" className="border-gray-300" />
                                </div>
                                <div>
                                    <label htmlFor="subject" className="block text-sm font-medium main-color mb-2">
                                        {t("form.subject")}
                                    </label>
                                    <Input placeholder={t("form.subjectPlaceholder")} type="text" className="border-gray-300" />
                                </div>
                            </div>
                        </div>

                        {/* Message Field - Full Width */}
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium main-color mb-2">
                                {t("form.message")}
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                rows={6}
                                placeholder={t("form.messagePlaceholder")}
                                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#003350] focus:border-transparent text-gray-700 placeholder-gray-400 resize-none"
                            />
                        </div>

                        {/* Form Footer - Button and Social Icons */}
                        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pt-4">
                            <Button
                                type="submit"
                                className="bg-[#003350] text-white hover:bg-[#003350]/90 px-8 py-6 rounded-xl text-base font-medium"
                            >
                                {t("form.sendMessage")}
                            </Button>
                            <div className="flex items-center gap-4">
                                <a
                                    href="https://instagram.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-600 hover:text-[#003350] transition-colors"
                                    aria-label="Instagram"
                                >
                                    <Instagram className="w-5 h-5" />
                                </a>
                                <a
                                    href="https://linkedin.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-600 hover:text-[#003350] transition-colors"
                                    aria-label="LinkedIn"
                                >
                                    <Linkedin className="w-5 h-5" />
                                </a>
                            </div>
                        </div>
                    </form>
                </div>

                {/* Contact Information Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                    {/* Call us */}
                    <div className="flex items-start gap-4">
                        <div className="shrink-0 w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center">
                            <Phone className="w-6 h-6 text-[#003350]" />
                        </div>
                        <div>
                            <h3 className="font-semibold main-color mb-1">{t("callUs")}</h3>
                            <p className="text-gray-600 text-sm">+966556226204</p>
                        </div>
                    </div>

                    {/* Email us */}
                    <div className="flex items-start gap-4">
                        <div className="shrink-0 w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center">
                            <Mail className="w-6 h-6 text-[#003350]" />
                        </div>
                        <div>
                            <h3 className="font-semibold main-color mb-1">{t("emailUs")}</h3>
                            <p className="text-gray-600 text-sm">info@mrfq.sa</p>
                        </div>
                    </div>

                    {/* Legal entity */}
                    <div className="flex items-start gap-4">
                        <div className="shrink-0 w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center">
                            <FileText className="w-6 h-6 text-[#003350]" />
                        </div>
                        <div>
                            <h3 className="font-semibold main-color mb-1">{t("legalEntity")}</h3>
                            <p className="text-gray-600 text-sm">
                                {t("legalEntityText")}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

