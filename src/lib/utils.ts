// src/lib/utils.ts
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// ترکیب کلاس‌ها برای Tailwind
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// پارس امن JSON
export function safeParseJSON<T = any>(raw: string): T | null {
  try {
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

// حذف بلاک‌کدهای ```json
export function stripFences(raw: string) {
  return raw.replace(/^```json\s*/i, "").replace(/```$/i, "").trim();
}

// ساختن یک id یکتا
export function uid(prefix = "scan") {
  return `${prefix}_${Math.random().toString(36).slice(2, 10)}_${Date.now()}`;
}