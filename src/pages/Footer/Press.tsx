import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Megaphone,
  Newspaper,
  Image as ImageIcon,
  Palette,
  Type,
  FileDown,
  Globe,
  Film,
  Camera,
  Users,
  Quote,
  Star,
  CheckCircle,
  XCircle,
  ShieldCheck,
  Calendar,
  Link as LinkIcon,
  Mail,
  Github,
  Linkedin,
  Twitter,
  Instagram,
  Globe2,
  ExternalLink,
  ArrowRight,
  ChevronLeft,
  FileText,
  FolderDown,
} from "lucide-react";
import { Link } from "react-router-dom";

// Example brand asset imports (replace with your actual files)
import logoDark from "@/assets/hero-education.jpg";
import logoLight from "@/assets/hero-education.jpg";
import logoMono from "@/assets/hero-education.jpg";
import appMock1 from "@/assets/hero-education.jpg";
import appMock2 from "@/assets/hero-education.jpg";
import heroShot from "@/assets/hero-education.jpg";
import founder1 from "@/assets/hero-education.jpg";
import founder2 from "@/assets/hero-education.jpg";
import founder3 from "@/assets/hero-education.jpg";

export default function PressKit() {
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
              <Megaphone className="h-4 w-4" />
              EduVerse Press Kit
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
              Brand assets,{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                media resources
              </span>{" "}
              & storytelling
            </h1>

            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Everything you need to cover EduVerse—logos, colors, typography, product shots,
              founder bios, boilerplate, press releases, and usage guidelines.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
              <Button size="lg" className="bg-gradient-hero hover:opacity-90 shadow-glow">
                Download Full Press Kit
                <FolderDown className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-2">
                Media Inquiries
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>

            <div className="flex flex-wrap gap-2 justify-center pt-2">
              <Badge className="bg-gradient-to-r from-primary to-secondary text-white border-0 shadow-glow">
                Accessibility • Privacy • Trust • Impact
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Boilerplate & Key facts */}
      <section className="py-20 sm:py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-muted/30 to-transparent" />
        <div className="container relative px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="p-8 border-2 bg-card/50 backdrop-blur-sm hover:shadow-glow">
              <div className="flex items-center gap-3 mb-4">
                <FileText className="h-6 w-6 text-primary" />
                <h2 className="text-2xl font-bold">Company boilerplate</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                EduVerse is a mission-driven platform building accessible, privacy-first learning tools
                powered by human-centered design and AI. We empower classrooms and communities to learn
                with confidence—through transparent content verification, inclusive UX, and practical
                collaboration features. Our focus is clarity, dignity, and measurable impact across diverse contexts.
              </p>
            </Card>

            <Card className="p-8 border-2 bg-card/50 backdrop-blur-sm hover:shadow-glow">
              <div className="flex items-center gap-3 mb-4">
                <Newspaper className="h-6 w-6 text-secondary" />
                <h2 className="text-2xl font-bold">Key facts</h2>
              </div>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Founded: 2024 • Global, remote-first team</li>
                <li>Focus: Accessibility, media literacy, and trustworthy edtech</li>
                <li>Products: TruthSnap, Learning Circles, Community Hub</li>
                <li>Approach: Open collaboration, ethical data practices, WCAG-driven UI</li>
                <li>Audience: Students, educators, schools, and edtech partners</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Logos & assets */}
      <section className="py-20 sm:py-32">
        <div className="container px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
              Official{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Logos & Assets
              </span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Use only the approved marks. Download the full asset pack for vector files and usage rules.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { src: logoDark, title: "Primary Logo (Dark)", bg: "bg-background" },
              { src: logoLight, title: "Primary Logo (Light)", bg: "bg-muted/30" },
              { src: logoMono, title: "Monochrome Logo", bg: "bg-muted/20" },
            ].map((l, i) => (
              <Card key={i} className="p-8 border-2 bg-card/50 backdrop-blur-sm hover:shadow-glow">
                <div className={`rounded-xl ${l.bg} border border-border p-8 flex items-center justify-center`}>
                  <img src={l.src} alt={l.title} className="h-16 w-auto" />
                </div>
                <h3 className="text-lg font-semibold mt-4">{l.title}</h3>
                <div className="flex gap-3 pt-3">
                  <Button variant="outline" className="border-2">
                    <FileDown className="h-4 w-4 mr-2" />
                    Download SVG
                  </Button>
                  <Button variant="outline" className="border-2">
                    <FileDown className="h-4 w-4 mr-2" />
                    Download PNG
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button className="bg-gradient-hero hover:opacity-90 shadow-glow">
              Download All Brand Assets
              <FolderDown className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Color palette & typography */}
      <section className="py-20 sm:py-32 bg-muted/30">
        <div className="container px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="p-8 border-2 bg-card/50 backdrop-blur-sm hover:shadow-glow">
              <div className="flex items-center gap-3 mb-4">
                <Palette className="h-6 w-6 text-primary" />
                <h2 className="text-2xl font-bold">Color palette</h2>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {[
                  { name: "Primary", class: "bg-primary", hex: "#4F46E5" },
                  { name: "Secondary", class: "bg-secondary", hex: "#22C55E" },
                  { name: "Accent", class: "bg-accent", hex: "#F59E0B" },
                  { name: "Background", class: "bg-background", hex: "#0B0B0E" },
                  { name: "Muted", class: "bg-muted", hex: "#1E1E25" },
                  { name: "Border", class: "bg-border", hex: "#2A2A32" },
                ].map((c, i) => (
                  <div key={i} className="space-y-2">
                    <div className={`h-16 rounded-lg border border-border ${c.class}`} />
                    <div className="text-sm">
                      <div className="font-medium">{c.name}</div>
                      <div className="text-muted-foreground">{c.hex}</div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-8 border-2 bg-card/50 backdrop-blur-sm hover:shadow-glow">
              <div className="flex items-center gap-3 mb-4">
                <Type className="h-6 w-6 text-secondary" />
                <h2 className="text-2xl font-bold">Typography</h2>
              </div>
              <div className="space-y-4">
                <div>
                  <div className="text-3xl font-bold">Heading — Display/Title</div>
                  <p className="text-muted-foreground">Use for hero and section titles.</p>
                </div>
                <div>
                  <div className="text-xl font-semibold">Subheading — Section headers</div>
                  <p className="text-muted-foreground">Use for card titles and large labels.</p>
                </div>
                <div>
                  <div className="text-base">Body — Content text</div>
                  <p className="text-muted-foreground">Use for paragraphs, lists, and captions.</p>
                </div>
                <div className="pt-2">
                  <Button variant="outline" className="border-2">
                    Download Font Specs
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Product shots */}
      <section className="py-20 sm:py-32">
        <div className="container px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
              Product{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Shots
              </span>
            </h2>
            <p className="text-lg text-muted-foreground">
              High-resolution images showcasing EduVerse modules and interfaces. Free to use with attribution.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[heroShot, appMock1, appMock2].map((src, i) => (
              <Card key={i} className="p-0 border-2 overflow-hidden bg-card/50 backdrop-blur-sm hover:shadow-glow">
                <img src={src} alt={`Product shot ${i + 1}`} className="w-full h-56 object-cover" />
                <div className="p-6">
                  <div className="flex gap-3">
                    <Button variant="outline" className="border-2">
                      <FileDown className="h-4 w-4 mr-2" />
                      Download JPG
                    </Button>
                    <Button variant="outline" className="border-2">
                      <FileDown className="h-4 w-4 mr-2" />
                      Download PNG
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button className="bg-gradient-hero hover:opacity-90 shadow-glow">
              Download All Product Shots
              <FolderDown className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Founder bios & portraits */}
      <section className="py-20 sm:py-32 bg-muted/30">
        <div className="container px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
              Founder{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Bios & Portraits
              </span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Short bios and portrait images for media use. Please keep names and titles intact.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { src: founder1, name: "Amir Hossein Agrest", title: "Project Lead, Full-stack Developer" },
              { src: founder2, name: "Elizabeth Smith", title: "Frontend Developer & UI/UX Designer" },
              { src: founder3, name: "Ahmadreza Sohrabi", title: "Mobile App Designer" },
            ].map((f, i) => (
              <Card key={i} className="border-2 bg-card/50 backdrop-blur-sm hover:shadow-glow overflow-hidden">
                <img src={f.src} alt={`${f.name} portrait`} className="w-full h-56 object-cover" />
                <div className="p-6 space-y-2">
                  <div className="text-lg font-semibold">{f.name}</div>
                  <div className="text-sm text-muted-foreground">{f.title}</div>
                  <div className="flex gap-3 pt-3">
                    <Button variant="outline" className="border-2">
                      <FileDown className="h-4 w-4 mr-2" />
                      Download Portrait
                    </Button>
                    <Button variant="outline" className="border-2">
                      <FileDown className="h-4 w-4 mr-2" />
                      Download Bio
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Usage guidelines: Do & Don't */}
      <section className="py-20 sm:py-32">
        <div className="container px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="p-8 border-2 bg-card/50 backdrop-blur-sm hover:shadow-glow">
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle className="h-6 w-6 text-primary" />
                <h2 className="text-2xl font-bold">Do — Approved usage</h2>
              </div>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Use the official logo files without editing shapes or proportions.</li>
                <li>Maintain clear space around the logo (at least the height of the logomark).</li>
                <li>Ensure sufficient contrast on backgrounds (dark/light variants available).</li>
                <li>Attribute images and quotes to EduVerse where applicable.</li>
                <li>Follow accessibility best practices when presenting our brand.</li>
              </ul>
            </Card>

            <Card className="p-8 border-2 bg-card/50 backdrop-blur-sm hover:shadow-glow">
              <div className="flex items-center gap-3 mb-4">
                <XCircle className="h-6 w-6 text-secondary" />
                <h2 className="text-2xl font-bold">Don’t — Restricted usage</h2>
              </div>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Don’t recolor the logo beyond the provided palettes.</li>
                <li>Don’t distort, rotate, or add effects (drop shadows/glows not in system).</li>
                <li>Don’t place the logo over busy imagery without a contrast layer.</li>
                <li>Don’t imply partnership or endorsement without written approval.</li>
                <li>Don’t use brand assets in political or harmful contexts.</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Media mentions & testimonials */}
      <section className="py-20 sm:py-32 bg-muted/30">
        <div className="container px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
              Media{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Mentions
              </span>{" "}
              & Quotes
            </h2>
            <p className="text-lg text-muted-foreground">
              Selected press highlights and quotes about EduVerse.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { outlet: "Global EdTech Journal", quote: "EduVerse sets a new bar for accessible edtech." },
              { outlet: "Learning Weekly", quote: "Privacy-first design meets classroom realities." },
              { outlet: "Tech & Society", quote: "A thoughtful approach to trust in modern learning." },
            ].map((m, i) => (
              <Card key={i} className="p-8 border-2 bg-card/50 backdrop-blur-sm hover:shadow-glow">
                <div className="flex items-center gap-3 mb-4">
                  <Quote className="h-5 w-5 text-primary" />
                  <div className="font-semibold">{m.outlet}</div>
                </div>
                <p className="text-muted-foreground">“{m.quote}”</p>
                <div className="pt-4">
                  <Button variant="outline" className="border-2">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Read article
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Press releases */}
      <section className="py-20 sm:py-32">
        <div className="container px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
              Official{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Press Releases
              </span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Downloadable PDFs and web versions for announcements and updates.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Launch of TruthSnap", date: "May 2025" },
              { title: "Accessibility Commitment Update", date: "July 2025" },
              { title: "Community Hub Milestone", date: "September 2025" },
            ].map((r, i) => (
              <Card key={i} className="p-8 border-2 bg-card/50 backdrop-blur-sm hover:shadow-glow">
                <div className="flex items-center gap-3 mb-2">
                  <Calendar className="h-5 w-5 text-secondary" />
                  <div className="text-sm text-muted-foreground">{r.date}</div>
                </div>
                <div className="text-xl font-bold">{r.title}</div>
                <div className="flex gap-3 pt-4">
                  <Button variant="outline" className="border-2">
                    <FileDown className="h-4 w-4 mr-2" />
                    Download PDF
                  </Button>
                  <Button variant="outline" className="border-2">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    View Web
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Social assets & trailers */}
      <section className="py-20 sm:py-32 bg-muted/30">
        <div className="container px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="p-8 border-2 bg-card/50 backdrop-blur-sm hover:shadow-glow">
              <div className="flex items-center gap-3 mb-4">
                <Camera className="h-6 w-6 text-primary" />
                <h2 className="text-2xl font-bold">Social media assets</h2>
              </div>
              <p className="text-muted-foreground">
                Pre-sized covers, thumbnails, and post templates for major platforms.
              </p>
              <div className="flex gap-3 pt-4">
                <Button variant="outline" className="border-2">
                  <FolderDown className="h-4 w-4 mr-2" />
                  Download Pack
                </Button>
                <div className="flex flex-wrap gap-3">
                  <Badge variant="secondary" className="text-xs"><Twitter className="h-3 w-3 mr-1" /> Twitter</Badge>
                  <Badge variant="secondary" className="text-xs"><Instagram className="h-3 w-3 mr-1" /> Instagram</Badge>
                  <Badge variant="secondary" className="text-xs"><Linkedin className="h-3 w-3 mr-1" /> LinkedIn</Badge>
                  <Badge variant="secondary" className="text-xs"><Github className="h-3 w-3 mr-1" /> GitHub</Badge>
                </div>
              </div>
            </Card>

            <Card className="p-8 border-2 bg-card/50 backdrop-blur-sm hover:shadow-glow">
              <div className="flex items-center gap-3 mb-4">
                <Film className="h-6 w-6 text-secondary" />
                <h2 className="text-2xl font-bold">Trailers & b-roll</h2>
              </div>
              <p className="text-muted-foreground">
                Short trailers and background footage for press interviews and coverage.
              </p>
              <div className="flex gap-3 pt-4">
                <Button variant="outline" className="border-2">
                  <FolderDown className="h-4 w-4 mr-2" />
                  Download Video Pack
                </Button>
                <Button variant="outline" className="border-2">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  View Playlist
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Links & contacts */}
      <section className="py-20 sm:py-32">
        <div className="container px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="p-8 border-2 bg-card/50 backdrop-blur-sm hover:shadow-glow">
              <div className="flex items-center gap-3 mb-4">
                <LinkIcon className="h-6 w-6 text-primary" />
                <h2 className="text-2xl font-bold">Official links</h2>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { label: "Website", icon: Globe2 },
                  { label: "GitHub", icon: Github },
                  { label: "LinkedIn", icon: Linkedin },
                  { label: "Twitter", icon: Twitter },
                  { label: "Instagram", icon: Instagram },
                ].map((l, i) => {
                  const Icon = l.icon as any;
                  return (
                    <a
                      key={i}
                      href="#"
                      className="flex items-center gap-2 p-3 rounded-lg border border-border hover:border-primary hover:bg-primary/10 transition-all"
                    >
                      <Icon className="h-4 w-4" />
                      <span className="text-sm font-medium">{l.label}</span>
                    </a>
                  );
                })}
              </div>
            </Card>

            <Card className="p-8 border-2 bg-card/50 backdrop-blur-sm hover:shadow-glow">
              <div className="flex items-center gap-3 mb-4">
                <Mail className="h-6 w-6 text-secondary" />
                <h2 className="text-2xl font-bold">Media inquiries</h2>
              </div>
              <p className="text-muted-foreground">
                For interviews, quotes, and asset permissions, please contact our media team.
              </p>
              <div className="grid md:grid-cols-2 gap-6 pt-4">
                <div className="p-4 bg-background rounded-lg border border-border">
                  <h3 className="font-semibold mb-1">Press Contact</h3>
                  <p className="text-sm text-muted-foreground mb-1">press@eduverse.ai</p>
                  <p className="text-xs text-muted-foreground">Response within 48 hours</p>
                </div>
                <div className="p-4 bg-background rounded-lg border border-border">
                  <h3 className="font-semibold mb-1">Partnerships</h3>
                  <p className="text-sm text-muted-foreground mb-1">partners@eduverse.ai</p>
                  <p className="text-xs text-muted-foreground">For collaboration & sponsorship</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Accessibility & privacy commitment blurb */}
      <section className="py-20 sm:py-32 bg-muted/30">
        <div className="container px-4 sm:px-6">
          <Card className="max-w-4xl mx-auto p-8 sm:p-12 text-center border-2 bg-gradient-to-br from-primary/5 to-secondary/5 backdrop-blur-sm space-y-6">
            <div className="flex items-center justify-center gap-2">
              <ShieldCheck className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-bold">Accessibility & privacy</h2>
            </div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              EduVerse maintains accessibility-first design and privacy-by-default data practices.
              Media usage should reflect these values. Please avoid misrepresenting our products or policies.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Badge variant="secondary" className="text-xs">WCAG-informed UI</Badge>
              <Badge variant="secondary" className="text-xs">Transparent data practices</Badge>
              <Badge variant="secondary" className="text-xs">Human-centered design</Badge>
            </div>
          </Card>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 sm:py-32">
        <div className="container px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
              Press Kit{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                FAQ
              </span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Quick answers about using our brand and assets.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                q: "Can I modify the logo colors?",
                a: "Please use only the approved variants (primary, light, mono). Custom recoloring isn’t allowed.",
              },
              {
                q: "Do you allow product screenshots in articles?",
                a: "Yes. Use our high-resolution shots or capture your own with visible UI and no overlays.",
              },
              {
                q: "How should I attribute quotes or images?",
                a: "Attribute to EduVerse and the speaker’s name where relevant. Link back to eduverse.ai.",
              },
              {
                q: "Where can I find detailed brand guidelines?",
                a: "Download the full brand kit for typography, spacing, and usage rules.",
              },
              {
                q: "Can I request a custom statement or interview?",
                a: "Absolutely. Reach out to press@eduverse.ai and share context and timelines.",
              },
              {
                q: "Is the press kit updated regularly?",
                a: "Yes. We update assets and guidelines as our brand evolves. See ‘Last updated’ below.",
              },
            ].map((item, i) => (
              <Card key={i} className="p-8 border-2 bg-card/50 backdrop-blur-sm hover:shadow-glow">
                <div className="flex items-start gap-3">
                  <Star className="h-6 w-6 text-primary mt-1" />
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
                cover EduVerse
              </span>
              ?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Download the full press kit or contact our team for quotes, interviews,
              and asset approvals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-hero hover:opacity-90 shadow-glow">
                Download Press Kit
                <FolderDown className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-2">
                Contact Media Team
                <ArrowRight className="ml-2 h-5 w-5" />
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