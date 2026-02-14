"use client";

import Image from "next/image";
import { ChevronDown, Globe, Check } from "lucide-react";
import Logo from "@/assets/Logo.svg";
import Link from "next/link";
import { Button } from "../ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger, DropdownMenuSeparator } from "../ui/dropdown-menu";
import { useTranslations, useLocale } from "next-intl";
import { usePathname } from "@/i18n/navigation";
import GlobeIcon from "@/assets/navbar/Icon.svg";

export const Navbar = () => {
    const t = useTranslations("navbar");
    const locale = useLocale();
    const pathname = usePathname();

    const switchLocale = (newLocale: string) => {
        // Get current path without locale (pathname from next-intl doesn't include locale)
        const currentPath = pathname || '/';
        // Navigate to the same path with new locale
        window.location.href = `/${newLocale}${currentPath === '/' ? '' : currentPath}`;
    };

    return (
        <nav className="w-full">
            <div className="max-w-7xl mx-auto px-4 py-3 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center gap-20">

                        {/* Logo */}
                        <div className="shrink-0">
                            <Link href="/">
                                <Image
                                    src={Logo}
                                    alt="MRFQ Logo"
                                    width={88}
                                    height={64}
                                    className="h-12 w-auto"
                                    priority
                                />
                            </Link>
                        </div>

                        {/* Navigation Links */}
                        <div className="hidden md:flex items-center space-x-8">
                            <Link
                                href="/features"
                                className="main-color hover:text-gray-400 transition-colors font-medium"
                            >
                                {t("features")}
                            </Link>
                            <Link
                                href="/contact"
                                className="main-color hover:text-gray-400 transition-colors font-medium"
                            >
                                {t("contact")}
                            </Link>
                        </div>
                    </div>

                    {/* Right Side - Language Selector and Login */}
                    <div className="flex items-center space-x-6">

                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button
                                    variant="outline"
                                    className="flex items-center gap-2 border-0 hover:border-[#003350] hover:bg-gray-50  px-4 h-10 rounded-xl font-medium bg-transparent shadow-none"
                                >
                                    <Image src={GlobeIcon} alt="Globe" width={16} height={16} />
                                    <span className="text-sm">
                                        {locale === "ar" ? "Ar" : "En"}
                                    </span>
                                    <ChevronDown className="w-3 h-3 text-gray-500" />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent
                                align="end"
                                className="w-48 rounded-xl shadow-lg border-gray-100 bg-gray-50"
                            >
                                <DropdownMenuLabel className="text-xs font-semibold text-gray-500 uppercase tracking-wider px-3 py-2">
                                    {t("selectLanguage")}
                                </DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem
                                    onClick={() => switchLocale("en")}
                                    className={`flex items-center justify-between px-3 py-2.5 cursor-pointer transition-colors ${locale === "en"
                                        ? "bg-[#003350]/5 text-[#003350] font-medium"
                                        : "hover:bg-gray-50"
                                        }`}
                                >
                                    <div className="flex items-center gap-3">
                                        <span className="text-lg">🇬🇧</span>
                                        <span className="text-sm">{t("english")}</span>
                                    </div>
                                    {locale === "en" && (
                                        <Check className="w-4 h-4 text-[#003350]" />
                                    )}
                                </DropdownMenuItem>
                                <DropdownMenuItem
                                    onClick={() => switchLocale("ar")}
                                    className={`flex items-center justify-between px-3 py-2.5 cursor-pointer transition-colors ${locale === "ar"
                                        ? "bg-[#003350]/5 text-[#003350] font-medium"
                                        : "hover:bg-gray-50"
                                        }`}
                                >
                                    <div className="flex items-center gap-3">
                                        <span className="text-lg">🇸🇦</span>
                                        <span className="text-sm">{t("arabic")}</span>
                                    </div>
                                    {locale === "ar" && (
                                        <Check className="w-4 h-4 text-[#003350]" />
                                    )}
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                        <Link href="https://mrfq.sa/login" target="_blank">
                            <Button className="bg-[#003350] text-white hover:bg-[#003350]/80 cursor-pointer px-6 h-10 rounded-xl">
                                {t("logIn")}
                            </Button>
                        </Link>

                    </div>

                </div>
            </div>
        </nav>
    );
};