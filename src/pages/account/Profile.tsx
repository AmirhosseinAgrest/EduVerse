import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Settings, LogOut, User, Mail, Globe, Shield, ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function Profile() {
  const navigate = useNavigate();
  const [user, setUser] = useState<null | {
    fullName: string;
    email: string;
    role?: string;
    country?: string;
    underserved?: boolean;
  }>(null);

  useEffect(() => {
    const stored = localStorage.getItem("user");
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        if (parsed.fullName && parsed.email) {
          setUser(parsed);
        }
      } catch (e) {
        console.error("Invalid user data");
      }
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/");
  };

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <p className="text-muted-foreground text-lg">No user data found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container px-4 sm:px-6 pt-24 pb-6">
              <Link
                to="/"
                className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <ChevronLeft className="h-4 w-4 mr-1" />
                Back to Home
              </Link>
            </div>
      <section className="pt-24 pb-16 px-4">
        <div className="container max-w-3xl mx-auto animate-fade-in">
          <Card className="p-8 border-2 bg-card/50 backdrop-blur-sm shadow-glow">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
              {/* Avatar */}
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-secondary text-white text-3xl font-bold flex items-center justify-center shadow-glow">
                {user.fullName.charAt(0).toUpperCase()}
              </div>

              {/* Info */}
              <div className="flex-1 space-y-2">
                <h2 className="text-2xl font-bold">{user.fullName}</h2>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Mail className="h-4 w-4" />
                  <span>{user.email}</span>
                </div>
                {user.role && (
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <User className="h-4 w-4" />
                    <span>{user.role}</span>
                  </div>
                )}
                {user.country && (
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Globe className="h-4 w-4" />
                    <span>{user.country}</span>
                  </div>
                )}
                {user.underserved && (
                  <Badge variant="secondary" className="mt-2">
                    <Shield className="h-3 w-3 mr-1" />
                    Underserved Region
                  </Badge>
                )}
              </div>
            </div>

            <Separator className="my-6" />

            <div className="flex flex-col sm:flex-row gap-4 justify-end">
              <Button variant="outline" onClick={() => navigate("/settings")}>
                <Settings className="h-4 w-4 mr-2" />
                تنظیمات
              </Button>
              <Button variant="destructive" onClick={handleLogout}>
                <LogOut className="h-4 w-4 mr-2" />
                خروج
              </Button>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
}