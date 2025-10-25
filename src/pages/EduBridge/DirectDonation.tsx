import React from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  HeartHandshake,
  Coins,
  ArrowRight,
  BarChart3,
  ShieldCheck,
} from "lucide-react";

export default function DirectDonation() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 sm:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 via-green-500/10 to-transparent" />
        <div className="container relative px-4 sm:px-6 text-center space-y-6 animate-fade-in">
          <Badge className="bg-gradient-to-r from-pink-600 to-green-600 text-white border-0 shadow-glow">
            Direct Donation
          </Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
            Give Directly,{" "}
            <span className="bg-gradient-to-r from-pink-600 to-green-600 bg-clip-text text-transparent">
              Change Lives
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Your direct financial support helps provide essential resources —
            from internet access and textbooks to devices and multilingual
            learning content. Every contribution builds a brighter future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button size="lg" className="bg-gradient-hero hover:opacity-90 shadow-glow">
              Donate Now <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-2">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Why It Matters */}
      <section className="py-20 sm:py-32 relative">
        <div className="container px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Why{" "}
              <span className="bg-gradient-to-r from-pink-600 to-green-600 bg-clip-text text-transparent">
                Direct Donation
              </span>{" "}
              Matters
            </h2>
            <p className="text-lg text-muted-foreground">
              In many regions, even the most basic learning tools are out of
              reach. Your support can fund internet access, purchase devices, or
              create inclusive educational content in multiple languages.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6 border-2 hover:border-pink-500/50 transition-all duration-300 hover:shadow-glow bg-card/50 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-4">
                <HeartHandshake className="h-6 w-6 text-pink-600" />
                <h3 className="text-xl font-bold">Immediate Impact</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Direct donations allow us to respond quickly to urgent needs —
                whether it’s providing a student with a device or ensuring a
                classroom has internet access.
              </p>
            </Card>

            <Card className="p-6 border-2 hover:border-green-500/50 transition-all duration-300 hover:shadow-glow bg-card/50 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-4">
                <Coins className="h-6 w-6 text-green-600" />
                <h3 className="text-xl font-bold">Sustainable Support</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Your contributions help us build long‑term solutions — from
                developing digital libraries to training educators in
                underserved communities.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Transparency */}
      <section className="py-20 sm:py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-muted/30 to-transparent" />
        <div className="container px-4 sm:px-6 max-w-3xl mx-auto">
          <Card className="p-8 border-2 bg-gradient-to-br from-pink-500/5 to-green-500/5 backdrop-blur-sm animate-fade-in">
            <div className="flex items-center gap-3 mb-4">
              <BarChart3 className="h-6 w-6 text-green-600" />
              <h3 className="text-xl font-bold">Transparency & Reports</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4">
              ✅ Every donation is tracked and included in our monthly reports.  
              📊 You’ll see exactly which projects your support has funded — from
              new devices to community learning hubs.  
              🛡️ We are committed to complete transparency and accountability.
            </p>
            <p className="text-lg font-semibold text-green-700 text-center">
              Together, we make education accessible and equitable 🌱
            </p>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-32 text-center">
        <div className="container px-4 sm:px-6 space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Ready to{" "}
            <span className="bg-gradient-to-r from-pink-600 to-green-600 bg-clip-text text-transparent">
              Make a Difference
            </span>
            ?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join thousands of donors who are helping us transform education for
            underserved communities. Every contribution counts.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-gradient-hero hover:opacity-90 shadow-glow"
          >
            <a
              href="https://example.com/donate-direct"
              target="_blank"
              rel="noopener noreferrer"
            >
              Donate Directly <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}