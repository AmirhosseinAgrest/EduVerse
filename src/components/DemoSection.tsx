import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Play, Monitor, Smartphone, Tablet } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export const DemoSection = () => {
  const [showVideo, setShowVideo] = useState(false);
  const { t, lang } = useLanguage();
  const dt = t.demo;
  const isRTL = lang === "fa";

  return (
    <section
      id="demo"
      dir={isRTL ? "rtl" : "ltr"}
      className="py-20 sm:py-32 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/30 to-transparent" />

      <div className="container relative px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 text-sm font-medium text-secondary">
            {dt.badge}
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            {dt.heading}{" "}
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              {dt.highlight}
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">{dt.subtext}</p>
        </div>

        {/* Demo Video Card */}
        <Card className="max-w-5xl mx-auto overflow-hidden border-2 shadow-glow bg-card/50 backdrop-blur-sm">
          <div className="relative aspect-video bg-black flex items-center justify-center group cursor-pointer">
            {showVideo ? (
              <iframe
                className="absolute inset-0 w-full h-full"
                src=""
                title="EduVerse Demo"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            ) : (
              <>
                <img
                  src="https://img.youtube.com/vi/ba69BWqAfis/maxresdefault.jpg"
                  alt="Demo Poster"
                  className="absolute inset-0 w-full h-full object-cover opacity-40"
                />
                <div
                  className="relative z-10 flex flex-col items-center gap-4"
                  onClick={() => setShowVideo(true)}
                >
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-hero flex items-center justify-center shadow-glow transition-transform group-hover:scale-110 duration-300">
                    <Play className="h-10 w-10 sm:h-12 sm:w-12 text-white ml-1 fill-white" />
                  </div>
                  <div className="text-center">
                    <div className="font-semibold text-lg sm:text-xl mb-1">
                      {dt.playButton.title}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {dt.playButton.subtitle}
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Features List */}
          <div className="p-6 sm:p-8 bg-card border-t-2">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Monitor className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="font-semibold mb-1">
                    {dt.features.desktop.title}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {dt.features.desktop.description}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-secondary/10">
                  <Tablet className="h-5 w-5 text-secondary" />
                </div>
                <div>
                  <div className="font-semibold mb-1">
                    {dt.features.tablet.title}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {dt.features.tablet.description}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-accent/10">
                  <Smartphone className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <div className="font-semibold mb-1">
                    {dt.features.mobile.title}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {dt.features.mobile.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12">
          <Button
            size="lg"
            className="bg-gradient-hero hover:opacity-90 transition-opacity shadow-glow px-8 py-6"
          >
            {dt.cta.tryNow}
          </Button>
          <Button size="lg" variant="outline" className="border-2 px-8 py-6">
            {dt.cta.schedule}
          </Button>
        </div>
      </div>
    </section>
  );
};