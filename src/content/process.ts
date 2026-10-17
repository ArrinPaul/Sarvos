export interface ProcessStep {
  step: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
  duration: string;
}

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    number: "[ 01 ]",
    title: "Discovery & Technical Audit",
    subtitle:
      "Exhaustive inspection of existing systems, bottlenecks, and requirements.",
    description:
      "We interview key engineering stakeholders, review existing codebases and telemetry, and define unambiguous performance, reliability, and business requirements before writing a line of code.",
    deliverables: [
      "Technical audit document and architectural dependency map",
      "Identified risk points and security vulnerabilities",
      "Formal project scope with concrete success criteria",
    ],
    duration: "Week 1–2",
  },
  {
    step: "02",
    number: "[ 02 ]",
    title: "System Architecture & Specification",
    subtitle:
      "Precision engineering blueprints and typed contract definitions.",
    description:
      "We author formal technical specifications, data schemas, API contracts, and component design tokens. Decisions are documented through Architecture Decision Records (ADRs) to guarantee alignment.",
    deliverables: [
      "System architecture diagram and data flow specifications",
      "OpenAPI / Protobuf schema definitions",
      "Component hierarchy and UI state matrix",
    ],
    duration: "Week 2–3",
  },
  {
    step: "03",
    number: "[ 03 ]",
    title: "Sprint Execution & Prototyping",
    subtitle: "Rapid, test-driven implementation in short focused intervals.",
    description:
      "We build in 1-week to 2-week sprints with demonstrable releases at each checkpoint. You receive direct access to staging preview environments, PR reviews, and automated CI test runs.",
    deliverables: [
      "Clean, modular TypeScript / Go / Rust codebases",
      "High-coverage unit, integration, and E2E test suites",
      "Live preview deployment URLs for continuous review",
    ],
    duration: "Week 3–8+",
  },
  {
    step: "04",
    number: "[ 04 ]",
    title: "Hardening & Production Verification",
    subtitle:
      "Rigorous load testing, security scans, and accessibility audits.",
    description:
      "Before production traffic hits the system, we execute synthetic load testing, chaos scenarios, accessibility conformance audits (WCAG 2.1 AA), and zero-vulnerability container scans.",
    deliverables: [
      "Stress-testing and latency benchmark report",
      "Accessibility & SEO Lighthouse 95+ score validation",
      "Automated fallback, circuit breaker, and retry policies",
    ],
    duration: "Final 1–2 Sprints",
  },
  {
    step: "05",
    number: "[ 05 ]",
    title: "Handover & Architectural Telemetry",
    subtitle:
      "Total intellectual property transfer and operational monitoring setup.",
    description:
      "We hand over full repository ownership, deploy automated telemetry and error tracking dashboards, and conduct structured knowledge transfer pairing sessions with your internal engineering team.",
    deliverables: [
      "100% IP and repository ownership transfer",
      "Comprehensive developer documentation and runbooks",
      "Live telemetry dashboards with alerting thresholds",
    ],
    duration: "Handover & Post-Launch Support",
  },
];
