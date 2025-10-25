import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Shield, Lock, Eye, FileText, Mail, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-subtle opacity-50" />
        <div className="container mx-auto max-w-4xl relative z-10">
          <div className="text-center animate-fade-in">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-hero mb-6 shadow-glow">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-hero bg-clip-text text-transparent">
              Your Privacy, Our Priority
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              EduVerse is committed to protecting your data and respecting your rights
            </p>
            <Button className="bg-gradient-hero hover:opacity-90 shadow-glow">
              <a href="#overview">Read Our Policy</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section id="overview" className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <div className="animate-fade-in">
            <h2 className="text-3xl font-bold mb-6">Our Privacy Philosophy</h2>
            <p className="text-lg text-muted-foreground mb-4">
              At EduVerse AI, we believe that privacy is a fundamental right. We are committed to transparency in how we collect, use, and protect your personal information.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              Our privacy practices comply with global standards including the General Data Protection Regulation (GDPR), Children's Online Privacy Protection Act (COPPA), and other applicable data protection laws.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <div className="flex items-center gap-2 text-sm font-medium">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span>GDPR Compliant</span>
              </div>
              <div className="flex items-center gap-2 text-sm font-medium">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span>COPPA Certified</span>
              </div>
              <div className="flex items-center gap-2 text-sm font-medium">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span>ISO 27001 Certified</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mt-6">
              <strong>Last Updated:</strong> March 15, 2024
            </p>
          </div>
        </div>
      </section>

      {/* Information We Collect */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="animate-fade-in">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Eye className="w-5 h-5 text-primary" />
              </div>
              <h2 className="text-3xl font-bold">Information We Collect</h2>
            </div>
            
            <div className="space-y-6">
              <div className="border-l-4 border-primary pl-6 py-2">
                <h3 className="text-xl font-semibold mb-2">Required Information</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Full name and email address (for account creation)</li>
                  <li>School or institution affiliation</li>
                  <li>Age verification (to ensure COPPA compliance)</li>
                </ul>
              </div>

              <div className="border-l-4 border-primary/50 pl-6 py-2">
                <h3 className="text-xl font-semibold mb-2">Optional Information</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Profile picture and bio</li>
                  <li>Learning preferences and interests</li>
                  <li>Language and accessibility preferences</li>
                </ul>
              </div>

              <div className="border-l-4 border-primary/30 pl-6 py-2">
                <h3 className="text-xl font-semibold mb-2">Automatically Collected</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Device type, browser, and operating system</li>
                  <li>IP address and general location (country/city)</li>
                  <li>Usage analytics (pages visited, time spent, features used)</li>
                  <li>Performance data (for improving our services)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How We Use Your Data */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <div className="animate-fade-in">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <FileText className="w-5 h-5 text-primary" />
              </div>
              <h2 className="text-3xl font-bold">How We Use Your Data</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="bg-background p-6 rounded-lg border border-border">
                <h3 className="text-xl font-semibold mb-3">Personalization</h3>
                <p className="text-muted-foreground">
                  We use your data to tailor learning experiences, recommend content, and adapt to your learning style.
                </p>
              </div>

              <div className="bg-background p-6 rounded-lg border border-border">
                <h3 className="text-xl font-semibold mb-3">Analytics & Improvement</h3>
                <p className="text-muted-foreground">
                  Usage data helps us understand how our platform is used and where we can improve.
                </p>
              </div>

              <div className="bg-background p-6 rounded-lg border border-border">
                <h3 className="text-xl font-semibold mb-3">Communication</h3>
                <p className="text-muted-foreground">
                  We may send you updates, educational resources, and important platform notifications.
                </p>
              </div>

              <div className="bg-background p-6 rounded-lg border border-border">
                <h3 className="text-xl font-semibold mb-3">Safety & Security</h3>
                <p className="text-muted-foreground">
                  Data is used to prevent fraud, ensure platform security, and protect all users.
                </p>
              </div>
            </div>

            <div className="mt-8 p-6 bg-primary/5 rounded-lg border-2 border-primary/20">
              <p className="text-lg font-semibold text-foreground mb-2">
                We Never Sell Your Data
              </p>
              <p className="text-muted-foreground">
                EduVerse AI does not sell, rent, or share your personal information with third parties for marketing purposes. Your data is used solely to provide and improve our educational services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Data Protection Measures */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="animate-fade-in">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Lock className="w-5 h-5 text-primary" />
              </div>
              <h2 className="text-3xl font-bold">Data Protection Measures</h2>
            </div>

            <p className="text-lg text-muted-foreground mb-8">
              We implement industry-leading security measures to protect your information:
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-hero mb-4 shadow-glow">
                  <Lock className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Encryption</h3>
                <p className="text-sm text-muted-foreground">
                  All data is encrypted in transit (TLS 1.3) and at rest (AES-256)
                </p>
              </div>

              <div className="text-center p-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-hero mb-4 shadow-glow">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Access Controls</h3>
                <p className="text-sm text-muted-foreground">
                  Strict role-based access and multi-factor authentication for staff
                </p>
              </div>

              <div className="text-center p-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-hero mb-4 shadow-glow">
                  <FileText className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Regular Audits</h3>
                <p className="text-sm text-muted-foreground">
                  Third-party security audits and continuous monitoring
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Your Rights */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <div className="animate-fade-in">
            <h2 className="text-3xl font-bold mb-6">Your Rights</h2>
            <p className="text-lg text-muted-foreground mb-8">
              You have the following rights regarding your personal data:
            </p>

            <div className="space-y-4">
              <div className="flex gap-4 p-4 bg-background rounded-lg border border-border">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Right to Access</h3>
                  <p className="text-sm text-muted-foreground">
                    Request a copy of all personal data we hold about you
                  </p>
                </div>
              </div>

              <div className="flex gap-4 p-4 bg-background rounded-lg border border-border">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Right to Rectification</h3>
                  <p className="text-sm text-muted-foreground">
                    Update or correct any inaccurate information
                  </p>
                </div>
              </div>

              <div className="flex gap-4 p-4 bg-background rounded-lg border border-border">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Right to Deletion</h3>
                  <p className="text-sm text-muted-foreground">
                    Request deletion of your personal data (subject to legal obligations)
                  </p>
                </div>
              </div>

              <div className="flex gap-4 p-4 bg-background rounded-lg border border-border">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Right to Data Portability</h3>
                  <p className="text-sm text-muted-foreground">
                    Export your data in a machine-readable format
                  </p>
                </div>
              </div>

              <div className="flex gap-4 p-4 bg-background rounded-lg border border-border">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Right to Object</h3>
                  <p className="text-sm text-muted-foreground">
                    Opt out of certain data processing activities
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <Button className="bg-gradient-hero hover:opacity-90 shadow-glow">
                <Link to="#contact">Manage Your Data</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Policy Updates */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="animate-fade-in">
            <h2 className="text-3xl font-bold mb-6">Policy Updates</h2>
            <div className="p-6 bg-muted/50 rounded-lg border border-border">
              <p className="text-muted-foreground mb-4">
                We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors.
              </p>
              <p className="text-muted-foreground mb-4">
                When we make significant changes, we will:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Notify you via email at least 30 days before changes take effect</li>
                <li>Display a prominent notice on our platform</li>
                <li>Update the "Last Updated" date at the top of this policy</li>
                <li>Provide a summary of key changes</li>
              </ul>
              <p className="text-muted-foreground mt-4">
                Your continued use of EduVerse AI after policy updates constitutes acceptance of the revised terms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <div className="animate-fade-in text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-hero mb-6 shadow-glow">
              <Mail className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold mb-4">Questions About Your Privacy?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please don't hesitate to contact us.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto text-left">
              <div className="p-6 bg-background rounded-lg border border-border">
                <h3 className="font-semibold mb-2">General Privacy Inquiries</h3>
                <p className="text-sm text-muted-foreground mb-2">privacy@eduverse.ai</p>
                <p className="text-xs text-muted-foreground">Response within 48 hours</p>
              </div>

              <div className="p-6 bg-background rounded-lg border border-border">
                <h3 className="font-semibold mb-2">Data Protection Officer</h3>
                <p className="text-sm text-muted-foreground mb-2">dpo@eduverse.ai</p>
                <p className="text-xs text-muted-foreground">For GDPR-related requests</p>
              </div>
            </div>

            <div className="mt-8">
              <Link to="/">
                <Button variant="outline" className="mr-4">
                  Back to Home
                </Button>
              </Link>
              <Link to="/#modules">
                <Button className="bg-gradient-hero hover:opacity-90 shadow-glow">
                  Explore Modules
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
