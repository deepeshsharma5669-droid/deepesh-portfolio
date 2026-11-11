// ============================================================
// All portfolio content lives here. Edit this file to update the site.
// Everything below comes from Deepesh's resume, his brief, or the README of
// the repositories. Nothing here is invented — if you can't verify it, don't add it.
// ============================================================

export const site = {
  name: "Deepesh Sharma",
  title: "Data Analyst | Product Analyst",
  positioning: "Product & Data Analytics Associate",
  tagline: "Turning Business Data Into Meaningful Insights & Better Decisions.",
  intro:
    "I turn ambiguous business requirements into validated metrics, dashboards and internal tools — using SQL, Supabase and AI-assisted development.",
  email: "deepeshsharma5669@gmail.com",
  linkedin: "https://www.linkedin.com/in/deepesh-sharma-738b42429",
  github: "https://github.com/deepeshsharma5669-droid",
  resume: "/Deepesh_Sharma_Resume.pdf",
  location: "Maharashtra, India",
  url: "https://deepesh-portfolio.vercel.app", // change to your real domain after deploying
};

export const about = [
  "I work where data, product operations and technology meet. My day job at TheFinPedia, a B2B fintech content platform, is to turn questions like \"are renewals actually healthy?\" into metrics that are defined carefully, checked against the database and shown on a dashboard people use.",
  "That has meant building an executive analytics dashboard, a Google Sheets to Supabase data pipeline, a sales CRM and a project management tool. I also run UAT and production testing, manage CMS content, and write event-tracking plans, so I see both how the data is produced and how it is used.",
  "I direct AI-assisted development and I am open about it: I did not hand-write the application code. My part is the work that decides whether a tool is right — defining requirements, designing the schema and business logic, choosing how it is built, finding the bugs, and validating every number before it ships.",
];

export const principles = [
  { title: "Define the metric first", text: "Most dashboard bugs are definition bugs. I write down what a number means before anything is built." },
  { title: "Validate against the data", text: "Every figure is checked against raw records, not just against the chart that displays it." },
  { title: "Fit the workflow", text: "Tools are designed around how sales, support and product teams actually work." },
];

export const skillGroups = [
  { name: "Data Analytics", items: ["SQL", "Excel (Pivot Tables, VLOOKUP, XLOOKUP)", "Power BI", "Data Visualization", "Business Reporting"] },
  { name: "Database & Automation", items: ["Supabase", "PostgreSQL", "Google Apps Script", "Database Schema Design", "Workflow Automation"] },
  { name: "Product & Operations", items: ["Product Analytics", "Requirements Analysis", "UAT", "Manual Testing", "Data Validation", "Process Improvement"] },
  { name: "Development & Tools", items: ["Streamlit", "Retool", "Figma", "Git", "AI-assisted development"] },
];

export type Project = {
  id: string;
  title: string;
  kind: string;
  overview: string;
  problem: string;
  role: string[];
  approach: string[];
  features: string[];
  outcomes: string[];
  stack: string[];
  aiNote: string;
  links: { label: string; href: string }[];
};

