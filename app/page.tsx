import Hero from "@/components/Hero";
import GuidedFilterSection from "@/components/GuidedFilterSection";
import MethodSection from "@/components/MethodSection";
import ProfessionalSection from "@/components/ProfessionalSection";
import DeviceSection from "@/components/DeviceSection";
import FinalCtaSection from "@/components/FinalCtaSection";

export default function Home() {
  return (
    <main>
      <Hero />
      <GuidedFilterSection />
      <MethodSection />
      <ProfessionalSection />
      <DeviceSection />
      <FinalCtaSection />
    </main>
  );
}
