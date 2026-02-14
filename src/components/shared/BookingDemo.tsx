import Link from "next/link"
import { Button } from "../ui/button"
import { useTranslations } from "next-intl"

export const BookingDemo = () => {
    const t = useTranslations("footer");

    return (
        <Link href="https://meetings-eu1.hubspot.com/yalrashod" target="_blank">
            <Button
                className="bg-[#003350] text-white hover:bg-[#003350]/90 px-8 py-6 rounded-xl font-medium"
            >
                {t("bookDemo")}
            </Button>
        </Link>
    )
}