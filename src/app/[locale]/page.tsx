import { HeroSection } from "@/components/home/HeroSection";
import { FeatureSection } from "@/components/home/FeatureSection";
import { RoleSection } from "@/components/home/RoleSection";
import { Footer } from "@/components/shared/footer";
import { generateMetadata as genMeta } from '@/lib/metadata';
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return genMeta({ locale }, "home");
}

export default function Home() {
  return <>
    <HeroSection />
    <FeatureSection />
    <RoleSection />
    <Footer />
  </>
}