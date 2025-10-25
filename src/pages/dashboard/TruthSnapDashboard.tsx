import React, { useEffect, useMemo, useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  AlertTriangle,
  Newspaper,
  ChevronLeft, 
  Search,
  FileText,
  Trash2,
  Download,
  BarChart3,
  Shield,
  Clock,
  Database,
} from "lucide-react";
import {
  getUserFromLocal,
  getScansLocal,
  deleteScanLocal,
} from "@/lib/storage";
import { listScansServer, deleteScanServer } from "@/lib/api";
import { ClaimScanResult } from "@/lib/types";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

const Dashboard: React.FC = () => {
  const user = useMemo(() => getUserFromLocal(), []);
  const [scans, setScans] = useState<ClaimScanResult[]>([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const load = async () => {
      if (user?.email) {
        const res = await listScansServer(user.email);
        if (res.ok) setScans(res.scans);
      } else {
        setScans(getScansLocal());
      }
    };
    load();
  }, [user?.email]);

  const filtered = scans.filter((s) => {
    const q = query.toLowerCase();
    return (
      s.claim.toLowerCase().includes(q) ||
      s.explanation.toLowerCase().includes(q) ||
      s.sources.some((src) =>
        (src.title || src.url).toLowerCase().includes(q)
      )
    );
  });

  const handleDelete = async (id: string, storage: "server" | "local") => {
    if (storage === "server" && user?.email) {
      const res = await deleteScanServer(id);
      if (res.ok) {
        setScans(scans.filter((s) => s.id !== id));
      }
    } else {
      deleteScanLocal(id);
      setScans(getScansLocal());
    }
  };

  const exportPDF = (scan: ClaimScanResult) => {
    const doc = new jsPDF({ orientation: "portrait", unit: "mm", format: "a4" });
    doc.setFont("helvetica", "bold");
    doc.setFontSize(18);
    doc.setTextColor("#2c3e50");
    doc.text("TruthSnap Scan Report", 105, 20, { align: "center" });

    doc.setFontSize(12);
    doc.setFont("helvetica", "normal");
    doc.text(`Date: ${new Date(scan.createdAt).toLocaleString()}`, 20, 35);
    doc.text(`Mode: ${scan.mode}`, 20, 42);
    doc.text(`Storage: ${scan.storage}`, 20, 49);
    doc.text(`User: ${scan.userEmail || "Unknown"}`, 20, 56);

    doc.setFontSize(14);
    doc.text("Claim", 20, 70);
    doc.setFontSize(12);
    doc.text(scan.claim, 20, 78, { maxWidth: 170 });

    doc.setFontSize(14);
    doc.text("Credibility Score", 20, 90);
    doc.setFontSize(12);
    doc.text(`${scan.score} / 100`, 20, 98);

    doc.setFontSize(14);
    doc.text("Explanation", 20, 110);
    doc.setFontSize(12);
    doc.text(scan.explanation, 20, 118, { maxWidth: 170 });

    doc.setFontSize(14);
    doc.text("Sources Checked", 20, 130);

    const sourceRows = scan.sources.map((s, i) => [
      `${i + 1}`,
      s.title || "Untitled",
      s.url,
    ]);

    autoTable(doc, {
      startY: 135,
      head: [["#", "Title", "URL"]],
      body: sourceRows,
    });

    doc.save(`truthsnap_${scan.id}.pdf`);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
<div className="container px-4 sm:px-6 pt-24 pb-6">
        <Link
          to="/"
          className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <ChevronLeft className="h-4 w-4 mr-1" />
          Back to Modules
        </Link>
      </div>
      {/* Hero Section */}
      <section className="relative py-16 sm:py-24 px-4 overflow-hidden">
  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-green-500/10 to-transparent" />
  <div className="container relative z-10 max-w-5xl mx-auto">
    <div className="flex items-center gap-2 mb-4">
      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-sm font-medium text-blue-600">
        <Newspaper className="h-4 w-4" />
        TruthSnap
      </div>
    </div>

    <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
      Welcome to{" "}
      <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
        TruthSnap Pro
      </span>
    </h1>
    <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
      Scan, verify, and explore educational content with AI-powered accuracy and transparency.
    </p>

    {/* Auth notice */}
    {!user?.email && (
      <Card className="mt-6 p-4 border-2 bg-amber-500/10 border-amber-500/30">
        <div className="flex items-start gap-3">
          <AlertTriangle className="h-5 w-5 text-amber-600 mt-0.5" />
          <div className="space-y-1">
            <div className="text-amber-800 font-medium">
              You’re currently browsing as a guest. Sign up to save your scans and sync across devices.
            </div>
            <div className="flex gap-2">
              <Link to="/signup">
                <Button size="sm" className="bg-gradient-hero hover:opacity-90 shadow-glow">
                  Sign Up
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/truthsnap">
                <Button size="sm" variant="outline" className="border-2">
                  Explore TruthSnap
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </Card>
    )}
  </div>
</section>

      {/* Search Bar */}
      <div className="container max-w-4xl mx-auto px-4 -mt-8">
        <div className="flex items-center gap-3 bg-card border rounded-lg p-3 shadow-sm">
          <Search className="h-5 w-5 text-muted-foreground" />
          <Input
            placeholder="Search in claims, explanations, or sources..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 border-0 focus:ring-0"
          />
        </div>
      </div>

      {/* Stats Section */}
      <section className="container max-w-5xl mx-auto px-4 py-12 grid sm:grid-cols-3 gap-6">
        <Card className="p-6 text-center border-2 hover:border-blue-500/50 transition">
          <Shield className="h-8 w-8 mx-auto text-blue-600 mb-2" />
          <div className="text-3xl font-bold">{scans.length}</div>
          <div className="text-muted-foreground">Total Scans</div>
        </Card>
        <Card className="p-6 text-center border-2 hover:border-green-500/50 transition">
          <BarChart3 className="h-8 w-8 mx-auto text-green-600 mb-2" />
          <div className="text-3xl font-bold">
            {scans.length > 0
              ? Math.round(
                  scans.reduce((acc, s) => acc + s.score, 0) / scans.length
                )
              : 0}
          </div>
          <div className="text-muted-foreground">Avg. Score</div>
        </Card>
        <Card className="p-6 text-center border-2 hover:border-purple-500/50 transition">
          <Database className="h-8 w-8 mx-auto text-purple-600 mb-2" />
          <div className="text-3xl font-bold">
            {scans.reduce((acc, s) => acc + s.sources.length, 0)}
          </div>
          <div className="text-muted-foreground">Sources Checked</div>
        </Card>
      </section>

      {/* Scans List */}
      <section className="container max-w-5xl mx-auto px-4 py-12">
  <h2 className="text-2xl font-bold mb-6">Your Scans</h2>
  <div className="grid gap-6">
    {filtered.length === 0 ? (
      <Card className="p-6 text-center text-muted-foreground">
        No scans yet. Run an analysis and check back here.
      </Card>
    ) : (
      filtered.map((scan, idx) => (
        <Card
          key={scan.id}
          className="p-6 border-2 hover:border-blue-500/50 transition-all duration-300 hover:shadow-glow animate-fade-in"
          style={{ animationDelay: `${idx * 100}ms` }}
        >
          {/* Header Row */}
          <div className="flex justify-between items-center mb-4">
            <div className="text-sm text-muted-foreground flex items-center gap-2">
              <Clock className="h-4 w-4" />
              {new Date(scan.createdAt).toLocaleString()} · {scan.storage} · {scan.mode}
            </div>
          </div>

          {/* Claim */}
          <div className="font-semibold text-lg flex items-center gap-2 mb-2">
            <FileText className="h-5 w-5 text-blue-600" />
            Claim
          </div>
          <p className="text-muted-foreground mb-4">{scan.claim}</p>

          {/* Score */}
          <div className="font-semibold text-lg">Credibility Score</div>
          <div className="text-green-600 font-bold text-xl mb-4">
            {scan.score} / 100
          </div>

          {/* Explanation */}
          <div className="font-semibold text-lg">Explanation</div>
          <p className="text-muted-foreground mb-4">{scan.explanation}</p>

          {/* Sources */}
          <div className="font-semibold text-lg">Sources Checked</div>
          <ul className="list-disc pl-6 text-muted-foreground mb-4">
            {scan.sources.map((s, idx) => (
              <li key={idx}>
                <a
                  href={s.url}
                  className="text-blue-600 hover:underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  {s.title || s.url}
                </a>
              </li>
            ))}
          </ul>

          {/* Actions */}
          <div className="flex gap-3 pt-2">
            <Button
              variant="outline"
              onClick={() => exportPDF(scan)}
              className="flex items-center gap-2"
            >
              <Download className="h-4 w-4" />
              Export PDF
            </Button>
            <Button
              variant="destructive"
              onClick={() => handleDelete(scan.id, scan.storage)}
              className="flex items-center gap-2"
            >
              <Trash2 className="h-4 w-4" />
              Delete
            </Button>
          </div>
        </Card>
      ))
    )}
  </div>
</section>

      {/* CTA Section */}
      <section className="py-20 sm:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-green-500/10 to-transparent" />
        <div className="container relative px-4 sm:px-6">
          <Card className="max-w-4xl mx-auto p-8 sm:p-12 text-center border-2 bg-gradient-to-br from-blue-500/5 to-green-500/5 backdrop-blur-sm space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Ready to Run a New Scan?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Keep your learning materials trustworthy. Start a new verification now.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-hero hover:opacity-90 shadow-glow">
                Start New Scan
              </Button>
              <Button size="lg" variant="outline" className="border-2">
                Learn More
              </Button>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Dashboard;