"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Menu, X, ArrowUpRight } from "lucide-react";

const NAV_LINKS = [
  { href: "/work", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/insights", label: "Insights" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  // Close mobile menu on Escape key press
  React.useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  // Prevent background scroll when mobile menu is open
  React.useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <header className="border-border bg-background/95 sticky top-0 z-50 w-full border-b backdrop-blur-sm transition-colors">
      <div className="mx-auto flex h-16 w-full max-w-[1200px] items-center justify-between px-5 sm:px-8 lg:px-12">
        {/* Brand Logo & Telemetry Tag */}
        <Link
          href="/"
          className="text-foreground flex items-center gap-3 text-sm font-semibold tracking-tight transition-opacity hover:opacity-80"
          aria-label="SARVOS Home"
        >
          <span className="text-base font-bold tracking-tight">SARVOS</span>
          <span className="text-muted-foreground border-border hidden rounded-[4px] border px-1.5 py-0.5 font-mono text-[11px] tracking-wider uppercase sm:inline-block">
            SINCE 2026
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav
          className="hidden items-center gap-8 text-sm md:flex"
          aria-label="Main Navigation"
        >
          {NAV_LINKS.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "hover:text-foreground relative py-1 text-sm transition-colors",
                  isActive
                    ? "text-foreground after:bg-foreground font-medium after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full"
                    : "text-muted-foreground"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Actions (Theme Toggle & CTA) */}
        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />
          <Link
            href="/contact"
            className="bg-primary text-background dark:bg-foreground dark:text-background inline-flex h-9 items-center justify-center gap-1.5 rounded-[8px] px-3.5 text-xs font-medium transition-colors hover:bg-neutral-800 dark:hover:bg-neutral-200"
          >
            <span>Start a project</span>
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        {/* Mobile Menu Button & Theme Toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="border-border bg-card text-foreground hover:bg-muted inline-flex h-10 w-10 items-center justify-center rounded-[8px] border transition-colors"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {/* Accessible Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
          className="border-border bg-background animate-fade-in fixed inset-x-0 top-16 bottom-0 z-50 flex flex-col justify-between overflow-y-auto border-t p-6 md:hidden"
        >
          <div className="flex flex-col space-y-6">
            <span className="text-muted-foreground font-mono text-xs tracking-wider uppercase">
              [ NAVIGATION INDEX ]
            </span>
            <nav className="flex flex-col space-y-4">
              {NAV_LINKS.map((link) => {
                const isActive =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    aria-current={isActive ? "page" : undefined}
                    className={cn(
                      "border-border flex min-h-[44px] items-center justify-between border-b py-3 text-lg font-medium transition-colors",
                      isActive
                        ? "text-foreground font-semibold"
                        : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className="text-muted-foreground h-4 w-4" />
                  </Link>
                );
              })}
            </nav>
          </div>

          <div className="border-border mt-auto border-t pt-6">
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="bg-primary text-background dark:bg-foreground dark:text-background flex min-h-[48px] w-full items-center justify-center gap-2 rounded-[8px] text-center text-sm font-medium transition-colors hover:bg-neutral-800"
            >
              <span>Start a project</span>
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
