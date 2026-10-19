import * as React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { SectionLabel } from "@/components/ui/section-label";

export interface Crumb {
  label: string;
  href?: string;
}

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm">
      <ol className="text-muted-foreground flex flex-wrap items-center gap-1.5">
        {items.map((item, i) => {
          const last = i === items.length - 1;
          return (
            <li key={item.label} className="flex items-center gap-1.5">
              {item.href && !last ? (
                <Link
                  href={item.href}
                  className="hover:text-foreground link-draw -my-2.5 inline-block py-2.5 transition-colors"
                >
                  {item.label}
                </Link>
              ) : (
                <span
                  aria-current={last ? "page" : undefined}
                  className={last ? "text-foreground" : undefined}
                >
                  {item.label}
                </span>
              )}
              {!last && <ChevronRight className="h-3.5 w-3.5" aria-hidden />}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

export interface PageHeaderProps {
  label: string;
  index?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  crumbs?: Crumb[];
  /** "display" for index pages, "headline" for long detail titles */
  size?: "display" | "headline";
  children?: React.ReactNode;
}

export function PageHeader({
  label,
  index = "01",
  title,
  description,
  crumbs,
  size = "headline",
  children,
}: PageHeaderProps) {
  return (
    <div className="space-y-8">
      {crumbs && (
        <div className="rise" style={{ ["--d" as string]: "0ms" }}>
          <Breadcrumbs items={crumbs} />
        </div>
      )}
      <div className="rise" style={{ ["--d" as string]: "40ms" }}>
        <SectionLabel index={index} label={label} />
      </div>
      <h1
        className={`rise-heading text-foreground max-w-5xl ${
          size === "display" ? "text-display" : "text-headline"
        }`}
        style={{ ["--d" as string]: "100ms" }}
      >
        {title}
      </h1>
      {description && (
        <p
          className="text-lede text-muted-foreground rise max-w-2xl"
          style={{ ["--d" as string]: "200ms" }}
        >
          {description}
        </p>
      )}
      {children && (
        <div className="rise" style={{ ["--d" as string]: "280ms" }}>
          {children}
        </div>
      )}
    </div>
  );
}
