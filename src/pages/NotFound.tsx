import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Ghost, ArrowLeft, ArrowRight, Search } from "lucide-react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="py-24 sm:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-green-500/10 to-transparent" />
        <div className="container relative px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto space-y-6 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 text-sm font-medium text-red-600 dark:text-red-400">
              <Ghost className="h-4 w-4" />
              Page Not Found
            </div>
            <h1 className="text-5xl sm:text-6xl font-bold tracking-tight">
              Oops... <span className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">404</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              The page you're looking for doesn’t exist—or maybe it never did. But don’t worry, learning never stops.
            </p>
          </div>

          <Card className="max-w-3xl mx-auto mt-12 p-8 sm:p-12 border-2 bg-card/50 backdrop-blur-sm shadow-glow space-y-6 animate-fade-in">
            <div className="flex justify-center">
              <div className="p-4 rounded-full bg-gradient-to-br from-red-500 to-orange-500 text-white shadow-glow">
                <Search className="h-8 w-8" />
              </div>
            </div>

            <p className="text-muted-foreground text-lg text-center">
              You can go back to the homepage or explore our modules to continue your journey.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link to="/">
                <Button size="lg" variant="outline" className="border-2">
                  <ArrowLeft className="mr-2 h-5 w-5" />
                  Back to Home
                </Button>
              </Link>
              <Link to="/#modules">
                <Button size="lg" className="bg-gradient-hero hover:opacity-90 shadow-glow">
                  Explore Modules
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </Card>

          <div className="text-center mt-12">
            <Badge className="bg-gradient-to-r from-green-500 to-blue-500 text-white border-0 shadow-glow">
              EduVerse is always here to guide you
            </Badge>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}