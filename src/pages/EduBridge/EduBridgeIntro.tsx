import React from "react";
import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import {
  Globe,
  HeartHandshake,
  Smartphone,
  Coins,
  Users,
  BookOpen,
  Download,
  MessageSquare,
  ArrowRight,
} from "lucide-react";

const donationOptions = [
  {
    icon: Smartphone,
    title: "Device Donation",
    description:
      "Give a second life to your phone, tablet, or laptop. Every device donated opens a new door to knowledge.",
    link: "/edubridge/device-donation-guide",
    cta: "Learn How",
  },
  {
    icon: Coins,
    title: "Crypto & Direct Support",
    description:
      "Support education in underserved regions through secure crypto donations or direct financial aid.",
    link: "/edubridge/crypto-donate",
    cta: "Donate Now",
  },
  {
    icon: HeartHandshake,
    title: "Direct Contributions",
    description:
      "Help fund textbooks, internet access, and essential learning resources for students in need.",
    link: "/edubridge/direct-donation",
    cta: "Contribute",
  },
];

export default function EduBridgeIntro() {
  return (
    <div className="min-h-screen bg-background">
        <Header />

      {/* Hero Section */}
      <section className="relative py-20 sm:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-green-500/10 to-transparent" />
        <div className="container relative px-4 sm:px-6 text-center space-y-6 animate-fade-in">
          <Badge className="bg-gradient-to-r from-blue-600 to-green-600 text-white border-0 shadow-glow">
            🌍 EduBridge
          </Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
            Connecting Communities,{" "}
            <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              Empowering Learners
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            EduBridge is a social initiative designed to connect underserved
            students with global learning resources. Through your support, we
            can transform barriers into bridges and ensure that every learner
            has a chance to thrive.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button size="lg" className="bg-gradient-hero hover:opacity-90 shadow-glow">
              Get Involved <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-2">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Donation Options */}
      <section className="py-20 sm:py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-muted/30 to-transparent" />
        <div className="container relative px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
              Ways You Can{" "}
              <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                Contribute
              </span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Every action counts. Whether it’s donating a device, supporting
              financially, or spreading awareness — you are helping build a
              future where education is accessible to all.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {donationOptions.map((option, index) => {
              const Icon = option.icon;
              return (
                <Card
                  key={index}
                  className="p-8 text-center border-2 hover:border-blue-500/50 transition-all duration-300 hover:shadow-glow bg-card/50 backdrop-blur-sm animate-fade-in"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="flex justify-center mb-6">
                    <div className="p-4 rounded-2xl bg-gradient-to-br from-blue-500 to-green-500 text-white shadow-glow">
                      <Icon className="h-8 w-8" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{option.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {option.description}
                  </p>
                  <Link to={option.link}>
                    <Button size="sm" className="bg-gradient-hero hover:opacity-90">
                      {option.cta}
                    </Button>
                  </Link>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Community Q&A */}
      <section className="py-20 sm:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-green-500/5 via-blue-500/5 to-transparent" />
        <div className="container relative px-4 sm:px-6 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-sm font-medium text-green-600">
            <MessageSquare className="h-4 w-4" /> New Feature
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            Community{" "}
            <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              Q&A Hub
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Soon, learners will be able to ask questions and receive answers
            from peers and mentors. Voices from underserved communities will be
            prioritized, ensuring their needs are heard first.
          </p>
          <Link to="/community-questions">
            <Button size="lg" variant="outline" className="border-2">
              Explore Q&A
            </Button>
          </Link>
        </div>
      </section>

      {/* Offline Learning */}
      <section className="py-20 sm:py-32">
        <div className="container px-4 sm:px-6 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-sm font-medium text-purple-600">
            <Download className="h-4 w-4" /> Offline Access
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            Learning Without{" "}
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Internet Barriers
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Download once, learn anytime. Our offline modules bring high‑quality
            education to regions with limited connectivity, ensuring no learner
            is left behind.
          </p>
          <Link to="/edubridge/offline-learning">
            <Button size="lg" className="bg-gradient-hero hover:opacity-90 shadow-glow">
              Download Resources
            </Button>
          </Link>
        </div>
      </section>
      <Footer />
    </div>
  );
}