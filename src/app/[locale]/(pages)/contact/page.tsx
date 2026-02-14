import { Navbar } from "@/components/shared/navbar";
import { ContactPage } from "@/components/contact/ContactPage";
import { generateMetadata as genMeta } from '@/lib/metadata';
import type { Metadata } from "next";

export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: string }>;
}): Promise<Metadata> {
    const { locale } = await params;
    return genMeta({ locale, path: "/contact" }, "contact");
}

export default function Contact() {
    return (
        <div className="bg-[#F9FAFD] min-h-screen">
            <Navbar />
            <ContactPage />
        </div>
    );
}

