import React from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Globe,
  Users,
  BookOpen,
  Sparkles,
  ArrowRight,
  HeartHandshake,
  Target,
  Layers,
  Workflow,
  ShieldCheck,
  Award,
  Map,
  Building2,
  BrainCircuit,
  ServerCog,
  TabletSmartphone,
  Accessibility,
  Languages,
  FileText,
  Lock,
  BarChart3,
  PieChart,
  LineChart,
  Handshake,
  Rocket,
  CalendarDays,
  MessageSquare,
  Lightbulb,
  Recycle,
  Leaf,
  GraduationCap,
  MonitorSmartphone,
  CloudCog,
  Boxes,
  Code2,
  Database,
  Cog,
  Cpu,
  Bot,
  GitBranch,
  Thermometer,
  Link2,
  Puzzle,
  Compass,
  Globe2,
  Scale,
  Book,
  ChartNoAxesGantt,
  ClipboardCheck,
  ClipboardList,
  CheckCircle2,
  AlertCircle,
  Info,
  Mail,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function AboutEduVerse() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      {/* Hero */}
      <section className="relative py-20 sm:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-green-500/10 to-transparent" />
        <div className="container relative px-4 sm:px-6 text-center space-y-6 animate-fade-in">
          <Badge className="bg-gradient-to-r from-blue-600 to-green-600 text-white border-0 shadow-glow">
            About EduVerse
          </Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
            Building Bridges to{" "}
            <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              Inclusive Education
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            EduVerse is a social-impact initiative driven by engineers,
            educators, and community organizers. We design modular tools and
            compassionate experiences that empower underserved learners—making
            trustworthy education accessible, multilingual, and dignified.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
            <Link to="/#modules">
              <Button size="lg" className="bg-gradient-hero hover:opacity-90 shadow-glow">
                Explore Modules <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/Team">
              <Button size="lg" variant="outline" className="border-2">
                Meet the Team
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 sm:py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-muted/30 to-transparent" />
        <div className="container relative px-4 sm:px-6">
          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="p-8 border-2 hover:border-blue-500/40 transition-all bg-card/50 backdrop-blur-sm animate-fade-in">
              <div className="flex items-center gap-3 mb-4">
                <Target className="h-6 w-6 text-blue-600" />
                <h2 className="text-2xl font-bold">Mission</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Our mission is to remove structural barriers to quality
                education by building transparent systems that prioritize
                dignity, accessibility, and trust—especially for learners who
                have been historically underserved.
              </p>
            </Card>

            <Card className="p-8 border-2 hover:border-green-500/40 transition-all bg-card/50 backdrop-blur-sm animate-fade-in" style={{ animationDelay: "100ms" }}>
              <div className="flex items-center gap-3 mb-4">
                <Sparkles className="h-6 w-6 text-green-600" />
                <h2 className="text-2xl font-bold">Vision</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                We envision a world where every learner—regardless of geography,
                language, device, or bandwidth—can access trustworthy knowledge,
                build critical thinking, and participate in a global learning
                community with agency.
              </p>
            </Card>

            <Card className="p-8 border-2 hover:border-purple-500/40 transition-all bg-card/50 backdrop-blur-sm animate-fade-in" style={{ animationDelay: "200ms" }}>
              <div className="flex items-center gap-3 mb-4">
                <Layers className="h-6 w-6 text-purple-600" />
                <h2 className="text-2xl font-bold">Approach</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                We architect modular tools, guided by human-centered design and
                privacy-first principles. From verification systems to donation
                flows and offline learning, each module is built to be robust,
                transparent, and respectful.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Story timeline */}
      <section className="py-20 sm:py-32">
        <div className="container px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
              Our{" "}
              <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                Story
              </span>
            </h2>
            <p className="text-lg text-muted-foreground">
              From hackathon prototypes to community-tested modules, EduVerse is
              built on collaboration, iteration, and honest accountability.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="p-8 border-2 bg-card/50 hover:border-blue-500/40 transition-all backdrop-blur-sm animate-fade-in">
              <div className="flex items-center gap-3 mb-3">
                <CalendarDays className="h-6 w-6 text-blue-600" />
                <h3 className="text-xl font-bold">Phase 1: Ideation & Values</h3>
              </div>
              <p className="text-muted-foreground">
                We started by listening to underserved learners and educators.
                We documented pain points: missing devices, limited bandwidth,
                unreliable content, and opaque donation programs. Our values
                emerged: transparency, dignity, multilingual access, and
                community-first design.
              </p>
            </Card>

            <Card className="p-8 border-2 bg-card/50 hover:border-green-500/40 transition-all backdrop-blur-sm animate-fade-in" style={{ animationDelay: "100ms" }}>
              <div className="flex items-center gap-3 mb-3">
                <Workflow className="h-6 w-6 text-green-600" />
                <h3 className="text-xl font-bold">Phase 2: Modular Architecture</h3>
              </div>
              <p className="text-muted-foreground">
                We designed independent modules—TruthSnap for content
                verification, EduBridge for donation and offline learning,
                MindMapAI for visual thinking, and dashboards for community
                stewardship—each with clean contracts and clear flows.
              </p>
            </Card>

            <Card className="p-8 border-2 bg-card/50 hover:border-purple-500/40 transition-all backdrop-blur-sm animate-fade-in" style={{ animationDelay: "200ms" }}>
              <div className="flex items-center gap-3 mb-3">
                <Handshake className="h-6 w-6 text-purple-600" />
                <h3 className="text-xl font-bold">Phase 3: Community Partnerships</h3>
              </div>
              <p className="text-muted-foreground">
                We partnered with local schools, youth groups, and grassroots
                organizations. Together, we refined workflows, improved
                messaging, and built trust through transparent reporting and
                inclusive onboarding.
              </p>
            </Card>

            <Card className="p-8 border-2 bg-card/50 hover:border-orange-500/40 transition-all backdrop-blur-sm animate-fade-in" style={{ animationDelay: "300ms" }}>
              <div className="flex items-center gap-3 mb-3">
                <Rocket className="h-6 w-6 text-orange-600" />
                <h3 className="text-xl font-bold">Phase 4: Scalable Rollout</h3>
              </div>
              <p className="text-muted-foreground">
                We prepared for scale: robust APIs, token/session logic,
                multilingual support, offline packages, and donor UX that’s
                simple, verifiable, and respectful. We keep iterating—guided by
                real-world feedback and measurable impact.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Core values */}
      <section className="py-20 sm:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 via-green-500/5 to-transparent" />
        <div className="container relative px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
              Core{" "}
              <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                Values
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our values are not slogans. They’re constraints we design for and
              standards we uphold when things get hard.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: ShieldCheck, title: "Trust & Transparency", text: "Clear flows, auditable reports, and respectful data practices. We never compromise user dignity." },
              { icon: Accessibility, title: "Accessibility", text: "Offline-first options, inclusive UX, and assistive patterns for diverse abilities and devices." },
              { icon: Languages, title: "Multilingual Respect", text: "Culturally authentic fonts, RTL support, and localized content that honors nuance." },
              { icon: HeartHandshake, title: "Dignity & Agency", text: "Beneficiaries are not subjects. They’re collaborators with voice, choice, and priority." },
              { icon: Recycle, title: "Circular Impact", text: "Device reuse, low-bandwidth modes, and sustainable operations reduce waste and widen access." },
              { icon: Award, title: "Excellence", text: "From system design to microcopy, we aim for craft. Honest, clear, and always improving." },
            ].map((val, i) => {
              const Icon = val.icon;
              return (
                <Card
                  key={val.title}
                  className="p-8 text-center border-2 hover:border-blue-500/40 transition-all duration-300 hover:shadow-glow bg-card/50 backdrop-blur-sm animate-fade-in"
                  style={{ animationDelay: `${i * 120}ms` }}
                >
                  <div className="flex justify-center mb-4">
                    <div className="p-4 rounded-2xl bg-gradient-to-br from-blue-500 to-green-500 text-white shadow-glow">
                      <Icon className="h-7 w-7" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{val.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{val.text}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Impact highlights */}
      <section className="py-20 sm:py-32">
        <div className="container px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
              Measurable{" "}
              <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                Impact
              </span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Impact isn’t vanity metrics. We track what matters—access,
              reliability, and learner agency.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-8 mb-16">
            {[
              { icon: BookOpen, value: "500K+", label: "Lessons Verified" },
              { icon: AlertCircle, value: "12K+", label: "Misinformation Flags" },
              { icon: CheckCircle2, value: "98%", label: "Accuracy Rate" },
            ].map((s, i) => {
              const Icon = s.icon;
              return (
                <Card
                  key={s.label}
                  className="p-8 text-center border-2 hover:border-green-500/50 transition-all duration-300 hover:shadow-glow bg-card/50 backdrop-blur-sm animate-fade-in"
                  style={{ animationDelay: `${i * 120}ms` }}
                >
                  <div className="flex justify-center mb-4">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-green-500 to-blue-500 text-white shadow-glow">
                      <Icon className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent mb-2">{s.value}</div>
                  <div className="font-semibold">{s.label}</div>
                </Card>
              );
            })}
          </div>

          <Card className="max-w-3xl mx-auto p-8 sm:p-12 border-2 bg-gradient-to-br from-blue-500/5 to-green-500/5 backdrop-blur-sm animate-fade-in">
            <div className="flex flex-col items-center text-center space-y-6">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-600 to-green-600 flex items-center justify-center text-white text-2xl font-bold shadow-glow">
                E
              </div>
              <blockquote className="text-xl sm:text-2xl font-medium leading-relaxed">
                "Impact is a conversation, not a scoreboard. We share honestly, learn openly, and improve with our community."
              </blockquote>
              <div className="space-y-1">
                <div className="font-semibold">EduVerse Impact Team</div>
                <div className="text-sm text-muted-foreground">Community Stewardship</div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Global presence and partnerships */}
      <section className="py-20 sm:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-green-500/5 via-blue-500/5 to-transparent" />
        <div className="container relative px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-sm font-medium text-green-600 mb-4">
                <Globe2 className="h-4 w-4" /> Global Presence
              </div>
              <h3 className="text-3xl font-bold mb-4">Local Roots, Global Reach</h3>
              <p className="text-muted-foreground leading-relaxed">
                We collaborate with schools, community leaders, and donors
                across regions—adapting our flows to local contexts, languages,
                and cultural nuances. Our work spans device donation programs,
                offline learning packages, and content verification hubs.
              </p>
              <div className="grid sm:grid-cols-2 gap-6 mt-8">
                {[
                  { icon: Map, title: "Regional Hubs", text: "Community-led hubs steward donation logistics and offline resource distribution." },
                  { icon: Building2, title: "Partner Schools", text: "Educators help co-design modules and validate real classroom needs." },
                  { icon: HeartHandshake, title: "Donor Networks", text: "Transparent reporting builds trust and long-term collaboration." },
                  { icon: Compass, title: "Local Guidance", text: "We prioritize local voices to avoid extractive or one-size-fits-all solutions." },
                ].map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <Card
                      key={item.title}
                      className="p-6 border-2 hover:border-green-500/40 transition-all bg-card/50 backdrop-blur-sm animate-fade-in"
                      style={{ animationDelay: `${i * 120}ms` }}
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <Icon className="h-5 w-5 text-green-600" />
                        <h4 className="font-semibold">{item.title}</h4>
                      </div>
                      <p className="text-sm text-muted-foreground">{item.text}</p>
                    </Card>
                  );
                })}
              </div>
            </div>

            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-sm font-medium text-blue-600 mb-4">
                <Handshake className="h-4 w-4" /> Partnerships
              </div>
              <h3 className="text-3xl font-bold mb-4">Ethical, Earned Collaboration</h3>
              <p className="text-muted-foreground leading-relaxed">
                We avoid superficial partnerships. We co-create with
                organizations that share our commitments to dignity, privacy,
                and measurable impact. Together, we build systems that last.
              </p>
              <div className="grid sm:grid-cols-2 gap-6 mt-8">
                {[
                  { icon: GraduationCap, title: "Universities", text: "Research collaboration and evaluation frameworks for learning outcomes." },
                  { icon: MonitorSmartphone, title: "EdTech Teams", text: "Integrations for content verification and offline delivery." },
                  { icon: Leaf, title: "Sustainability", text: "Hardware reuse and low-energy infrastructure for long-term operations." },
                  { icon: Scale, title: "Accountability", text: "Shared governance and transparent reporting practices." },
                ].map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <Card
                      key={item.title}
                      className="p-6 border-2 hover:border-blue-500/40 transition-all bg-card/50 backdrop-blur-sm animate-fade-in"
                      style={{ animationDelay: `${i * 120}ms` }}
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <Icon className="h-5 w-5 text-blue-600" />
                        <h4 className="font-semibold">{item.title}</h4>
                      </div>
                      <p className="text-sm text-muted-foreground">{item.text}</p>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Accessibility and privacy commitments */}
      <section className="py-20 sm:py-32">
        <div className="container px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <Card className="p-8 border-2 bg-card/50 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-4">
                <Accessibility className="h-6 w-6 text-blue-600" />
                <h3 className="text-2xl font-bold">Accessibility First</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                We build for diverse abilities, devices, and bandwidth. Our
                offline bundles, clear typography, RTL support, and assistive
                patterns help learners navigate with confidence.
              </p>
              <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                <li>Offline-first resources for limited connectivity</li>
                <li>Screen-reader friendly labels and focus states</li>
                <li>Color-contrast and motion-sensitivity options</li>
                <li>RTL and multilingual interfaces with authentic fonts</li>
              </ul>
            </Card>

            <Card className="p-8 border-2 bg-card/50 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-4">
                <Lock className="h-6 w-6 text-green-600" />
                <h3 className="text-2xl font-bold">Privacy & Respect</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                We treat data as responsibility, not property. We design clear
                consent flows, minimize collection, and respect user agency.
              </p>
              <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                <li>Transparent privacy policies and updates</li>
                <li>Role-based access and audit-ready reporting</li>
                <li>Encryption in transit and at rest</li>
                <li>Privacy toggles and human-readable summaries</li>
              </ul>
              <div className="mt-6">
                <Link to="/PrivacyPolicy">
                  <Button variant="outline" className="border-2">
                    Read Privacy Policy
                  </Button>
                </Link>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Technology stack overview */}
      <section className="py-20 sm:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-green-500/10 to-transparent" />
        <div className="container relative px-4 sm:px-6">
          <div className="text-center max-w-4xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
              Technology{" "}
              <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                Stack
              </span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Built with robust, developer-friendly patterns—modular components,
              clear routing, and scalable data contracts.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                icon: Code2,
                title: "Frontend",
                items: [
                  "React + TypeScript",
                  "Vite for fast dev builds",
                  "TailwindCSS for design system",
                  "Shadcn-style UI components",
                  "Lucide icons for clarity",
                ],
              },
              {
                icon: ServerCog,
                title: "Backend",
                items: [
                  "Node.js + Express",
                  "API modules for verification & donations",
                  "Token/session management",
                  "Logging & observability hooks",
                ],
              },
              {
                icon: Database,
                title: "Data & Storage",
                items: [
                  "Modular storage utilities",
                  "Privacy-aware data flows",
                  "Caching for offline readiness",
                  "Exportable reporting formats",
                ],
              },
            ].map((stack, i) => {
              const Icon = stack.icon;
              return (
                <Card
                  key={stack.title}
                  className="p-8 border-2 hover:border-blue-500/40 transition-all bg-card/50 backdrop-blur-sm animate-fade-in"
                  style={{ animationDelay: `${i * 120}ms` }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <Icon className="h-6 w-6 text-blue-600" />
                    <h3 className="text-xl font-bold">{stack.title}</h3>
                  </div>
                  <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                    {stack.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Modules overview */}
      <section className="py-20 sm:py-32">
        <div className="container px-4 sm:px-6">
          <div className="text-center max-w-4xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
              Modular{" "}
              <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                Ecosystem
              </span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Each module is designed to be understandable on its own and
              powerful in combination. Clear inputs, clear outputs, zero magic.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: ShieldCheck,
                title: "TruthSnap",
                text: "AI-assisted content verification with credibility scoring, bias alerts, and citation guidance.",
                link: "/TruthSnap",
              },
              {
                icon: HeartHandshake,
                title: "EduBridge",
                text: "Device donation, crypto & direct support, offline learning bundles, and respectful donor UX.",
                link: "/EduBridge",
              },
              {
                icon: Bot,
                title: "MindMapAI",
                text: "Visual thinking companion—organize ideas, connect sources, and build mental models.",
                link: "/MindMapAI",
              },
              {
                icon: Boxes,
                title: "Dashboards",
                text: "Transparent stewardship with impact metrics, usage insights, and community prioritization.",
                link: "/dashboard/TruthSnapDashboard",
              },
              {
                icon: FileText,
                title: "Documentation",
                text: "Clear guides, APIs, and onboarding for educators, donors, and developers.",
                link: "/Documentation",
              },
              {
                icon: Globe,
                title: "Community",
                text: "Q&A hub prioritizing underserved voices, with inclusive moderation and visibility logic.",
                link: "/Community",
              },
            ].map((m, i) => {
              const Icon = m.icon;
              return (
                <Card
                  key={m.title}
                  className="p-8 border-2 hover:border-green-500/50 transition-all bg-card/50 backdrop-blur-sm animate-fade-in"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <Icon className="h-6 w-6 text-green-600" />
                    <h3 className="text-xl font-bold">{m.title}</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-6">{m.text}</p>
                  <Link to={m.link}>
                    <Button size="sm" variant="outline" className="border-2">
                      Learn More
                    </Button>
                  </Link>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Design principles */}
      <section className="py-20 sm:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 via-green-500/5 to-transparent" />
        <div className="container relative px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <Card className="p-8 border-2 bg-card/50 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-4">
                <ChartNoAxesGantt className="h-6 w-6 text-blue-600" />
                <h3 className="text-2xl font-bold">Design Principles</h3>
              </div>
              <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                <li>Clarity over cleverness; honesty over hype</li>
                <li>Write for humans: simple, respectful, multilingual</li>
                <li>Interfaces that teach as they guide</li>
                <li>“No dead ends”: always a next step</li>
                <li>Performance that prioritizes low-bandwidth users</li>
              </ul>
            </Card>
            <Card className="p-8 border-2 bg-card/50 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-4">
                <ClipboardList className="h-6 w-6 text-green-600" />
                <h3 className="text-2xl font-bold">Operational Tenets</h3>
              </div>
              <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                <li>Transparent accounting and impact reports</li>
                <li>Community-led prioritization for Q&A and resources</li>
                <li>Open feedback loops and public changelogs</li>
                <li>Security audits and continuous monitoring</li>
                <li>Ethical contribution guidelines and governance</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="py-20 sm:py-32">
        <div className="container px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
              Product{" "}
              <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                Roadmap
              </span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Iteration with purpose. We ship improvements that reduce friction
              and increase dignity.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: CloudCog,
                title: "Offline Bundles v2",
                text: "Auto-updatable content packs with safe diffing and device-friendly checks.",
              },
              {
                icon: Link2,
                title: "Verified Sources Graph",
                text: "Relational credibility maps linking authors, institutions, and datasets.",
              },
              {
                icon: Puzzle,
                title: "EduBridge Hub",
                text: "Unified donate page with programmable routes for device/crypto/direct.",
              },
              {
                icon: BrainCircuit,
                title: "Critical Thinking Toolkit",
                text: "Bias spotting, claim decomposition, and confidence calibration workflows.",
              },
              {
                icon: GitBranch,
                title: "Contributor Platform",
                text: "Community-led scripts, translations, and device wipe guides.",
              },
              {
                icon: TabletSmartphone,
                title: "Mobile-First UX Upgrades",
                text: "Graceful offline states, input shortcuts, and accessible microinteractions.",
              },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <Card
                  key={item.title}
                  className="p-8 border-2 hover:border-blue-500/40 transition-all bg-card/50 backdrop-blur-sm animate-fade-in"
                  style={{ animationDelay: `${i * 120}ms` }}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <Icon className="h-6 w-6 text-blue-600" />
                    <h3 className="text-xl font-bold">{item.title}</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{item.text}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 sm:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 via-green-500/5 to-transparent" />
        <div className="container relative px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
              Frequently Asked{" "}
              <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                Questions
              </span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Straight answers—because trust starts with clarity.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                q: "How do you ensure donations are used responsibly?",
                a: "We publish monthly reports, track allocations to specific projects, and maintain auditable logs. Donors can see device distributions, offline bundle deployments, and community program updates.",
              },
              {
                q: "Do learners need high-end devices to use EduVerse?",
                a: "No. We design for low-spec devices and limited bandwidth. Offline bundles, lightweight pages, and text-first modes help learners access content reliably.",
              },
              {
                q: "Is TruthSnap a replacement for teachers?",
                a: "Absolutely not. TruthSnap complements educators by flagging potential misinformation, suggesting citations, and encouraging critical thinking—while teachers maintain agency and context.",
              },
              {
                q: "How does the Q&A prioritization work?",
                a: "We highlight questions from underserved users in feeds and allocate moderation attention accordingly—ensuring their needs are addressed visibly and respectfully.",
              },
              {
                q: "Can I contribute translations or device wipe guides?",
                a: "Yes. We welcome community contributions. Our Contributor Platform (Roadmap) will streamline submissions, reviews, and credits for translators and technical helpers.",
              },
              {
                q: "What is your stance on privacy and data retention?",
                a: "We minimize data collection, provide human-readable privacy summaries, and offer controls for consent and deletion requests. Encryption and role-based access protect sensitive information.",
              },
            ].map((item, i) => (
              <Card
                key={item.q}
                className="p-8 border-2 hover:border-green-500/40 transition-all bg-card/50 backdrop-blur-sm animate-fade-in"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <MessageSquare className="h-5 w-5 text-green-600" />
                  <h4 className="text-lg font-semibold">{item.q}</h4>
                </div>
                <p className="text-muted-foreground">{item.a}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className="py-20 sm:py-32 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-green-500/10 to-transparent" />
        <div className="container relative px-4 sm:px-6 space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Join the{" "}
            <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              Movement
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Whether you’re an educator, developer, donor, or learner—you belong
            here. Help us turn barriers into bridges and build a more honest,
            inclusive learning future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/Team">
              <Button size="lg" className="bg-gradient-hero hover:opacity-90 shadow-glow">
                Meet the Minds <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/Support">
              <Button size="lg" variant="outline" className="border-2">
                Get Support
              </Button>
            </Link>
            <Link to="/#modules">
              <Button size="lg" variant="outline" className="border-2">
                Explore Modules
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact and footer linkbacks */}
      <section className="py-20 sm:py-32 relative">
        <div className="container px-4 sm:px-6 max-w-3xl mx-auto">
          <Card className="p-8 border-2 bg-gradient-to-br from-blue-500/5 to-green-500/5 backdrop-blur-sm animate-fade-in">
            <div className="flex items-center gap-3 mb-4">
              <Mail className="h-6 w-6 text-blue-600" />
              <h3 className="text-2xl font-bold">Questions or Ideas?</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6">
              We’re open to feedback and collaboration. Tell us what’s working,
              what’s not, and what we should build next with you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/Support">
                <Button className="bg-gradient-hero hover:opacity-90 shadow-glow">
                  Contact Support <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/Documentation">
                <Button variant="outline" className="border-2">
                  Read Documentation
                </Button>
              </Link>
              <Link to="/PrivacyPolicy">
                <Button variant="outline" className="border-2">
                  Privacy Commitments
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