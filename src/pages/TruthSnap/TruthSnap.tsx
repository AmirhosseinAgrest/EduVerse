import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import {
  Shield,
  CheckCircle,
  AlertTriangle,
  BookOpen,
  Globe,
  Award,
  ArrowRight,
  ChevronLeft,
  Play,
  Search,
  FileText,
  Users,
  Info,
} from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-education.jpg";

const features = [
  {
    icon: CheckCircle,
    name: "Real-time Content Validation",
    description:
      "Instantly verify educational materials with AI-powered fact-checking and source analysis",
  },
  {
    icon: Award,
    name: "Source Credibility Scoring",
    description:
      "Get detailed credibility ratings for websites, articles, and academic sources",
  },
  {
    icon: AlertTriangle,
    name: "Bias Detection & Transparency Alerts",
    description:
      "Identify potential bias, misinformation, and propaganda in learning materials",
  },
  {
    icon: FileText,
    name: "Citation Recommendations",
    description:
      "Receive smart suggestions for credible sources and proper citation formats",
  },
  {
    icon: Globe,
    name: "Multilingual Content Analysis",
    description:
      "Verify accuracy across 50+ languages with context-aware translation checking",
  },
];

const useCases = [
  {
    icon: Search,
    title: "Classroom Presentations",
    description:
      "Ensure all classroom materials meet accuracy standards before sharing with students",
  },
  {
    icon: BookOpen,
    title: "Student Research Projects",
    description:
      "Help students build research skills by validating sources and detecting unreliable information",
  },
  {
    icon: Globe,
    title: "Online Course Platforms",
    description:
      "Maintain content integrity across digital learning environments with automated verification",
  },
  {
    icon: Users,
    title: "Teacher Content Creation",
    description:
      "Support educators in creating trustworthy, well-sourced learning materials",
  },
];

