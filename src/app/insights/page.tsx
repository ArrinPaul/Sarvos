import type { Metadata } from "next";
import Link from "next/link";
import { insightPosts } from "@/content/insights";
import { SectionLabel } from "@/components/ui/section-label";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Technical Insights & Engineering Notes",
  description:
    "Engineering articles and technical deep-dives on stream processing, web latency, and deterministic AI systems.",
};

export default function InsightsPage() {
  return (
    <div className="w-full py-16 sm:py-24">
      <div className="mx-auto w-full max-w-[1200px] space-y-12 px-5 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="border-border max-w-3xl space-y-4 border-b pb-8">
          <SectionLabel index="01" label="TECHNICAL INSIGHTS" />
          <h1 className="text-foreground text-4xl font-semibold tracking-tight sm:text-5xl">
            Engineering Notes &amp; Insights.
          </h1>
          <p className="text-muted-foreground text-base leading-relaxed sm:text-lg">
            Practical notes and architectural post-mortems from the engineering
            trenches. Written by practitioners, for practitioners.
          </p>
        </div>

        {/* Articles List */}
        <div className="divide-border divide-y">
          {insightPosts.map((post) => (
            <article
              key={post.slug}
              className="group hover:bg-muted/30 -mx-4 rounded-[8px] px-4 py-10 transition-colors"
            >
              <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-start">
                {/* Meta */}
                <div className="text-muted-foreground space-y-1 font-mono text-xs lg:col-span-3">
                  <p>{post.date}</p>
                  <p className="text-foreground text-[11px] font-semibold">
                    {post.readTime}
                  </p>
                  <span className="border-border bg-card mt-2 inline-block rounded-[4px] border px-2 py-0.5 text-[10px] uppercase">
                    {post.category}
                  </span>
                </div>

                {/* Content */}
                <div className="space-y-3 lg:col-span-7">
                  <h2 className="text-foreground text-xl font-semibold tracking-tight group-hover:underline sm:text-2xl">
                    <Link href={`/insights/${post.slug}`}>{post.title}</Link>
                  </h2>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {post.summary}
                  </p>
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="border-border bg-card text-muted-foreground rounded-[4px] border px-2 py-0.5 font-mono text-[11px] uppercase"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Read Link */}
                <div className="flex items-center lg:col-span-2 lg:justify-end">
                  <Link
                    href={`/insights/${post.slug}`}
                    className="text-foreground border-border bg-card inline-flex items-center gap-1.5 rounded-[6px] border px-3 py-1.5 font-mono text-xs tracking-wider uppercase hover:underline"
                  >
                    <span>Read Note</span>
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
