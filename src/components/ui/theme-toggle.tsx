"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ThemeToggleProps {
  className?: string;
  showLabel?: boolean;
}

export function ThemeToggle({
  className,
  showLabel = false,
}: ThemeToggleProps) {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={cn(
        "border-border bg-card text-muted-foreground hover:bg-muted hover:text-foreground focus-visible:ring-ring inline-flex h-9 cursor-pointer items-center justify-center gap-2 rounded-[8px] border px-2.5 font-mono text-xs tracking-wider uppercase transition-colors select-none focus-visible:ring-1 focus-visible:outline-none",
        className
      )}
      aria-label={
        mounted
          ? `Switch to ${isDark ? "light" : "dark"} theme`
          : "Toggle theme"
      }
      title={
        mounted
          ? `Current theme: ${resolvedTheme}. Click to toggle.`
          : "Toggle theme"
      }
    >
      {mounted ? (
        isDark ? (
          <Sun className="h-3.5 w-3.5" />
        ) : (
          <Moon className="h-3.5 w-3.5" />
        )
      ) : (
        <span className="h-3.5 w-3.5" />
      )}
      {showLabel && mounted && <span>{isDark ? "LIGHT" : "DARK"}</span>}
    </button>
  );
}
