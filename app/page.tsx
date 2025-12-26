import Hero from "@/components/Hero";
import FeaturedSolar from "@/components/FeaturedSolar";
import CategoryGrid from "@/components/CategoryGrid";
import WarehouseSection from "@/components/WarehouseSection";
import KitsShowcase from "@/components/KitsShowcase";
import WaterHygieneVector from "@/components/WaterHygieneVector";
import PartnerMarquee from "@/components/PartnerMarquee";
import CTASection from "@/components/CTASection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedSolar />
      <CategoryGrid />
      <WarehouseSection />
      <KitsShowcase />
      <WaterHygieneVector />
      <PartnerMarquee />
      <CTASection />
    </>
  );
}
