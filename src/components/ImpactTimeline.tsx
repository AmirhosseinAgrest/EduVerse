import { Sparkles, Code, Play, Award } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useLanguage } from "@/context/LanguageContext";

export default function ImpactTimeline() {
  const { t } = useLanguage();
  const tt = t.team.impactTimeline;

  const steps = [
    {
      icon: Sparkles,
      data: tt.steps.ideation,
    },
    {
      icon: Code,
      data: tt.steps.development,
    },
    {
      icon: Play,
      data: tt.steps.testing,
    },
    {
      icon: Award,
      data: tt.steps.recognition,
    },
  ];

  return (
    <section className="py-20 sm:py-32">
      <div className="container px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            {tt.heading.title}{" "}
            <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              {tt.heading.highlight}
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">{tt.heading.subtitle}</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Card
                key={index}
                className="p-6 text-center border-2 hover:border-blue-500/50 transition-all duration-300 hover:shadow-glow bg-card/50 backdrop-blur-sm animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex justify-center mb-4">
                  <div className="p-4 rounded-xl bg-gradient-to-br from-blue-500 to-green-500 text-white shadow-glow">
                    <Icon className="h-6 w-6" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">{step.data.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.data.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}