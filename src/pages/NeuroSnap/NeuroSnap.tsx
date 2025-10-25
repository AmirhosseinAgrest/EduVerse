import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { VideoDemo } from "@/components/ui/video-demo";
import demoImage from "@/assets/hero-education.jpg";
import {
  Brain,
  Heart,
  Shield,
  TrendingUp,
  Users,
  Sparkles,
  ArrowRight,
  ChevronLeft,
  Play,
  School,
  Video,
  MessageCircle,
} from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-education.jpg";

const features = [
  {
    icon: Heart,
    name: "Real-time Emotion Tracking",
    description: "Monitor student emotions during learning to provide timely support and intervention",
  },
  {
    icon: Brain,
    name: "Cognitive Load Analysis",
    description: "Identify when students are overwhelmed and adjust content difficulty accordingly",
  },
  {
    icon: Shield,
    name: "Privacy-First Design",
    description: "All data is encrypted and anonymized, giving students full control over their information",
  },
  {
    icon: TrendingUp,
    name: "Personalized Insights",
    description: "AI-generated recommendations for each student's unique learning journey",
  },
  {
    icon: Sparkles,
    name: "Pattern Recognition",
    description: "Detect learning patterns and predict potential challenges before they arise",
  },
];

const useCases = [
  {
    icon: School,
    title: "Classroom Learning",
    description: "Teachers receive real-time feedback on class engagement and can adjust their teaching methods dynamically",
  },
  {
    icon: Video,
    title: "Remote Learning",
    description: "Bridge the emotional gap in online education with AI-powered presence detection and engagement metrics",
  },
  {
    icon: MessageCircle,
    title: "Student Counseling",
    description: "Counselors get comprehensive emotional trends to provide better mental health support",
  },
];

export default function NeuroSnap() {
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

      {/* Module Hero Section */}
      <section className="relative py-12 sm:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-blue-500/10 to-transparent" />
        
        <div className="container relative px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-sm font-medium text-purple-600 dark:text-purple-400">
                <Brain className="h-4 w-4" />
                Mental Health & Cognition
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
                NeuroSnap: Understand Minds,{" "}
                <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  Empower Learning
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                AI-powered insights into student emotions and cognition, helping educators personalize learning and support mental health.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/neurosnap/selfInsight">
                <Button size="lg" className="bg-gradient-hero hover:opacity-90 shadow-glow">
                  Try NeuroSnap
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                </Link>
                <Button size="lg" variant="outline" className="border-2">
                  <Play className="mr-2 h-5 w-5" />
                  Watch Demo
                </Button>
              </div>
            </div>
            
            <div className="relative animate-fade-in" style={{ animationDelay: "200ms" }}>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border">
                <img
                  src={heroImage}
                  alt="NeuroSnap AI Interface"
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
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Features
              </span>
            </h2>
            <p className="text-lg text-muted-foreground">
              NeuroSnap combines cutting-edge AI with ethical design to support student wellbeing
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card
                  key={index}
                  className="group p-6 sm:p-8 border-2 hover:border-purple-500/50 transition-all duration-300 hover:shadow-glow bg-card/50 backdrop-blur-sm animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="mb-4">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500 to-blue-500 text-white shadow-glow w-fit transition-transform group-hover:scale-110 duration-300">
                      <Icon className="h-6 w-6" />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
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
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Applications
              </span>
            </h2>
            <p className="text-lg text-muted-foreground">
              See how NeuroSnap transforms learning experiences across different environments
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => {
              const Icon = useCase.icon;
              return (
                <Card
                  key={index}
                  className="p-8 text-center border-2 hover:border-blue-500/50 transition-all duration-300 hover:shadow-glow bg-card/50 backdrop-blur-sm animate-fade-in"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="flex justify-center mb-6">
                    <div className="p-4 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-500 text-white shadow-glow">
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
        <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 via-blue-500/5 to-transparent" />
        
        <div className="container relative px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Global{" "}
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Impact
              </span>
            </h2>
          </div>

          {/* Stats */}
          <div className="grid sm:grid-cols-3 gap-8 mb-16">
            <div className="text-center space-y-2 animate-fade-in">
              <div className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                150K+
              </div>
              <div className="text-muted-foreground font-medium">Students Supported</div>
            </div>
            
            <div className="text-center space-y-2 animate-fade-in" style={{ animationDelay: "100ms" }}>
              <div className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                2,400+
              </div>
              <div className="text-muted-foreground font-medium">Schools Using NeuroSnap</div>
            </div>
            
            <div className="text-center space-y-2 animate-fade-in" style={{ animationDelay: "200ms" }}>
              <div className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                94%
              </div>
              <div className="text-muted-foreground font-medium">Educator Satisfaction</div>
            </div>
          </div>

          {/* Testimonial */}
          <Card className="max-w-3xl mx-auto p-8 sm:p-12 border-2 bg-gradient-to-br from-purple-500/5 to-blue-500/5 backdrop-blur-sm animate-fade-in">
            <div className="flex flex-col items-center text-center space-y-6">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center text-white text-2xl font-bold shadow-glow">
                M
              </div>
              
              <blockquote className="text-xl sm:text-2xl font-medium leading-relaxed">
                "NeuroSnap helped me understand my students beyond grades. I can now provide support when they need it most."
              </blockquote>
              
              <div className="space-y-1">
                <div className="font-semibold">Maria Silva</div>
                <div className="text-sm text-muted-foreground">High School Educator, São Paulo, Brazil</div>
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
          See NeuroSnap{" "}
          <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            in Action
          </span>
        </h2>
        <p className="text-lg text-muted-foreground">
          Watch how NeuroSnap transforms the learning experience for students and educators
        </p>
      </div>

      {/* ویدیو با تصویر اختصاصی */}
      <div className="relative aspect-video rounded-lg overflow-hidden">
        <img
          src={demoImage}
          alt="NeuroSnap Demo"
          className="absolute inset-0 w-full h-full object-cover opacity-40 z-0"
        />
        <div className="relative z-10">
          <VideoDemo
            youtubeId="dQw4w9WgXcQ"
            title="NeuroSnap Demo"
            description="See how NeuroSnap transforms learning"
            className="bg-transparent"
          />
        </div>
      </div>

      {/* دکمه CTA */}
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
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-blue-500/10 to-transparent" />
        
        <div className="container relative px-4 sm:px-6">
          <Card className="max-w-4xl mx-auto p-8 sm:p-12 text-center border-2 bg-gradient-to-br from-purple-500/5 to-blue-500/5 backdrop-blur-sm space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Ready to Transform Your Classroom?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join thousands of educators using NeuroSnap to create more empathetic, effective learning environments.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-hero hover:opacity-90 shadow-glow">
                Request Access
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