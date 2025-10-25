import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Users,
  Briefcase,
  Target,
  Award,
  Sparkles,
  Rocket,
  Building,
  Globe,
  MapPin,
  HeartHandshake,
  Lightbulb,
  Shield,
  Lock,
  CheckCircle,
  ChevronLeft,
  ArrowRight,
  ArrowUpRight,
  Search,
  Filter,
  Clock,
  Calendar,
  Layers,
  Code,
  PenTool,
  Database,
  Cpu,
  Server,
  GitBranch,
  MessageSquare,
  FileText,
  BookOpen,
  GraduationCap,
  Handshake,
  Star,
  Mail,
  Phone,
  Linkedin,
  Github,
  Twitter,
  Instagram,
  Coffee,
  Coins,
  CloudSun,
  Sun,
  Moon,
  Zap,
  PieChart,
  BarChart3,
  Globe2,
  Languages,
  Accessibility,
  Recycle,
  ExternalLink,
  HelpCircle
} from "lucide-react";
import { Link } from "react-router-dom";

type Role = {
  id: string;
  title: string;
  team: string;
  level: "Intern" | "Junior" | "Mid" | "Senior" | "Lead";
  location: string;
  type: "Remote" | "Hybrid" | "On-site";
  description: string;
  responsibilities: string[];
  requirements: string[];
  niceToHave?: string[];
  salaryRange?: string;
};

const openRoles: Role[] = [
  {
    id: "se-001",
    title: "Senior Frontend Engineer",
    team: "Engineering",
    level: "Senior",
    location: "Remote (Global)",
    type: "Remote",
    salaryRange: "$130k–$170k + equity",
    description:
      "Own the web experience for EduVerse modules. Build delightful, accessible, and high-performance interfaces that scale globally.",
    responsibilities: [
      "Architect and implement modular UI components with React + TypeScript",
      "Lead accessibility-first development (WCAG 2.1 AA) across flows",
      "Optimize performance (LCP, TTI, CLS) and reliability across devices",
      "Collaborate with design and product to ship polished features fast",
      "Mentor engineers and set quality bars for DX and UX excellence",
    ],
    requirements: [
      "5+ years of experience with React, TypeScript, and modern tooling",
      "Strong understanding of accessibility, performance, and testing",
      "Experience with design systems, theming, and component architecture",
      "Proficiency in CI/CD, code reviews, and collaborative workflows",
      "Clear communication and empathy-driven problem solving",
    ],
    niceToHave: [
      "Experience with React Router, TanStack Query, and Radix UI",
      "Background in education, edtech, or mission-driven products",
      "Contributions to open-source or public design systems",
    ],
  },
  {
    id: "be-002",
    title: "Backend Engineer (Node.js)",
    team: "Engineering",
    level: "Mid",
    location: "Hillsboro, OR or Remote (US)",
    type: "Hybrid",
    salaryRange: "$110k–$140k + equity",
    description:
      "Design resilient APIs, secure data flows, and scalable infrastructure powering EduVerse’s learning modules and analytics.",
    responsibilities: [
      "Build secure, well-documented REST/GraphQL APIs in Node.js",
      "Design data models and optimize queries for performance",
      "Implement authentication, authorization, and rate-limiting",
      "Collaborate on DevOps (Docker, CI/CD, monitoring, incident response)",
      "Write maintainable code with tests, logs, and observability",
    ],
    requirements: [
      "3+ years with Node.js, databases (PostgreSQL/MongoDB), and APIs",
      "Security-minded: OWASP, token management, audit trails",
      "Experience with cloud providers (AWS/GCP/Azure) and containers",
      "Comfort with agile, documentation, and cross-team collaboration",
      "Ownership mindset and attention to reliability",
    ],
    niceToHave: [
      "Event-driven architectures, queues, and background processing",
      "Infra-as-code and cost-aware architecture",
      "Experience in edtech privacy and compliance domains",
    ],
  },
  {
    id: "pm-003",
    title: "Product Manager (Learning Experiences)",
    team: "Product",
    level: "Senior",
    location: "Remote (Global)",
    type: "Remote",
    salaryRange: "$120k–$160k + equity",
    description:
      "Own the roadmap for learner-centric features. Bring clarity, prioritization, and measurable outcomes to every release.",
    responsibilities: [
      "Define product vision and strategy with clear success metrics",
      "Run discovery with educators, students, and admins",
      "Create specs, flows, and launch plans that balance speed with depth",
      "Align cross-functional teams and ensure on-time delivery",
      "Champion accessibility, privacy, and trust in design trade-offs",
    ],
    requirements: [
      "4+ years in product management for web/mobile products",
      "Strong experience with roadmap, KPIs, and stakeholder comms",
      "Ability to synthesize qualitative and quantitative insights",
      "Empathy for users and rigor in prioritization",
      "Clear writing and storytelling",
    ],
    niceToHave: [
      "Edtech background or classroom exposure",
      "Data fluency with analytics tools",
      "Public speaking or workshop facilitation",
    ],
  },
  {
    id: "ds-004",
    title: "Data Scientist (Analytics & Impact)",
    team: "Data",
    level: "Mid",
    location: "Remote (Global)",
    type: "Remote",
    salaryRange: "$115k–$145k + equity",
    description:
      "Build models and dashboards that make learning outcomes visible. Turn data into clarity, and clarity into action.",
    responsibilities: [
      "Develop pipelines to capture anonymous, ethical usage insights",
      "Build dashboards and cohorts to evaluate learning impact",
      "Partner with PMs to define measurable success metrics",
      "Collaborate with engineers on data quality and governance",
      "Communicate findings with crisp narratives and visuals",
    ],
    requirements: [
      "3+ years in data science or analytics for web products",
      "Proficiency in Python/R, SQL, and BI tools",
      "Strong statistical reasoning and experiment design",
      "Data privacy awareness and ethical mindset",
      "Ability to turn ambiguity into actionable insights",
    ],
    niceToHave: [
      "Experience with AB testing in education contexts",
      "Visualization craft with storytelling",
      "Open-source contributions to data tools",
    ],
  },
  {
    id: "ux-005",
    title: "Senior Product Designer (UI/UX)",
    team: "Design",
    level: "Senior",
    location: "Remote (Global)",
    type: "Remote",
    salaryRange: "$120k–$155k + equity",
    description:
      "Lead the craft of human-centered design. Shape flows that feel effortless and inclusive—backed by strong principles.",
    responsibilities: [
      "Design accessible, polished experiences with clear IA and micro-interactions",
      "Own design systems, tokens, and component libraries",
      "Prototype fast, test rigorously, and iterate with users",
      "Collaborate deeply with engineering to deliver pixel-perfect UI",
      "Advocate clarity and inclusion across all touchpoints",
    ],
    requirements: [
      "5+ years in product design for web/mobile",
      "Portfolio showcasing systems thinking and polish",
      "Accessibility expertise and design ops experience",
      "Strong collaboration and communication",
      "Comfort with Figma, prototyping, and design tokens",
    ],
    niceToHave: [
      "Experience designing for multilingual audiences",
      "Motion design and storytelling",
      "Public docs or design writing",
    ],
  },
];

