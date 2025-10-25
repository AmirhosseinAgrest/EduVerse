// src/lib/api.ts
import { ClaimScanResult } from "./types";

const BASE = "/api/truthsnap";

/**
 * ذخیره اسکن در سرور
 */
export async function saveScanServer(scan: ClaimScanResult) {
  try {
    const res = await fetch(`${BASE}/scans`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(scan)
    });

    if (!res.ok) throw new Error("Failed to save scan");

    const data = await res.json();
    return { ok: true, id: data.id };
  } catch (err) {
    console.error("saveScanServer error:", err);
    return { ok: false, id: null };
  }
}

/**
 * دریافت لیست اسکن‌های کاربر از سرور
 */
export async function listScansServer(userEmail: string) {
  try {
    const res = await fetch("/api/truthsnap/list", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: userEmail })
    });

    if (!res.ok) throw new Error("Failed to fetch scans");

    const data = await res.json();
    return { ok: true, scans: data.scans };
  } catch (err) {
    console.error("listScansServer error:", err);
    return { ok: false, scans: [] };
  }
}

/**
 * حذف اسکن از سرور
 */
export async function deleteScanServer(id: string) {
  try {
    const res = await fetch(`${BASE}/scans/${id}`, {
      method: "DELETE"
    });

    if (!res.ok) throw new Error("Failed to delete scan");

    const data = await res.json();
    return { ok: true, id: data.id };
  } catch (err) {
    console.error("deleteScanServer error:", err);
    return { ok: false };
  }
}
