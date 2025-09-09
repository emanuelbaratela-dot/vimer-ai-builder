import HeroSection from "@/components/home/HeroSection";
import WhyVimerSection from "@/components/home/WhyVimerSection";
import TrustBadges from "@/components/home/TrustBadges";
import Collections from "@/components/home/Collections";
import TargetAudience from "@/components/home/TargetAudience";
import QuickDownloads from "@/components/home/QuickDownloads";
import SupportSection from "@/components/home/SupportSection";
import NewsletterSection from "@/components/home/NewsletterSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <div id="inicio">
        <HeroSection />
      </div>
      <WhyVimerSection />
      <TrustBadges />
      <Collections />
      <TargetAudience />
      <QuickDownloads />
      <SupportSection />
      <div id="suporte">
        <NewsletterSection />
      </div>
    </div>
  );
};

export default Index;
