"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Plus } from "lucide-react";

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
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);

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
          className="focus-visible:ring-ring flex w-full cursor-pointer items-center justify-between gap-6 py-3 text-left text-lg font-medium tracking-tight focus-visible:ring-2 focus-visible:outline-none sm:text-xl"
        >
          <span className="pr-4">{title}</span>
          <span
            className="border-border text-foreground flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-transform duration-300 [transition-timing-function:var(--ease-out)] data-[open=true]:rotate-45"
            data-open={isOpen}
          >
            <Plus className="h-4 w-4" />
          </span>
        </button>
      </h3>
      <div
        id={`accordion-panel-${id}`}
        role="region"
        aria-labelledby={`accordion-btn-${id}`}
        hidden={!isOpen && !mounted}
        data-open={isOpen}
        className="collapse"
      >
        <div>
          <div className="text-muted-foreground pt-2 pb-4 text-base leading-relaxed">
            {content}
          </div>
        </div>
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
