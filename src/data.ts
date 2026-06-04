import { ServiceItem, HowWeWorkStep, CaseStudy, IndustryCard, Differentiator } from "./types";

export const SERVICES: ServiceItem[] = [
  {
    id: "sales-cloud",
    title: "Sales Cloud",
    category: "Core",
    description: "Pipeline architecture and seller productivity designs that align forecast accuracy with automated workflows.",
    bulletPoints: [
      "Lead, opportunity, quote, and forecasting pipeline structures.",
      "Custom Lightning Web Components (LWC) tailored for unique sales motions.",
      "Apex-driven automation for enterprise quote-to-cash handoffs.",
      "Clean status-progression controls and field-level change history tracking."
    ]
  },
  {
    id: "service-cloud",
    title: "Service Cloud",
    category: "Core",
    description: "High-performance customer support configurations that unify channels and decrease resolution time.",
    bulletPoints: [
      "Custom case routing, multi-channel support, and escalation rules.",
      "Omni-channel routing design with integrated third-party systems.",
      "Service Agent console optimization to minimize browser tab sprawl.",
      "SLA milestone enforcement, knowledge bases, and team productivity tools."
    ]
  },
  {
    id: "experience-cloud",
    title: "Experience Cloud",
    category: "Core",
    description: "Branded self-service portals and community spaces secured behind role-hierarchy hierarchies.",
    bulletPoints: [
      "Partner and customer portals styled to brand specifications.",
      "Lightning communities employing lightweight custom interfaces.",
      "Secure guest-user solution designs and record sharing models.",
      "Integrated search, knowledge articles, and self-service case filing."
    ]
  },
  {
    id: "ai-agentforce",
    title: "AI & Agentforce",
    category: "AI",
    description: "Autonomous Agentforce systems and grounded Einstein prompt engineering for enterprise workflows.",
    bulletPoints: [
      "Autonomous service and sales agents deployment and grounding.",
      "Prompt design and context retrieval with strict safety guardrails.",
      "Einstein AI copilot integration mapped to custom business flows.",
      "Intelligent case summaries, automated drafts, and call transcription insights."
    ]
  },
  {
    id: "data-cloud",
    title: "Data Cloud",
    category: "Data",
    description: "Real-time user profile unification and data activation connecting disparate legacy systems.",
    bulletPoints: [
      "Enterprise customer data ingestion from multiple legacy sources.",
      "Identity resolution rules to create a single, unified client outline.",
      "Real-time event segmentation and immediate activity activation.",
      "Zero-copy architecture concepts preventing slow data extraction delays."
    ]
  },
  {
    id: "integrations-devops",
    title: "Integrations & DevOps",
    category: "Governance",
    description: "Enterprise REST integrations and robust CI/CD sandboxing enforcing 90%+ code coverage gates.",
    bulletPoints: [
      "High-scale REST, SOAP, and MuleSoft integration designs.",
      "FFLIB-style modular frameworks separating service and selector layers.",
      "Multi-tier sandbox progression, automated pipelines, and release gates.",
      "Platform event orchestration, logging frameworks, and error runbooks."
    ]
  }
];

