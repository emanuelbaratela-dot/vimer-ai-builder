import HeroSection from "@/components/home/HeroSection";
import WhyVimerSection from "@/components/home/WhyVimerSection";
import TrustBadges from "@/components/home/TrustBadges";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import Collections from "@/components/home/Collections";
import TargetAudience from "@/components/home/TargetAudience";
import QuickDownloads from "@/components/home/QuickDownloads";
import SupportSection from "@/components/home/SupportSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <WhyVimerSection />
      <TrustBadges />
      <FeaturedProducts />
      <Collections />
      <TargetAudience />
      <QuickDownloads />
      <SupportSection />
    </div>
  );
};

export default Index;
