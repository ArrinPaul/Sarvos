import * as React from "react";
import { cn } from "@/lib/utils";

export interface SectionLabelProps extends React.HTMLAttributes<HTMLDivElement> {
  index?: string | number;
  label: string;
}

export function SectionLabel({
  index,
  label,
  className,
  ...props
}: SectionLabelProps) {
  const formattedIndex =
    typeof index === "number" ? String(index).padStart(2, "0") : index;

  return (
    <div
      className={cn(
        "text-muted-foreground inline-flex items-center gap-3 text-sm font-medium",
        className
      )}
      {...props}
    >
      {formattedIndex !== undefined && (
        <span className="text-foreground tabular-nums">{formattedIndex}</span>
      )}
      <span aria-hidden className="bg-foreground/40 h-px w-6" />
      <span>{label}</span>
    </div>
  );
}
