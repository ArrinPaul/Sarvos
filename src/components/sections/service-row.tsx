import * as React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Service } from "@/content/services";
import { cn } from "@/lib/utils";

export interface ServiceRowProps {
  service: Service;
  className?: string;
}

export function ServiceRow({ service, className }: ServiceRowProps) {
  return (
    <div
      className={cn(
        "group border-border hover:bg-muted/40 -mx-4 rounded-[8px] border-b px-4 py-8 transition-colors duration-150",
        className
      )}
    >
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-start">
        {/* Code & Title */}
        <div className="space-y-2 lg:col-span-4">
          <div className="flex items-center gap-2">
            <span className="text-muted-foreground border-border bg-card rounded-[4px] border px-1.5 py-0.5 font-mono text-xs tracking-wider uppercase">
              [{service.code}]
            </span>
          </div>
          <h3 className="text-foreground text-xl font-semibold tracking-tight sm:text-2xl">
            <Link
              href={`/services/${service.slug}`}
              className="hover:underline focus-visible:underline focus-visible:outline-none"
            >
              {service.title}
            </Link>
          </h3>
        </div>

        {/* Short Description & Deliverables */}
        <div className="space-y-4 lg:col-span-6">
          <p className="text-muted-foreground text-sm leading-relaxed">
            {service.shortDesc}
          </p>

          <div className="flex flex-wrap gap-1.5 pt-1">
            {service.components.slice(0, 3).map((comp) => (
              <span
                key={comp}
                className="border-border bg-card text-muted-foreground rounded-[4px] border px-2 py-0.5 font-mono text-[11px] uppercase"
              >
                {comp}
              </span>
            ))}
          </div>
        </div>

        {/* Action Link */}
        <div className="flex items-center lg:col-span-2 lg:justify-end">
          <Link
            href={`/services/${service.slug}`}
            className="text-foreground border-border bg-card inline-flex items-center gap-1.5 rounded-[6px] border px-3 py-1.5 font-mono text-xs tracking-wider uppercase hover:underline"
          >
            <span>Inspect Spec</span>
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
