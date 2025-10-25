import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Server,
  Key,
  FileText,
  Code,
  Database,
  Globe,
  Terminal,
  ArrowRight,
  ChevronLeft,
  HelpCircle,
  CheckCircle,
  ExternalLink,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function ApiReference() {
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
              <Server className="h-4 w-4" />
              EduVerse API Reference
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
              Build with{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                EduVerse API
              </span>
            </h1>

            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Access powerful endpoints to verify content, manage users, and integrate EduVerse features into your apps.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
              <Button size="lg" className="bg-gradient-hero hover:opacity-90 shadow-glow">
                Get API Key
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-2">
                View Quick Start
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Authentication */}
      <section className="py-20 sm:py-32 bg-muted/30">
        <div className="container px-4 sm:px-6 max-w-4xl">
          <Card className="p-8 border-2 bg-card/50 backdrop-blur-sm hover:shadow-glow">
            <div className="flex items-center gap-3 mb-4">
              <Key className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-bold">Authentication</h2>
            </div>
            <p className="text-muted-foreground mb-4">
              All requests require an API key. Include it in the header:
            </p>
            <pre className="bg-muted p-4 rounded-lg text-sm overflow-x-auto">
{`curl -H "Authorization: Bearer YOUR_API_KEY" \\
  https://api.eduverse.ai/v1/verify`}
            </pre>
          </Card>
        </div>
      </section>

      {/* Endpoints Overview */}
      <section className="py-20 sm:py-32">
        <div className="container px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              API{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Endpoints
              </span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Core endpoints to integrate EduVerse features.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: FileText, title: "Content Verification", path: "/v1/verify", desc: "Verify accuracy and credibility of content." },
              { icon: Database, title: "Sources", path: "/v1/sources", desc: "Retrieve credibility scores for sources." },
              { icon: Globe, title: "Languages", path: "/v1/languages", desc: "List supported languages and locales." },
              { icon: Code, title: "Citations", path: "/v1/citations", desc: "Get citation recommendations for content." },
              { icon: Terminal, title: "Users", path: "/v1/users", desc: "Manage user accounts and profiles." },
            ].map((ep, i) => {
              const Icon = ep.icon;
              return (
                <Card key={i} className="p-8 border-2 bg-card/50 backdrop-blur-sm hover:shadow-glow">
                  <Icon className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-2">{ep.title}</h3>
                  <p className="text-muted-foreground mb-2">{ep.desc}</p>
                  <code className="text-sm text-muted-foreground">{ep.path}</code>
                  <div className="pt-4">
                    <Button variant="outline" className="border-2">
                      View Details
                    </Button>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Example Code */}
      <section className="py-20 sm:py-32 bg-muted/30">
        <div className="container px-4 sm:px-6 max-w-4xl">
          <Card className="p-8 border-2 bg-card/50 backdrop-blur-sm hover:shadow-glow">
            <div className="flex items-center gap-3 mb-4">
              <Code className="h-6 w-6 text-secondary" />
              <h2 className="text-2xl font-bold">Example: Verify Content</h2>
            </div>
            <pre className="bg-muted p-4 rounded-lg text-sm overflow-x-auto">
{`import { EduVerseClient } from "eduverse";

const client = new EduVerseClient({ apiKey: process.env.EDUVERSE_KEY });

async function run() {
  const result = await client.verify({
    source: "https://example.com/article",
    language: "en"
  });
  console.log(result);
}

run();`}
            </pre>
          </Card>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 sm:py-32">
        <div className="container px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              API{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                FAQ
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              { q: "Is the API free?", a: "Yes, EduVerse offers a free tier with limited requests. Paid plans are available." },
              { q: "What’s the rate limit?", a: "Free tier: 100 requests/day. Paid tiers increase limits significantly." },
              { q: "Do you support GraphQL?", a: "Currently REST only. GraphQL support is planned." },
              { q: "How do I report issues?", a: "Open an issue on GitHub or contact support." },
            ].map((item, i) => (
              <Card key={i} className="p-8 border-2 bg-card/50 backdrop-blur-sm hover:shadow-glow">
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
                build with EduVerse API
              </span>
              ?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Start integrating EduVerse into your apps today. Generate your API key, explore endpoints, and join our developer community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-hero hover:opacity-90 shadow-glow">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-2">
                View on GitHub
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