// src/lib/storage.ts
import { ClaimScanResult, UserProfile } from "./types";

const USER_KEY = "user";
const SCANS_KEY = "truthsnap_scans";

export function getUserFromLocal(): UserProfile | null {
  try {
    const raw = localStorage.getItem(USER_KEY);
    if (!raw) return null;
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

export function saveScanLocal(scan: ClaimScanResult) {
  const raw = localStorage.getItem(SCANS_KEY);
  const arr: ClaimScanResult[] = raw ? JSON.parse(raw) : [];
  arr.unshift(scan);
  localStorage.setItem(SCANS_KEY, JSON.stringify(arr));
}

export function getScansLocal(): ClaimScanResult[] {
  const raw = localStorage.getItem(SCANS_KEY);
  return raw ? JSON.parse(raw) : [];
}

export function deleteScanLocal(id: string) {
  const arr = getScansLocal().filter((s) => s.id !== id);
  localStorage.setItem(SCANS_KEY, JSON.stringify(arr));
}