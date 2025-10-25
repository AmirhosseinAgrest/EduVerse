import { Card } from "@/components/ui/card";
import { Users, Heart, Award, TrendingUp } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export const ImpactSection = () => {
  const { t, lang } = useLanguage();
  const it = t.impact;
  const isRTL = lang === "fa" || lang === "ps";

  const stats = [
    {
      icon: Users,
      value: "10,000+",
      label: it.stats.students.label,
      description: it.stats.students.description,
    },
    {
      icon: Heart,
      value: "2,500+",
      label: it.stats.devices.label,
      description: it.stats.devices.description,
    },
    {
      icon: Award,
      value: "50,000+",
      label: it.stats.credentials.label,
      description: it.stats.credentials.description,
    },
    {
      icon: TrendingUp,
      value: "98%",
      label: it.stats.success.label,
      description: it.stats.success.description,
    },
  ];

  return (
    <section
      id="impact"
      dir={isRTL ? "rtl" : "ltr"}
      className="py-20 sm:py-32 relative"
    >
      <div className="absolute inset-0 bg-gradient-hero opacity-5" />

      <div className="container relative px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-sm font-medium text-accent">
            {it.badge}
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            {it.heading}{" "}
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              {it.highlight}
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">{it.subtext}</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card
                key={index}
                className="p-6 sm:p-8 text-center border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-card bg-card/50 backdrop-blur-sm animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="inline-flex p-4 rounded-xl bg-gradient-hero mb-4 shadow-glow">
                  <Icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl sm:text-4xl font-bold bg-gradient-hero bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="font-semibold text-foreground mb-1">
                  {stat.label}
                </div>
                <p className="text-sm text-muted-foreground">
                  {stat.description}
                </p>
              </Card>
            );
          })}
        </div>

        {/* Testimonial Card */}
        <Card className="max-w-4xl mx-auto p-8 sm:p-12 border-2 bg-gradient-card backdrop-blur-sm shadow-glow">
          <div className="flex flex-col items-center text-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
              <svg
                className="w-8 h-8 text-primary"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>

            <blockquote className="text-xl sm:text-2xl font-medium leading-relaxed">
              {`"${it.testimonial.quote}"`}
            </blockquote>

            <div className="space-y-1">
              <div className="font-semibold text-foreground">
                {it.testimonial.name}
              </div>
              <div className="text-sm text-muted-foreground">
                {it.testimonial.role}
              </div>
            </div>

            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="w-5 h-5 text-accent fill-current"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
              ))}
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};