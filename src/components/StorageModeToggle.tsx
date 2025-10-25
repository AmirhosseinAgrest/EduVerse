// src/components/StorageModeToggle.tsx
import React from "react";
import { StorageMode, UserProfile } from "@/lib/types";

type Props = {
  user: UserProfile | null;
  mode: StorageMode;
  onChange: (m: StorageMode) => void;
};

export const StorageModeToggle: React.FC<Props> = ({ user, mode, onChange }) => {
  if (!user) {
    return (
      <div className="rounded-lg border p-4 bg-card">
        <div className="font-medium">Storage</div>
        <p className="text-sm text-muted-foreground mt-1">
          You’re not logged in. Results will be saved to this device (Local Storage).
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-lg border p-4 bg-card space-y-3">
      <div className="font-medium">Storage preference</div>
      <div className="grid sm:grid-cols-2 gap-3">
        <label className={`flex items-start gap-3 rounded-lg border p-3 cursor-pointer ${mode === "server" ? "ring-2 ring-blue-500" : ""}`}>
          <input
            type="radio"
            name="storage"
            checked={mode === "server"}
            onChange={() => onChange("server")}
            className="mt-1"
          />
          <div>
            <div className="font-medium">Server (default)</div>
            <p className="text-sm text-muted-foreground">
              Access your scans anywhere by signing in with your email and password.
            </p>
          </div>
        </label>

        <label className={`flex items-start gap-3 rounded-lg border p-3 cursor-pointer ${mode === "local" ? "ring-2 ring-blue-500" : ""}`}>
          <input
            type="radio"
            name="storage"
            checked={mode === "local"}
            onChange={() => onChange("local")}
            className="mt-1"
          />
          <div>
            <div className="font-medium">Local only (privacy-focused)</div>
            <p className="text-sm text-muted-foreground">
              Save scans on this device only. Best for maximum privacy.
            </p>
          </div>
        </label>
      </div>
    </div>
  );
};