import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { SectionLabel } from "@/components/ui/section-label";

export default function NotFound() {
  return (
    <div className="w-full py-24 sm:py-36">
      <div className="mx-auto w-full max-w-[600px] space-y-6 px-5 text-center sm:px-8">
        <SectionLabel index="404" label="ENDPOINT NOT LOCATED" />
        <h1 className="text-foreground text-4xl font-semibold tracking-tight sm:text-5xl">
          Specification not found.
        </h1>
        <p className="text-muted-foreground text-sm leading-relaxed sm:text-base">
          The requested route does not map to any active system specification or
          case study in the SARVOS registry.
        </p>
        <div className="pt-4">
          <Link
            href="/"
            className="bg-primary text-background dark:bg-foreground dark:text-background inline-flex h-10 items-center justify-center gap-2 rounded-[8px] px-5 text-sm font-medium transition-colors hover:bg-neutral-800"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Return to Studio Home</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
