import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  BookOpen,
  FileText,
  Code,
  Layers,
  Terminal,
  Server,
  Database,
  Cpu,
  ArrowRight,
  ChevronLeft,
  HelpCircle,
  CheckCircle,
  ExternalLink,
  Github,
  Globe,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Documentation() {
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
              <BookOpen className="h-4 w-4" />
              EduVerse Documentation
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
              Learn, Build,{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Master EduVerse
              </span>
            </h1>

            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Comprehensive guides, API references, and tutorials to help you get started and go deep with EduVerse.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
              <Button size="lg" className="bg-gradient-hero hover:opacity-90 shadow-glow">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-2">
                Browse API Reference
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Start */}
      <section className="py-20 sm:py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-muted/30 to-transparent" />
        <div className="container relative px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Quick{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Start
              </span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Get up and running with EduVerse in just a few steps.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Terminal,
                title: "Install",
                desc: "Install EduVerse CLI and core packages with npm or yarn.",
              },
              {
                icon: Layers,
                title: "Configure",
                desc: "Set up authentication, environment variables, and modules.",
              },
              {
                icon: Code,
                title: "Build",
                desc: "Start building your first EduVerse project with templates.",
              },
            ].map((step, i) => {
              const Icon = step.icon;
              return (
                <Card key={i} className="p-8 border-2 bg-card/50 backdrop-blur-sm hover:shadow-glow">
                  <Icon className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.desc}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Core Guides */}
      <section className="py-20 sm:py-32 bg-muted/30">
        <div className="container px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Core{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Guides
              </span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Step-by-step guides to help you master EduVerse modules and workflows.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: FileText, title: "Authentication", desc: "Learn how to set up secure login and user management." },
              { icon: Server, title: "Deployment", desc: "Deploy EduVerse apps to cloud providers with best practices." },
              { icon: Database, title: "Data Models", desc: "Design and manage scalable data structures." },
              { icon: Cpu, title: "AI Modules", desc: "Integrate AI-powered features into your learning tools." },
              { icon: Layers, title: "UI Components", desc: "Use and customize EduVerse’s design system." },
              { icon: Globe, title: "Internationalization", desc: "Build multilingual apps with context-aware translations." },
            ].map((g, i) => {
              const Icon = g.icon;
              return (
                <Card key={i} className="p-8 border-2 bg-card/50 backdrop-blur-sm hover:shadow-glow">
                  <Icon className="h-10 w-10 text-secondary mb-4" />
                  <h3 className="text-xl font-bold mb-2">{g.title}</h3>
                  <p className="text-muted-foreground">{g.desc}</p>
                  <Button variant="outline" className="mt-4 border-2">
                    Read Guide
                  </Button>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* API Reference */}
      <section className="py-20 sm:py-32">
        <div className="container px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              API{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Reference
              </span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Detailed API documentation with examples and code snippets.
            </p>
          </div>

          <Card className="p-8 border-2 bg-card/50 backdrop-blur-sm hover:shadow-glow">
            <pre className="bg-muted p-4 rounded-lg text-sm overflow-x-auto">
{`// Example: Fetching verified content
import { EduVerseClient } from "eduverse";

const client = new EduVerseClient({ apiKey: "YOUR_API_KEY" });

async function verifyContent(url: string) {
  const result = await client.verify({ source: url });
  console.log(result);
}`}
            </pre>
            <div className="pt-4">
              <Button variant="outline" className="border-2">
                View Full API Docs
              </Button>
            </div>
          </Card>
        </div>
      </section>

            {/* Tutorials & Examples */}
      <section className="py-20 sm:py-32 bg-muted/30">
        <div className="container px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Tutorials &{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Examples
              </span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Practical walkthroughs and sample projects to accelerate your learning.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Build Your First EduVerse App",
                desc: "A step-by-step tutorial to create a simple learning module.",
              },
              {
                title: "Integrating AI Verification",
                desc: "Learn how to add TruthSnap verification into your project.",
              },
              {
                title: "Deploy to the Cloud",
                desc: "Best practices for deploying EduVerse apps to AWS or Vercel.",
              },
              {
                title: "Customizing UI Components",
                desc: "How to theme and extend EduVerse’s design system.",
              },
              {
                title: "Working with APIs",
                desc: "Fetch, validate, and display data using EduVerse APIs.",
              },
              {
                title: "Internationalization",
                desc: "Add multilingual support with context-aware translations.",
              },
            ].map((t, i) => (
              <Card
                key={i}
                className="p-8 border-2 bg-card/50 backdrop-blur-sm hover:shadow-glow"
              >
                <h3 className="text-xl font-bold mb-2">{t.title}</h3>
                <p className="text-muted-foreground">{t.desc}</p>
                <Button variant="outline" className="mt-4 border-2">
                  View Tutorial
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 sm:py-32">
        <div className="container px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Documentation{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                FAQ
              </span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Common questions about using EduVerse docs and APIs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                q: "Where do I start?",
                a: "Begin with the Quick Start guide to install and configure EduVerse.",
              },
              {
                q: "Is there an API key required?",
                a: "Yes. Sign up for an account to generate your API key.",
              },
              {
                q: "Can I contribute to the docs?",
                a: "Absolutely. Our docs are open-source—submit PRs on GitHub.",
              },
              {
                q: "Do you support multiple frameworks?",
                a: "Yes. We provide examples for React, Node.js, and more.",
              },
              {
                q: "How often are docs updated?",
                a: "We update continuously with each release. See changelogs for details.",
              },
              {
                q: "Where can I ask for help?",
                a: "Join our community forum or contact support directly.",
              },
            ].map((item, i) => (
              <Card
                key={i}
                className="p-8 border-2 bg-card/50 backdrop-blur-sm hover:shadow-glow"
              >
                <div className="flex items-start gap-3">
                  <HelpCircle className="h-6 w-6 text-primary mt-1" />
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

      {/* Final CTA */}
      <section className="py-20 sm:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-transparent" />
        <div className="container relative px-4 sm:px-6">
          <Card className="max-w-4xl mx-auto p-8 sm:p-12 text-center border-2 bg-gradient-to-br from-primary/5 to-secondary/5 backdrop-blur-sm space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Ready to{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                explore EduVerse
              </span>
              ?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Dive into the full documentation, contribute improvements, or connect with our community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-hero hover:opacity-90 shadow-glow">
                Browse Docs
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-2">
                Contribute on GitHub
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