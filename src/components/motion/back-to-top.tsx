"use client";

import * as React from "react";
import { ArrowUp } from "lucide-react";

export function BackToTop() {
  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="press group inline-flex h-11 cursor-pointer items-center gap-2 rounded-full border border-current/25 px-5 text-sm opacity-90 hover:opacity-100"
    >
      <span>Back to top</span>
      <ArrowUp className="h-4 w-4 transition-transform duration-200 [transition-timing-function:var(--ease-out)] group-hover:-translate-y-0.5" />
    </button>
  );
}
