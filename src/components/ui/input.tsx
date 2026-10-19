import * as React from "react";
import { cn } from "@/lib/utils";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = "text", error, ...props }, ref) => {
    return (
      <input
        aria-invalid={error || undefined}
        type={type}
        className={cn(
          "border-border bg-card text-foreground placeholder:text-muted-foreground focus-visible:border-foreground focus-visible:ring-foreground/10 flex h-12 w-full rounded-2xl border border-transparent px-4 py-2 text-base transition-[border-color,box-shadow] duration-200 focus-visible:ring-4 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
          error && "border-destructive focus-visible:border-destructive",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";
