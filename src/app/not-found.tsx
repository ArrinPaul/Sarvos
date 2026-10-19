import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="w-full py-20 sm:py-32">
      <div className="mx-auto w-full max-w-[1280px] space-y-8 px-5 sm:px-8 lg:px-12">
        <p
          aria-hidden
          className="rise text-[clamp(7rem,28vw,24rem)] leading-[0.8] font-semibold tracking-[-0.07em]"
        >
          404
        </p>
        <h1
          className="text-headline rise text-foreground"
          style={{ ["--d" as string]: "80ms" }}
        >
          Specification not found.
        </h1>
        <p
          className="text-lede text-muted-foreground rise max-w-xl"
          style={{ ["--d" as string]: "160ms" }}
        >
          The requested route does not map to any active system specification or
          case study in the SARVOS registry.
        </p>
        <div className="rise pt-2" style={{ ["--d" as string]: "240ms" }}>
          <Link
            href="/"
            className="press bg-foreground text-background inline-flex h-14 items-center justify-center gap-2 rounded-full px-8 text-base font-medium hover:opacity-90"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Return to studio home</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
