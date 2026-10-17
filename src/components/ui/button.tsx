import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "link" | "mono";
  size?: "sm" | "md" | "lg";
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant = "primary", size = "md", type = "button", ...props },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center font-medium transition-colors duration-150 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 select-none cursor-pointer";

    const variantStyles = {
      primary:
        "bg-primary text-background hover:bg-neutral-800 dark:bg-foreground dark:text-background dark:hover:bg-neutral-200 border border-transparent shadow-none",
      secondary:
        "bg-transparent text-foreground border border-border hover:bg-muted active:bg-accent",
      ghost:
        "bg-transparent text-foreground hover:bg-muted active:bg-accent border border-transparent",
      link: "text-foreground underline-offset-4 hover:underline p-0 h-auto border-0 bg-transparent",
      mono: "font-mono uppercase tracking-wider text-xs border border-border bg-card text-foreground hover:bg-muted hover:border-foreground/30",
    };

    const sizeStyles = {
      sm: "h-8 px-3 text-xs rounded-[4px]",
      md: "h-10 px-4 text-sm rounded-[8px]",
      lg: "h-12 px-6 text-base rounded-[8px]",
    };

    return (
      <button
        ref={ref}
        type={type}
        className={cn(
          baseStyles,
          variantStyles[variant],
          variant !== "link" && sizeStyles[size],
          className
        )}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";
