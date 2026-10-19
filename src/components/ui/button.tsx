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
      "inline-flex items-center justify-center font-medium press focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 select-none cursor-pointer";

    const variantStyles = {
      primary:
        "bg-foreground text-background hover:opacity-90 border border-transparent shadow-none",
      secondary:
        "bg-transparent text-foreground border border-border hover:bg-muted active:bg-accent",
      ghost:
        "bg-transparent text-foreground hover:bg-muted active:bg-accent border border-transparent",
      link: "text-foreground underline-offset-4 hover:underline p-0 h-auto border-0 bg-transparent",
      mono: "font-mono uppercase tracking-wider text-xs border border-border bg-card text-foreground hover:bg-muted hover:border-foreground/30",
    };

    const sizeStyles = {
      sm: "h-9 px-4 text-sm rounded-full",
      md: "h-11 px-5 text-sm rounded-full",
      lg: "h-14 px-8 text-base rounded-full",
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
