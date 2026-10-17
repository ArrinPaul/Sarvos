import * as React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-border bg-background w-full border-t transition-colors">
      <div className="mx-auto w-full max-w-[1200px] px-5 py-16 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Brand & Studio Overview */}
          <div className="space-y-4 lg:col-span-5">
            <div className="flex items-center gap-3">
              <span className="text-foreground text-lg font-bold tracking-tight">
                SARVOS
              </span>
              <span className="text-muted-foreground border-border rounded-[4px] border px-1.5 py-0.5 font-mono text-[11px] tracking-wider uppercase">
                SYS.SPEC v4.2
              </span>
            </div>
            <p className="text-muted-foreground max-w-md text-sm leading-relaxed">
              Independent Software &amp; Technology Studio. We design, build,
              and deploy high-reliability digital platforms, custom software,
              and automated workflows for ambitious organizations.
            </p>
            <div className="inline-flex items-center gap-2 pt-2">
              <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
              <span className="text-muted-foreground font-mono text-xs tracking-wider uppercase">
                [ SYSTEM.STATUS: OPERATIONAL ]
              </span>
            </div>
          </div>

          {/* Quick Links Navigation */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-2 lg:col-span-4">
            <div className="space-y-3">
              <p className="text-foreground font-mono text-xs tracking-wider uppercase">
                [ NAVIGATION ]
              </p>
              <ul className="text-muted-foreground space-y-2 text-sm">
                <li>
                  <Link
                    href="/work"
                    className="hover:text-foreground inline-flex items-center gap-1 transition-colors"
                  >
                    <span>Selected Work</span>
                    <ArrowUpRight className="h-3 w-3" />
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="hover:text-foreground inline-flex items-center gap-1 transition-colors"
                  >
                    <span>Capabilities</span>
                    <ArrowUpRight className="h-3 w-3" />
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="hover:text-foreground inline-flex items-center gap-1 transition-colors"
                  >
                    <span>About Studio</span>
                    <ArrowUpRight className="h-3 w-3" />
                  </Link>
                </li>
                <li>
                  <Link
                    href="/insights"
                    className="hover:text-foreground inline-flex items-center gap-1 transition-colors"
                  >
                    <span>Engineering Notes</span>
                    <ArrowUpRight className="h-3 w-3" />
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <p className="text-foreground font-mono text-xs tracking-wider uppercase">
                [ INQUIRIES ]
              </p>
              <ul className="text-muted-foreground space-y-2 text-sm">
                <li>
                  <Link
                    href="/contact"
                    className="hover:text-foreground inline-flex items-center gap-1 transition-colors"
                  >
                    <span>Project Enquiry</span>
                    <ArrowUpRight className="h-3 w-3" />
                  </Link>
                </li>
                <li className="text-muted-foreground pt-1 font-mono text-xs">
                  hello@your-domain.tld (placeholder)
                </li>
                <li className="text-muted-foreground font-mono text-xs">
                  UTC+00:00 / GLOBAL
                </li>
              </ul>
            </div>
          </div>

          {/* Direct CTA Panel */}
          <div className="border-border bg-card flex flex-col justify-between rounded-[8px] border p-6 lg:col-span-3">
            <div className="space-y-2">
              <span className="text-muted-foreground font-mono text-[11px] tracking-wider uppercase">
                [ START AN ENGAGEMENT ]
              </span>
              <p className="text-foreground text-sm font-medium">
                Have an architecture challenge or high-reliability system to
                build?
              </p>
            </div>
            <div className="pt-4">
              <Link
                href="/contact"
                className="bg-primary text-background dark:bg-foreground dark:text-background inline-flex h-9 w-full items-center justify-center gap-1.5 rounded-[8px] text-xs font-medium transition-colors hover:bg-neutral-800 dark:hover:bg-neutral-200"
              >
                <span>Initiate Consultation</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Hairline Divider */}
        <div className="border-border text-muted-foreground mt-12 flex flex-col items-start justify-between gap-4 border-t pt-8 text-xs sm:flex-row sm:items-center">
          <p>© SINCE 2026 SARVOS. All rights reserved.</p>
          <div className="flex items-center gap-6 font-mono text-[11px]">
            <span>ENGINEERED WITH RIGOR</span>
            <span>NO COOKIES / PRIVACY FIRST</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
