import HeroSection from "@/components/home-components/HeroSection";
import CTASection from "@/components/home-components/CTASection";

export default function Home() {
  return (
    <div className="pt-20 md:pt-3">
      <HeroSection />
      <CTASection />
    </div>
  );
}