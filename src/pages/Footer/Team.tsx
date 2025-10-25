import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import ImpactTimeline from "@/components/ImpactTimeline";
import { useLanguage } from "@/context/LanguageContext";

import {
  Users,
  ArrowRight,
  ChevronLeft,
  Github,
  Linkedin,
  Instagram,
  Globe,
  Code,
  Palette,
  Smartphone,
  Film,
  Sparkles,
  Award,
  Clock,
  Target,
} from "lucide-react";
import { Link } from "react-router-dom";


export default function Team() {
  const { t, lang } = useLanguage();
  const tt = t.team;
  const isRTL = lang === "fa" || lang === "ps";

  const memberKeys = ["amir", "elizabeth", "ahmadreza", "mahan", "hossein"];
  const avatars = ["AH", "ES", "AS", "ML", "HN"];

  const teamMembers = memberKeys.map((key, index) => ({
    name: tt.members[key].name,
    role: tt.members[key].role,
    bio: tt.members[key].bio,
    skills: tt.members[key].skills,
    avatar: avatars[index],
    isLead: key === "amir",
    social: {
      github: "#",
      linkedin: "#",
      instagram: "#",
      website: "#",
    },
  }));

  const stats = [
    {
      icon: Users,
      value: "5",
      label: tt.stats.members.label,
      description: tt.stats.members.description,
    },
    {
      icon: Clock,
      value: "2000+",
      label: tt.stats.hours.label,
      description: tt.stats.hours.description,
    },
    {
      icon: Target,
      value: "3",
      label: tt.stats.modules.label,
      description: tt.stats.modules.description,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Breadcrumb */}
      <div className="container px-4 sm:px-6 pt-24 pb-6">
        <Link
          to="/"
          className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <ChevronLeft className="h-4 w-4 mr-1" />
          {tt.breadcrumb}
        </Link>
      </div>

      {/* Hero Section */}
      <section className="relative py-12 sm:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--primary)/0.1),transparent_50%)]" />

        <div className="container relative px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary">
              <Users className="h-4 w-4" />
              {tt.badge}
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
              {tt.heading.title}{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                {tt.heading.highlight}
              </span>
            </h1>

            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              {tt.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button size="lg" className="bg-gradient-hero hover:opacity-90 shadow-glow">
                {tt.cta}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Team Grid Section */}
      <section className="py-20 sm:py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-muted/30 to-transparent" />

        <div className="container relative px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
              {tt.title.part1}{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                {tt.title.highlight}
              </span>
            </h2>
            <p className="text-lg text-muted-foreground">
              {tt.subtitle}
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card
                key={index}
                className={`group p-8 border-2 transition-all duration-300 hover:shadow-glow bg-card/50 backdrop-blur-sm animate-fade-in relative overflow-hidden ${member.isLead
                  ? "border-primary/50 hover:border-primary lg:col-span-3 lg:max-w-2xl lg:mx-auto"
                  : "hover:border-primary/30"
                  }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {member.isLead && (
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-gradient-to-r from-primary to-secondary text-white border-0 shadow-glow">
                      <Award className="h-3 w-3 mr-1" />
                      {tt.grid.leadBadge}
                    </Badge>
                  </div>
                )}

                <div className="flex flex-col items-center text-center space-y-4">
                  {/* Avatar */}
                  <div className="relative">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white text-3xl font-bold shadow-glow transition-transform group-hover:scale-110 duration-300">
                      {member.avatar}
                    </div>
                    {member.isLead && (
                      <div className="absolute -bottom-2 -right-2 w-10 h-10 rounded-full bg-accent flex items-center justify-center shadow-lg">
                        <Sparkles className="h-5 w-5 text-accent-foreground" />
                      </div>
                    )}
                  </div>

                  {/* Info */}
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-sm font-medium text-muted-foreground">
                      {member.role}
                    </p>
                  </div>

                  <p className="text-muted-foreground leading-relaxed">
                    {member.bio}
                  </p>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2 justify-center pt-2">
                    {member.skills.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        variant="secondary"
                        className="text-xs"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>

                  {/* Social Links */}
                  <div className="flex gap-3 pt-4">
                    {member.social.github && (
                      <a
                        href={member.social.github}
                        className="p-2 rounded-lg border border-border hover:border-primary hover:bg-primary/10 transition-all duration-200"
                        aria-label="GitHub"
                      >
                        <Github className="h-5 w-5" />
                      </a>
                    )}
                    {member.social.linkedin && (
                      <a
                        href={member.social.linkedin}
                        className="p-2 rounded-lg border border-border hover:border-primary hover:bg-primary/10 transition-all duration-200"
                        aria-label="LinkedIn"
                      >
                        <Linkedin className="h-5 w-5" />
                      </a>
                    )}
                    {member.social.website && (
                      <a
                        href={member.social.website}
                        className="p-2 rounded-lg border border-border hover:border-primary hover:bg-primary/10 transition-all duration-200"
                        aria-label="Website"
                      >
                        <Globe className="h-5 w-5" />
                      </a>
                    )}
                    {member.social.instagram && (
                      <a
                        href={member.social.instagram}
                        className="p-2 rounded-lg border border-border hover:border-primary hover:bg-primary/10 transition-all duration-200"
                        aria-label="insatgram"
                      >
                        <Instagram className="h-5 w-5" />
                      </a>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 sm:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-secondary/5 to-transparent" />

        <div className="container relative px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
              {tt.grid.title.part1}{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                {tt.grid.title.highlight}
              </span>
            </h2>
          </div>

          {/* Stats */}
          <div className="grid sm:grid-cols-3 gap-8 mb-16">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Card
                  key={index}
                  className="p-8 text-center border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-glow bg-card/50 backdrop-blur-sm animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex justify-center mb-4">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-primary to-secondary text-white shadow-glow">
                      <Icon className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </div>
                  <div className="font-semibold mb-1">{stat.label}</div>
                  <div className="text-sm text-muted-foreground">{stat.description}</div>
                </Card>
              );
            })}
          </div>

          {/* Testimonial */}
          <Card className="max-w-3xl mx-auto p-8 sm:p-12 border-2 bg-gradient-to-br from-primary/5 to-secondary/5 backdrop-blur-sm animate-fade-in">
            <div className="flex flex-col items-center text-center space-y-6">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white text-2xl font-bold shadow-glow">
                AH
              </div>

              <blockquote className="text-xl sm:text-2xl font-medium leading-relaxed">
                {tt.testimonial.quote}
              </blockquote>

              <div className="space-y-1">
                <div className="font-semibold">{tt.testimonial.name}</div>
                <div className="text-sm text-muted-foreground">{tt.testimonial.role}</div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Collaboration Section */}
      <section className="py-20 sm:py-32">
        <div className="container px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
              {tt.collaboration.heading.part1}{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                {tt.heading.highlight}
              </span>
            </h2>
            <p className="text-lg text-muted-foreground">{tt.collaboration.heading.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 text-center border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-glow bg-card/50 backdrop-blur-sm animate-fade-in">
              <div className="flex justify-center mb-6">
                <div className="p-4 rounded-2xl bg-gradient-to-br from-primary to-secondary text-white shadow-glow">
                  <Code className="h-8 w-8" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4">{tt.collaboration.cards.remote.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {tt.collaboration.cards.remote.description}
              </p>
            </Card>

            <Card className="p-8 text-center border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-glow bg-card/50 backdrop-blur-sm animate-fade-in" style={{ animationDelay: "100ms" }}>
              <div className="flex justify-center mb-6">
                <div className="p-4 rounded-2xl bg-gradient-to-br from-secondary to-accent text-white shadow-glow">
                  <Award className="h-8 w-8" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4">{tt.collaboration.cards.hackathon.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {tt.collaboration.cards.hackathon.description}
              </p>
            </Card>

            <Card className="p-8 text-center border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-glow bg-card/50 backdrop-blur-sm animate-fade-in" style={{ animationDelay: "200ms" }}>
              <div className="flex justify-center mb-6">
                <div className="p-4 rounded-2xl bg-gradient-to-br from-accent to-primary text-white shadow-glow">
                  <Sparkles className="h-8 w-8" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4">{tt.collaboration.cards.design.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {tt.collaboration.cards.design.description}
              </p>
            </Card>
          </div>
        </div>
      </section>

      <ImpactTimeline />
      {/* CTA Section */}
      <section className="py-20 sm:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-transparent" />

        <div className="container relative px-4 sm:px-6">
          <Card className="max-w-4xl mx-auto p-8 sm:p-12 text-center border-2 bg-gradient-to-br from-primary/5 to-secondary/5 backdrop-blur-sm space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              {tt.join.heading}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {tt.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-hero hover:opacity-90 shadow-glow">
                {tt.join.cta.join}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-2">
                {tt.join.cta.feedback}
              </Button>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};
