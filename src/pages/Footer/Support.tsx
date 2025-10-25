import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  LifeBuoy,
  HelpCircle,
  Mail,
  MessageSquare,
  Users,
  BookOpen,
  FileText,
  ArrowRight,
  ChevronLeft,
  Phone,
  ExternalLink,
  Github,
  Linkedin,
  Twitter,
  Instagram,
  CheckCircle,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Support() {
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
          Back to Home
        </Link>
      </div>

      {/* Hero Section */}
      <section className="relative py-12 sm:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--primary)/0.08),transparent_55%)]" />
        <div className="container relative px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary">
              <LifeBuoy className="h-4 w-4" />
              EduVerse Support
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
              We’re here to{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                help you
              </span>
            </h1>

            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Whether you’re a student, educator, or partner, our support team and resources
              are ready to guide you every step of the way.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
              <Button size="lg" className="bg-gradient-hero hover:opacity-90 shadow-glow">
                Contact Support
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-2">
                Browse FAQs
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Support Options */}
      <section className="py-20 sm:py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-muted/30 to-transparent" />
        <div className="container relative px-4 sm:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-8 border-2 bg-card/50 backdrop-blur-sm hover:shadow-glow">
              <HelpCircle className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">FAQs</h3>
              <p className="text-muted-foreground">
                Find quick answers to common questions about EduVerse.
              </p>
              <Button variant="outline" className="mt-4 border-2">
                View FAQs
              </Button>
            </Card>

            <Card className="p-8 border-2 bg-card/50 backdrop-blur-sm hover:shadow-glow">
              <Mail className="h-10 w-10 text-secondary mb-4" />
              <h3 className="text-xl font-bold mb-2">Email Support</h3>
              <p className="text-muted-foreground">
                Reach out to our team directly for personalized help.
              </p>
              <Button variant="outline" className="mt-4 border-2">
                Send Email
              </Button>
            </Card>

            <Card className="p-8 border-2 bg-card/50 backdrop-blur-sm hover:shadow-glow">
              <MessageSquare className="h-10 w-10 text-accent mb-4" />
              <h3 className="text-xl font-bold mb-2">Live Chat</h3>
              <p className="text-muted-foreground">
                Chat with a support specialist in real time.
              </p>
              <Button variant="outline" className="mt-4 border-2">
                Start Chat
              </Button>
            </Card>

            <Card className="p-8 border-2 bg-card/50 backdrop-blur-sm hover:shadow-glow">
              <Users className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">Community Forum</h3>
              <p className="text-muted-foreground">
                Connect with peers, share tips, and learn together.
              </p>
              <Button variant="outline" className="mt-4 border-2">
                Join Forum
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 sm:py-32 bg-muted/30">
        <div className="container px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
              Frequently{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Asked Questions
              </span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Quick answers to help you get started and solve common issues.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                q: "How do I create an EduVerse account?",
                a: "Click on Sign Up, provide your details, and verify your email to get started.",
              },
              {
                q: "Is EduVerse free to use?",
                a: "Yes, EduVerse offers free access to core features. Premium plans are available for advanced tools.",
              },
              {
                q: "How can I reset my password?",
                a: "Go to the login page, click ‘Forgot Password’, and follow the instructions.",
              },
              {
                q: "Where can I report a bug?",
                a: "Use the Contact Support form or open an issue on our GitHub repository.",
              },
              {
                q: "Does EduVerse support multiple languages?",
                a: "Yes, we support 50+ languages with context-aware translation.",
              },
              {
                q: "How do I join a community event?",
                a: "Check the Events page for upcoming hackathons, workshops, and meetups.",
              },
            ].map((item, i) => (
              <Card key={i} className="p-8 border-2 bg-card/50 backdrop-blur-sm hover:shadow-glow">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{item.q}</h3>
                    <p className="text-muted-foreground">{item.a}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Guides & Resources */}
      <section className="py-20 sm:py-32">
        <div className="container px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
              Guides &{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Resources
              </span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Explore detailed documentation, tutorials, and learning resources to get the most out of EduVerse.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-8 border-2 bg-card/50 backdrop-blur-sm hover:shadow-glow">
              <BookOpen className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">Getting Started Guide</h3>
              <p className="text-muted-foreground">
                Step-by-step instructions to set up your account and explore EduVerse features.
              </p>
              <Button variant="outline" className="mt-4 border-2">
                View Guide
              </Button>
            </Card>

            <Card className="p-8 border-2 bg-card/50 backdrop-blur-sm hover:shadow-glow">
              <FileText className="h-10 w-10 text-secondary mb-4" />
              <h3 className="text-xl font-bold mb-2">Documentation</h3>
              <p className="text-muted-foreground">
                Technical docs for developers and advanced users, including API references.
              </p>
              <Button variant="outline" className="mt-4 border-2">
                Browse Docs
              </Button>
            </Card>

            <Card className="p-8 border-2 bg-card/50 backdrop-blur-sm hover:shadow-glow">
              <Users className="h-10 w-10 text-accent mb-4" />
              <h3 className="text-xl font-bold mb-2">Community Tutorials</h3>
              <p className="text-muted-foreground">
                Learn from community-created tutorials, tips, and best practices.
              </p>
              <Button variant="outline" className="mt-4 border-2">
                Explore Tutorials
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 sm:py-32 bg-muted/30">
        <div className="container px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="p-8 border-2 bg-card/50 backdrop-blur-sm hover:shadow-glow">
              <div className="flex items-center gap-3 mb-4">
                <Mail className="h-6 w-6 text-primary" />
                <h2 className="text-2xl font-bold">Contact Support</h2>
              </div>
              <p className="text-muted-foreground mb-4">
                Need direct help? Reach out to our support team via email or phone.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-secondary" />
                  <span className="text-sm">support@eduverse.ai</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-5 w-5 text-secondary" />
                  <span className="text-sm">+1 (555) 123-4567</span>
                </div>
              </div>
              <div className="pt-4">
                <Button className="bg-gradient-hero hover:opacity-90 shadow-glow">
                  Send a Message
                </Button>
              </div>
            </Card>

            <Card className="p-8 border-2 bg-card/50 backdrop-blur-sm hover:shadow-glow">
              <div className="flex items-center gap-3 mb-4">
                <Users className="h-6 w-6 text-secondary" />
                <h2 className="text-2xl font-bold">Community Support</h2>
              </div>
              <p className="text-muted-foreground mb-4">
                Join our community spaces to ask questions, share knowledge, and collaborate.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button variant="outline" className="border-2">
                  <Github className="h-4 w-4 mr-2" />
                  GitHub
                </Button>
                <Button variant="outline" className="border-2">
                  <Linkedin className="h-4 w-4 mr-2" />
                  LinkedIn
                </Button>
                <Button variant="outline" className="border-2">
                  <Twitter className="h-4 w-4 mr-2" />
                  Twitter
                </Button>
                <Button variant="outline" className="border-2">
                  <Instagram className="h-4 w-4 mr-2" />
                  Instagram
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 sm:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-transparent" />
        <div className="container relative px-4 sm:px-6">
          <Card className="max-w-4xl mx-auto p-8 sm:p-12 text-center border-2 bg-gradient-to-br from-primary/5 to-secondary/5 backdrop-blur-sm space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Still need{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                help
              </span>
              ?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our team is here to support you. Reach out anytime—we’ll respond within 24–48 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-hero hover:opacity-90 shadow-glow">
                Contact Support
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-2">
                Browse Resources
              </Button>
            </div>
            <div className="pt-2">
              <Badge className="bg-gradient-to-r from-primary to-secondary text-white border-0 shadow-glow">
                Last updated: October 16, 2025
              </Badge>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
}