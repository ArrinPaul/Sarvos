export interface Service {
  slug: string;
  code: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  operationalProfile: string;
  structuralFailuresEliminated: string[];
  deliverables: string[];
  components: string[];
  techStack: string[];
  idealFor: string;
}

export const services: Service[] = [
  {
    slug: "websites-custom-software",
    code: "SYS.01",
    title: "Websites & Custom Software",
    shortDesc:
      "Engineered digital platforms built for architectural clarity, uncompromising performance, and long-term operational resilience.",
    fullDesc:
      "We design and build bespoke web applications, client portals, and technical editorial platforms that replace generic templates with precision-engineered code. Built on Next.js, TypeScript, and modern headless architectures, every system is designed to load in milliseconds, scale predictably, and maintain strict accessibility standards.",
    operationalProfile:
      "Engineered for high-traffic environments, complex content hierarchies, and mission-critical client interfaces requiring deterministic rendering and zero cumulative layout shift.",
    structuralFailuresEliminated: [
      "Bloated page weights and slow First Contentful Paint caused by generic CMS themes.",
      "Fragile plugin ecosystems that break during framework updates.",
      "Accessibility violations that expose clients to compliance liabilities.",
      "Unmaintainable CSS codebases with high technical debt and styling regressions.",
    ],
    deliverables: [
      "Custom responsive frontend architecture (desktop, tablet, mobile)",
      "Headless CMS integration with type-safe schema definitions",
      "Sub-second page load optimization with automated performance budgets",
      "Comprehensive component design system with accessible keyboard navigation",
      "Automated CI/CD build pipelines and deployment configuration",
    ],
    components: [
      "SSR / Static Hybrid Architecture",
      "Accessible Semantic Markup (WCAG 2.1 AA)",
      "Design Token System & Dark Theme Support",
      "Automated Performance & Lighthouse Auditing",
      "Type-Safe API Data Fetching Layer",
    ],
    techStack: [
      "Next.js",
      "TypeScript",
      "React",
      "Tailwind CSS",
      "Node.js",
      "Vercel / AWS",
    ],
    idealFor:
      "Growing tech companies, engineering practices, and boutique consultancies requiring an authoritative digital presence.",
  },
  {
    slug: "ai-workflow-automation",
    code: "SYS.02",
    title: "AI & Workflow Automation",
    shortDesc:
      "Autonomous agents, schema-constrained LLM pipelines, and automated business workflows that eliminate repetitive cognitive friction.",
    fullDesc:
      "We build production-grade AI solutions that go beyond generic chat interfaces. Our systems enforce strict JSON schema validation, deterministic retrieval-augmented generation (RAG), and rule-based guardrails to ensure generative components act with precision, predictability, and auditability.",
    operationalProfile:
      "Built for operations teams and technical staff drowning in unstructured documents, manual triage tasks, and fragmented multi-system data reconciliation.",
    structuralFailuresEliminated: [
      "Hallucinatory LLM outputs that output invalid data structures.",
      "Unbounded token consumption and unpredictable API cost spikes.",
      "Fragile scraping scripts that fail on minor DOM structural changes.",
      "Security vulnerabilities from prompt injection or untrusted data feeds.",
    ],
    deliverables: [
      "Custom domain-specific AI agents with strict schema enforcement",
      "Deterministic RAG pipelines with verifiable citation tracking",
      "Automated triage and ticket classification microservices",
      "Webhook-driven workflow automations connecting ERP, CRM, and databases",
      "Monitoring dashboards for token costs, latency, and model accuracy",
    ],
    components: [
      "Pydantic / Zod Output Validation",
      "Dense & Lexical Hybrid Vector Retrieval",
      "Zero-Retention Privacy Architectures",
      "Rate-Limiting & Cost Guardrails",
      "Audit Trail & Decision Logging",
    ],
    techStack: [
      "Python",
      "FastAPI",
      "TypeScript",
      "PostgreSQL / pgvector",
      "LangGraph",
      "Docker",
    ],
    idealFor:
      "Firms with high-volume technical documentation, customer support operations, or compliance verification workflows.",
  },
  {
    slug: "virtual-tours-interactive",
    code: "SYS.03",
    title: "Virtual Tours & Interactive Experiences",
    shortDesc:
      "High-fidelity WebGL 3D asset visualizers, spatial walkthroughs, and real-time interactive canvas environments for browser clients.",
    fullDesc:
      "We bring spatial engineering and immersive digital spaces to standard web browsers without requiring heavy downloads or external plugins. Using Three.js, WebGL, and WebAssembly, our custom renderers deliver smooth 60fps experiences across desktop and mobile devices.",
    operationalProfile:
      "Tailored for architecture firms, industrial equipment manufacturers, real estate developers, and technical museums showcasing physical assets digitally.",
    structuralFailuresEliminated: [
      "Stuttering frame rates and GPU memory crashes on mobile devices.",
      "Multi-megabyte texture bottlenecks that cause high bounce rates.",
      "Clunky navigation controls that disorient non-technical users.",
      "Inability to run on standard corporate laptops without dedicated GPUs.",
    ],
    deliverables: [
      "Interactive 3D viewport with smooth orbit, pan, and zoom controls",
      "Progressive mesh streaming and Draco geometry compression",
      "Custom hotspot annotations with contextual technical telemetry",
      "Responsive fallback modes for low-powered mobile hardware",
      "Integration with web analytics for engagement and dwell time tracking",
    ],
    components: [
      "Optimized Three.js / WebGL Rendering Pipeline",
      "Spatial Audio & Dynamic Lighting Setup",
      "Interactive Pin Hotspots & Exploded Views",
      "Frustum Culling & Dynamic Level-of-Detail (LOD)",
      "Touch Gesture & Mobile Gyroscope Integration",
    ],
    techStack: [
      "Three.js",
      "WebGL",
      "TypeScript",
      "glTF / Draco",
      "Web Workers",
      "WebAssembly",
    ],
    idealFor:
      "Enterprises showcasing architectural spaces, complex industrial machinery, or interactive product configurators.",
  },
  {
    slug: "performance-optimization",
    code: "SYS.04",
    title: "SEO & Website Performance Improvement",
    shortDesc:
      "Deep technical audits, sub-second latency optimization, Core Web Vitals remediation, and structured search visibility engineering.",
    fullDesc:
      "Search visibility is fundamentally an engineering problem. We analyze your digital architecture from the network layer to the DOM, eliminating cumulative layout shifts, optimizing resource hints, removing render-blocking assets, and implementing clean semantic metadata.",
    operationalProfile:
      "Designed for platforms suffering from declining search rankings, poor mobile Lighthouse scores, or sluggish interactive response times.",
    structuralFailuresEliminated: [
      "Sub-par Core Web Vitals causing organic traffic downgrades.",
      "Render-blocking scripts and bloated third-party tags.",
      "Indexation issues caused by improper client-side rendering (CSR).",
      "Broken structured data schemas and missing canonical references.",
    ],
    deliverables: [
      "Comprehensive technical performance and SEO audit report",
      "Code-level remediation of Core Web Vitals (LCP, INP, CLS)",
      "Automated sitemap, robots, and semantic metadata architecture",
      "Image optimization pipeline with modern AVIF/WebP generation",
      "Performance regression testing embedded in CI/CD pipelines",
    ],
    components: [
      "Resource Hint Pre-loading & Critical CSS Inlining",
      "Zero-Layout-Shift Font Subsetting",
      "Automated Image Transcoding & Responsive Sizing",
      "JSON-LD Schema Implementation",
      "Edge Caching & Stale-While-Revalidate Policies",
    ],
    techStack: [
      "Next.js",
      "Cloudflare / Vercel Edge",
      "Lighthouse CI",
      "PageSpeed APIs",
      "TypeScript",
    ],
    idealFor:
      "Businesses losing revenue or qualified leads due to sluggish load times and poor organic search ranking.",
  },
  {
    slug: "systems-architecture-api",
    code: "SYS.05",
    title: "API & Systems Integration",
    shortDesc:
      "Robust data synchronization pipelines, webhook hubs, and microservice architectures built for unyielding data integrity.",
    fullDesc:
      "When business data is trapped across siloed third-party SaaS tools, custom databases, and legacy mainframes, operational execution stalls. We engineer resilient middleware, idempotent API endpoints, and event queues that keep enterprise systems in lockstep.",
    operationalProfile:
      "Engineered for companies transitioning away from fragile point-to-point scripts toward an auditable, event-driven integration layer.",
    structuralFailuresEliminated: [
      "Silent data corruption and duplicate records from non-idempotent webhooks.",
      "Cascading outages when third-party APIs encounter downtime.",
      "Lack of centralized audit logging for critical transactional mutations.",
      "Unmonitored batch sync scripts running undetected in failure states.",
    ],
    deliverables: [
      "Centralized event bus and webhook ingestion microservice",
      "Type-safe API client wrappers and OpenAPI 3.0 specifications",
      "Idempotent retry queues with exponential backoff and dead-letter handling",
      "Real-time data synchronization between disparate enterprise databases",
      "Prometheus & Grafana telemetry dashboards with anomaly alerts",
    ],
    components: [
      "Idempotent Request Handlers & Deduplication Caches",
      "Dead Letter Queue (DLQ) & Failure Recovery Workflows",
      "HMAC Signature Verification for Inbound Webhooks",
      "Distributed Tracing & Structured Logging",
      "Contract Testing for Upstream / Downstream APIs",
    ],
    techStack: [
      "Go",
      "Node.js / TypeScript",
      "Redis",
      "PostgreSQL",
      "Docker",
      "Prometheus",
    ],
    idealFor:
      "Organizations scaling their operational tech stack across multiple SaaS and internal database systems.",
  },
];
