import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";
import { Check, X, Info } from "lucide-react";

const features = [
  { name: "Unlimited Modules", key: "modules", description: "Create as many learning modules as you need" },
  { name: "AI Verification", key: "ai", description: "Advanced content validation powered by AI" },
  { name: "Team Collaboration", key: "team", description: "Invite teammates and co-edit modules" },
  { name: "Priority Support", key: "support", description: "Faster response times and dedicated help" },
  { name: "Analytics Dashboard", key: "analytics", description: "Track engagement and performance" },
  { name: "Custom Branding", key: "branding", description: "Add your logo and colors to the platform" },
  { name: "Multilingual Support", key: "languages", description: "Verify content across 50+ languages" },
  { name: "Compliance Tools", key: "compliance", description: "GDPR, COPPA, and educational standards" },
  { name: "Mobile App Access", key: "mobile", description: "Use EduVerse on iOS and Android" },
  { name: "Custom Integrations", key: "integrations", description: "Connect with LMS, CMS, and more" },
];

const plans = {
  Starter: {
    modules: false,
    ai: true,
    team: false,
    support: false,
    analytics: false,
    branding: false,
    languages: true,
    compliance: false,
    mobile: true,
    integrations: false,
  },
  Pro: {
    modules: true,
    ai: true,
    team: true,
    support: true,
    analytics: true,
    branding: true,
    languages: true,
    compliance: true,
    mobile: true,
    integrations: false,
  },
  Enterprise: {
    modules: true,
    ai: true,
    team: true,
    support: true,
    analytics: true,
    branding: true,
    languages: true,
    compliance: true,
    mobile: true,
    integrations: true,
  },
};

export function PricingComparison() {
  return (
    <section className="py-20 sm:py-32 container px-4 sm:px-6">
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
          Feature{" "}
          <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
            Comparison
          </span>
        </h2>
        <p className="text-lg text-muted-foreground">
          See what each plan includes and find the right fit for your needs
        </p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-muted/30 text-left">
              <th className="p-4 font-semibold">Feature</th>
              <th className="p-4 font-semibold text-center">Starter</th>
              <th className="p-4 font-semibold text-center">Pro</th>
              <th className="p-4 font-semibold text-center">Enterprise</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {features.map((feature, index) => (
              <tr key={index} className="hover:bg-muted/10 transition">
                <td className="p-4 font-medium text-muted-foreground flex items-center gap-2">
                  {feature.name}
                  <Tooltip>
                    <TooltipTrigger>
                      <Info className="h-4 w-4 text-muted-foreground" />
                    </TooltipTrigger>
                    <TooltipContent>{feature.description}</TooltipContent>
                  </Tooltip>
                </td>
                {["Starter", "Pro", "Enterprise"].map((plan) => (
                  <td key={plan} className="p-4 text-center">
                    {plans[plan][feature.key] ? (
                      <Check className="h-5 w-5 text-green-500 mx-auto" />
                    ) : (
                      <X className="h-5 w-5 text-red-500 mx-auto" />
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="text-center mt-12">
        <Badge className="bg-gradient-to-r from-green-500 to-blue-500 text-white border-0 shadow-glow">
          All plans include secure access and mobile support
        </Badge>
      </div>
    </section>
  );
}