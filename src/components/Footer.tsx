import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, Twitter } from "lucide-react";
import { Link } from "react-router-dom";
import { LanguageSelector } from "@/components/ui/language-selector";
import { useLanguage } from "@/context/LanguageContext";
import clsx from "clsx";

export const Footer = () => {
  const { t, lang } = useLanguage();
  const ft = t.footer;

  const isRTL = lang === "fa" || lang === "ps";

  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
  ];

  const footerLinks = {
    Product: [
      { name: "features", href: "#modules" },
      { name: "impact", href: "#impact" },
      { name: "demo", href: "#demo" },
      { name: "pricing", href: "/Pricing" },
    ],
    Company: [
      { name: "about", href: "#" },
      { name: "team", href: "/Team" },
      { name: "careers", href: "/Careers" },
      { name: "press", href: "/Press" },
    ],
    Resources: [
      { name: "docs", href: "/Documentation" },
      { name: "api", href: "/ApiReference" },
      { name: "community", href: "/Community" },
      { name: "support", href: "/Support" },
    ],
    Legal: [
      { name: "privacy", href: "/privacy-policy", isRoute: true },
      { name: "terms", href: "/TermsOfService" },
      { name: "cookie", href: "/CookiePolicy" },
      { name: "accessibility", href: "/Accessibility" },
    ],
  };

  return (
    <footer
      id="footer"
      dir={isRTL ? "rtl" : "ltr"}
      lang={lang}
      className={clsx(
        lang === "fa" ? "font-vazir" : lang === "ps" ? "font-pashto" : lang === "es" ? "font-roboto" : "font-sans"
      )}
    >
      <div className="container px-4 sm:px-6 py-16 sm:py-20">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-6">
            <div className={clsx("flex items-center", isRTL ? "space-x-reverse space-x-2" : "space-x-2")}>
              <div className="w-10 h-10 rounded-lg bg-gradient-hero flex items-center justify-center shadow-glow">
                <span className="text-white font-bold text-xl">E</span>
              </div>
              <span className="text-xl font-bold bg-gradient-hero bg-clip-text text-transparent">
                EduVerse AI
              </span>
            </div>
            <p className={clsx("text-muted-foreground leading-relaxed max-w-sm", isRTL && "text-right")}>
              {ft.description ||
                "Empowering learners worldwide with AI-driven education that's accessible, transparent, and truly transformative."}
            </p>

            {/* Contact + Language */}
            <div className="space-y-3">
              <a
                href="mailto:hello@eduverse.ai"
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group"
              >
                <Mail className="h-4 w-4 group-hover:text-primary transition-colors" />
                <span className="text-sm">hello@eduverse.ai</span>
              </a>
              <LanguageSelector />
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section} className="space-y-4">
              <h3 className="font-semibold text-foreground">
                {ft[section.toLowerCase() as keyof typeof ft] || section}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => {
                  const label = ft[link.name as keyof typeof ft] || link.name;
                  return (
                    <li key={link.name}>
                      {link.isRoute ? (
                        <Link
                          to={link.href}
                          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                        >
                          {label}
                        </Link>
                      ) : (
                        <a
                          href={link.href}
                          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                        >
                          {label}
                        </a>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-border pt-12 mb-12">
          <div className="max-w-2xl mx-auto text-center space-y-4">
            <h3 className="text-2xl font-bold">{ft.stayUpdated}</h3>
            <p className="text-muted-foreground">{ft.newsletterText}</p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder={ft.emailPlaceholder || "Enter your email"}
                className="flex-1 px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button className="bg-gradient-hero hover:opacity-90 transition-opacity shadow-glow">
                {ft.subscribe}
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border pt-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-sm text-muted-foreground text-center sm:text-left">
            {ft?.copyright?.replace("{year}", String(new Date().getFullYear()))}
          </p>

          <div className="flex items-center gap-4">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="w-10 h-10 rounded-lg bg-muted hover:bg-primary/10 border border-border hover:border-primary/50 flex items-center justify-center transition-all duration-300 hover:shadow-glow group"
              >
                <Icon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <Button variant="outline" size="sm" className="border-2" asChild>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4 mr-2" />
                GitHub
              </a>
            </Button>
            <Button variant="outline" size="sm" className="border-2" asChild>
              <a href="https://devpost.com" target="_blank" rel="noopener noreferrer">
                Devpost
              </a>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};