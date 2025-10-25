import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ModulesSection } from "@/components/ModulesSection";
import { ImpactSection } from "@/components/ImpactSection";
import { DemoSection } from "@/components/DemoSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <ModulesSection />
        <ImpactSection />
        <DemoSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;