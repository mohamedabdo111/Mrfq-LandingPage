import Link from "next/link"
import { Button } from "../ui/button"
import { useTranslations } from "next-intl"

export const BookingDemo = () => {
    const t = useTranslations("footer");

    return (
        <Link href="https://outlook.office.com/bookwithme/user/1ccbc085e5644490be03ef89e7c11d72@mrfq.sa/meetingtype/WwLAd6RazkmHD21G58pFJg2?bookingcode=a86deb3b-1168-471a-a6d3-5c7b56047132&anonymous&ismsaljsauthenabled&ep=mlink" target="_blank">
            <Button
                className="bg-[#003350] text-white hover:bg-[#003350]/90 px-8 py-6 rounded-xl font-medium"
            >
                {t("bookDemo")}
            </Button>
        </Link>
    )
}