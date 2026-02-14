import { Navbar } from "@/components/shared/navbar";
import { PrivacyPage } from "@/components/privacy/PrivacyPage";
import { SmallFooter } from "@/components/shared/smallFooter";
import { generateMetadata as genMeta } from '@/lib/metadata';
import type { Metadata } from "next";

export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: string }>;
}): Promise<Metadata> {
    const { locale } = await params;
    return genMeta({ locale, path: "/privacy" }, "privacy");
}

export default function Privacy() {
    return (
        <div className="bg-[#F9FAFD] min-h-screen">
            <Navbar />
            <PrivacyPage />

        </div>
    );
}

