export interface Project {
  slug: string;
  title: string;
  client: string;
  year: string;
  tagline: string;
  description: string;
  category: string;
  services: string[];
  stack: string[];
  metrics: Array<{ label: string; value: string }>;
  overview: {
    challenge: string;
    solution: string;
    architecture: string;
    results: string[];
  };
  featured: boolean;
}

export const projects: Project[] = [
  {
    slug: "core-ingestion-engine",
    title: "Core Ingestion Engine & Telemetry Bus [Placeholder]",
    client: "Autonomous Data Systems (Placeholder)",
    year: "2024",
    tagline:
      "High-throughput stream processing pipeline handling 45k events/sec with sub-25ms latency.",
    description:
      "Engineered an event-driven telemetry pipeline replacing an overloaded batch ingest mechanism. Implemented partitioned Kafka streams with zero-copy deserialization in Go, backed by ClickHouse for analytical queries.",
    category: "Systems Architecture & Telemetry",
    services: [
      "Systems Architecture",
      "High-Throughput Ingestion",
      "Database Optimization",
    ],
    stack: ["Go", "Apache Kafka", "ClickHouse", "gRPC", "Docker", "Prometheus"],
    metrics: [
      { label: "Peak Ingestion Throughput", value: "48,000 evt/s" },
      { label: "End-to-End Latency (p99)", value: "< 24ms" },
      { label: "Infrastructure Cost Reduction", value: "38%" },
      { label: "Uptime Reliability", value: "99.99%" },
    ],
    overview: {
      challenge:
        "The client faced unpredictable ingestion latency during burst traffic windows. Legacy monolithic workers crashed under load spikes exceeding 15,000 events/sec, leading to message backpressure and data loss in downstream analytics.",
      solution:
        "Separated the ingestion path from analytical query workloads. Designed a resilient, horizontally scalable streaming pipeline using lightweight Go consumers with buffer pooling and transactional batch commits to columnar storage.",
      architecture:
        "Traffic enters an edge load balancer routed directly to stateless ingestion micro-nodes. Payloads are validated against Protobuf schemas and published onto partitioned Kafka topics. Dedicated consumer groups batch flush records into ClickHouse clusters.",
      results: [
        "Sustained 48,000 events/second during stress verification without dropped frames.",
        "p99 pipeline processing latency decreased from 1,420ms to 24ms.",
        "Total compute memory footprint lowered by 42% through memory recycling.",
      ],
    },
    featured: true,
  },
  {
    slug: "spatial-cad-visualizer",
    title: "Spatial CAD & Asset Visualizer [Placeholder]",
    client: "Orbital Dynamics Corp (Placeholder)",
    year: "2024",
    tagline:
      "Browser-based WebGL engine for real-time inspection of multi-gigabyte engineering schematics.",
    description:
      "Architected a streaming 3D viewer rendering massive mechanical assemblies directly in Chromium-based browsers without plugins, featuring progressive LOD streaming and hierarchical octrees.",
    category: "Web Applications & 3D",
    services: [
      "Web Application Engineering",
      "WebGL / Three.js",
      "Spatial Geometry",
    ],
    stack: [
      "TypeScript",
      "Next.js",
      "Three.js",
      "WebAssembly",
      "Web Workers",
      "IndexedDB",
    ],
    metrics: [
      { label: "Model Load Time", value: "1.2s" },
      { label: "Frame Rate Under Load", value: "60 FPS" },
      { label: "Max Polygon Count", value: "14M Tris" },
      { label: "Memory Footprint", value: "< 350MB" },
    ],
    overview: {
      challenge:
        "Engineers and field technicians required real-time access to detailed 3D CAD assemblies on low-powered laptops and tablets in the field. Existing desktop software was heavy, proprietary, and took up to 10 minutes to open complex assemblies.",
      solution:
        "Built a custom progressive mesh streaming client. Geometry is pre-processed into compressed chunks and downloaded on-demand based on camera frustum and level-of-detail requirements.",
      architecture:
        "Server-side Rust pipeline decomposes CAD step files into binary glTF Draco chunks. The client Web Worker streams and decompresses geometry off the main UI thread, ensuring continuous 60fps interaction.",
      results: [
        "Eliminated local CAD software installation for over 180 field engineers.",
        "Average initial model interaction time reduced from 8 minutes to 1.2 seconds.",
        "Zero UI thread stutter during active panning, rotation, and section analysis.",
      ],
    },
    featured: true,
  },
  {
    slug: "autonomous-triage-agent",
    title: "Autonomous Documentation & Triage Agent [Placeholder]",
    client: "Applied Systems Engineering (Placeholder)",
    year: "2024",
    tagline:
      "Deterministic retrieval-augmented triage workflow for complex hardware telemetry logs.",
    description:
      "Created an air-gapped LLM agent for field engineering diagnostics that verifies failure modes against strict schematics with zero hallucination via deterministic schema validation.",
    category: "AI & Workflow Automation",
    services: ["AI Engineering", "Workflow Automation", "Schema Validation"],
    stack: [
      "Python",
      "FastAPI",
      "TypeScript",
      "PostgreSQL / pgvector",
      "Tailwind CSS",
    ],
    metrics: [
      { label: "Resolution Time Reduction", value: "72%" },
      { label: "Diagnostic Accuracy", value: "98.4%" },
      { label: "Hallucination Rate", value: "0.0%" },
      { label: "Manual Triage Hours Saved", value: "140h/mo" },
    ],
    overview: {
      challenge:
        "Field technicians spent excessive hours searching across 15,000 pages of proprietary hardware manuals and unindexed change orders to diagnose rare sensor anomalies.",
      solution:
        "Engineered a deterministic RAG triage pipeline that strictly constrains generative responses to verified schematic nodes and citation anchors with automated diff highlighting.",
      architecture:
        "Documents are parsed into a typed knowledge graph. User queries are resolved against both dense vector embeddings and exact lexical indices. Generated repair guides cite exact page and line numbers.",
      results: [
        "Cut mean time to diagnosis from 4.5 hours to 18 minutes.",
        "100% adherence to verified hardware schematics through automated guardrails.",
        "Exportable PDF diagnostic reports for regulatory auditing.",
      ],
    },
    featured: true,
  },
  {
    slug: "distributed-ledger-audit",
    title: "Distributed Ledger Audit & Settlement Pipeline [Placeholder]",
    client: "Global Financial Systems (Placeholder)",
    year: "2023",
    tagline:
      "Cryptographically verified reconciliation platform processing $120M daily settlements.",
    description:
      "Built a deterministic reconciliation microservice validating cross-institution ledger transactions against cryptographic proofs, ensuring automated anomaly isolation and zero accounting drift.",
    category: "Financial Systems & Infrastructure",
    services: [
      "Systems Integration",
      "Cryptographic Verification",
      "Audit Logging",
    ],
    stack: ["Rust", "PostgreSQL", "Docker", "Terraform", "GitHub Actions"],
    metrics: [
      { label: "Daily Settlement Volume", value: "$120M+" },
      { label: "Discrepancy Catch Rate", value: "100%" },
      { label: "Reconciliation Run Time", value: "< 4 mins" },
      { label: "Manual Interventions", value: "0 / month" },
    ],
    overview: {
      challenge:
        "Cross-institution settlement reconciliation was historically performed via end-of-day spreadsheet dumps, causing multi-hour delays in discovering ledger discrepancies.",
      solution:
        "Engineered a real-time event listener and mathematical audit verification engine in Rust that continuously validates transactional state changes against formal proofs.",
      architecture:
        "Streaming transaction batches are parsed into deterministic state machines. Invariant checks execute concurrently on immutable ledger journals with immediate alerting on mismatch.",
      results: [
        "Reduced settlement dispute discovery time from 24 hours to under 30 seconds.",
        "Completely eliminated human manual auditing overhead for standard transaction routes.",
      ],
    },
    featured: false,
  },
];
