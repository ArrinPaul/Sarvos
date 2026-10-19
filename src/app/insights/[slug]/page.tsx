import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { insightPosts } from "@/content/insights";
import { PageHeader } from "@/components/sections/page-header";
import { CtaBand } from "@/components/sections/cta-band";
import { ScrollProgress } from "@/components/motion/scroll-progress";

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

  const next =
    insightPosts[(insightPosts.indexOf(post) + 1) % insightPosts.length];

  return (
    <article className="w-full pt-12 pb-3 sm:pt-20 sm:pb-5">
      <ScrollProgress />
      <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-8 lg:px-12">
        <PageHeader
          label={`${post.category} • ${post.date} • ${post.readTime}`}
          title={post.title}
          description={post.summary}
          crumbs={[
            { label: "Home", href: "/" },
            { label: "Insights", href: "/insights" },
            { label: post.title },
          ]}
        />

        <div className="mt-16 grid grid-cols-1 gap-10 sm:mt-24 lg:grid-cols-12">
          <div className="space-y-7 lg:col-span-8 lg:col-start-3">
            {post.content.map((paragraph, idx) => (
              <p
                key={idx}
                className="text-foreground/90 text-lg leading-[1.7] sm:text-xl"
              >
                {paragraph}
              </p>
            ))}

            <div className="flex flex-wrap items-center gap-2 pt-6">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-muted text-foreground rounded-full px-3 py-1 text-xs"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-24 space-y-5 sm:mt-32">
          <CtaBand
            title="Discuss this architectural approach."
            body="Have questions about high-throughput queues or deterministic validation? Talk to the engineers who wrote this."
            action="Get in touch"
          />
          <Link
            href={`/insights/${next.slug}`}
            className="group text-muted-foreground hover:text-foreground flex items-center justify-between gap-6 px-3 py-4 text-sm transition-colors"
          >
            <span className="shrink-0">Next note</span>
            <span className="text-foreground text-right text-lg font-medium tracking-tight">
              <span className="link-draw">{next.title}</span>
            </span>
          </Link>
        </div>
      </div>
    </article>
  );
}