export const projects: Project[] = [
  {
    id: "dashboard",
    title: "Executive Analytics Dashboard",
    kind: "Business intelligence",
    overview:
      "A single internal dashboard giving leadership one trusted view of Revenue, Subscriptions, Product Usage, Customer Support and Engineering at TheFinPedia.",
    problem:
      "Leadership numbers lived in separate tools and spreadsheets, so questions about revenue, renewals and engagement meant manual pulls — and the same metric could be calculated differently in different places.",
    role: [
      "Defined the metrics, their business rules and how each should be calculated",
      "Designed the Supabase schema and SQL views the dashboard reads from",
      "Directed the AI-assisted build, then tested the output against raw records",
      "Found and fixed metric-logic errors after reviewing the results",
    ],
    approach: [
      "SQL views and functions in Postgres do much of the aggregation; the Python app applies business logic and presents it",
      "The Product Usage and Revenue tabs compare two chosen periods side by side, so a change in a number is visible, not guessed",
      "Plan changes are classified transaction by transaction as upgrades, downgrades or renewals",
    ],
    features: [
      "100+ business metrics across five areas: Revenue, Subscriptions, Product Usage, Support, Engineering",
      "Upgrade, downgrade and renewal classification, including revenue lost to downgrades",
      "Renewal and conversion funnels, cohort trends, and breakdowns by plan and acquisition partner",
      "Customer 360° view combining plan history, payments, support tickets and activity",
      "Secure sign-in with role-based access for Product, Support and Admin teams",
    ],
    outcomes: [
      "Corrected a renewal-rate calculation that counted every paying customer as a renewal",
      "Fixed an engagement metric that was dividing by the wrong denominator",
      "Cut cross-tool lookups for Support and Sales with the unified customer view",
    ],
    stack: ["Streamlit", "Supabase", "PostgreSQL", "SQL", "Python", "Plotly", "Render"],
    aiNote: "Built with Claude as the coding tool. I specified, reviewed and validated; I did not write the code myself.",
    links: [{ label: "GitHub repository", href: "https://github.com/deepeshsharma5669-droid/Main-thefinpedia-dashboard" }],
  },
  {
    id: "pipeline",
    title: "Automated Data Pipeline",
    kind: "Data engineering & automation",
    overview:
      "A two-stage pipeline that keeps a production Postgres database in step with business spreadsheets, replacing repetitive manual updates.",
    problem:
      "Operational data was maintained in Google Sheets, and getting it into the database for reporting meant slow, error-prone manual updates.",
    role: [
      "Designed the sync workflow and the rules for each table",
      "Specified how conflicts, duplicates and bad rows should be handled",
      "Directed the AI-assisted build and tested the runs against the database",
    ],
    approach: [
      "A two-stage Apps Script pipeline moves data from the sheets into Supabase",
      "Each table is configured as upsert or append depending on how its data behaves",
      "Dates are normalized in a timezone-safe way before they reach the database",
      "Defensive validation catches duplicate keys and foreign-key violations",
    ],
    features: [
      "7 business-critical tables synced",
      "40,000+ records processed",
      "Configurable upsert / append logic with primary-key conflict resolution",
      "Timezone-safe date normalization",
    ],
    outcomes: [
      "Zero data loss across dozens of production runs",
      "Removed the manual update step",
      "Feeds the live executive dashboard",
    ],
    stack: ["Google Apps Script", "Google Sheets", "Supabase", "PostgreSQL", "SQL"],
    aiNote: "Built with Claude as the coding tool. I designed the flow and validated the results.",
    links: [],
  },
  {
    id: "crm",
    title: "Sales CRM",
    kind: "Sales operations",
    overview:
      "An internal CRM that replaced Excel-based outreach tracking and is used daily by the sales team.",
    problem:
      "Outreach was tracked in spreadsheets, so there was no reliable view of who had never engaged, who had gone quiet, and who had come back — and no fair way to credit shared follow-ups.",
    role: [
      "Analysed the sales team's workflow and defined the requirements",
      "Designed the customer segmentation rules and the follow-up attribution logic",
      "Directed the AI-assisted build and tested the safety checks",
    ],
    approach: [
      "Segments come from real product and subscription data, not manual tagging",
      "Attribution rules decide who gets credit when several people follow up with one customer",
      "Automated checks guard deployments and prevent data loss",
    ],
    features: [
      "Segments: never engaged, gone quiet, returned after contact",
      "Fair attribution for shared customer follow-ups",
      "Templated email campaigns, personalised at customer-group level",
      "Deployment and workflow safety checks",
    ],
    outcomes: ["Replaced manual Excel outreach tracking", "Used daily by the sales team"],
    stack: ["Streamlit", "Supabase", "Next.js (rewrite)"],
    aiNote: "Built with Claude as the coding tool. I directed design and requirements.",
    links: [{ label: "GitHub (Next.js rewrite)", href: "https://github.com/deepeshsharma5669-droid/thefinpedia-sales-crm-nextjs" }],
  },
  {
    id: "pmt",
    title: "Project Management Tool (PMT)",
    kind: "Product & workflow design",
    overview:
      "A multi-role project management tool built from an open-ended business request — Admin, Manager, Member and Client views — with the approval workflow modelled from how the team really worked.",
    problem:
      "Deliverables were being tracked loosely and many were finishing late, but nobody had measured how badly, and the approval process existed only in people's heads.",
    role: [
      "Took the request from open-ended idea to a working application",
      "Analysed 2,600+ historical records to find where delivery was failing",
      "Interviewed stakeholders to reverse-engineer the undocumented approval workflow",
      "Designed the relational schema; managed Supabase, authentication, secrets and Git through dozens of build and QA cycles",
    ],
    approach: [
      "The data analysis, not guesswork, set the data model and the feature priorities",
      "The approval process was written down as a formal multi-stage design before it was built",
      "Each build went through a QA cycle before the next one",
    ],
    features: [
      "Four roles: Admin, Manager, Member and Client",
      "Multi-stage approval workflow",
      "Relational database design",
    ],
    outcomes: ["Found that up to 84% of deliverables were delivered late, across 2,600+ records"],
    stack: ["Next.js", "TypeScript", "Supabase", "Claude", "Emergent"],
    aiNote: "Fully built with AI tools. I owned the requirements, analysis, schema and delivery.",
    links: [{ label: "GitHub repository", href: "https://github.com/deepeshsharma5669-droid/PMT-Tool" }],
  },
];

export const experience = {
  role: "Product & Operations Associate",
  company: "FinAce Infosolution LLP (TheFinPedia)",
  period: "April 2025 – Present", // NOTE: the resume PDF says "August 2024". Make them match.
  location: "Mumbai, India (Remote)",
  points: [
    "Run UAT and production testing to validate website functionality, UI consistency and user experience",
    "Manage website content, events and updates through the CMS, keeping data accurate and on schedule",
    "Design and manage Supabase database schemas to support reporting and analytics",
    "Write SQL to extract, analyse and present business insights for management",
    "Built the automated Google Sheets to Supabase integration with Google Apps Script",
    "Researched and implemented dashboards in Retool and Streamlit showing key operational metrics",
    "Created and documented event-tracking plans, naming conventions and event properties",
    "Work with product, design and development teams on feature releases and operational improvements",
  ],
};

export const education = {
  degree: "Bachelor of Engineering – Information Technology",
  place: "Maharashtra, India",
  year: "Graduated January 2025",
};
