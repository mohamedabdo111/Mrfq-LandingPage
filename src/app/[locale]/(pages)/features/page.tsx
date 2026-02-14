import { Navbar } from "@/components/shared/navbar";
import { FeaturesPage } from "@/components/features/FeaturesPage";
import { generateMetadata as genMeta } from '@/lib/metadata';
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return genMeta({ locale, path: "/features" }, "features");
}

export default function Features() {
    return (
        <div className="bg-[#F9FAFD]">
            <Navbar />
            <FeaturesPage />

        </div>
    );
}