export default function Careers() {
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
              <Briefcase className="h-4 w-4" />
              Careers at EduVerse
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
              Build the{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Future of Learning
              </span>
            </h1>

            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Join a mission-driven team crafting accessible, trustworthy, and
              delightful education technology. We value excellence, empathy, and
              real-world impact—without compromising privacy or inclusion.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
              <Button size="lg" className="bg-gradient-hero hover:opacity-90 shadow-glow">
                View Open Roles
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-2">
                Learn About Culture
              </Button>
            </div>

            <div className="flex flex-wrap gap-2 justify-center pt-2">
              <Badge className="bg-gradient-to-r from-primary to-secondary text-white border-0 shadow-glow">
                Accessibility • Privacy • Impact
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Why Work Here */}
      <section className="py-20 sm:py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-muted/30 to-transparent" />
        <div className="container relative px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
              Why{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                EduVerse
              </span>
              ?
            </h2>
            <p className="text-lg text-muted-foreground">
              We build with dignity and ship with rigor—balancing speed with
              clarity. Here’s what makes this journey special.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-8 border-2 bg-card/50 backdrop-blur-sm hover:shadow-glow transition-all">
              <Target className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">Mission First</h3>
              <p className="text-muted-foreground">
                We design for real classrooms and diverse learners—impact over
                vanity, substance over noise.
              </p>
            </Card>

            <Card className="p-8 border-2 bg-card/50 backdrop-blur-sm hover:shadow-glow transition-all">
              <Shield className="h-10 w-10 text-secondary mb-4" />
              <h3 className="text-xl font-bold mb-2">Privacy by Design</h3>
              <p className="text-muted-foreground">
                We prioritize user agency and transparent data practices—always.
              </p>
            </Card>

            <Card className="p-8 border-2 bg-card/50 backdrop-blur-sm hover:shadow-glow transition-all">
              <Accessibility className="h-10 w-10 text-accent mb-4" />
              <h3 className="text-xl font-bold mb-2">Accessibility Built-in</h3>
              <p className="text-muted-foreground">
                WCAG-driven development so everyone can learn, explore, and grow.
              </p>
            </Card>

            <Card className="p-8 border-2 bg-card/50 backdrop-blur-sm hover:shadow-glow transition-all">
              <Sparkles className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">Craft & Polish</h3>
              <p className="text-muted-foreground">
                Micro-interactions, clear flows, and repeatable quality standards.
              </p>
            </Card>

            <Card className="p-8 border-2 bg-card/50 backdrop-blur-sm hover:shadow-glow transition-all">
              <Handshake className="h-10 w-10 text-secondary mb-4" />
              <h3 className="text-xl font-bold mb-2">Empathetic Culture</h3>
              <p className="text-muted-foreground">
                Psychological safety, honest feedback, and growth-minded leadership.
              </p>
            </Card>

            <Card className="p-8 border-2 bg-card/50 backdrop-blur-sm hover:shadow-glow transition-all">
              <Award className="h-10 w-10 text-accent mb-4" />
              <h3 className="text-xl font-bold mb-2">Recognition</h3>
              <p className="text-muted-foreground">
                Celebrate wins—technical and human. Badges, shout-outs, and real impact.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Open Roles Filter & List */}
      <section className="py-20 sm:py-32">
        <div className="container px-4 sm:px-6">
          <div className="text-center max-w-4xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
              Open{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Roles
              </span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Find your place. We hire for skill, integrity, and drive—not just résumés.
            </p>
          </div>

          {/* Filters (UI only) */}
          <Card className="p-6 border-2 bg-card/50 backdrop-blur-sm mb-8">
            <div className="grid md:grid-cols-4 gap-4">
              <div className="flex items-center gap-2">
                <Search className="h-5 w-5 text-muted-foreground" />
                <input
                  className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm"
                  placeholder="Search roles"
                  aria-label="Search roles"
                />
              </div>
              <div className="flex items-center gap-2">
                <Filter className="h-5 w-5 text-muted-foreground" />
                <select className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm">
                  <option>All Teams</option>
                  <option>Engineering</option>
                  <option>Design</option>
                  <option>Product</option>
                  <option>Data</option>
                </select>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-muted-foreground" />
                <select className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm">
                  <option>All Locations</option>
                  <option>Remote (Global)</option>
                  <option>Hillsboro, OR</option>
                  <option>US Remote</option>
                </select>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-muted-foreground" />
                <select className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm">
                  <option>All Types</option>
                  <option>Remote</option>
                  <option>Hybrid</option>
                  <option>On-site</option>
                </select>
              </div>
            </div>
          </Card>

          {/* Roles Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {openRoles.map((role, index) => (
              <Card
                key={role.id}
                className="group p-8 border-2 bg-card/50 backdrop-blur-sm hover:shadow-glow transition-all animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-1">
                    <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                      {role.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {role.team} • {role.level} • {role.type}
                    </p>
                    <div className="flex flex-wrap gap-2 pt-2">
                      <Badge variant="secondary" className="text-xs">
                        <MapPin className="h-3 w-3 mr-1" />
                        {role.location}
                      </Badge>
                      {role.salaryRange && (
                        <Badge variant="secondary" className="text-xs">
                          <Coins className="h-3 w-3 mr-1" />
                          {role.salaryRange}
                        </Badge>
                      )}
                    </div>
                  </div>
                  <div className="p-3 rounded-xl bg-gradient-to-br from-primary to-secondary text-white shadow-glow">
                    <Briefcase className="h-6 w-6" />
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed mt-4">
                  {role.description}
                </p>

                <div className="grid md:grid-cols-2 gap-6 mt-6">
                  <div>
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <Layers className="h-5 w-5 text-primary" />
                      Responsibilities
                    </h4>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2">
                      {role.responsibilities.map((r, i) => (
                        <li key={i}>{r}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      Requirements
                    </h4>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2">
                      {role.requirements.map((r, i) => (
                        <li key={i}>{r}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                {role.niceToHave && role.niceToHave.length > 0 && (
                  <div className="mt-6">
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <Star className="h-5 w-5 text-secondary" />
                      Nice to Have
                    </h4>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2">
                      {role.niceToHave.map((r, i) => (
                        <li key={i}>{r}</li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="flex flex-wrap gap-3 pt-6">
                  <Button className="bg-gradient-hero hover:opacity-90 shadow-glow">
                    Apply Now
                    <ArrowUpRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Button variant="outline" className="border-2">
                    View Details
                  </Button>
                  <Button variant="outline" className="border-2">
                    Share Role
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" className="border-2">
              See All Roles
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits & Perks */}
      <section className="py-20 sm:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-secondary/5 to-transparent" />
        <div className="container relative px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
              Benefits &{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Perks
              </span>
            </h2>
            <p className="text-lg text-muted-foreground">
              We invest in your craft, health, and growth—because great work
              requires great care.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Coins, title: "Competitive Compensation", desc: "Fair salaries, equity options, and transparent growth paths." },
              { icon: Shield, title: "Health & Wellbeing", desc: "Comprehensive coverage and mental health support." },
              { icon: Coffee, title: "Remote-friendly Culture", desc: "Flexible hours, async-first communication, and home-office support." },
              { icon: BookOpen, title: "Learning Budget", desc: "Annual stipend for courses, books, and conferences." },
              { icon: Sparkles, title: "Professional Growth", desc: "Mentorship, feedback, and clear skill development ladders." },
              { icon: Globe, title: "Global Collaboration", desc: "Build with diverse teams across languages and contexts." },
            ].map((b, i) => {
              const Icon = b.icon as any;
              return (
                <Card key={i} className="p-8 border-2 bg-card/50 backdrop-blur-sm hover:shadow-glow">
                  <Icon className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-2">{b.title}</h3>
                  <p className="text-muted-foreground">{b.desc}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Culture & Values */}
      <section className="py-20 sm:py-32">
        <div className="container px-4 sm:px-6">
          <div className="text-center max-w-4xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
              Culture &{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Values
              </span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Principles that guide our decisions—from pixels to policies.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: HeartHandshake, title: "Empathy & Inclusion", desc: "We build for everyone—respecting context, identity, and needs." },
              { icon: Lightbulb, title: "Clarity & Craft", desc: "We simplify complexity and polish the details that matter." },
              { icon: Lock, title: "Trust & Privacy", desc: "We earn trust through transparent, privacy-first choices." },
              { icon: Rocket, title: "Momentum & Rigor", desc: "We move fast without breaking care—proof beats hype." },
              { icon: Recycle, title: "Sustainability", desc: "We architect reusable systems that minimize waste and maximize impact." },
              { icon: PieChart, title: "Accountability", desc: "We measure outcomes and take responsibility for our work." },
            ].map((v, i) => {
              const Icon = v.icon as any;
              return (
                <Card key={i} className="p-8 border-2 bg-card/50 backdrop-blur-sm hover:shadow-glow">
                  <Icon className="h-10 w-10 text-secondary mb-4" />
                  <h3 className="text-xl font-bold mb-2">{v.title}</h3>
                  <p className="text-muted-foreground">{v.desc}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

            {/* Hiring Process */}
      <section className="py-20 sm:py-32 bg-muted/30">
        <div className="container px-4 sm:px-6">
          <div className="text-center max-w-4xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
              Hiring{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Process
              </span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Transparent, respectful, and growth-oriented. Here’s what to expect when you apply.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Application Review",
                desc: "We carefully read every application—your story matters more than buzzwords.",
              },
              {
                step: "2",
                title: "Intro Call",
                desc: "A 30-minute conversation to learn about you, your goals, and answer your questions.",
              },
              {
                step: "3",
                title: "Technical/Practical Task",
                desc: "A real-world challenge designed to reflect the work you’d actually do here.",
              },
              {
                step: "4",
                title: "Final Interview",
                desc: "Meet the team, discuss culture fit, and align on expectations before an offer.",
              },
            ].map((s, i) => (
              <Card
                key={i}
                className="p-8 border-2 bg-card/50 backdrop-blur-sm hover:shadow-glow animate-fade-in"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-lg shadow-glow mb-4">
                  {s.step}
                </div>
                <h3 className="text-xl font-bold mb-2">{s.title}</h3>
                <p className="text-muted-foreground">{s.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 sm:py-32">
        <div className="container px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
              Frequently{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Asked Questions
              </span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Answers to common questions about working at EduVerse.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                q: "Do you hire globally?",
                a: "Yes. We are a remote-first company with contributors across 50+ countries.",
              },
              {
                q: "What’s your stance on diversity?",
                a: "We actively seek diverse perspectives and ensure inclusive hiring practices.",
              },
              {
                q: "Do you offer internships?",
                a: "Yes. We run seasonal internship programs with mentorship and real projects.",
              },
              {
                q: "How do you support growth?",
                a: "Learning budgets, mentorship, and clear career ladders are built-in.",
              },
              {
                q: "Is EduVerse open-source?",
                a: "Yes. Many of our modules are open-source, and we encourage contributions.",
              },
              {
                q: "What’s the work culture like?",
                a: "Empathetic, async-first, and impact-driven. We balance rigor with care.",
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
                Join Us
              </span>
              ?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              If you’re passionate about education, technology, and impact, we’d love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-hero hover:opacity-90 shadow-glow">
                Apply Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-2">
                Contact HR
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