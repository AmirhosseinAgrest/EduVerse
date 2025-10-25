import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Users,
  Globe,
  HeartHandshake,
  Sparkles,
  Code,
  BookOpen,
  Award,
  Calendar,
  MessageSquare,
  ArrowRight,
  ChevronLeft,
  Github,
  Linkedin,
  Twitter,
  Instagram,
  Play,
  CheckCircle,
  HelpCircle,
  Star,
  Mail,
  ExternalLink,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Community() {
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
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--primary)/0.1),transparent_50%)]" />
        <div className="container relative px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary">
              <Users className="h-4 w-4" />
              EduVerse Community
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
              Connect, Collaborate,{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Create Together
              </span>
            </h1>

            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              A global community of learners, educators, and builders advancing education
              through open collaboration, inclusive culture, and AI-powered innovation.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
              <Button size="lg" className="bg-gradient-hero hover:opacity-90 shadow-glow">
                Join the Community
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-2">
                Explore Events
              </Button>
            </div>

            <div className="flex flex-wrap gap-2 justify-center pt-2">
              <Badge className="bg-gradient-to-r from-primary to-secondary text-white border-0 shadow-glow">
                Inclusive • Open-source • Impact-driven
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Why Join Section */}
      <section className="py-20 sm:py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-muted/30 to-transparent" />
        <div className="container relative px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
              Why{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Join Us?
              </span>
            </h2>
            <p className="text-lg text-muted-foreground">
              More than a platform—EduVerse is a movement. Learn, build, and grow with people who care.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-8 border-2 bg-card/50 backdrop-blur-sm hover:shadow-glow transition-all">
              <HeartHandshake className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">Collaboration</h3>
              <p className="text-muted-foreground">
                Team up across time zones on real projects, research, and hackathons.
              </p>
            </Card>

            <Card className="p-8 border-2 bg-card/50 backdrop-blur-sm hover:shadow-glow transition-all">
              <Globe className="h-10 w-10 text-secondary mb-4" />
              <h3 className="text-xl font-bold mb-2">Global Reach</h3>
              <p className="text-muted-foreground">
                Connect with contributors from 50+ countries, across languages and contexts.
              </p>
            </Card>

            <Card className="p-8 border-2 bg-card/50 backdrop-blur-sm hover:shadow-glow transition-all">
              <Sparkles className="h-10 w-10 text-accent mb-4" />
              <h3 className="text-xl font-bold mb-2">Innovation</h3>
              <p className="text-muted-foreground">
                Co-create AI-powered tools that make learning fair, transparent, and accessible.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Community Features */}
      <section className="py-20 sm:py-32">
        <div className="container px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
              Community{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Features
              </span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Spaces and tools that help you learn better and build faster—together.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-8 border-2 bg-card/50 backdrop-blur-sm hover:shadow-glow">
              <MessageSquare className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">Discussion Forums</h3>
              <p className="text-muted-foreground">
                Ask questions, share insights, and get feedback from peers and mentors.
              </p>
            </Card>

            <Card className="p-8 border-2 bg-card/50 backdrop-blur-sm hover:shadow-glow">
              <Code className="h-10 w-10 text-secondary mb-4" />
              <h3 className="text-xl font-bold mb-2">Open Source</h3>
              <p className="text-muted-foreground">
                Contribute code, documentation, and design. Every skill adds value.
              </p>
            </Card>

            <Card className="p-8 border-2 bg-card/50 backdrop-blur-sm hover:shadow-glow">
              <BookOpen className="h-10 w-10 text-accent mb-4" />
              <h3 className="text-xl font-bold mb-2">Learning Circles</h3>
              <p className="text-muted-foreground">
                Join study groups, workshops, and weekly sprints focused on mastery.
              </p>
            </Card>

            <Card className="p-8 border-2 bg-card/50 backdrop-blur-sm hover:shadow-glow">
              <Award className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">Mentorship</h3>
              <p className="text-muted-foreground">
                Get guidance from experienced contributors—technical and personal.
              </p>
            </Card>

            <Card className="p-8 border-2 bg-card/50 backdrop-blur-sm hover:shadow-glow">
              <Calendar className="h-10 w-10 text-secondary mb-4" />
              <h3 className="text-xl font-bold mb-2">Events & Hackathons</h3>
              <p className="text-muted-foreground">
                Build fast, learn deeply, and ship polished demos for real audiences.
              </p>
            </Card>

            <Card className="p-8 border-2 bg-card/50 backdrop-blur-sm hover:shadow-glow">
              <Star className="h-10 w-10 text-accent mb-4" />
              <h3 className="text-xl font-bold mb-2">Recognition</h3>
              <p className="text-muted-foreground">
                Earn badges and shout-outs for contributions that move the mission forward.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Events & Hackathons */}
      <section className="py-20 sm:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-secondary/5 to-transparent" />
        <div className="container relative px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Events &{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Hackathons
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From local meetups to global challenges—there’s always a space to learn and ship.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-8 border-2 bg-card/50 backdrop-blur-sm hover:shadow-glow animate-fade-in">
              <div className="flex items-center gap-3 mb-4">
                <Calendar className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-bold">Monthly Community Sprints</h3>
              </div>
              <p className="text-muted-foreground">
                Focused two-week cycles where teams prototype features and share learnings.
              </p>
              <div className="pt-4">
                <Button variant="outline" className="border-2">
                  View Schedule
                </Button>
              </div>
            </Card>

            <Card className="p-8 border-2 bg-card/50 backdrop-blur-sm hover:shadow-glow animate-fade-in" style={{ animationDelay: "120ms" }}>
              <div className="flex items-center gap-3 mb-4">
                <Award className="h-6 w-6 text-secondary" />
                <h3 className="text-xl font-bold">Hackathon Showcases</h3>
              </div>
              <p className="text-muted-foreground">
                Ship polished demos with storytelling, accessibility, and privacy best practices.
              </p>
              <div className="pt-4">
                <Button variant="outline" className="border-2">
                  Submit Your Project
                </Button>
              </div>
            </Card>

            <Card className="p-8 border-2 bg-card/50 backdrop-blur-sm hover:shadow-glow animate-fade-in" style={{ animationDelay: "240ms" }}>
              <div className="flex items-center gap-3 mb-4">
                <Users className="h-6 w-6 text-accent" />
                <h3 className="text-xl font-bold">Mentor Sessions</h3>
              </div>
              <p className="text-muted-foreground">
                Weekly AMAs and design/code reviews to level up your craft.
              </p>
              <div className="pt-4">
                <Button variant="outline" className="border-2">
                  Book a Session
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Member Stories */}
      <section className="py-20 sm:py-32">
        <div className="container px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
              Member{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Stories
              </span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Real voices. Real impact. A community that empowers growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { initials: "AH", name: "Amir Hossein", role: "Project Lead", quote: "We build with empathy, ship with excellence, and keep learning accessible." },
              { initials: "ES", name: "Elizabeth", role: "UI/UX", quote: "Design isn’t decoration—it’s clarity, inclusion, and trust in every interaction." },
              { initials: "AS", name: "Ahmadreza", role: "Mobile Design", quote: "Good design disappears. Great design empowers—anywhere, any device." },
              { initials: "ML", name: "Mahan", role: "AI Media", quote: "Stories carry missions. EduVerse turns vision into momentum." },
              { initials: "HN", name: "Hossein", role: "Design Assistant", quote: "Details create confidence. Confidence invites more learners." },
              { initials: "SM", name: "Sara", role: "Educator", quote: "I feel supported here—technically and personally. That’s rare." },
            ].map((m, i) => (
              <Card key={i} className="p-8 border-2 bg-card/50 backdrop-blur-sm hover:shadow-glow animate-fade-in" style={{ animationDelay: `${i * 100}ms` }}>
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white text-2xl font-bold shadow-glow">
                    {m.initials}
                  </div>
                  <blockquote className="text-lg font-medium leading-relaxed">“{m.quote}”</blockquote>
                  <div className="space-y-1">
                    <div className="font-semibold">{m.name}</div>
                    <div className="text-sm text-muted-foreground">{m.role}</div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Global Impact */}
      <section className="py-20 sm:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-secondary/5 to-transparent" />
        <div className="container relative px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Global{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Impact
              </span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-3 gap-8 mb-16">
            {[
              { value: "50+", label: "Countries represented" },
              { value: "12K+", label: "Community interactions" },
              { value: "98%", label: "Positive feedback" },
            ].map((s, i) => (
              <div key={i} className="text-center space-y-2 animate-fade-in" style={{ animationDelay: `${i * 120}ms` }}>
                <div className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  {s.value}
                </div>
                <div className="text-muted-foreground font-medium">{s.label}</div>
              </div>
            ))}
          </div>

          <Card className="max-w-3xl mx-auto p-8 sm:p-12 border-2 bg-gradient-to-br from-primary/5 to-secondary/5 backdrop-blur-sm animate-fade-in">
            <div className="flex flex-col items-center text-center space-y-6">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white text-2xl font-bold shadow-glow">
                C
              </div>
              <blockquote className="text-xl sm:text-2xl font-medium leading-relaxed">
                “Community is the multiplier. It turns ideas into systems and momentum into impact.”
              </blockquote>
              <div className="space-y-1">
                <div className="font-semibold">Community Contributor</div>
                <div className="text-sm text-muted-foreground">Global</div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Contribution Guide */}
      <section className="py-20 sm:py-32">
        <div className="container px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
              Contribution{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Guide
              </span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Clear paths for any skill level—code, content, design, mentorship, and more.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-8 border-2 bg-card/50 backdrop-blur-sm hover:shadow-glow">
              <Code className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">Code Contributions</h3>
              <p className="text-muted-foreground">
                Pick an issue, open a PR, and follow our linting, accessibility, and testing standards.
              </p>
              <div className="pt-4 flex gap-3">
                <Button variant="outline" className="border-2">
                  <Github className="mr-2 h-4 w-4" />
                  View Repos
                </Button>
                <Button variant="outline" className="border-2">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Contribution Docs
                </Button>
              </div>
            </Card>

            <Card className="p-8 border-2 bg-card/50 backdrop-blur-sm hover:shadow-glow">
              <BookOpen className="h-10 w-10 text-secondary mb-4" />
              <h3 className="text-xl font-bold mb-2">Content & Docs</h3>
              <p className="text-muted-foreground">
                Improve guides, translate pages, and ensure clarity for new learners.
              </p>
              <div className="pt-4 flex gap-3">
                <Button variant="outline" className="border-2">
                  Start Writing
                </Button>
                <Button variant="outline" className="border-2">
                  Help Translate
                </Button>
              </div>
            </Card>

            <Card className="p-8 border-2 bg-card/50 backdrop-blur-sm hover:shadow-glow">
              <Sparkles className="h-10 w-10 text-accent mb-4" />
              <h3 className="text-xl font-bold mb-2">Design & UX</h3>
              <p className="text-muted-foreground">
                Propose components, improve flows, and polish micro-interactions for delight.
              </p>
              <div className="pt-4 flex gap-3">
                <Button variant="outline" className="border-2">
                  Share Figma
                </Button>
                <Button variant="outline" className="border-2">
                  Submit Concepts
                </Button>
              </div>
            </Card>

            <Card className="p-8 border-2 bg-card/50 backdrop-blur-sm hover:shadow-glow">
              <HeartHandshake className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">Mentorship</h3>
              <p className="text-muted-foreground">
                Host office hours, review PRs, and support newcomers with empathy and rigor.
              </p>
              <div className="pt-4 flex gap-3">
                <Button variant="outline" className="border-2">
                  Become a Mentor
                </Button>
                <Button variant="outline" className="border-2">
                  Request Guidance
                </Button>
              </div>
            </Card>

            <Card className="p-8 border-2 bg-card/50 backdrop-blur-sm hover:shadow-glow">
              <Calendar className="h-10 w-10 text-secondary mb-4" />
              <h3 className="text-xl font-bold mb-2">Events & Ops</h3>
              <p className="text-muted-foreground">
                Organize meetups, run sprints, and keep the community flow smooth.
              </p>
              <div className="pt-4 flex gap-3">
                <Button variant="outline" className="border-2">
                  Host an Event
                </Button>
                <Button variant="outline" className="border-2">
                  Volunteer
                </Button>
              </div>
            </Card>

            <Card className="p-8 border-2 bg-card/50 backdrop-blur-sm hover:shadow-glow">
              <Star className="h-10 w-10 text-accent mb-4" />
              <h3 className="text-xl font-bold mb-2">Recognition & Badges</h3>
              <p className="text-muted-foreground">
                Earn contribution badges and highlight your impact on public profiles.
              </p>
              <div className="pt-4 flex gap-3">
                <Button variant="outline" className="border-2">
                  View Badges
                </Button>
                <Button variant="outline" className="border-2">
                  Nominate Someone
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 sm:py-32 bg-muted/30">
        <div className="container px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
              Frequently{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Asked Questions
              </span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Clear answers for newcomers and experienced contributors alike.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                q: "Do I need prior experience to join?",
                a: "No. We welcome all levels—curiosity and kindness are the only requirements.",
              },
              {
                q: "How do I find a project to contribute?",
                a: "Browse open issues, join sprints, or propose your own ideas in the forum.",
              },
              {
                q: "Is this community moderated?",
                a: "Yes. We maintain psychological safety and uphold a clear code of conduct.",
              },
              {
                q: "Can I use EduVerse modules in my school?",
                a: "Yes. Our tools are built for real classrooms and learning environments.",
              },
              {
                q: "How do I get mentorship?",
                a: "Request a mentor in the portal or attend weekly mentor office hours.",
              },
              {
                q: "Where can I ask for help?",
                a: "Post in the forums, join live sessions, or contact support anytime.",
              },
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

      {/* Social & Contact */}
      <section className="py-20 sm:py-32">
        <div className="container px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
              Stay{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Connected
              </span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Follow updates, share your wins, and invite friends to build with us.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="#"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border hover:border-primary hover:bg-primary/10 transition-all duration-200"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
              GitHub
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border hover:border-primary hover:bg-primary/10 transition-all duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
              LinkedIn
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border hover:border-primary hover:bg-primary/10 transition-all duration-200"
              aria-label="Twitter"
            >
              <Twitter className="h-5 w-5" />
              Twitter
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border hover:border-primary hover:bg-primary/10 transition-all duration-200"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" />
              Instagram
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border hover:border-primary hover:bg-primary/10 transition-all duration-200"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
              Contact
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 sm:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-transparent" />
        <div className="container relative px-4 sm:px-6">
          <Card className="max-w-4xl mx-auto p-8 sm:p-12 text-center border-2 bg-gradient-to-br from-primary/5 to-secondary/5 backdrop-blur-sm space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Ready to Build{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Together
              </span>
              ?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join a community that values excellence, empathy, and real-world impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-hero hover:opacity-90 shadow-glow">
                Join the Community
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-2">
                Browse Opportunities
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