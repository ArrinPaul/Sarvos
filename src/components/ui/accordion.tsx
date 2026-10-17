"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Plus, Minus } from "lucide-react";

export interface AccordionItemProps {
  id: string;
  title: string;
  content: React.ReactNode;
  defaultOpen?: boolean;
  className?: string;
}

export function AccordionItem({
  id,
  title,
  content,
  defaultOpen = false,
  className,
}: AccordionItemProps) {
  const [isOpen, setIsOpen] = React.useState(defaultOpen);

  return (
    <div
      className={cn("border-border border-b py-4 transition-colors", className)}
    >
      <h3>
        <button
          type="button"
          id={`accordion-btn-${id}`}
          aria-expanded={isOpen}
          aria-controls={`accordion-panel-${id}`}
          onClick={() => setIsOpen((prev) => !prev)}
          className="hover:text-foreground/80 focus-visible:ring-ring flex w-full cursor-pointer items-center justify-between py-2 text-left text-base font-medium transition-colors focus-visible:ring-1 focus-visible:outline-none"
        >
          <span className="pr-4">{title}</span>
          <span className="border-border text-muted-foreground flex h-6 w-6 shrink-0 items-center justify-center border transition-transform">
            {isOpen ? (
              <Minus className="text-foreground h-3.5 w-3.5" />
            ) : (
              <Plus className="text-muted-foreground h-3.5 w-3.5" />
            )}
          </span>
        </button>
      </h3>
      <div
        id={`accordion-panel-${id}`}
        role="region"
        aria-labelledby={`accordion-btn-${id}`}
        hidden={!isOpen}
        className={cn(
          "text-muted-foreground pt-2 pb-4 text-sm leading-relaxed transition-all duration-200",
          isOpen ? "animate-fade-in block" : "hidden"
        )}
      >
        {content}
      </div>
    </div>
  );
}

export interface AccordionProps {
  items: Array<{
    id: string;
    title: string;
    content: React.ReactNode;
    defaultOpen?: boolean;
  }>;
  className?: string;
}

export function Accordion({ items, className }: AccordionProps) {
  return (
    <div
      className={cn("divide-border border-border divide-y border-t", className)}
    >
      {items.map((item) => (
        <AccordionItem key={item.id} {...item} />
      ))}
    </div>
  );
}
