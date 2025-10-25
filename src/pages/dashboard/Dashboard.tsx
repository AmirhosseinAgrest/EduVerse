import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";;
import {
  ChevronLeft,
  LayoutDashboard,
  ArrowRight,
  Brain,
  Newspaper,
  Network,
  Users,
  Shield,
  BookOpen,
  Globe,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Dashboard() {
  const modules = [
    {
      name: "TruthSnap",
      description: "Analyze and verify news claims with AI-powered fact-checking.",
      icon: Newspaper,
      link: "/dashboard/truthsnap",
    },
    {
      name: "NeuroSnap",
      description: "Cognitive insights and brain-inspired learning analytics.",
      icon: Brain,
      link: "/dashboard/neurosnap",
    },
    {
      name: "MindMap AI",
      description: "Generate and organize knowledge visually with AI mind maps.",
      icon: Network,
      link: "/dashboard/mindmap-ai",
    },
    {
      name: "EduChain",
      description: "Blockchain-powered credential verification and learning records.",
      icon: Shield,
      link: "/dashboard/educhain",
    },
    {
      name: "GlobalLearn",
      description: "Multilingual content analysis and translation verification.",
      icon: Globe,
      link: "/dashboard/globallearn",
    },
    {
      name: "ClassAssist",
      description: "Smart tools for teachers to create and validate classroom content.",
      icon: BookOpen,
      link: "/dashboard/classassist",
    },
    {
      name: "CollabVerse",
      description: "Collaborative learning and team-based project dashboards.",
      icon: Users,
      link: "/dashboard/collabverse",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

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
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-green-500/10 to-transparent" />
        <div className="container relative z-10 text-center max-w-4xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-sm font-medium text-blue-600">
            <LayoutDashboard className="h-4 w-4" />
            EduVerse Dashboard
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
            Your Central{" "}
            <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              Dashboard
            </span>
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Manage and explore all 7 EduVerse modules from one place.
            Access your personalized dashboards, review your saved data, and track your learning journey.
          </p>
        </div>
      </section>

      {/* Modules Grid */}
      <section className="py-20 sm:py-32 relative">
        <div className="container relative px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
              Explore{" "}
              <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                Modules
              </span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Each module has its own dedicated dashboard where you can view results, filter data, and manage your insights.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {modules.map((mod, index) => {
              const Icon = mod.icon;
              return (
                <Link to={mod.link} key={index}>
                  <Card className="group p-8 border-2 hover:border-blue-500/50 transition-all duration-300 hover:shadow-glow bg-card/50 backdrop-blur-sm animate-fade-in">
                    <div className="flex justify-center mb-6">
                      <div className="p-4 rounded-2xl bg-gradient-to-br from-blue-500 to-green-500 text-white shadow-glow group-hover:scale-110 transition-transform">
                        <Icon className="h-8 w-8" />
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-center group-hover:text-blue-600 transition-colors">
                      {mod.name}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-center">
                      {mod.description}
                    </p>
                    <div className="flex justify-center mt-6">
                      <Button size="sm" variant="outline" className="border-2">
                        Open Dashboard
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 sm:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-green-500/10 to-transparent" />
        <div className="container relative px-4 sm:px-6">
          <Card className="max-w-4xl mx-auto p-8 sm:p-12 text-center border-2 bg-gradient-to-br from-blue-500/5 to-green-500/5 backdrop-blur-sm space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Ready to Explore Your Data?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Dive into each module’s dashboard to see your results, filter insights, export reports, and manage your learning journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/dashboard/truthscan">
                <Button size="lg" className="bg-gradient-hero hover:opacity-90 shadow-glow">
                  Go to TruthScan Dashboard
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/team">
                <Button size="lg" variant="outline" className="border-2">
                  Meet the Team
                </Button>
              </Link>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
}