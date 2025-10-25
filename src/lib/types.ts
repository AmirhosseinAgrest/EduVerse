// src/lib/types.ts
export type UserProfile = {
  fullName: string;
  email: string;
  role: string;
  country: string;
  underserved: boolean;
};

export type StorageMode = "server" | "local";

export type ScanStrength = "basic" | "strong";

export type StrongScanInput = {
  context?: string;          // توضیح پس‌زمینه
  keywords?: string[];       // کلیدواژه‌ها
  regionBias?: string;       // تمرکز منطقه‌ای/زبانی
  timeframe?: string;        // بازه زمانی منابع
  desiredSources?: string[]; // منابع ترجیحی (مثلاً BBC, AP)
};

export type ClaimScanResult = {
  id: string;
  claim: string;
  score: number;
  explanation: string;
  sources: { title?: string; url: string }[];
  model: string;
  createdAt: string;
  inputs?: StrongScanInput;
  mode: ScanStrength;
  storage: StorageMode;
  userEmail?: string;
};