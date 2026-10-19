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
  const [scrolled, setScrolled] = React.useState(false);

  // Hairline appears only once content scrolls under the bar
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
    <header
      className={cn(
        "bg-background sticky top-0 z-50 w-full border-b transition-[border-color] duration-300",
        scrolled || mobileMenuOpen ? "border-border" : "border-transparent"
      )}
    >
      <div className="mx-auto flex h-16 w-full max-w-[1280px] items-center justify-between px-5 sm:px-8 lg:px-12">
        <Link
          href="/"
          className="press text-foreground flex min-h-11 items-center gap-3"
          aria-label="SARVOS Home"
        >
          <span className="text-lg font-semibold tracking-[-0.04em]">
            SARVOS
          </span>
          <span className="text-muted-foreground hidden text-xs sm:inline-block">
            Since 2026
          </span>
        </Link>

        <nav
          className="hidden items-center gap-1 text-sm md:flex"
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
                  "group relative rounded-full px-3.5 py-2 transition-colors duration-150",
                  isActive
                    ? "text-foreground font-medium"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {link.label}
                <span
                  aria-hidden
                  className={cn(
                    "bg-foreground absolute inset-x-3.5 bottom-1 h-px origin-left transition-transform duration-300 [transition-timing-function:var(--ease-out)]",
                    isActive
                      ? "scale-x-100"
                      : "scale-x-0 group-hover:scale-x-100 group-focus-visible:scale-x-100"
                  )}
                />
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />
          <Link
            href="/contact"
            className="press group bg-foreground text-background inline-flex h-10 items-center justify-center gap-1.5 rounded-full px-5 text-sm font-medium hover:opacity-90"
          >
            <span>Start a project</span>
            <ArrowUpRight className="h-4 w-4 transition-transform duration-200 [transition-timing-function:var(--ease-out)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="press border-border bg-card text-foreground hover:bg-muted inline-flex h-10 w-10 items-center justify-center rounded-full border"
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

      {mobileMenuOpen && (
        <div
          id="mobile-navigation"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
          className="bg-background animate-fade-in fixed inset-x-0 top-16 bottom-0 z-50 flex flex-col justify-between overflow-y-auto px-5 pt-4 pb-6 md:hidden"
        >
          <nav className="flex flex-col">
            {NAV_LINKS.map((link, i) => {
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
                  style={{ ["--d" as string]: `${60 + i * 50}ms` }}
                  className={cn(
                    "rise border-border flex min-h-[64px] items-center justify-between border-b text-3xl font-semibold tracking-[-0.03em]",
                    isActive ? "text-foreground" : "text-muted-foreground"
                  )}
                >
                  <span>{link.label}</span>
                  <ArrowUpRight className="h-5 w-5" />
                </Link>
              );
            })}
          </nav>

          <Link
            href="/contact"
            onClick={() => setMobileMenuOpen(false)}
            style={{ ["--d" as string]: "340ms" }}
            className="rise press bg-foreground text-background mt-8 flex min-h-[56px] w-full items-center justify-center gap-2 rounded-full text-base font-medium"
          >
            <span>Start a project</span>
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      )}
    </header>
  );
}
