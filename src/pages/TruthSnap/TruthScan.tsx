// src/components/TruthSnap.tsx
import React, { useMemo, useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Loader2, Shield, CheckCircle, AlertTriangle, PencilLine, ChevronLeft } from "lucide-react";

import { StorageModeToggle } from "@/components/StorageModeToggle";
import { buildPrompt } from "@/lib/prompt";
import { stripFences, safeParseJSON, uid } from "@/lib/utils";
import { ClaimScanResult, ScanStrength, StrongScanInput } from "@/lib/types";
import { getUserFromLocal, saveScanLocal } from "@/lib/storage";
import { saveScanServer } from "@/lib/api";

const TruthSnap: React.FC = () => {
  const user = useMemo(() => getUserFromLocal(), []);
  const [claim, setClaim] = useState("");
  const [loading, setLoading] = useState(false);
  const [score, setScore] = useState<number | null>(null);
  const [explanation, setExplanation] = useState("");
  const [sources, setSources] = useState<{ title?: string; url: string }[]>([]);
  const [storageMode, setStorageMode] = useState<"server" | "local">(user ? "server" : "local");
  const [scanMode, setScanMode] = useState<ScanStrength>("basic");
  const [strongInputs, setStrongInputs] = useState<StrongScanInput>({
    context: "",
    keywords: [],
    regionBias: "",
    timeframe: "",
    desiredSources: [],
  });

  const analyzeClaim = async () => {
  if (!claim.trim()) return;
  setLoading(true);
  setScore(null);
  setExplanation("");
  setSources([]);

  try {
    const prompt = buildPrompt(claim, scanMode, strongInputs);

    const response = await fetch("http://localhost:4000/api/github-ai", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt })
    });

    const result = await response.json();

    // تشخیص ساختار پاسخ از Gemini یا GitHub AI
    let raw = "";

    if (result.candidates?.[0]?.content?.parts?.[0]?.text) {
      raw = stripFences(result.candidates[0].content.parts[0].text.trim());
    } else if (typeof result.reply === "string") {
      raw = stripFences(result.reply.trim());
    } else {
      throw new Error("Invalid response format");
    }

    const parsed = safeParseJSON<any>(raw);

    if (!parsed || typeof parsed.score !== "number" || typeof parsed.explanation !== "string") {
      throw new Error("Invalid parsed content");
    }

    const normalizedSources = Array.isArray(parsed.sources)
      ? parsed.sources
          .filter((s: any) => s && typeof s.url === "string")
          .map((s: any) => ({
            title: typeof s.title === "string" ? s.title : undefined,
            url: s.url
          }))
      : [];

    setScore(parsed.score);
    setExplanation(parsed.explanation);
    setSources(normalizedSources);

    const scan: ClaimScanResult = {
      id: uid(),
      claim,
      score: parsed.score,
      explanation: parsed.explanation,
      sources: normalizedSources,
      model: result.candidates ? "gemini-2.5-flash" : "github-copilot",
      createdAt: new Date().toISOString(),
      inputs: scanMode === "strong" ? strongInputs : undefined,
      mode: scanMode,
      storage: storageMode,
      userEmail: user?.email,
    };

    if (storageMode === "server" && user?.email) {
      await saveScanServer(scan);
    } else {
      saveScanLocal(scan);
    }
  } catch (err) {
    console.error("AI error:", err);
    setExplanation("❌ Error analyzing the claim. Please try again.");
  } finally {
    setLoading(false);
  }
};

  const scoreColor =
    score === null
      ? ""
      : score >= 70
        ? "text-green-600"
        : score >= 40
          ? "text-yellow-600"
          : "text-red-600";

  return (
    <div className="min-h-screen bg-background flex flex-col">
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

      <section className="relative py-20 px-4 bg-gradient-to-br from-blue-500/10 via-green-500/10 to-transparent">
        <div className="container max-w-3xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-sm font-medium text-blue-600">
            <Shield className="h-4 w-4" />
            News Verification
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
            TruthSnap{" "}
            <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              News Credibility Checker
            </span>
          </h1>
          <p className="text-lg text-muted-foreground">
            Paste a news claim and let AI verify its credibility. Choose storage and scan strength for your needs.
          </p>
        </div>
      </section>

      <section className="container max-w-3xl mx-auto px-4 -mt-12 mb-20">
        <Card className="p-8 border-2 shadow-glow bg-card/50 backdrop-blur-sm space-y-6">
          <div className="grid gap-6">
            <StorageModeToggle user={user} mode={storageMode} onChange={setStorageMode} />

            <div className="space-y-2">
              <label className="text-sm font-medium">Claim</label>
              <div className="relative">
                <textarea
                  value={claim}
                  onChange={(e) => setClaim(e.target.value)}
                  placeholder="e.g. NASA announced one-way trips to Mars could be possible by 2030."
                  className="w-full h-32 p-4 pl-12 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-blue-500 outline-none resize-none"
                />
                <div className="absolute top-4 left-4 text-muted-foreground">
                  <PencilLine className="h-5 w-5" />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Scan strength</label>
              <div className="flex gap-3">
                <Button
                  variant={scanMode === "basic" ? "default" : "outline"}
                  onClick={() => setScanMode("basic")}
                >
                  Basic
                </Button>
                <Button
                  variant={scanMode === "strong" ? "default" : "outline"}
                  onClick={() => setScanMode("strong")}
                >
                  Strong scan
                </Button>
              </div>
            </div>

            {scanMode === "strong" && (
              <div className="grid gap-4 rounded-lg border p-4">
                <div className="text-sm font-medium">Provide more context for a stronger check</div>
                <input
                  className="border rounded p-2"
                  placeholder="Context (optional)"
                  value={strongInputs.context || ""}
                  onChange={(e) => setStrongInputs((s) => ({ ...s, context: e.target.value }))}
                />
                <input
                  className="border rounded p-2"
                  placeholder="Keywords (comma-separated)"
                  value={(strongInputs.keywords || []).join(", ")}
                  onChange={(e) =>
                    setStrongInputs((s) => ({
                      ...s,
                      keywords: e.target.value
                        .split(",")
                        .map((k) => k.trim())
                        .filter(Boolean),
                    }))
                  }
                />
                <div className="grid sm:grid-cols-3 gap-3">
                  <input
                    className="border rounded p-2"
                    placeholder="Region/Language focus"
                    value={strongInputs.regionBias || ""}
                    onChange={(e) => setStrongInputs((s) => ({ ...s, regionBias: e.target.value }))}
                  />
                  <input
                    className="border rounded p-2"
                    placeholder="Timeframe (e.g., last 6 months)"
                    value={strongInputs.timeframe || ""}
                    onChange={(e) => setStrongInputs((s) => ({ ...s, timeframe: e.target.value }))}
                  />
                  <input
                    className="border rounded p-2"
                    placeholder="Preferred sources (comma-separated)"
                    value={(strongInputs.desiredSources || []).join(", ")}
                    onChange={(e) =>
                      setStrongInputs((s) => ({
                        ...s,
                        desiredSources: e.target.value
                          .split(",")
                          .map((k) => k.trim())
                          .filter(Boolean),
                      }))
                    }
                  />
                </div>
              </div>
            )}

            <div className="flex justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-green-600 hover:opacity-90 shadow-glow"
                onClick={analyzeClaim}
                disabled={loading}
              >
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" /> Analyzing...
                  </>
                ) : (
                  "Analyze Claim"
                )}
              </Button>
            </div>
          </div>

          {score !== null && (
            <div className="mt-8 space-y-4">
              <div className="text-sm text-muted-foreground">
                Saved to {storageMode === "server" ? "Server" : "Local Storage"} · Mode: {scanMode}
              </div>

              <div className="text-xl font-semibold">
                Claim: <span className="text-muted-foreground">{claim}</span>
              </div>

              <div className="text-2xl font-bold">
                Credibility Score:{" "}
                <span className={scoreColor}>{score} / 100</span>
              </div>

              <div className="text-muted-foreground leading-relaxed">{explanation}</div>

              <div className="space-y-2">
                <div className="font-medium">Sources checked</div>
                {sources.length ? (
                  <ul className="list-disc pl-6 space-y-1">
                    {sources.map((s, idx) => (
                      <li key={idx}>
                        <a href={s.url} className="text-blue-600 hover:underline" target="_blank" rel="noreferrer">
                          {s.title || s.url}
                        </a>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-sm text-muted-foreground">No source links returned.</p>
                )}
              </div>

              <div className="flex justify-center gap-4 mt-4">
                {score >= 70 ? (
                  <CheckCircle className="h-8 w-8 text-green-600" />
                ) : (
                  <AlertTriangle className="h-8 w-8 text-red-600" />
                )}
              </div>

              <div className="flex justify-between items-center mt-6">
                <Link
                  to="/dashboard"
                  className="text-sm text-blue-600 hover:underline"
                  aria-label="Go to dashboard"
                >
                  View scans in Dashboard (export PDF, search, delete)
                </Link>
                <span className="text-sm text-muted-foreground">
                  Tip: Strong scan with context often yields better results.
                </span>
              </div>
            </div>
          )}
        </Card>
      </section>

      <Footer />
    </div>
  );
};

export default TruthSnap;