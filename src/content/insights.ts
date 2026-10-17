export interface InsightPost {
  slug: string;
  title: string;
  date: string;
  readTime: string;
  category: string;
  summary: string;
  content: string[];
  tags: string[];
}

export const insightPosts: InsightPost[] = [
  {
    slug: "kafka-telemetry-queues",
    title:
      "Re-architecting multi-tenant telemetry queues: Lessons from high-throughput Kafka partitions",
    date: "OCTOBER 2024",
    readTime: "7 MIN READ",
    category: "SYSTEMS ARCHITECTURE",
    summary:
      "A deep technical breakdown of handling burst ingestion windows, preventing partition skew, and reducing p99 processing latency to sub-25ms using zero-copy deserialization in Go.",
    tags: ["Kafka", "Go", "Distributed Systems", "ClickHouse"],
    content: [
      "When designing telemetry pipelines intended to scale beyond 40,000 events per second, the naive approach of assigning one topic per tenant quickly breaks under partition metadata overhead and broker memory constraints.",
      "In this architecture review, we examine the migration from per-tenant topics to keyed composite partitioning, where tenant hash prefixes guarantee strict ordering while maximizing parallel consumer group saturation.",
      "By replacing standard JSON reflection with compact Protobuf structs and buffer pooling (`sync.Pool`), we eradicated GC pause spikes entirely, reducing our p99 tail latency from 1,420ms to under 24ms under continuous burst verification.",
    ],
  },
  {
    slug: "eliminating-cls-latency",
    title:
      "Eliminating cumulative layout shift and interaction latency in data-intensive client interfaces",
    date: "SEPTEMBER 2024",
    readTime: "5 MIN READ",
    category: "FRONTEND ENGINEERING",
    summary:
      "How we engineered zero-CLS data tables with virtualized rendering, strict CSS aspect-ratio reservations, and font-subset metrics overrides.",
    tags: ["Next.js", "Performance", "Core Web Vitals", "TypeScript"],
    content: [
      "Cumulative Layout Shift (CLS) in dashboards is frequently caused by asynchronous data streams replacing skeleton loaders with variable-height cells.",
      "By anchoring column boundaries to mathematical CSS grid fractions and enforcing strict min-height boundaries derived from typography line-box metrics, layout calculations become completely deterministic.",
      "Combined with Web Workers handling client-side filtering and sorting off the main thread, the interface achieves a consistent 0.000 CLS score and sub-10ms Interaction to Next Paint (INP).",
    ],
  },
  {
    slug: "deterministic-document-parsing",
    title:
      "Deterministic document parsing with zero-hallucination vector pipelines and schema validation",
    date: "AUGUST 2024",
    readTime: "8 MIN READ",
    category: "AI & WORKFLOWS",
    summary:
      "Constraining generative AI outputs using Pydantic, Zod, and lexical citation graphs to achieve 100% compliance in safety-critical technical documentation.",
    tags: ["AI Engineering", "RAG", "Python", "Zod", "PostgreSQL"],
    content: [
      "In mission-critical engineering environments, an AI system that hallucinates even 1% of the time is unusable. Reliability requires treating LLM outputs not as prose, but as untrusted data inputs requiring strict schema validation.",
      "By binding model completion calls to constrained context grammars and enforcing recursive Pydantic/Zod validator gates, malformed structures are rejected at the edge before downstream persistence.",
      "Furthermore, pairing semantic vector embeddings with exact lexical token matching guarantees that every generated response cites verified line-level source anchors.",
    ],
  },
  {
    slug: "strangler-pattern-modernization",
    title:
      "De-risking core monolithic rewrites with incremental strangler-pattern proxies",
    date: "JULY 2024",
    readTime: "6 MIN READ",
    category: "MIGRATION & CLOUD",
    summary:
      "Why 'big-bang' system rewrites fail and how to use reverse proxy routing to slice legacy monoliths into modern microservices with zero downtime.",
    tags: ["Architecture", "Modernization", "DevOps", "APIs"],
    content: [
      "Large-scale software rewrites frequently fail because business requirements shift while the replacement system is being developed in isolation.",
      "The strangler pattern solves this by placing an edge proxy in front of the existing system. New features and refactored domains are implemented as isolated, modern microservices.",
      "Traffic is gradually routed to the new services on a route-by-route basis, enabling verification in production with automated fallbacks to the legacy backend if error thresholds are exceeded.",
    ],
  },
];
