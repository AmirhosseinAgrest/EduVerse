import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Target, Palette, TrendingUp, Users, GraduationCap, BookOpen, Heart, Play, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function MindMapAI() {
  const features = [
    {
      icon: Brain,
      title: "Dynamic Curriculum Generation",
      description: "AI automatically creates personalized learning paths based on student data and goals",
    },
    {
      icon: Target,
      title: "Goal-Based Learning Paths",
      description: "Set objectives and let AI map the most effective route to achieve them",
    },
    {
      icon: Palette,
      title: "Style-Aware Content Delivery",
      description: "Adapts teaching methods to match visual, auditory, or kinesthetic preferences",
    },
    {
      icon: TrendingUp,
      title: "Progress Visualization Dashboard",
      description: "Real-time insights into learning milestones and skill development",
    },
    {
      icon: Users,
      title: "Teacher Collaboration Tools",
      description: "Enable educators to refine and share curriculum templates",
    },
  ];

  const useCases = [
    {
      icon: GraduationCap,
      title: "Individual Tutoring",
      description: "Create custom learning journeys for one-on-one sessions tailored to student needs",
    },
    {
      icon: BookOpen,
      title: "Classroom Differentiation",
      description: "Manage multiple learning paths simultaneously in mixed-ability classrooms",
    },
    {
      icon: Users,
      title: "Self-Paced Online Learning",
      description: "Empower students to learn independently with AI-guided curriculum adaptation",
    },
    {
      icon: Heart,
      title: "Special Education Support",
      description: "Accommodate diverse learning needs with flexible, adaptive pathways",
    },
  ];

  const stats = [
    { value: "250K+", label: "Personalized Paths Created" },
    { value: "1,200+", label: "Schools Using MindMap AI" },
    { value: "95%", label: "Student Engagement Increase" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden bg-gradient-to-br from-green-50 via-blue-50 to-background dark:from-green-950/20 dark:via-blue-950/20 dark:to-background">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto relative z-10">
          <Link 
            to="/#modules" 
            className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Modules
          </Link>
          
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-green-400 to-blue-500 mb-6 shadow-glow">
              <Brain className="w-10 h-10 text-white" />
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-green-600 to-blue-600 dark:from-green-400 dark:to-blue-400 bg-clip-text text-transparent">
              MindMap AI: Learning That Adapts to You
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              AI-generated curriculum tailored to every learner's journey
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-green-500 to-blue-500 hover:opacity-90 text-white shadow-lg">
                Start Mapping
              </Button>
              <Button size="lg" variant="outline">
                View Documentation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Powerful Features</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              MindMap AI combines cutting-edge technology with educational expertise to create truly personalized learning experiences
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-green-100 to-blue-100 dark:from-green-900/30 dark:to-blue-900/30 flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-green-600 dark:text-green-400" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Real-World Applications</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              See how MindMap AI transforms learning across different educational contexts
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {useCases.map((useCase, index) => (
              <Card 
                key={index} 
                className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-500 to-blue-500 flex items-center justify-center mx-auto mb-4 shadow-glow">
                    <useCase.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-lg">{useCase.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{useCase.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Global Impact</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              MindMap AI is making personalized education accessible to learners worldwide
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <Card 
                key={index} 
                className="text-center p-8 bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-950/20 dark:to-blue-950/20 border-2 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-green-600 to-blue-600 dark:from-green-400 dark:to-blue-400 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
              </Card>
            ))}
          </div>

          <Card className="max-w-3xl mx-auto bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-950/20 dark:to-blue-950/20 border-2 animate-fade-in">
            <CardContent className="p-8 sm:p-12">
              <div className="flex gap-2 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
              <blockquote className="text-xl sm:text-2xl font-medium text-foreground mb-4">
                "MindMap AI helped me teach with purpose, not just pace."
              </blockquote>
              <div className="text-muted-foreground">
                — Educator, India
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Demo Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">See MindMap AI in Action</h2>
            <p className="text-lg text-muted-foreground">
              Watch how AI generates personalized curriculum in real-time
            </p>
          </div>

          <Card className="overflow-hidden shadow-2xl animate-fade-in">
            <div className="relative aspect-video bg-gradient-to-br from-green-100 to-blue-100 dark:from-green-900/30 dark:to-blue-900/30 flex items-center justify-center">
              <div className="text-center">
                <Button
                  size="lg"
                  className="rounded-full w-20 h-20 bg-white dark:bg-gray-800 hover:scale-110 transition-transform shadow-glow"
                  variant="ghost"
                >
                  <Play className="w-8 h-8 text-green-600 dark:text-green-400 fill-current" />
                </Button>
                <p className="mt-4 text-muted-foreground font-medium">Click to watch demo</p>
              </div>
            </div>
          </Card>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Button size="lg" className="bg-gradient-to-r from-green-500 to-blue-500 hover:opacity-90 text-white">
              Watch Demo
            </Button>
            <Button size="lg" variant="outline">
              Request Access
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}