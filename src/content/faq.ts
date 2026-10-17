export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export const faqs: FAQItem[] = [
  {
    id: "engagement-model",
    category: "Engagements",
    question: "How does SARVOS engage with clients?",
    answer:
      "We operate as a high-density, senior engineering unit working directly with founders, CTOs, and technical leads. We do not use intermediary account managers or junior outsourcing. Engagements typically begin with a 2-week Technical Discovery & Specification Sprint, followed by time-boxed delivery milestones with weekly demonstrable releases.",
  },
  {
    id: "pricing-contracts",
    category: "Engagements",
    question: "What is your pricing and contract structure?",
    answer:
      "We structure engagements primarily as fixed-scope milestone contracts with defined acceptance criteria, or dedicated sprint retainers for ongoing architectural partnership. Every proposal includes transparent itemized estimates, strict deliverables, and no hidden maintenance fees.",
  },
  {
    id: "handover-ownership",
    category: "Engineering",
    question: "How do you handle production handover and knowledge transfer?",
    answer:
      "All code, infrastructure definitions, documentation, and intellectual property belong 100% to you from day one. Handover includes exhaustive architectural documentation, automated test suites, deployment walkthroughs, and recorded engineering pairing sessions with your internal team.",
  },
  {
    id: "legacy-modernization",
    category: "Engineering",
    question: "Can you modernize an existing legacy codebase?",
    answer:
      "Yes. We specialize in incremental strangler-pattern migrations. We isolate critical bottlenecks, introduce automated test harnesses, and replace brittle components piece-by-piece without requiring a high-risk full system shutdown or 'big-bang' rewrite.",
  },
  {
    id: "tech-stack-specialization",
    category: "Technology",
    question: "What technologies do you specialize in?",
    answer:
      "Our core stack centers on Next.js, React, TypeScript, and Node.js for modern web platforms; Go and Rust for high-throughput stream processing, APIs, and systems engineering; Python for AI pipelines, vector databases, and automation; and PostgreSQL, Redis, ClickHouse, and Kafka for data persistence.",
  },
  {
    id: "timeline-onboarding",
    category: "Process",
    question: "How quickly can an engineering engagement begin?",
    answer:
      "Following an initial project enquiry and brief technical alignment call, we deliver a formal technical scope and proposal within 3 to 5 business days. Once approved, engineering sprints typically commence within 1 to 2 weeks.",
  },
];
