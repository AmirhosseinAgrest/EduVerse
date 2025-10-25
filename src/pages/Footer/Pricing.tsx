import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PricingComparison } from "@/components/PricingComparison";
import { Sparkles, HeartHandshake, ShieldCheck } from "lucide-react";
const plans = [
  {
    name: "Starter",
    monthly: 0,
    yearly: 0,
    description: "Perfect for students and small classrooms",
    features: [
      "Up to 3 modules",
      "Basic content verification",
      "Community support",
    ],
    isPopular: false,
  },
  {
    name: "Pro",
    monthly: 1,
    yearly: 10, // instead of 12
    description: "Ideal for educators and growing teams",
    features: [
      "Unlimited modules",
      "Advanced AI verification",
      "Priority support",
      "Team collaboration tools",
    ],
    isPopular: true,
  },
  {
    name: "Enterprise",
    monthly: null,
    yearly: null,
    description: "Tailored for institutions and platforms",
    features: [
      "Custom integrations",
      "Dedicated onboarding",
      "Compliance & analytics",
      "24/7 support",
    ],
    isPopular: false,
  },
];

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(true);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <section className="py-20 sm:py-32 container px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Choose Your{" "}
            <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              Plan
            </span>
          </h1>
          <p className="text-lg text-muted-foreground">
            Flexible pricing for educators, students, and institutions
          </p>
        </div>

        {/* Toggle */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <Label htmlFor="billing">Monthly</Label>
          <Switch
            id="billing"
            checked={isYearly}
            onCheckedChange={setIsYearly}
          />
          <Label htmlFor="billing">Yearly</Label>
        </div>

        {/* Plans */}
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => {
            const price = isYearly ? plan.yearly : plan.monthly;
            const isFree = price === 0;
            const isCustom = price === null;

            return (
              <Card
                key={index}
                className={`p-8 border-2 bg-card/50 backdrop-blur-sm animate-fade-in transition-all duration-300 hover:shadow-glow ${
                  plan.isPopular ? "border-green-500/50" : "border-border"
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-2xl font-bold">{plan.name}</h2>
                  {plan.isPopular && (
                    <Badge className="bg-gradient-to-r from-green-500 to-blue-500 text-white border-0 shadow-glow">
                      Most Popular
                    </Badge>
                  )}
                </div>

                <div className="text-4xl font-bold mb-2 text-blue-600 dark:text-blue-400">
                  {isCustom
                    ? "Custom"
                    : isFree
                    ? "$0"
                    : `$${price}${isYearly ? "/year" : "/month"}`}
                </div>

                {plan.name === "Pro" && isYearly && (
                  <p className="text-sm text-green-600 dark:text-green-400 mb-2">
                    Save $2 with yearly billing
                  </p>
                )}

                <p className="text-muted-foreground mb-6">{plan.description}</p>

                <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                  {plan.features.map((feature, i) => (
                    <li key={i}>• {feature}</li>
                  ))}
                </ul>

                <Button size="lg" className="w-full">
                  {isCustom
                    ? "Contact Sales"
                    : isFree
                    ? "Get Started"
                    : "Choose Plan"}
                </Button>
              </Card>
            );
          })}
        </div>
        <PricingComparison />
        <section className="py-24 sm:py-32 relative overflow-hidden">
  <div className="absolute inset-0 bg-gradient-to-br to-transparent" />
  <div className="container relative px-4 sm:px-6">
    <div className="text-center max-w-3xl mx-auto mb-16 space-y-6 animate-fade-in">
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-sm font-medium text-green-600 dark:text-green-400">
        <Sparkles className="h-4 w-4" />
        Surprise Reveal
      </div>
      <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
        Everything You Saw Above Is{" "}
        <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
          Completely Free
        </span>
      </h2>
      <p className="text-lg text-muted-foreground leading-relaxed">
        We designed this pricing page to help you understand the value we’re delivering. But here’s the truth: <strong>EduVerse is built for learners, not for profit.</strong> Every feature, every module, every tool you’ve seen above is available to you <strong>without paying a single cent</strong>.
      </p>
    </div>

    <Card className="max-w-4xl mx-auto p-8 sm:p-12 border-2 bg-card/50 backdrop-blur-sm shadow-glow space-y-8 animate-fade-in">
      <div className="flex justify-center">
        <div className="p-4 rounded-full bg-gradient-to-br from-green-500 to-blue-500 text-white shadow-glow">
          <HeartHandshake className="h-8 w-8" />
        </div>
      </div>

      <Card className="max-w-3xl mx-auto p-8 sm:p-12 border-2 bg-gradient-to-br from-primary/5 to-secondary/5 backdrop-blur-sm animate-fade-in">
                  <div className="flex flex-col items-center text-center space-y-6">
                    
                    
                    <blockquote className="text-xl sm:text-2xl font-medium leading-relaxed">
                      “I believe that high-quality education should be accessible to everyone—not just to those who can afford it. This project wasn’t built for monetization; it was built for empowerment.”
                    </blockquote>
                    
                    <div className="space-y-1">
                      <div className="font-semibold">Amir Hossein Agrest</div>
                      <div className="text-sm text-muted-foreground">Project Lead</div>
                    </div>
                  </div>
                </Card>

      <div className="grid sm:grid-cols-3 gap-6 text-center pt-6">
        <div className="space-y-2">
          <ShieldCheck className="h-6 w-6 mx-auto text-green-500" />
          <div className="font-semibold">No Credit Card Required</div>
          <p className="text-sm text-muted-foreground">Just start learning</p>
        </div>
        <div className="space-y-2">
          <Sparkles className="h-6 w-6 mx-auto text-blue-500" />
          <div className="font-semibold">All Features Included</div>
          <p className="text-sm text-muted-foreground">No limitations</p>
        </div>
        <div className="space-y-2">
          <HeartHandshake className="h-6 w-6 mx-auto text-purple-500" />
          <div className="font-semibold">Built for Empowerment</div>
          <p className="text-sm text-muted-foreground">Not monetization</p>
        </div>
      </div>

      <div className="text-center pt-8">
        <Button size="lg" className="bg-gradient-hero hover:opacity-90 shadow-glow">
          Start Learning Now
        </Button>
        <p className="text-sm text-muted-foreground mt-2">
          No signup required. Just explore and grow.
        </p>
      </div>
    </Card>

    <div className="text-center mt-12">
      <Badge className="bg-gradient-to-r from-green-500 to-blue-500 text-white border-0 shadow-glow">
        Empowering learners worldwide — with zero cost
      </Badge>
    </div>
  </div>
</section>
      </section>
      <Footer />
    </div>
  );
}