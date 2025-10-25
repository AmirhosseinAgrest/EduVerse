import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import {
  Bitcoin,
  Coins,
  Shield,
  QrCode,
  ArrowRight,
  Info,
} from "lucide-react";

export default function CryptoDonate() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 sm:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 via-green-500/10 to-transparent" />
        <div className="container relative px-4 sm:px-6 text-center space-y-6 animate-fade-in">
          <Badge className="bg-gradient-to-r from-yellow-500 to-green-600 text-white border-0 shadow-glow">
            💸 Crypto Donations
          </Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
            Empower Education with{" "}
            <span className="bg-gradient-to-r from-yellow-500 to-green-600 bg-clip-text text-transparent">
              Cryptocurrency
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            By donating crypto, you directly support underserved students with
            access to devices, internet, and high‑quality learning resources.
            Every transaction builds a bridge to a brighter future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button size="lg" className="bg-gradient-hero hover:opacity-90 shadow-glow">
              Donate Now <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-2">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Wallet Addresses */}
      <section className="py-20 sm:py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-muted/30 to-transparent" />
        <div className="container relative px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
              Secure{" "}
              <span className="bg-gradient-to-r from-yellow-500 to-green-600 bg-clip-text text-transparent">
                Wallet Addresses
              </span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Choose your preferred cryptocurrency and contribute safely. Please
              ensure you use the correct network for each token.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 border-2 hover:border-yellow-500/50 transition-all duration-300 hover:shadow-glow bg-card/50 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-4">
                <Bitcoin className="h-6 w-6 text-yellow-500" />
                <h3 className="text-xl font-bold">Bitcoin (BTC)</h3>
              </div>
              <code className="block text-sm break-all">
                bc1qexamplebtcaddress1234567890
              </code>
            </Card>

            <Card className="p-6 border-2 hover:border-green-500/50 transition-all duration-300 hover:shadow-glow bg-card/50 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-4">
                <Coins className="h-6 w-6 text-green-500" />
                <h3 className="text-xl font-bold">Ethereum (ETH)</h3>
              </div>
              <code className="block text-sm break-all">
                0xExampleEthereumAddress1234567890
              </code>
            </Card>

            <Card className="p-6 border-2 hover:border-blue-500/50 transition-all duration-300 hover:shadow-glow bg-card/50 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="h-6 w-6 text-blue-500" />
                <h3 className="text-xl font-bold">USDT (TRC20)</h3>
              </div>
              <code className="block text-sm break-all">
                TExampleTRC20Address1234567890
              </code>
            </Card>
          </div>
        </div>
      </section>

      {/* QR Code Section */}
      <section className="py-20 sm:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-yellow-500/5 via-green-500/5 to-transparent" />
        <div className="container relative px-4 sm:px-6 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-sm font-medium text-yellow-600">
            <QrCode className="h-4 w-4" /> Quick Access
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            Scan &{" "}
            <span className="bg-gradient-to-r from-yellow-500 to-green-600 bg-clip-text text-transparent">
              Donate Instantly
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            For your convenience, simply scan the QR code below to copy our
            wallet address directly into your crypto wallet app.
          </p>
          <img
            src="https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=bc1qexamplebtcaddress1234567890"
            alt="Crypto QR Code"
            className="mx-auto rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* Transparency & Notes */}
      <section className="py-20 sm:py-32 relative">
        <div className="container px-4 sm:px-6 max-w-3xl mx-auto">
          <Card className="p-8 border-2 bg-gradient-to-br from-yellow-500/5 to-green-500/5 backdrop-blur-sm animate-fade-in">
            <div className="flex items-center gap-3 mb-4">
              <Info className="h-6 w-6 text-green-600" />
              <h3 className="text-xl font-bold">Transparency Matters</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4">
              ✅ All transactions are recorded transparently, and detailed
              reports on how donations are used will be published regularly.  
              ❗ Please ensure you send funds on the correct network (e.g., TRC20
              for USDT).
            </p>
            <p className="text-lg font-semibold text-green-700 text-center">
              Every donation plants a seed for better education 🌱
            </p>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
}