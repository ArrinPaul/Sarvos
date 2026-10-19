import * as React from "react";
import { cn } from "@/lib/utils";

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: boolean;
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, error, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "border-border bg-card text-foreground placeholder:text-muted-foreground focus-visible:border-foreground focus-visible:ring-foreground/10 flex min-h-[160px] w-full resize-y rounded-2xl border border-transparent px-4 py-3 text-base transition-[border-color,box-shadow] duration-200 focus-visible:ring-4 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
          error && "border-destructive focus-visible:border-destructive",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

Textarea.displayName = "Textarea";
