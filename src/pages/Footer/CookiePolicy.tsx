import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import {
  Cookie,
  ShieldCheck,
  Settings,
  BarChart,
  UserCog,
  ExternalLink,
  Mail,
  CheckCircle,
  ChevronLeft
} from "lucide-react";

export default function CookiePolicy() {
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
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 via-orange-500/10 to-transparent" />
        <div className="container mx-auto max-w-4xl relative z-10 text-center animate-fade-in space-y-6">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-yellow-500 to-orange-500 shadow-glow">
            <Cookie className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">
            Cookie Policy
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            EduVerse uses cookies to provide a secure, personalized, and
            efficient learning experience. This page explains what cookies are,
            how we use them, and how you can control your preferences.
          </p>
          <Button className="bg-gradient-hero hover:opacity-90 shadow-glow">
            Manage Cookie Preferences
          </Button>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl space-y-8 animate-fade-in">
          <h2 className="text-3xl font-bold mb-6">What Are Cookies?</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Cookies are small text files stored on your device when you visit a
            website. They allow us to remember your preferences, keep you logged
            in, and understand how you interact with EduVerse. Some cookies are
            essential for the platform to function, while others help us improve
            performance and personalize your experience.
          </p>
        </div>
      </section>

      {/* Types of Cookies */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-5xl space-y-12">
          <h2 className="text-3xl font-bold text-center mb-12">
            Types of Cookies We Use
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 border-2 bg-card/50 backdrop-blur-sm shadow-glow">
              <Settings className="h-8 w-8 text-yellow-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Essential Cookies</h3>
              <p className="text-muted-foreground text-sm">
                Required for login, navigation, and secure access to EduVerse.
              </p>
            </Card>
            <Card className="p-6 border-2 bg-card/50 backdrop-blur-sm shadow-glow">
              <BarChart className="h-8 w-8 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Performance Cookies</h3>
              <p className="text-muted-foreground text-sm">
                Measure site speed, reliability, and optimize performance.
              </p>
            </Card>
            <Card className="p-6 border-2 bg-card/50 backdrop-blur-sm shadow-glow">
              <ShieldCheck className="h-8 w-8 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Analytics Cookies</h3>
              <p className="text-muted-foreground text-sm">
                Track usage patterns to improve features and content relevance.
              </p>
            </Card>
            <Card className="p-6 border-2 bg-card/50 backdrop-blur-sm shadow-glow">
              <UserCog className="h-8 w-8 text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">
                Personalization Cookies
              </h3>
              <p className="text-muted-foreground text-sm">
                Remember your settings, language, and accessibility preferences.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Third-Party Cookies */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl space-y-6">
          <h2 className="text-3xl font-bold flex items-center gap-2">
            <ExternalLink className="h-7 w-7 text-purple-600" />
            Third-Party Cookies
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            EduVerse may use trusted third-party services such as analytics
            providers, video hosting platforms, or social media integrations.
            These services may set their own cookies, governed by their
            respective privacy policies.
          </p>
        </div>
      </section>

      {/* Managing Preferences */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl space-y-6">
          <h2 className="text-3xl font-bold flex items-center gap-2">
            <CheckCircle className="h-7 w-7 text-green-600" />
            Managing Your Preferences
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            You can manage or disable cookies anytime through your browser
            settings or our cookie control panel. Please note that disabling
            essential cookies may affect platform functionality.
          </p>
          <Button variant="outline" className="border-2">
            Open Cookie Settings
          </Button>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl space-y-6">
          <h2 className="text-3xl font-bold flex items-center gap-2">
            <ShieldCheck className="h-7 w-7 text-teal-600" />
            Legal Compliance & Transparency
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            EduVerse complies with global data protection laws including GDPR,
            ePrivacy Directive, and COPPA. We are committed to transparency and
            user control over personal data.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center space-y-6">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-hero shadow-glow">
            <Mail className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl font-bold">Questions About Cookies?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            If you have any questions or concerns about our cookie practices,
            please contact us. We’re here to ensure your learning experience is
            safe and transparent.
          </p>
          <Button className="bg-gradient-hero hover:opacity-90 shadow-glow">
            Contact Support
          </Button>
          <p className="text-sm text-muted-foreground mt-4">
            <strong>Last Updated:</strong> October 16, 2025
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}