import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import {
    BookOpen,
    Brain,
    Code,
    Languages,
    Calculator,
    ArrowRight,
    ChevronLeft,
    Play,
    Users,
    Award,
    Globe,
    Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-education.jpg";

const features = [
    {
        icon: Languages,
        name: "Language Learning",
        description: "Interactive lessons and practice tools for mastering English and other global languages.",
    },
    {
        icon: Calculator,
        name: "Mathematics Mastery",
        description: "Step-by-step explanations, problem-solving practice, and adaptive quizzes.",
    },
    {
        icon: Code,
        name: "Programming Skills",
        description: "Learn Python, JavaScript, and AI fundamentals with hands-on coding challenges.",
    },
    {
        icon: Brain,
        name: "AI-Powered Personalization",
        description: "Adaptive learning paths tailored to your strengths, pace, and goals.",
    },
    {
        icon: Award,
        name: "Certification & Progress Tracking",
        description: "Track your growth and earn blockchain-verified certificates via EduChain.",
    },
];

const useCases = [
    {
        icon: BookOpen,
        title: "Self-Paced Learning",
        description: "Students can explore structured courses at their own pace with instant feedback.",
    },
    {
        icon: Users,
        title: "Classroom Integration",
        description: "Teachers can assign modules, track progress, and integrate with ExamChain.",
    },
    {
        icon: Globe,
        title: "Global Access",
        description: "Learners from underserved communities can access free resources via EduBridge.",
    },
    {
        icon: Sparkles,
        title: "Skill Development",
        description: "From language fluency to coding, build practical skills for the future.",
    },
];

export default function KnowFlow() {
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
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-transparent" />
                <div className="container relative px-4 sm:px-6">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6 animate-fade-in">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-sm font-medium text-purple-600 dark:text-purple-400">
                                <Brain className="h-4 w-4" />
                                Adaptive Learning
                            </div>
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
                                KnowFlow:{" "}
                                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                                    Learning That Flows With You
                                </span>
                            </h1>
                            <p className="text-xl text-muted-foreground leading-relaxed">
                                A next-generation learning hub for languages, math, coding, and AI.
                                Personalized, interactive, and globally accessible.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link to="/knowflow/know-flow-learn">
                                    <Button size="lg" className="bg-gradient-hero hover:opacity-90 shadow-glow">
                                        Start Learning
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
                                <img src={heroImage} alt="KnowFlow Learning Interface" className="w-full h-auto" />
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
                            Core{" "}
                            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                                Features
                            </span>
                        </h2>
                        <p className="text-lg text-muted-foreground">
                            KnowFlow combines adaptive AI with structured learning to empower every learner.
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
                                        <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 text-white shadow-glow w-fit transition-transform group-hover:scale-110 duration-300">
                                            <Icon className="h-6 w-6" />
                                        </div>
                                    </div>
                                    <h3 className="text-xl font-bold mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                                        {feature.name}
                                    </h3>
                                    <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                                </Card>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Use Cases Section */}
            <section className="py-20 sm:py-32">
                <div className="container px-4 sm:px-6">
                    {/* Section Header */}
                    <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
                            Real-World{" "}
                            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                                Applications
                            </span>
                        </h2>
                        <p className="text-lg text-muted-foreground">
                            See how KnowFlow transforms learning for students, teachers, and communities.
                        </p>
                    </div>

                    {/* Use Cases Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {useCases.map((useCase, index) => {
                            const Icon = useCase.icon;
                            return (
                                <Card
                                    key={index}
                                    className="p-8 text-center border-2 hover:border-pink-500/50 
                       transition-all duration-300 hover:shadow-glow 
                       bg-card/50 backdrop-blur-sm animate-fade-in"
                                    style={{ animationDelay: `${index * 150}ms` }}
                                >
                                    <div className="flex justify-center mb-6">
                                        <div className="p-4 rounded-2xl bg-gradient-to-br from-pink-500 to-purple-500 text-white shadow-glow">
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
                <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 via-pink-500/5 to-transparent" />
                <div className="container relative px-4 sm:px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
                            Global{" "}
                            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                                Impact
                            </span>
                        </h2>
                    </div>

                    {/* Stats */}
                    <div className="grid sm:grid-cols-3 gap-8 mb-16">
                        <div className="text-center space-y-2 animate-fade-in">
                            <div className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                                1M+
                            </div>
                            <div className="text-muted-foreground font-medium">Lessons Completed</div>
                        </div>
                        <div className="text-center space-y-2 animate-fade-in" style={{ animationDelay: "100ms" }}>
                            <div className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                                50K+
                            </div>
                            <div className="text-muted-foreground font-medium">Certificates Issued</div>
                        </div>
                        <div className="text-center space-y-2 animate-fade-in" style={{ animationDelay: "200ms" }}>
                            <div className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                                95%
                            </div>
                            <div className="text-muted-foreground font-medium">Learner Satisfaction</div>
                        </div>
                    </div>

                    {/* Testimonial */}
                    <Card className="max-w-3xl mx-auto p-8 sm:p-12 border-2 bg-gradient-to-br from-purple-500/5 to-pink-500/5 backdrop-blur-sm animate-fade-in">
                        <div className="flex flex-col items-center text-center space-y-6">
                            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center text-white text-2xl font-bold shadow-glow">
                                K
                            </div>
                            <blockquote className="text-xl sm:text-2xl font-medium leading-relaxed">
                                "KnowFlow made learning Python and English so intuitive — I finally feel confident in my skills."
                            </blockquote>
                            <div className="space-y-1">
                                <div className="font-semibold">Ali Rezaei</div>
                                <div className="text-sm text-muted-foreground">Student, Tehran, Iran</div>
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
                                See KnowFlow{" "}
                                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                                    in Action
                                </span>
                            </h2>
                            <p className="text-lg text-muted-foreground">
                                Watch how KnowFlow adapts to learners and delivers personalized education.
                            </p>
                        </div>

                        <Card className="p-4 border-2 bg-card/50 backdrop-blur-sm">
                            <div className="relative aspect-video rounded-lg overflow-hidden bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center group cursor-pointer hover:from-purple-500/30 hover:to-pink-500/30 transition-all">
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-20 h-20 rounded-full bg-white/90 dark:bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform shadow-glow">
                                        <Play className="h-10 w-10 text-purple-600 dark:text-purple-400 ml-1" />
                                    </div>
                                </div>
                                <img
                                    src={heroImage}
                                    alt="KnowFlow Demo"
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
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-transparent" />
                <div className="container relative px-4 sm:px-6">
                    <Card className="max-w-4xl mx-auto p-8 sm:p-12 text-center border-2 bg-gradient-to-br from-purple-500/5 to-pink-500/5 backdrop-blur-sm space-y-6">
                        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                            Ready to Start Your Learning Journey?
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Join thousands of learners worldwide using KnowFlow to master languages, math, coding, and AI.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" className="bg-gradient-hero hover:opacity-90 shadow-glow">
                                Get Started
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                            <Button size="lg" variant="outline" className="border-2">
                                Contact Us
                            </Button>
                        </div>
                    </Card>
                </div>
            </section>

            <Footer />
        </div>
    );
}