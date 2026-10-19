"use client";

import * as React from "react";

export interface RevealProps extends React.HTMLAttributes<HTMLElement> {
  as?: React.ElementType;
  /** Stagger offset in ms (30-90ms steps read as one cascade). */
  delay?: number;
}

/**
 * Fades and lifts content in once as it enters the viewport.
 * Server render is fully visible, so nothing stays hidden if JS fails.
 * Content already on screen at mount is left alone.
 */
export function Reveal({
  as: Component = "div",
  delay = 0,
  className,
  style,
  children,
  ...props
}: RevealProps) {
  const ref = React.useRef<HTMLElement>(null);
  const [state, setState] = React.useState<"idle" | "hidden" | "shown">("idle");

  React.useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;
    if (node.getBoundingClientRect().top < window.innerHeight * 0.92) {
      return;
    }
    setState("hidden");
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setState("shown");
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.05 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Component
      ref={ref}
      data-reveal={state === "idle" ? undefined : state}
      className={className}
      style={{ ...style, ["--d" as string]: `${delay}ms` }}
      {...props}
    >
      {children}
    </Component>
  );
}
