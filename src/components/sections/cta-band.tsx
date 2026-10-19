import * as React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";

export interface CtaBandProps {
  title: string;
  body: string;
  action: string;
  href?: string;
  /** "light" tonal panel or "dark" inverted panel */
  tone?: "light" | "dark";
}

/** Single-purpose closing call to action; one headline, one button. */
export function CtaBand({
  title,
  body,
  action,
  href = "/contact",
  tone = "light",
}: CtaBandProps) {
  const dark = tone === "dark";
  return (
    <Reveal
      className={`rounded-[28px] px-6 py-14 sm:rounded-[36px] sm:px-14 sm:py-20 ${
        dark ? "bg-foreground text-background" : "bg-muted text-foreground"
      }`}
    >
      <div className="flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
        <div className="max-w-2xl space-y-5">
          <h2 className="text-headline">{title}</h2>
          <p
            className={`text-lede max-w-xl ${
              dark ? "opacity-70" : "text-muted-foreground"
            }`}
          >
            {body}
          </p>
        </div>
        <Link
          href={href}
          className={`press group inline-flex h-14 shrink-0 items-center justify-center gap-2 rounded-full px-8 text-base font-medium hover:opacity-90 ${
            dark
              ? "bg-background text-foreground"
              : "bg-foreground text-background"
          }`}
        >
          <span>{action}</span>
          <ArrowUpRight className="h-5 w-5 transition-transform duration-200 [transition-timing-function:var(--ease-out)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </div>
    </Reveal>
  );
}
