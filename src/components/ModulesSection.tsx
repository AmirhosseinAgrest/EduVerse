import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link as RouterLink } from "react-router-dom";
import {
  Brain,
  Network,
  Shield,
  Link,
  MessageSquare,
  GraduationCap,
  Globe,
  ArrowRight,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export const ModulesSection = () => {
  const { t, lang } = useLanguage();
  const mt = t.modules;
  const isRTL = lang === "fa" || lang === "ps";

  const modules = [
    {
      icon: Brain,
      key: "NeuroSnap",
      color: "text-purple-500",
      link: "/neurosnap",
    },
    {
      icon: Network,
      key: "MindMapAI",
      color: "text-blue-500",
      link: "/mindmap-ai",
    },
    {
      icon: Shield,
      key: "TruthSnap",
      color: "text-green-500",
      link: "/truthsnap",
    },
    {
      icon: MessageSquare,
      key: "MentorBot",
      color: "text-pink-500",
      link: "/mentorbot",
    },
    {
      icon: GraduationCap,
      key: "ExamChain",
      color: "text-orange-500",
    },
    {
      icon: Globe,
      key: "EduBridge",
      color: "text-cyan-500",
      link: "/edubridge/edubridgeIntro",
    },
    {
      icon: Brain,
      key: "KnowFlow",
      color: "text-purple-500",
      link: "/Knowflow",
    },
  ];

  return (
    <section
      id="modules"
      dir={isRTL ? "rtl" : "ltr"}
      className="py-20 sm:py-32 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-muted/30 to-transparent" />

      <div className="container relative px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary">
            {mt.badge}
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            {mt.heading}{" "}
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              {mt.highlight}
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">{mt.subtext}</p>
        </div>

        {/* Modules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {modules.map((module, index) => {
            const Icon = module.icon;
            const content = mt.items[module.key as keyof typeof mt.items];

            return (
              <Card
                key={index}
                className="group relative p-6 sm:p-8 border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-glow bg-card/50 backdrop-blur-sm animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Icon */}
                <div className="flex items-start justify-between mb-4">
                  <div
                    className={`p-3 rounded-xl bg-gradient-hero ${module.color} shadow-glow transition-transform group-hover:scale-110 duration-300`}
                  >
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <ArrowRight className="h-5 w-5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {content.name}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {content.description}
                </p>

                {/* Learn More Link */}
                {module.link ? (
                  <RouterLink to={module.link} className="block">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="w-full justify-center group-hover:bg-primary/10 transition-colors"
                    >
                      {mt.learnMore}
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </RouterLink>
                ) : (
                  <Button
                    variant="ghost"
                    size="sm"
                    className="w-full justify-center group-hover:bg-primary/10 transition-colors"
                  >
                    {mt.learnMore}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                )}
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <Button
            size="lg"
            variant="outline"
            className="border-2 text-base px-8 py-6 hover:bg-primary/10"
          >
            {mt.viewDemo}
          </Button>
        </div>
      </div>
    </section>
  );
};