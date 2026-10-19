import * as React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { BackToTop } from "@/components/motion/back-to-top";

const NAV = [
  { href: "/work", label: "Selected Work" },
  { href: "/services", label: "Capabilities" },
  { href: "/about", label: "About Studio" },
  { href: "/insights", label: "Engineering Notes" },
  { href: "/contact", label: "Project Enquiry" },
];

export function SiteFooter() {
  return (
    <footer className="bg-foreground text-background w-full overflow-hidden">
      <div className="mx-auto w-full max-w-[1280px] px-5 pt-20 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12">
          <div className="space-y-6 lg:col-span-6">
            <p className="text-lede max-w-md opacity-80">
              Independent software &amp; technology studio. We design, build and
              deploy high-reliability digital platforms for ambitious
              organizations.
            </p>
            <div className="inline-flex items-center gap-2.5 text-sm opacity-80">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              <span>Accepting new engagements</span>
            </div>
          </div>

          <nav aria-label="Footer" className="lg:col-span-3 lg:col-start-8">
            <p className="mb-4 text-sm opacity-60">Navigate</p>
            <ul className="space-y-1">
              {NAV.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="group inline-flex items-center gap-1.5 py-1 text-lg tracking-tight opacity-90 transition-opacity hover:opacity-100"
                  >
                    <span className="link-draw">{item.label}</span>
                    <ArrowUpRight className="h-4 w-4 -translate-x-1 opacity-0 transition-[transform,opacity] duration-200 [transition-timing-function:var(--ease-out)] group-hover:translate-x-0 group-hover:opacity-100" />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="space-y-2 lg:col-span-2">
            <p className="mb-4 text-sm opacity-60">Say hello</p>
            <p className="font-mono text-sm opacity-90">
              hello@your-domain.tld
            </p>
            <p className="text-sm opacity-60">(placeholder)</p>
            <div className="pt-6">
              <BackToTop />
            </div>
          </div>
        </div>

        <div className="[container-type:inline-size] mt-20 mb-8">
          <p
            aria-hidden
            className="ml-[-0.045em] [font-size:29cqw] leading-[0.82] font-semibold tracking-[-0.06em] whitespace-nowrap select-none"
          >
            SARVOS
          </p>
        </div>
      </div>

      <div className="border-background/15 border-t">
        <div className="mx-auto flex w-full max-w-[1280px] flex-col items-start justify-between gap-2 px-5 py-5 text-xs opacity-70 sm:flex-row sm:items-center sm:px-8 lg:px-12">
          <p>© 2026 SARVOS. All rights reserved.</p>
          <p>No cookies. Privacy first.</p>
        </div>
      </div>
    </footer>
  );
}