export const HOW_WE_WORK_STEPS: HowWeWorkStep[] = [
  {
    number: 1,
    phase: "Discover",
    title: "Org Audit & Audit",
    description: "Detailed analysis of existing org state, metadata structure, bottlenecks, and core business goals."
  },
  {
    number: 2,
    phase: "Design",
    title: "Architecture & Blueprint",
    description: "Designing ERD models, security matrixes, FFLIB structures, and integration patterns before coding."
  },
  {
    number: 3,
    phase: "Build",
    title: "Disciplined Development",
    description: "Clean Apex, high-performance LWCs, declarative flows, and structured API integrations."
  },
  {
    number: 4,
    phase: "Validate",
    title: "Rigorous Code Quality",
    description: "Static code analysis, 90%+ unit test coverage, security audits, and formal UAT validation."
  },
  {
    number: 5,
    phase: "Deploy",
    title: "Release & Governance",
    description: "Sandbox progression, Flosum or GitHub pipelines, and production release sanity validations."
  },
  {
    number: 6,
    phase: "Support",
    title: "Hyper-care & Optimization",
    description: "Operational support, performance tracing, certificate rotation, and optimization audits."
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "unicef",
    clientName: "UNICEF",
    subtitle: "Global Humanitarian Platform & Governance",
    country: "Global",
    engagementFocus: "Enterprise Salesforce delivery, strict data governance, and high-security compliance for global humanitarian operations.",
    challenge: [
      "UNICEF operates under governance, data privacy, and compliance requirements that go significantly beyond commercial enterprises.",
      "Technology platforms must support global humanitarian operations — spanning field offices, donor management, programme delivery tracking, and emergency response coordination.",
      "Maintaining the highest standards of data security, accountability, and transparency to governments and donors worldwide is paramount."
    ],
    engineeredSolution: [
      "Secured donor and programme delivery records using advanced CRM visibility schemas and least-privilege shielding rules.",
      "Hardened platform reliability for critical operational and fundraising functions, making data integrity and platform governance absolute.",
      "Designed secure REST custom endpoints translating emergency response data lines back to secure repository clusters.",
      "Developed fully documented system architectures, release governance steps, and audit-ready data tracking logs."
    ],
    techStack: [
      "Salesforce Platform Core",
      "Field-Level Security",
      "Shield Encryption",
      "Donor Management Modules",
      "Secure REST APIs",
      "Least-Privilege Shared Rules"
    ],
    deliveredImpact: [
      "Ensured absolute security and system reliability supporting UNICEF's vital fundraising operations.",
      "Improved field office reporting workflows through optimized secure ledger routing rules.",
      "Achieved 100% data access compliance on programmatic tracking across borders."
    ]
  },
  {
    id: "docusign",
    clientName: "DocuSign",
    subtitle: "Unified Service Cloud CX",
    country: "USA",
    engagementFocus: "Enterprise Salesforce delivery covering architecture, engineering, integrations, security, and release readiness.",
    challenge: [
      "Support architecture was fragile with 5+ disconnected systems and inconsistent data flow.",
      "The team needed a single pane of glass for service agents while preserving strict data consistency.",
      "The platform had to support rigorous corporate documentation, incident handling, and secure collaboration patterns."
    ],
    engineeredSolution: [
      "Built a unified Service Cloud CX layer with Apex recursive triggers controls of execution context to prevent recursion.",
      "Developed custom performance-optimized Lightning Web Components for cleaner, faster agent client interactions.",
      "Successfully integrated Salesforce with Sprinklr, UserVoice, PagerDuty, Unbabel, and Amazon Connect.",
      "Produced comprehensive runbooks, integration specifications, and detailed sequence diagrams for long-term internal support."
    ],
    techStack: [
      "Service Cloud",
      "Apex Triggers & Classes",
      "Lightning Web Components (LWC)",
      "Role Hierarchy & Share Rules",
      "Sprinklr",
      "PagerDuty",
      "Amazon Connect"
    ],
    deliveredImpact: [
      "Significantly reduced incident resolution time via a streamlined, cohesive agent case console.",
      "Improved platform stability by consolidating external system connections within managed interfaces.",
      "Established a standard dev model backed by documented technical and operational runbooks."
    ]
  },
  {
    id: "coinbase",
    clientName: "Coinbase",
    subtitle: "FFLIB Service Layer & Integrations",
    country: "USA",
    engagementFocus: "Enterprise Salesforce delivery covering product features, high-frequency execution, and architecture scaling.",
    challenge: [
      "Needed better customer and lead data analysis to optimize high-volume crypto sales pipelines and marketing strategies.",
      "Business owners requested faster feature deployments without exposing volatile trading subsystems.",
      "Required dependable and fast REST-based connection endpoints back to core distributed ledger services."
    ],
    engineeredSolution: [
      "Structured product features and client-facing layouts strictly aligned to regulatory compliance rules.",
      "Implemented the FFLIB service layer framework to isolate business logic, selector queries, and domain handlers.",
      "Designed LWC dashboards with reactive web sockets to visualize and surface fast-moving crypto actions.",
      "Integrated external trading ledgers with transaction-safe REST integrations and comprehensive recovery fallbacks."
    ],
    techStack: [
      "FFLIB Framework",
      "REST API Proxies",
      "Lightning Web Components",
      "Identity & Access Management",
      "Salesforce Platform Events",
      "Apex Unit Testing Checklists"
    ],
    deliveredImpact: [
      "Supported rapid feature release cadences in a highly volatile and regulated fintech environment.",
      "Strengthened CRM scaling capabilities for millions of customer records without slowing CRM API performance.",
      "Established extreme delivery consistency by blending structured engineering practices with agility."
    ]
  },
  {
    id: "ebay",
    clientName: "eBay",
    subtitle: "Communities & Apex Governance",
    country: "USA",
    engagementFocus: "Commerce and service portal transformation with strict release governance and quality testing expectations.",
    challenge: [
      "Required absolute compliance and high-performance file sharing with Salesforce ContentDocument and ContentVersion rules.",
      "Distributed international partner teams needed Lightning communities that matched complex localized functional requirements.",
      "Operations needed rapid bug patching without breaking sandbox regression gates or continuous integration rules."
    ],
    engineeredSolution: [
      "Architected custom secure Partner Communities with unique search indexes and tailored user experience assets.",
      "Engineered clean Core Trigger frameworks, scheduled batches, and async callouts with strict error catch blocks.",
      "Provided highly responsive post-production hyper-care, including support improvements for Salesforce1 mobile users.",
      "Designed a central governance dashboard with Apex static code checks (using PMD) to prevent security omissions."
    ],
    techStack: [
      "Sales & Service Cloud",
      "Experience Cloud (Communities)",
      "Apex Trigger Frameworks",
      "Apex Batch Classes",
      "Security & Sharing Model",
      "PMD Code Analyzer Integration"
    ],
    deliveredImpact: [
      "Minimized deployment regressions and stabilized package upgrades using robust governance standards.",
      "Enhanced global partner communication and case deflection by deploying optimized community portals.",
      "Ensured maximum developer alignment with sandbox testing gates, retaining code coverage above 85%."
    ]
  },
  {
    id: "first-american",
    clientName: "First American",
    subtitle: "Security Hardening & Asynchronous Processing",
    country: "USA",
    engagementFocus: "Security-heavy framework design emphasizing user authorization security and high-scale data migration.",
    challenge: [
      "Org needed stricter control over complex profiles, permission set assignments, objects, and field-level transparency.",
      "Needed processing of high-volume financial data asynchronously without hitting Governor limits during peak periods.",
      "Operations required reliable, auditable pathways for routine and automated dataset movements."
    ],
    engineeredSolution: [
      "Designed a clean Least-Privilege permission architecture with permission sets and permission set groups.",
      "Architected high-scale bulk data pipelines using a combination of Queueable, Future, and Batch Apex execution patterns.",
      "Built custom multi-step financial approvals, automated validations, and lightning-fast LWC inputs.",
      "Drafted robust staging records schemas and data ETL plans to securely migrate millions of database items."
    ],
    techStack: [
      "Least-Privilege Sharing",
      "Queueable & Batch Apex",
      "Custom Approval Processes",
      "Validation Protocols",
      "Bulk Data Migration Tools",
      "LWC Interfaces"
    ],
    deliveredImpact: [
      "Enabled completely auditable user security posture compliant with strict fintech requirements.",
      "Processed heavy asynchronous transaction loads without standard Salesforce governor limit interruptions.",
      "Transitioned deep operational datasets with zero data pollution, keeping codebase test coverage above 80%."
    ]
  },
  {
    id: "marcus-millichap",
    clientName: "Marcus & Millichap",
    subtitle: "MuleSoft Middleware Integration",
    country: "USA",
    engagementFocus: "Integration architecture focused on enterprise middleware, data synchronization, and controlled code reuse.",
    challenge: [
      "Salesforce needed to integrate with MuleSoft middleware through secure, low-latency REST endpoints.",
      "The firm required highly reusable Apex utilities (e.g. logging, error parsing) to support fast development scaling.",
      "Needed an enterprise approach to distribute package components to distinct business divisions safely."
    ],
    engineeredSolution: [
      "Structured secure RESTful synchronization endpoints using OAuth 2.0 and JWT to connect to central MuleSoft patterns.",
      "Drafted a strict logging framework writing trace information to platform events to isolate runtime middleware issues.",
      "Created managed packages representing core internal features for easy reuse by secondary development domains.",
      "Established strict unit testing mock layers (using Stub Provider API) to speed up continuous building phases."
    ],
    techStack: [
      "MuleSoft Middleware",
      "Oauth 2.0 / JWT Integration",
      "Apex Enterprise Architecture",
      "Managed Packages Strategy",
      "JSON Web Tokens",
      "Platform Event Loggers"
    ],
    deliveredImpact: [
      "Integrated complex commercial real estate pipelines into centralized legacy databases securely.",
      "Reduced development lifecycles for subsidiary teams by exposing tested components via packaging.",
      "Dramatically reduced API error troubleshooting timelines through a unified transaction logging library."
    ]
  },
  {
    id: "bajaj-finserv",
    clientName: "Bajaj Finserv",
    subtitle: "Financial Automation & Aura Redesign",
    country: "India",
    engagementFocus: "Regulated financial services delivery with heavy automation and data migrations.",
    challenge: [
      "Needed to translate highly dense banking regulations into strict interactive verification workflows inside the CRM.",
      "Operations faced frequent support backlog issues due to slow data loading and outdated field layouts.",
      "Required custom approvals, automated routing triggers, and quick data migration setups."
    ],
    engineeredSolution: [
      "Designed streamlined business automation rules combining Flow Builder and robust Apex controller classes.",
      "Built targeted Aura and LWC components with built-in validation rules and custom banking inputs.",
      "Conducted security reviews and implemented Field Level Security blocks for sensitive customer profiles.",
      "Executed secure data loads using Apex Data Loader scripts with detailed post-migration validation checks."
    ],
    techStack: [
      "Salesforce CRM Core",
      "Visualforce & Apex controllers",
      "Lightning Aura Components",
      "Apex Data Loader",
      "Automated Approvals Routing",
      "Advanced Security Models"
    ],
    deliveredImpact: [
      "Successfully automated high-scale financial verification workflows compliant with strict local banking laws.",
      "Decreased agent issue diagnosis timelines through clean, structured system output logs.",
      "Sustained extreme code platform quality with average test coverage remaining above 80%."
    ]
  },
  {
    id: "idfc-first-bank",
    clientName: "IDFC FIRST Bank",
    subtitle: "Core Engineering & Banking Security",
    country: "India",
    engagementFocus: "Deep component engineering and middleware orchestration for banking transaction safety.",
    challenge: [
      "Bank operations required complex on-screen fields calculations showing real-time credit metrics safely.",
      "Required strict user sharing patterns to protect client data across different state bank branches.",
      "Needed seamless syncing with external ledger networks through MuleSoft and secure bulk ETL operations."
    ],
    engineeredSolution: [
      "Crafted interactive Lightning Web Components that recalculate credit and loan data securely directly in the browser.",
      "Employed Lightning Events and custom pub-sub modules to pass data cleanly and securely between app tabs.",
      "Enforced object-level security and field-level permissions in controller queries to avoid sharing leak risks.",
      "Designed and managed bulk transaction extracts using ETL pipelines and secure REST API interfaces."
    ],
    techStack: [
      "LWC & Lightning Events",
      "Apex JS Controllers",
      "Advanced Share & Access rules",
      "MuleSoft & ETL Pipelines",
      "Data Security Shield",
      "Apex Developer Toolkits"
    ],
    deliveredImpact: [
      "Delivered a modern, lightning-fast dashboard interface and transaction workspace for bank personnel.",
      "Ensured complete branch-line isolation of borrower data, in line with banking confidentiality guidelines.",
      "Established a modern, reliable paradigm for component engineering across their entire development team."
    ]
  }
];

