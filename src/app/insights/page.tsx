import type { Metadata } from "next";
import Link from "next/link";
import { insightPosts } from "@/content/insights";
import { PageHeader } from "@/components/sections/page-header";
import { Reveal } from "@/components/motion/reveal";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Technical Insights & Engineering Notes",
  description:
    "Engineering articles and technical deep-dives on stream processing, web latency, and deterministic AI systems.",
};

export default function InsightsPage() {
  return (
    <div className="w-full pt-12 pb-20 sm:pt-20 sm:pb-32">
      <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-8 lg:px-12">
        <PageHeader
          size="display"
          label="Technical insights"
          title={<>Engineering Notes &amp; Insights.</>}
          description="Practical notes and architectural post-mortems from the engineering trenches. Written by practitioners, for practitioners."
        />

        <div className="mt-16 sm:mt-24">
          {insightPosts.map((post, i) => (
            <Reveal as="div" key={post.slug} delay={Math.min(i, 2) * 60}>
              <article className="group border-border relative border-t py-10 sm:py-12">
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-start">
                  <div className="text-muted-foreground space-y-2 text-sm lg:col-span-3">
                    <p className="tabular-nums">{post.date}</p>
                    <p>{post.readTime}</p>
                    <span className="bg-muted mt-1 inline-block rounded-full px-3 py-1 text-xs">
                      {post.category}
                    </span>
                  </div>

                  <div className="space-y-4 lg:col-span-8">
                    <h2 className="text-foreground text-2xl font-semibold tracking-[-0.03em] transition-transform duration-300 [transition-timing-function:var(--ease-out)] sm:text-4xl lg:group-hover:translate-x-2">
                      <Link
                        href={`/insights/${post.slug}`}
                        className="after:absolute after:inset-0 focus-visible:underline focus-visible:outline-none"
                      >
                        {post.title}
                      </Link>
                    </h2>
                    <p className="text-muted-foreground max-w-2xl text-base leading-relaxed">
                      {post.summary}
                    </p>
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="bg-muted text-muted-foreground rounded-full px-3 py-1 text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="hidden lg:col-span-1 lg:flex lg:justify-end">
                    <span className="border-border text-foreground group-hover:bg-foreground group-hover:text-background flex h-12 w-12 items-center justify-center rounded-full border transition-colors duration-200">
                      <ArrowUpRight className="h-5 w-5 transition-transform duration-300 [transition-timing-function:var(--ease-out)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
          <div className="border-border border-t" />
        </div>
      </div>
    </div>
  );
}
