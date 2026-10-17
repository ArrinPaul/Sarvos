import * as React from "react";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  error?: boolean;
}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, children, error, ...props }, ref) => {
    return (
      <div className="relative w-full">
        <select
          className={cn(
            "border-border bg-card text-foreground focus-visible:border-foreground flex h-10 w-full cursor-pointer appearance-none rounded-[8px] border px-3 py-2 pr-8 text-sm transition-colors duration-150 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
            error && "border-destructive focus-visible:border-destructive",
            className
          )}
          ref={ref}
          {...props}
        >
          {children}
        </select>
        <ChevronDown className="text-muted-foreground pointer-events-none absolute top-1/2 right-3 h-4 w-4 -translate-y-1/2" />
      </div>
    );
  }
);

Select.displayName = "Select";
