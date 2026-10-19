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
        "group border-border relative border-t py-8 sm:py-10",
        className
      )}
    >
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-12 lg:items-start">
        <div className="space-y-3 lg:col-span-6">
          <span className="text-muted-foreground text-sm tabular-nums">
            {service.code}
          </span>
          <h3 className="text-foreground text-3xl font-semibold tracking-[-0.035em] transition-transform duration-300 [transition-timing-function:var(--ease-out)] sm:text-4xl lg:group-hover:translate-x-2">
            <Link
              href={`/services/${service.slug}`}
              className="after:absolute after:inset-0 focus-visible:underline focus-visible:outline-none"
            >
              {service.title}
            </Link>
          </h3>
        </div>

        <div className="space-y-5 lg:col-span-5">
          <p className="text-muted-foreground text-base leading-relaxed">
            {service.shortDesc}
          </p>

          <div className="flex flex-wrap gap-1.5">
            {service.components.slice(0, 3).map((comp) => (
              <span
                key={comp}
                className="bg-muted text-muted-foreground rounded-full px-3 py-1 text-xs"
              >
                {comp}
              </span>
            ))}
          </div>
        </div>

        <div className="hidden lg:col-span-1 lg:flex lg:justify-end">
          <span className="border-border text-foreground group-hover:bg-foreground group-hover:text-background flex h-12 w-12 items-center justify-center rounded-full border transition-colors duration-200">
            <ArrowUpRight className="h-5 w-5 transition-transform duration-300 [transition-timing-function:var(--ease-out)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        </div>
      </div>
    </div>
  );
}
