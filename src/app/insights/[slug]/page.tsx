import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { insightPosts } from "@/content/insights";
import { SectionLabel } from "@/components/ui/section-label";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

interface InsightPostProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return insightPosts.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({
  params,
}: InsightPostProps): Promise<Metadata> {
  const { slug } = await params;
  const post = insightPosts.find((p) => p.slug === slug);
  if (!post) return { title: "Article Not Found" };

  return {
    title: post.title,
    description: post.summary,
  };
}

export default async function InsightDetailPage({ params }: InsightPostProps) {
  const { slug } = await params;
  const post = insightPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="w-full py-16 sm:py-24">
      <div className="mx-auto w-full max-w-[800px] space-y-12 px-5 sm:px-8">
        {/* Navigation */}
        <div className="border-border flex items-center justify-between border-b pb-4">
          <Link
            href="/insights"
            className="text-muted-foreground hover:text-foreground inline-flex items-center gap-1.5 font-mono text-xs uppercase transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>Back to all notes</span>
          </Link>

          <span className="text-muted-foreground font-mono text-xs">
            {post.date} &bull; {post.readTime}
          </span>
        </div>

        {/* Header */}
        <div className="space-y-4">
          <SectionLabel index={post.category} label="ENGINEERING NOTE" />
          <h1 className="text-foreground text-3xl leading-[1.15] font-semibold tracking-tight sm:text-5xl">
            {post.title}
          </h1>
          <p className="text-muted-foreground border-border border-l-2 pl-4 text-lg leading-relaxed italic">
            {post.summary}
          </p>
        </div>

        {/* Content paragraphs */}
        <div className="text-foreground/90 border-border space-y-6 border-t pt-8 text-base leading-relaxed">
          {post.content.map((paragraph, idx) => (
            <p key={idx} className="leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Tags & Action */}
        <div className="border-border space-y-6 border-t pt-8">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-muted-foreground font-mono text-xs uppercase">
              TAGS:
            </span>
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="bg-muted border-border text-foreground rounded-[4px] border px-2 py-0.5 font-mono text-xs uppercase"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="border-border bg-card flex flex-col justify-between gap-4 rounded-[8px] border p-6 sm:flex-row sm:items-center">
            <div className="space-y-1">
              <h4 className="text-foreground text-sm font-semibold">
                Discuss this architectural approach
              </h4>
              <p className="text-muted-foreground text-xs">
                Have questions about high-throughput queues or deterministic
                validation?
              </p>
            </div>
            <Link
              href="/contact"
              className="bg-primary text-background dark:bg-foreground dark:text-background inline-flex h-9 shrink-0 items-center justify-center gap-1.5 rounded-[6px] px-4 text-xs font-medium transition-colors hover:bg-neutral-800"
            >
              <span>Get in touch</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
