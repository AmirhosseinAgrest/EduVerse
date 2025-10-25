import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  BookOpen,
  Calculator,
  Code,
  Brain,
  Award,
  ArrowRight,
  ChevronLeft,
  Users,
  Globe,
  Sparkles,
  CheckCircle,
  Play,
  FileText,
  HelpCircle,
  Star,
} from "lucide-react";
import { Link } from "react-router-dom";
import certificateSample from "@/assets/Official-Certificate.png";

export default function KnowFlowLearn() {
  const courses = [
    {
      icon: BookOpen,
      title: "English Language Mastery",
      description:
        "Develop listening, speaking, reading, and writing skills with interactive exercises, real-world dialogues, and level-based pathways.",
      link: "/learn/english",
      color: "from-blue-500 to-indigo-500",
    },
    {
      icon: Calculator,
      title: "Mathematics",
      description:
        "From foundational concepts to advanced topics. Includes problem-solving practice, mini-quizzes, and step-by-step explanations.",
      link: "/learn/math",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Code,
      title: "Python Programming",
      description:
        "Start from basics and progress to real-world projects. Learn algorithms, data structures, and AI applications with hands-on coding.",
      link: "/learn/python",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Brain,
      title: "Artificial Intelligence",
      description:
        "Understand machine learning, neural networks, and practical AI use cases. Build projects that connect theory with real-world impact.",
      link: "/knowflow/ai-educationIntro",
      color: "from-orange-500 to-red-500",
    },
  ];

  const features = [
    {
      icon: Sparkles,
      title: "Personalized Learning Paths",
      description:
        "Adaptive recommendations ensure every learner follows a path tailored to their goals and pace.",
    },
    {
      icon: Users,
      title: "Community & Collaboration",
      description:
        "Engage with peers, join study groups, and collaborate on projects to strengthen understanding.",
    },
    {
      icon: Globe,
      title: "Global Accessibility",
      description:
        "Content available in multiple languages with cultural context, making learning inclusive worldwide.",
    },
    {
      icon: Award,
      title: "Blockchain Certificates",
      description:
        "Earn verifiable, tamper-proof certificates powered by EduChain after completing courses and assessments.",
    },
  ];

  const faqs = [
    {
      question: "What is KnowFlow Learn?",
      answer:
        "KnowFlow Learn is an interactive learning hub where students and educators can access structured courses, practice exercises, and earn blockchain-based certificates.",
    },
    {
      question: "How do I receive a certificate?",
      answer:
        "After completing a course and passing the final assessment, you will automatically receive a blockchain-verified certificate stored securely on EduChain.",
    },
    {
      question: "Is the platform free to use?",
      answer:
        "Many courses are free, while advanced modules and certifications may require a subscription or one-time payment.",
    },
    {
      question: "Can I learn at my own pace?",
      answer:
        "Yes! All courses are self-paced, with optional live sessions and community discussions for those who want extra support.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Breadcrumb */}
      <div className="container px-4 sm:px-6 pt-24 pb-6">
        <Link
          to="/knowflow"
          className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <ChevronLeft className="h-4 w-4 mr-1" />
          Back to KnowFlow Overview
        </Link>
      </div>

      {/* Hero Section */}
      <section className="relative py-12 sm:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-transparent" />
        <div className="container relative px-4 sm:px-6 text-center space-y-6">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
            Start Learning with{" "}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              KnowFlow
            </span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Explore structured learning paths, practice with interactive exercises, and
            earn blockchain-verified certificates. KnowFlow Learn is your gateway to
            mastering skills with confidence and credibility.
          </p>
          <Button size="lg" className="bg-gradient-hero hover:opacity-90 shadow-glow">
            Choose Your Learning Path
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-20 sm:py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-muted/30 to-transparent" />
        <div className="container relative px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
              Learning{" "}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Pathways
              </span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Each pathway includes lessons, exercises, mini-quizzes, and real-world
              projects designed to build mastery step by step.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {courses.map((course, index) => {
              const Icon = course.icon;
              return (
                <Card
                  key={index}
                  className="p-8 text-center border-2 hover:border-purple-500/50 transition-all duration-300 hover:shadow-glow bg-card/50 backdrop-blur-sm animate-fade-in"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="flex justify-center mb-6">
                    <div
                      className={`p-4 rounded-2xl bg-gradient-to-br ${course.color} text-white shadow-glow`}
                    >
                      <Icon className="h-8 w-8" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{course.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {course.description}
                  </p>
                  <Link to={course.link}>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="w-full justify-center group-hover:bg-primary/10 transition-colors"
                    >
                      Start Learning
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 sm:py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 to-transparent" />
        <div className="container relative px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
              Why Choose{" "}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                KnowFlow Learn
              </span>
            </h2>
            <p className="text-lg text-muted-foreground mt-4">
              A platform designed to empower learners with trust, adaptability, and
              global reach.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                                <Card
                  key={index}
                  className="p-8 text-center border-2 hover:border-purple-500/50 transition-all duration-300 hover:shadow-glow bg-card/50 backdrop-blur-sm animate-fade-in"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="flex justify-center mb-6">
                    <div className="p-4 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 text-white shadow-glow">
                      <Icon className="h-8 w-8" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Certificate Section */}
      <section className="py-20 sm:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 via-pink-500/5 to-transparent" />
        <div className="container relative px-4 sm:px-6 text-center space-y-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            Earn Your{" "}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Official Certificate
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            After completing your learning path and passing the final assessments,
            you’ll receive a blockchain-verified certificate issued through EduChain.
            This certificate is tamper-proof, globally recognized, and a valuable
            addition to your academic or professional portfolio.
          </p>
          <div className="max-w-3xl mx-auto rounded-2xl overflow-hidden shadow-2xl border border-border">
            <img
              src={certificateSample}
              alt="Sample Blockchain Certificate"
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 sm:py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-muted/20 to-transparent" />
        <div className="container relative px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
              What Learners{" "}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Say
              </span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Sophia Martinez",
                role: "High School Student",
                feedback:
                  "KnowFlow Learn helped me finally understand math concepts I struggled with for years. The interactive quizzes and explanations are amazing!",
              },
              {
                name: "David Chen",
                role: "University Freshman",
                feedback:
                  "The Python programming path gave me the confidence to build my first AI project. The blockchain certificate was a huge bonus for my resume.",
              },
              {
                name: "Sarah Johnson",
                role: "Educator",
                feedback:
                  "As a teacher, I love how KnowFlow Learn ensures content credibility and provides tools to engage my students in critical thinking.",
              },
            ].map((t, i) => (
              <Card
                key={i}
                className="p-8 border-2 bg-card/50 backdrop-blur-sm hover:shadow-glow transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${i * 200}ms` }}
              >
                <div className="flex justify-center mb-4">
                  <Star className="h-6 w-6 text-yellow-500" />
                </div>
                <blockquote className="text-lg leading-relaxed mb-4">
                  “{t.feedback}”
                </blockquote>
                <div className="font-semibold">{t.name}</div>
                <div className="text-sm text-muted-foreground">{t.role}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 sm:py-32 bg-muted/20 relative">
        <div className="container px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
              Frequently Asked{" "}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Questions
              </span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {faqs.map((faq, index) => (
              <Card
                key={index}
                className="p-6 border-2 bg-card/50 backdrop-blur-sm hover:shadow-glow transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <HelpCircle className="h-6 w-6 text-purple-600" />
                  <h3 className="text-xl font-semibold">{faq.question}</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 sm:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-transparent" />
        <div className="container relative px-4 sm:px-6">
          <Card className="max-w-4xl mx-auto p-8 sm:p-12 text-center border-2 bg-gradient-to-br from-purple-500/5 to-pink-500/5 backdrop-blur-sm space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Ready to Begin Your Learning Journey?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join thousands of learners worldwide who are building skills,
              earning blockchain certificates, and shaping the future of
              education with KnowFlow Learn.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-hero hover:opacity-90 shadow-glow"
              >
                Start Learning Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-2">
                Contact Support
              </Button>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
}