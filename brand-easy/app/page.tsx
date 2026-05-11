import GoldChevronStrip from "@/components/GoldChevronStrip";
import HeroSection from "@/components/HeroSection";
import MarqueeStrip from "@/components/MarqueeStrip";
import BrandStatement from "@/components/BrandStatementSection";
import ServicesSection from "@/components/ServicesSection";
import FeaturedProducts from "@/components/FeaturedProducts";
import StatsSection from "@/components/StatsSection";
import WhyUsSection from "@/components/WhyUsSection";
import PortfolioSection from "@/components/PortfolioSection";
import CTASection from "@/components/CTASection";
import PromoPopup from "@/components/PromoPopup";

export default function HomePage() {
  return (
    <>
      <PromoPopup />
      <GoldChevronStrip />
      <HeroSection />
      <GoldChevronStrip />
      <MarqueeStrip />
      <BrandStatement />
      <ServicesSection />
      <FeaturedProducts />
      <StatsSection />
      <WhyUsSection />
      <PortfolioSection />
      <CTASection />
    </>
  );
}
