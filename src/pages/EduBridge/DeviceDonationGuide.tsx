import React from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Smartphone,
  Package,
  ShieldCheck,
  ArrowRight,
  Info,
  ClipboardCheck,
} from "lucide-react";

export default function DeviceDonationGuide() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 sm:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-green-500/10 to-transparent" />
        <div className="container relative px-4 sm:px-6 text-center space-y-6 animate-fade-in">
          <Badge className="bg-gradient-to-r from-blue-600 to-green-600 text-white border-0 shadow-glow">
            Device Donation Guide
          </Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
            Give Devices,{" "}
            <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              Empower Futures
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            By donating your phone, tablet, or laptop, you create a bridge to
            education for underserved students. Follow these steps to prepare
            and send your device securely.
          </p>
        </div>
      </section>

      {/* Preparation Steps */}
      <section className="py-20 sm:py-32 relative">
        <div className="container px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                Preparation Steps
              </span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Ensure your device is ready for a safe and impactful donation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6 border-2 hover:border-blue-500/50 transition-all duration-300 hover:shadow-glow bg-card/50 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-4">
                <ClipboardCheck className="h-6 w-6 text-blue-600" />
                <h3 className="text-xl font-bold">Device Check</h3>
              </div>
              <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                <li>Ensure the device powers on and charges properly</li>
                <li>Screen and battery in usable condition</li>
                <li>Note down model, storage, and battery health</li>
              </ul>
            </Card>

            <Card className="p-6 border-2 hover:border-green-500/50 transition-all duration-300 hover:shadow-glow bg-card/50 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-4">
                <ShieldCheck className="h-6 w-6 text-green-600" />
                <h3 className="text-xl font-bold">Data Security</h3>
              </div>
              <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                <li>Factory reset to remove all personal data</li>
                <li>Sign out of Google, Apple ID, or other accounts</li>
                <li>Optional: follow our step‑by‑step wipe guide</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Shipping Instructions */}
      <section className="py-20 sm:py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-muted/30 to-transparent" />
        <div className="container px-4 sm:px-6 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-sm font-medium text-blue-600">
            <Package className="h-4 w-4" /> Shipping
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Safe & Easy{" "}
            <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              Delivery
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Once prepared, send your device to one of our EduBridge collection
            centers or contact our team for pickup coordination.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-gradient-hero hover:opacity-90 shadow-glow"
          >
            <a
              href="https://example.com/register-device"
              target="_blank"
              rel="noopener noreferrer"
            >
              Register Your Device <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </section>

      {/* Security Notes */}
      <section className="py-20 sm:py-32 relative">
        <div className="container px-4 sm:px-6 max-w-3xl mx-auto">
          <Card className="p-8 border-2 bg-gradient-to-br from-blue-500/5 to-green-500/5 backdrop-blur-sm animate-fade-in">
            <div className="flex items-center gap-3 mb-4">
              <Info className="h-6 w-6 text-green-600" />
              <h3 className="text-xl font-bold">Important Security Notes</h3>
            </div>
            <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
              <li>
                Double‑check that no personal data remains on the device before
                shipping
              </li>
              <li>
                All devices are inspected and refurbished by our technical team
                before redistribution
              </li>
              <li>
                You can request a certificate of data wipe for peace of mind
              </li>
            </ul>
            <p className="text-lg font-semibold text-green-700 text-center mt-6">
              Every device donated lights the path for a student’s brighter
              future 🌱
            </p>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
}