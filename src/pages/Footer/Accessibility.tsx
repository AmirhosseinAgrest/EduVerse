import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Eye, PersonStanding, HeartHandshake, ArrowRight, CheckCircle, HelpCircle, Mail, ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function Accessibility() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
<div className="container px-4 sm:px-6 pt-24 pb-6">
        <Link
          to="/"
          className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <ChevronLeft className="h-4 w-4 mr-1" />
          Back to Home
        </Link>
      </div>
      {/* Hero Section */}
      <section className="relative py-12 sm:py-20 overflow-hidden">
  <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-blue-500/10 to-transparent" />
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--green)/0.1),transparent_50%)]" />

  <div className="container relative px-4 sm:px-6">
    <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in">
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-sm font-medium text-green-600 dark:text-green-400">
        <Eye className="h-4 w-4" />
        Accessibility First
      </div>

      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
        Designed for{" "}
        <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
          Everyone
        </span>
      </h1>

      <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
        EduVerse is built to be accessible to all learners—regardless of ability, language, or device. From screen reader support to multilingual content verification, we ensure that every user can engage, explore, and grow.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
        <Button size="lg" className="bg-gradient-hero hover:opacity-90 shadow-glow">
          Explore Accessibility Features
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </div>
  </div>
</section>


      {/* Accessibility Content */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl space-y-12 animate-fade-in">
          {/* Section 1 */}
          <Card className="p-6 border-2 bg-card/50 backdrop-blur-sm shadow-glow">
            <div className="flex items-center gap-3 mb-4">
              <CheckCircle className="w-6 h-6 text-green-600" />
              <h2 className="text-2xl font-bold">Inclusive Design Principles</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              We follow WCAG 2.1 guidelines to ensure our platform is perceivable, operable, understandable, and robust. Our goal is to remove barriers and create equal access to education.
            </p>
          </Card>

          {/* Section 2 */}
          <Card className="p-6 border-2 bg-card/50 backdrop-blur-sm shadow-glow">
            <div className="flex items-center gap-3 mb-4">
              <Eye className="w-6 h-6 text-blue-600" />
              <h2 className="text-2xl font-bold">Visual Accessibility</h2>
            </div>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>High contrast modes and dark/light themes</li>
              <li>Scalable text and responsive layouts</li>
              <li>Screen reader compatibility and semantic HTML</li>
            </ul>
          </Card>

          {/* Section 3 */}
          <Card className="p-6 border-2 bg-card/50 backdrop-blur-sm shadow-glow">
            <div className="flex items-center gap-3 mb-4">
              <HelpCircle className="w-6 h-6 text-purple-600" />
              <h2 className="text-2xl font-bold">Cognitive & Interaction Support</h2>
            </div>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>Clear navigation and consistent UI patterns</li>
              <li>Keyboard-friendly interactions</li>
              <li>Minimal distractions and focused content flow</li>
            </ul>
          </Card>

          {/* Section 4 */}
          <Card className="p-6 border-2 bg-card/50 backdrop-blur-sm shadow-glow">
            <div className="flex items-center gap-3 mb-4">
              <Mail className="w-6 h-6 text-green-500" />
              <h2 className="text-2xl font-bold">Feedback & Support</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              If you encounter any accessibility issues or have suggestions for improvement, please reach out. We’re committed to continuous enhancement and welcome your input.
            </p>
            <div className="pt-4">
              <Button size="lg" variant="outline" className="border-2">
                Contact Accessibility Team
              </Button>
            </div>
          </Card>

          {/* Final Statement */}
          <div className="text-center pt-12 space-y-4">
            <Badge className="bg-gradient-to-r from-green-500 to-blue-500 text-white border-0 shadow-glow">
              Accessibility is not a feature—it’s a foundation
            </Badge>
            <p className="text-muted-foreground text-sm">
              Last updated: October 16, 2025
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}