export const INDUSTRIES: IndustryCard[] = [
  {
    id: "saas-tech",
    title: "SaaS & Technology",
    description: "High-growth ISVs and platforms scaling customer acquisition, marketplace transactions, and quote-to-bill processes.",
    bulletPoints: [
      "Custom CPQ structures and advanced subscription pricing design.",
      "Automated access provisioning on closed-won pipeline transitions.",
      "Robust REST integrations tying telemetry logs to support accounts."
    ]
  },
  {
    id: "fintech-crypto",
    title: "Fintech & Crypto",
    description: "High-frequency systems demanding ledger-safe sync, strict identity profiles, and multi-signature authorization controls.",
    bulletPoints: [
      "FFLIB separation architecture to support complex ledger lookups.",
      "Real-time event sync to update client details instantly.",
      "Rigorous IP restrictions, JWT authorization, and access rules."
    ]
  },
  {
    id: "finance-banking",
    title: "Financial Services & Banking",
    description: "Regulated institutions requiring strict security models, auditable logic, enterprise ETL, and robust sharing.",
    bulletPoints: [
      "Comprehensive Least-Privilege sharing matrices and group profiles.",
      "Asynchronous processing (Batch & Scheduled Apex) for transaction reporting.",
      "Detailed runbooks and sequence diagrams for security audits."
    ]
  },
  {
    id: "realestate-enterprise",
    title: "Real Estate & Enterprise Platforms",
    description: "Multi-layered operations managing complex physical networks, custom portal views, and middleware.",
    bulletPoints: [
      "Experience Cloud communities representing thousands of entities.",
      "MuleSoft integration patterns syncing enterprise assets.",
      "Apex sharing matrices that scale with volume."
    ]
  },
  {
    id: "healthcare-lifesciences",
    title: "Healthcare & Life Sciences",
    description: "Tightly regulated CRM systems supporting patient care, medical tracking, and HIPAA-compliant communication pathways.",
    bulletPoints: [
      "Secured Health Cloud portals and patient record synchronization.",
      "Strict HIPAA & Protected Health Information (PHI) guardrails.",
      "Secure integrations connecting electronic health records (EHR) to care dashboards."
    ]
  },
  {
    id: "retail-ecommerce",
    title: "Retail & E-commerce",
    description: "High-scale omnichannel commerce systems syncing merchant inventories, payment gateways, and client loyalty databases.",
    bulletPoints: [
      "Real-time inventory sync to digital Experience Cloud communities.",
      "Payment gateway API integrations with end-to-end tokenization policies.",
      "Custom analytics schemas calculating real-time shopper lifetime value."
    ]
  }
];

