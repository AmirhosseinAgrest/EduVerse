import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FileText, ShieldCheck, ScrollText, CheckCircle, AlertCircle } from "lucide-react";

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-green-500/10 to-transparent" />
        <div className="container mx-auto max-w-4xl relative z-10 text-center animate-fade-in space-y-6">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-hero shadow-glow">
            <ScrollText className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-hero bg-clip-text text-transparent">
            Terms of Service
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Please read these terms carefully before using EduVerse. By accessing our platform, you agree to the following conditions.
          </p>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl space-y-12 animate-fade-in">
          {/* Section 1 */}
          <Card className="p-6 border-2 bg-card/50 backdrop-blur-sm shadow-glow">
            <div className="flex items-center gap-3 mb-4">
              <ShieldCheck className="w-6 h-6 text-blue-600" />
              <h2 className="text-2xl font-bold">1. Acceptance of Terms</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              By accessing or using EduVerse, you confirm that you have read, understood, and agreed to be bound by these Terms of Service. If you do not agree, please do not use the platform.
            </p>
          </Card>

          {/* Section 2 */}
          <Card className="p-6 border-2 bg-card/50 backdrop-blur-sm shadow-glow">
            <div className="flex items-center gap-3 mb-4">
              <FileText className="w-6 h-6 text-green-600" />
              <h2 className="text-2xl font-bold">2. Educational Use Only</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              EduVerse is designed for educational purposes only. You may not use the platform for commercial exploitation, unauthorized data scraping, or any activity that violates academic integrity.
            </p>
          </Card>

          {/* Section 3 */}
          <Card className="p-6 border-2 bg-card/50 backdrop-blur-sm shadow-glow">
            <div className="flex items-center gap-3 mb-4">
              <CheckCircle className="w-6 h-6 text-green-500" />
              <h2 className="text-2xl font-bold">3. User Responsibilities</h2>
            </div>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>You are responsible for the accuracy of the content you submit.</li>
              <li>You must not upload harmful, illegal, or misleading materials.</li>
              <li>You agree to respect the privacy and rights of other users.</li>
            </ul>
          </Card>

          {/* Section 4 */}
          <Card className="p-6 border-2 bg-card/50 backdrop-blur-sm shadow-glow">
            <div className="flex items-center gap-3 mb-4">
              <AlertCircle className="w-6 h-6 text-red-500" />
              <h2 className="text-2xl font-bold">4. Limitation of Liability</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              EduVerse is provided “as is” without warranties of any kind. We are not liable for any damages resulting from the use or inability to use the platform, including data loss or service interruptions.
            </p>
          </Card>

          {/* Section 5 */}
          <Card className="p-6 border-2 bg-card/50 backdrop-blur-sm shadow-glow">
            <div className="flex items-center gap-3 mb-4">
              <ScrollText className="w-6 h-6 text-purple-500" />
              <h2 className="text-2xl font-bold">5. Changes to Terms</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              We may update these terms from time to time. Continued use of EduVerse after changes are posted constitutes your acceptance of the revised terms.
            </p>
          </Card>

          {/* Final Statement */}
          <div className="text-center pt-12 space-y-4">
            <Badge className="bg-gradient-to-r from-green-500 to-blue-500 text-white border-0 shadow-glow">
              Empowering learners through trust and transparency
            </Badge>
            <p className="text-muted-foreground text-sm">
              Last updated: October 16, 2025
            </p>
            <Button size="lg" className="bg-gradient-hero hover:opacity-90 shadow-glow">
              Back to Home
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}