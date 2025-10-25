// src/lib/prompt.ts
import { StrongScanInput } from "./types";

export function buildPrompt(claim: string, mode: "basic" | "strong", inputs?: StrongScanInput) {
  const base = `You are a rigorous fact-checking assistant.
Fact-check the following news claim: "${claim}".
Return ONLY a JSON object with fields:
"score" (0-100 credibility),
"explanation" (short paragraph),
"sources" (array of { "title": string optional, "url": string } listing the exact links you checked).
Do not include any text outside the JSON.`;

  if (mode === "strong") {
    const ctx = [
      inputs?.context ? `Context: ${inputs.context}` : null,
      inputs?.keywords?.length ? `Keywords: ${inputs.keywords.join(", ")}` : null,
      inputs?.regionBias ? `Region/Language focus: ${inputs.regionBias}` : null,
      inputs?.timeframe ? `Timeframe for sources: ${inputs.timeframe}` : null,
      inputs?.desiredSources?.length ? `Preferred sources: ${inputs.desiredSources.join(", ")}` : null,
    ].filter(Boolean);

    return `${base}\nUse these extra hints to improve accuracy:\n${ctx.join("\n")}`;
  }

  return base;
}