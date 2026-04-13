"use client";

import { useCallback, useState } from "react";
import { Mail } from "lucide-react";

const EMAIL = "hello@envisionds.com.au";

export default function CopyEmail() {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback: open mailto if clipboard API is unavailable
      window.location.href = `mailto:${EMAIL}`;
    }
  }, []);

  return (
    <div className="relative inline-flex flex-col items-start pt-2">
      <button
        type="button"
        onClick={handleCopy}
        className="flex items-center gap-3 text-sm text-cyan-300 transition hover:text-cyan-200"
      >
        <Mail className="h-4 w-4 shrink-0" />
        {EMAIL}
      </button>

      <span
        className={`mt-1.5 text-xs text-cyan-400 transition-opacity duration-200 ${
          copied ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        Copied to clipboard
      </span>
    </div>
  );
}
