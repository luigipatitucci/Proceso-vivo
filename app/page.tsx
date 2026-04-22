import Hero from "@/components/Hero";
import GuidedFilterSection from "@/components/GuidedFilterSection";
import MethodSection from "@/components/MethodSection";
import ProfessionalSection from "@/components/ProfessionalSection";
import ServicesSection from "@/components/ServicesSection";
import ToolsCarouselSection from "@/components/ToolsCarouselSection";
import DeviceSection from "@/components/DeviceSection";
import FinalCtaSection from "@/components/FinalCtaSection";
import QuoteSection from "@/components/QuoteSection";

export default function Home() {
  return (
    <main>
      <Hero />
      <QuoteSection 
        quote="El ser humano no existe aislado: se construye en la relación entre su interior y el mundo."
        author="— Tetsuro Watsuji"
      />
      <GuidedFilterSection />
      <QuoteSection 
        quote="Ser es habitarse: y en ese habitar, descubrir el sentido de existir."
        author="— Martin Heidegger"
      />
      <MethodSection />
      <ProfessionalSection />
      <QuoteSection 
        quote="Solo cuando podemos habitar lo desconocido, algo nuevo puede nacer en nosotros."
        author="— Wilfred Bion"
      />
      <ServicesSection />
      <ToolsCarouselSection />
      <DeviceSection />
      <QuoteSection 
        quote="Solo cuando el yo se aquieta, puede aparecer una forma más profunda de realidad."
        author="— Kitaro Nishida"
      />
      <FinalCtaSection />
    </main>
  );
}
