import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useTheme } from "next-themes";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { useLanguage } from "@/context/LanguageContext";
import clsx from "clsx";

export const Header = () => {
  const { theme, setTheme } = useTheme();
  const navigate = useNavigate();
  const { t, lang } = useLanguage();
  const ht = t.header;
  const isRTL = lang === "fa" || lang === "ps";

  const [user, setUser] = useState<null | { fullName: string }>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("user");
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        if (parsed.fullName) setUser(parsed);
      } catch (e) {
        console.error("Invalid user data in localStorage");
      }
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: ht.modules, href: "#modules" },
    { name: ht.team, href: "Team" },
    { name: ht.impact, href: "#impact" },
    { name: ht.demo, href: "#demo" },
    { name: ht.contact, href: "#footer" },
  ];

  return (
    <header
      dir={isRTL ? "rtl" : "ltr"}
      className={clsx(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/80 backdrop-blur-lg border-b border-border shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <a href="#" className={clsx("flex items-center", isRTL ? "space-x-reverse space-x-2" : "space-x-2")}>
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-gradient-hero flex items-center justify-center shadow-glow transition-transform group-hover:scale-105">
              <span className="text-white font-bold text-lg sm:text-xl">E</span>
            </div>
            <span className="text-lg sm:text-xl font-bold bg-gradient-hero bg-clip-text text-transparent">
              EduVerse AI
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors relative after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all hover:after:w-full"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-3">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="rounded-full"
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>

            {user ? (
              <DropdownMenu.Root>
                <DropdownMenu.Trigger asChild>
                  <button
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-purple-500 to-indigo-500 text-white font-bold flex items-center justify-center shadow-glow hover:scale-105 transition-transform"
                    title={user.fullName}
                  >
                    {user.fullName.charAt(0).toUpperCase()}
                  </button>
                </DropdownMenu.Trigger>

                <DropdownMenu.Content
                  sideOffset={8}
                  className="min-w-[160px] bg-popover border border-border rounded-md shadow-lg p-1 z-50"
                >
                  <DropdownMenu.Item
                    onClick={() => navigate("/profile")}
                    className="px-3 py-2 text-sm text-foreground hover:bg-accent rounded-md cursor-pointer"
                  >
                    🧑‍💼 {ht.profile}
                  </DropdownMenu.Item>
                  <DropdownMenu.Item
                    onClick={() => navigate("/settings")}
                    className="px-3 py-2 text-sm text-foreground hover:bg-accent rounded-md cursor-pointer"
                  >
                    ⚙️ {ht.settings}
                  </DropdownMenu.Item>
                  <DropdownMenu.Item
                    onClick={() => navigate("/dashboard")}
                    className="px-3 py-2 text-sm text-foreground hover:bg-accent rounded-md cursor-pointer"
                  >
                    📊 {ht.dashboard}
                  </DropdownMenu.Item>
                  <DropdownMenu.Separator className="my-1 h-px bg-border" />
                  <DropdownMenu.Item
                    onClick={() => {
                      localStorage.removeItem("user");
                      setUser(null);
                      navigate("/");
                    }}
                    className="px-3 py-2 text-sm text-red-500 hover:bg-red-100 dark:hover:bg-red-900 rounded-md cursor-pointer"
                  >
                    🚪 {ht.logout}
                  </DropdownMenu.Item>
                </DropdownMenu.Content>
              </DropdownMenu.Root>
            ) : (
              <Button
                variant="default"
                className="hidden sm:inline-flex bg-gradient-hero hover:opacity-90 transition-opacity shadow-glow"
                onClick={() => navigate("/login")}
              >
                {ht.getStarted}
              </Button>
            )}

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            <nav className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};