export const DIFFERENTIATORS: Differentiator[] = [
  {
    title: "End-to-End Delivery Assurance",
    highlight: "Architecture Owners",
    description: "We take ownership of the full-stack architecture, relational schemas, API integrations, and cloud deployment pipelines — not just isolated tasks. We act as extension architects ensuring long-term system stability."
  },
  {
    title: "Enterprise AI & Orchestration",
    highlight: "Agentic Flows",
    description: "We design custom LLM orchestration flows, secure semantic search databases with vector stores, and private autonomous agent platforms designed around real business workloads."
  },
  {
    title: "Security-First Design",
    highlight: "Least-Privilege",
    description: "We build secure systems from day one. We implement federated identity policies (OAuth 2.0, SSO/SAML), role-based row-level filters, custom secrets orchestration, and strict static code analyzers (PMD, SonarQube)."
  },
  {
    title: "90%+ Core Unit Test Coverage",
    highlight: "Tested For Scalability",
    description: "We don't settle for baseline test requirements. We write comprehensive integration test suites, construct rich mock layers, and enforce zero failing builds in production CI/CD pipelines."
  },
  {
    title: "Documentation as a Deliverable",
    highlight: "Zero Knowledge Silos",
    description: "Every release is backed by comprehensive API specs (OpenAPI/Swagger), system architecture diagrams, state progression maps, and detailed runbooks for zero-stress manual transitions."
  },
  {
    title: "Omnichannel CRM Integrations",
    highlight: "Connected Ecosystem",
    description: "We bridge high-volume customer portals directly to major CRM databases (Salesforce), custom data lakes, and transactional platforms using reliable low-latency event-driven workers."
  },
  {
    title: "DevOps & Release Governance",
    highlight: "Rigorous CI/CD",
    description: "We maintain sterile target sandbox environments, implement clean trunk-based branch strategies, and run robust automated build validations to guarantee regression-free rollouts."
  }
];
