// src/components/Auth/AuthFormWrapper.tsx
import { Card } from "@/components/ui/card";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

type AuthFormWrapperProps = {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
};

export function AuthFormWrapper({ title, subtitle, children }: AuthFormWrapperProps) {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="relative py-12 sm:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-green-500/10 to-transparent" />
        <div className="container relative px-4 sm:px-6">
          <div className="max-w-md mx-auto">
            <div className="text-center mb-8 space-y-2">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-sm font-medium text-blue-600 dark:text-blue-400">
                {title}
              </div>
              {subtitle && (
                <p className="text-muted-foreground">{subtitle}</p>
              )}
            </div>

            <Card className="p-6 sm:p-8 border-2 bg-card/50 backdrop-blur-sm shadow-2xl animate-fade-in">
              {children}
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}