export default function TruthSnap() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Breadcrumb */}
      <div className="container px-4 sm:px-6 pt-24 pb-6">
        <Link
          to="/#modules"
          className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <ChevronLeft className="h-4 w-4 mr-1" />
          Back to Modules
        </Link>
      </div>

      {/* Hero Section */}
      <section className="relative py-12 sm:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-green-500/10 to-transparent" />
        <div className="container relative px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-sm font-medium text-blue-600 dark:text-blue-400">
                <Shield className="h-4 w-4" />
                Content Verification
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
                TruthSnap:{" "}
                <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                  Learn with Confidence
                </span>
              </h1>

              <p className="text-xl text-muted-foreground leading-relaxed">
                TruthSnap is your AI-powered assistant for verifying news and
                educational content. It helps you detect misinformation,
                validate sources, and build critical thinking skills.
              </p>

              {/* How to Use Section */}
              <Card className="p-6 border-2 bg-card/50 backdrop-blur-sm shadow-glow">
                <div className="flex items-center gap-2 mb-4">
                  <Info className="h-5 w-5 text-blue-600" />
                  <h3 className="text-lg font-bold">How to Use TruthSnap</h3>
                </div>
                <ol className="list-decimal list-inside text-muted-foreground space-y-2">
                  <li>Paste or type a news claim or statement you want to check.</li>
                  <li>Click on <strong>“Scan Content”</strong> to start the analysis.</li>
                  <li>
                    Wait a few seconds while the AI verifies the claim against
                    trusted sources.
                  </li>
                  <li>
                    Review the <strong>credibility score</strong> (0–100) and
                    the explanation provided.
                  </li>
                  <li>
                    Use the insights to decide whether the claim is reliable or
                    potentially misleading.
                  </li>
                </ol>
              </Card>

              <div className="flex flex-col sm:flex-row gap-4">

                <Link to="/TruthScan">
                  <Button size="lg" className="bg-gradient-hero hover:opacity-90 shadow-glow">
                    Scan Content
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>

                <Button size="lg" variant="outline" className="border-2">
                  <Play className="mr-2 h-5 w-5" />
                  Watch Demo
                </Button>
              </div>
            </div>

            <div
              className="relative animate-fade-in"
              style={{ animationDelay: "200ms" }}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border">
                <img
                  src={heroImage}
                  alt="TruthSnap AI Interface"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 sm:py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-muted/30 to-transparent" />
        <div className="container relative px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
              Powerful{" "}
              <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                Features
              </span>
            </h2>
            <p className="text-lg text-muted-foreground">
              TruthSnap combines advanced AI with media literacy principles to
              build trust in education
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card
                  key={index}
                  className="group p-6 sm:p-8 border-2 hover:border-blue-500/50 transition-all duration-300 hover:shadow-glow bg-card/50 backdrop-blur-sm animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="mb-4">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500 to-green-500 text-white shadow-glow w-fit transition-transform group-hover:scale-110 duration-300">
                      <Icon className="h-6 w-6" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {feature.name}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 sm:py-32">
        <div className="container px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
              Real-World{" "}
              <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                Applications
              </span>
            </h2>
            <p className="text-lg text-muted-foreground">
              See how TruthSnap empowers educators and students to verify content with confidence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => {
              const Icon = useCase.icon;
              return (
                <Card
                  key={index}
                  className="p-8 text-center border-2 hover:border-green-500/50 transition-all duration-300 hover:shadow-glow bg-card/50 backdrop-blur-sm animate-fade-in"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="flex justify-center mb-6">
                    <div className="p-4 rounded-2xl bg-gradient-to-br from-green-500 to-blue-500 text-white shadow-glow">
                      <Icon className="h-8 w-8" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{useCase.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {useCase.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 sm:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 via-green-500/5 to-transparent" />
        <div className="container relative px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Global{" "}
              <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                Impact
              </span>
            </h2>
          </div>

          {/* Stats */}
          <div className="grid sm:grid-cols-3 gap-8 mb-16">
            <div className="text-center space-y-2 animate-fade-in">
              <div className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                500K+
              </div>
              <div className="text-muted-foreground font-medium">Lessons Verified</div>
            </div>
            <div className="text-center space-y-2 animate-fade-in" style={{ animationDelay: "100ms" }}>
              <div className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                12K+
              </div>
              <div className="text-muted-foreground font-medium">Misinformation Cases Flagged</div>
            </div>
            <div className="text-center space-y-2 animate-fade-in" style={{ animationDelay: "200ms" }}>
              <div className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                98%
              </div>
              <div className="text-muted-foreground font-medium">Accuracy Rate</div>
            </div>
          </div>

          {/* Testimonial */}
          <Card className="max-w-3xl mx-auto p-8 sm:p-12 border-2 bg-gradient-to-br from-blue-500/5 to-green-500/5 backdrop-blur-sm animate-fade-in">
            <div className="flex flex-col items-center text-center space-y-6">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-600 to-green-600 flex items-center justify-center text-white text-2xl font-bold shadow-glow">
                S
              </div>
              <blockquote className="text-xl sm:text-2xl font-medium leading-relaxed">
                "TruthSnap gave my students the tools to question and verify — not just consume."
              </blockquote>
              <div className="space-y-1">
                <div className="font-semibold">Sarah Mitchell</div>
                <div className="text-sm text-muted-foreground">Educator, Toronto, Canada</div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Demo Section */}
      <section className="py-20 sm:py-32">
        <div className="container px-4 sm:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12 space-y-4">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
                See TruthSnap{" "}
                <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                  in Action
                </span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Watch how TruthSnap scans and scores content for accuracy and credibility
              </p>
            </div>

            <Card className="p-4 border-2 bg-card/50 backdrop-blur-sm">
              <div className="relative aspect-video rounded-lg overflow-hidden bg-gradient-to-br from-blue-500/20 to-green-500/20 flex items-center justify-center group cursor-pointer hover:from-blue-500/30 hover:to-green-500/30 transition-all">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-white/90 dark:bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform shadow-glow">
                    <Play className="h-10 w-10 text-blue-600 dark:text-blue-400 ml-1" />
                  </div>
                </div>
                <img
                  src={heroImage}
                  alt="TruthSnap Demo"
                  className="w-full h-full object-cover opacity-40"
                />
              </div>
            </Card>

            <div className="text-center mt-8">
              <Button size="lg" variant="outline" className="border-2">
                <Play className="mr-2 h-5 w-5" />
                Watch Full Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 sm:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-green-500/10 to-transparent" />
        <div className="container relative px-4 sm:px-6">
          <Card className="max-w-4xl mx-auto p-8 sm:p-12 text-center border-2 bg-gradient-to-br from-blue-500/5 to-green-500/5 backdrop-blur-sm space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Ready to Build Trust in Your Classroom?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join thousands of educators using TruthSnap to foster critical thinking and media literacy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-hero hover:opacity-90 shadow-glow">
                Submit Content for Review
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-2">
                Contact Sales
              </Button>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
}