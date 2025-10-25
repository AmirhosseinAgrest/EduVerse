import React from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  BookOpen,
  Download,
  Globe,
  Map,
  ArrowRight,
  HardDrive,
} from "lucide-react";

export default function OfflineLearning() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 sm:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-blue-500/10 to-transparent" />
        <div className="container relative px-4 sm:px-6 text-center space-y-6 animate-fade-in">
          <Badge className="bg-gradient-to-r from-purple-600 to-blue-600 text-white border-0 shadow-glow">
            Offline Learning
          </Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
            Learn Anytime,{" "}
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Anywhere
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Download once, use forever. EduBridge’s offline resources bring
            high‑quality education to learners without reliable internet access.
          </p>
        </div>
      </section>

      {/* Downloadable Courses */}
      <section className="py-20 sm:py-32 relative">
        <div className="container px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Downloadable Courses
              </span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Access foundational knowledge in programming, math, and science —
              all available offline.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6 border-2 hover:border-purple-500/50 transition-all duration-300 hover:shadow-glow bg-card/50 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-4">
                <BookOpen className="h-6 w-6 text-purple-600" />
                <h3 className="text-xl font-bold">Programming Basics</h3>
              </div>
              <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                <li>
                  <a
                    href="https://basescripts.com/wp-content/uploads/2024/11/Python-Tutorial-for-Beginners-Guide.pdf"
                    download
                    className="text-blue-600 underline"
                  >
                    Python for Beginners (PDF)
                  </a>
                </li>
                <li>
                  <a
                    href="https://archive.org/download/Vismay/1425_JavaScript-from-Beginner-to-Professional.pdf"
                    download
                    className="text-blue-600 underline"
                  >
                    JavaScript from Beginner to Pro (PDF)
                  </a>
                </li>
              </ul>
            </Card>

            <Card className="p-6 border-2 hover:border-blue-500/50 transition-all duration-300 hover:shadow-glow bg-card/50 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-4">
                <HardDrive className="h-6 w-6 text-blue-600" />
                <h3 className="text-xl font-bold">STEM Foundations</h3>
              </div>
              <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                <li>
                  <a
                    href="https://www.gutenberg.org/files/57355/57355-pdf.pdf"
                    download
                    className="text-blue-600 underline"
                  >
                    Foundations of Mathematics (PDF)
                  </a>
                </li>
                <li>
                  <a
                    href="https://physics.duke.edu/~rgb/Class/intro-physics-1/intro-physics-1.pdf"
                    download
                    className="text-blue-600 underline"
                  >
                    Introductory Physics (PDF)
                  </a>
                </li>
                <li>
                  <a
                    href="https://chemhaven.org/che101/book/chemistry_-_t_poulsen.pdf"
                    download
                    className="text-blue-600 underline"
                  >
                    Basic Chemistry (PDF)
                  </a>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Maps & Country Data */}
      <section className="py-20 sm:py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-muted/30 to-transparent" />
        <div className="container px-4 sm:px-6 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-sm font-medium text-blue-600">
            <Map className="h-4 w-4" /> Global Resources
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Explore{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Maps & Country Data
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Offline access to world maps and country datasets for geography and
            social studies learners.
          </p>
          <div className="grid md:grid-cols-2 gap-8 mt-8">
            <Card className="p-6 border-2 hover:border-blue-500/50 transition-all duration-300 hover:shadow-glow bg-card/50 backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-2">World Maps</h3>
              <a
                href="https://archive.org/download/world-maps-pdf/world-maps-pdf.pdf"
                download
                className="text-blue-600 underline"
              >
                Download World Maps (PDF)
              </a>
            </Card>
            <Card className="p-6 border-2 hover:border-purple-500/50 transition-all duration-300 hover:shadow-glow bg-card/50 backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-2">Country Data</h3>
              <a
                href="https://www.worlddata.info/downloads/general-country-data.csv"
                download
                className="text-blue-600 underline"
              >
                Download Country Data (CSV)
              </a>
            </Card>
          </div>
        </div>
      </section>

      {/* Notes */}
      <section className="py-20 sm:py-32 relative">
        <div className="container px-4 sm:px-6 max-w-3xl mx-auto">
          <Card className="p-8 border-2 bg-gradient-to-br from-purple-500/5 to-blue-500/5 backdrop-blur-sm animate-fade-in">
            <p className="text-muted-foreground leading-relaxed mb-4">
              ✅ All files are fully offline and can be accessed anytime after a
              single download.  
              ❗ Please ensure your device has enough storage space before
              downloading.
            </p>
            <p className="text-lg font-semibold text-green-700 text-center">
              Education for everyone, anytime, anywhere 🌱
            </p>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-32 text-center">
        <div className="container px-4 sm:px-6 space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Ready to{" "}
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Start Learning Offline
            </span>
            ?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Download resources today and carry knowledge with you — no internet
            required.
          </p>
                    <Button
            size="lg"
            className="bg-gradient-hero hover:opacity-90 shadow-glow"
          >
            <Download className="mr-2 h-5 w-5" />
            Start Downloading <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
