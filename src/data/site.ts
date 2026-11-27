// All portfolio content lives here. Edit this file to update the site.

export const profile = {
  name: 'Kai Leung (Antonio) Yip',
  preferredName: 'Antonio',
  role: 'AI Engineer · Software Engineer',
  tagline:
    'I build AI applications that people can trust with real numbers: agentic Python services with guardrails, evals and tracing, shipped through CI/CD to production.',
  about: [
    'Before AI, I worked on budgeting and forecasting software. The maths was never the hard part; getting every loan, asset, income, cost and tax rule into the system was. That pain is what I build against now.',
    'My rule for AI in finance: the model handles language, code handles numbers, and a person confirms every write. ChatFinance and Money both follow it, from a LangGraph agent with human-in-the-loop confirmation to an on-device model that classifies bank transactions without the data leaving the machine.',
    'I work end to end: Python and FastAPI back ends, React front ends built from my own Figma designs, native Swift apps, MCP servers, Docker and GitHub Actions deployments.',
  ],
  location: 'Perth, Australia',
  links: {
    github: 'https://github.com/antoniokly',
    linkedin: 'https://www.linkedin.com/in/kai-leung-antonio-yip-481a96120',
    email: 'kai.perth@icloud.com',
    resume: '', // e.g. '/resume.pdf' (put the file in public/)
  },
};

export const motivation = {
  heading: 'Why AI, and why now',
  paragraphs: [
    'I have spent more than ten years building software professionally, most of it on mobile. I love the craft, but I can see where it is heading: as AI changes how people find information and get work done, the most interesting problems are no longer inside an app.',
    'So I am making the move on purpose. What carried me through a decade of shipping products transfers directly: breaking messy problems down, designing for real users, testing until a system can be trusted, and owning work from idea to production. A language has never been the hurdle. I now work in Python every day, and I pick up whatever a problem needs next.',
  ],
  pull: 'I am obsessed with what AI makes possible, and I want to build it professionally: systems that are useful, measurable and safe enough to trust.',
  goals: [
    { title: 'Ship AI to production', body: 'Join a team putting AI in front of real users, not just building prototypes.' },
    { title: 'Go deep on agents', body: 'Agentic systems, evaluation and LLM operations, done with engineering rigour.' },
    { title: 'Bring the product mindset', body: 'Testing, CI/CD and user experience, applied to AI that people rely on.' },
    { title: 'Keep learning in public', body: 'Every new skill proven in working projects like ChatFinance and Money.' },
  ],
};

export const strengths:{ title: string; body: string }[] = [
  {
    title: 'Agentic AI in production',
    body: 'LangGraph agents with tool calling, checkpoints and human-in-the-loop interrupts, served over FastAPI and streamed to a React UI.',
  },
  {
    title: 'Guardrails and evals',
    body: 'Validation in code, a grounding check that catches invented numbers, model evals scored on outcomes, and Langfuse traces for every run.',
  },
  {
    title: 'Engineering discipline',
    body: 'Typed Python (Pydantic, mypy), hundreds of tests, pre-commit and CI on every push, Docker images deployed behind Caddy with rollback.',
  },
  {
    title: 'Design to code',
    body: 'I design in Figma, then build the screens in React, TypeScript, Tailwind and shadcn/ui, including the empty, loading and error states.',
  },
];

export const skills: { group: string; items: string[] }[] = [
  { group: 'AI', items: ['LangGraph', 'LangChain', 'Tool calling', 'MCP', 'Evals', 'Langfuse', 'Apple Foundation Models'] },
  { group: 'Python', items: ['FastAPI', 'Pydantic v2', 'pytest', 'mypy', 'ruff', 'uv'] },
  { group: 'Front end', items: ['React', 'TypeScript', 'Tailwind', 'shadcn/ui', 'Figma'] },
  { group: 'Platform', items: ['Docker', 'GitHub Actions', 'Caddy', 'Postgres', 'Linux VMs'] },
  { group: 'Apple', items: ['Swift', 'SwiftUI', 'SwiftData', 'Hummingbird (server)'] },
];

export type Project = {
  name: string;
  summary: string;
  tags: string[];
  page?: string; // case-study page on this site
  repo?: string; // public repos only
  demo?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    name: 'ChatFinance',
    summary:
      'Describe your plans in plain English and get a 10-year forecast. A LangGraph agent gathers missing details, a grounding check rejects numbers you never said, and nothing is written until you confirm.',
    tags: ['Python', 'FastAPI', 'React', 'AI agent', 'LangGraph', 'LLM', 'MCP'],
    page: '/projects/chatfinance/',
    demo: 'https://chatfinance.duckdns.org',
    featured: true,
  },
  {
    name: 'Money',
    summary:
      'A personal finance manager where an AI agent turns emailed invoices into records, and bank transactions from an open-banking feed are matched to them automatically.',
    tags: ['Swift', 'MCP', 'On-device LLM', 'Postgres', 'Self-hosted sync'],
    page: '/projects/money/',
    featured: true,
  },
  {
    name: 'Agentic delivery pipeline',
    summary:
      'Jira to merged pull request with AI agents, used to build ChatFinance\'s sign-up, subscription and billing backend: Claude implements, Claude and Codex review independently until both are clean, then a person approves. 31 agent PRs in 3 days.',
    tags: ['Claude Code', 'Codex', 'GitHub Actions', 'Jira', 'Human in the loop'],
    page: '/projects/agentic-delivery/',
    featured: true,
  },
  {
    name: 'Reward',
    summary:
      'An AI-assisted trading system in paper trading: an AI panel reads the market, tested strategies decide, a risk gate enforces committed limits, and brokers place the orders. Full CI/CD to Oracle Cloud.',
    tags: ['Python', 'AI panel', 'Risk controls', 'IBKR', 'Alpaca', 'CI/CD'],
    page: '/projects/reward/',
    featured: true,
  },
  {
    name: 'CoreFinance',
    summary:
      'The deterministic forecasting engine under both projects: typed models for loans, assets, cash flows, depreciation and tax, in Swift and in Python (Pydantic v2).',
    tags: ['Python', 'Swift', 'Pydantic'],
  },
  {
    name: 'Finance MCP servers',
    summary:
      'Model Context Protocol servers that give AI assistants scoped access to banking, brokerage and email data, deployed with shared Docker and GitHub Actions runbooks.',
    tags: ['MCP', 'Python', 'Docker', 'CI/CD'],
  },
  {
    name: 'BluetoothThing',
    summary:
      'An open-source Swift library for fast Bluetooth LE development: no delegates, built on Combine, start listening to devices in one line.',
    tags: ['Swift', 'Combine', 'Open source'],
    repo: 'https://github.com/antoniokly/BluetoothThing',
  },
  {
    name: 'HomeSpan devices',
    summary:
      'Custom HomeKit accessories on ESP32 (an irrigation controller, security sensors) written in C++ with HomeSpan.',
    tags: ['C++', 'ESP32', 'HomeKit'],
  },
];

export type ShippedApp = {
  name: string;
  company: string;
  when: string;
  what: string;
  link?: string; // only where the listing is the app I worked on
};

export const shippedApps: ShippedApp[] = [
  {
    name: 'Essential Energy Field and Fleet apps',
    company: 'Capgemini, for Essential Energy (NSW)',
    when: '2022 – present',
    what: 'Internal enterprise apps for network workers managing power network and vehicle assets, with offline storage. Not on the public App Store.',
  },
  {
    name: 'SRAM AXS',
    company: 'Element Engineering Australia',
    when: '2021 – 2022',
    what: 'Rebuilt the bike component control app in SwiftUI and Jetpack Compose; set up test automation and CI/CD.',
    link: 'https://apps.apple.com/au/app/sram-axs/id1430049231',
  },
  {
    name: 'ASB Mobile Banking',
    company: 'Datacom, for ASB Bank (NZ)',
    when: '2019 – 2021',
    what: 'Payment features in Objective-C and Swift for a major bank, with test automation, Fastlane and Azure DevOps.',
    link: 'https://apps.apple.com/au/app/asb-mobile-banking/id434348489',
  },
  {
    name: 'Z Energy and Caltex NZ apps',
    company: 'Rush Digital',
    when: 'earlier versions',
    what: 'iOS, Android and React Native, with custom native modules for Siri Shortcuts and geofencing.',
  },
  {
    name: 'Forsite',
    company: 'Forsite and AnyObject',
    when: 'earlier version',
    what: 'Location and Bluetooth apps using GPS and iBeacon.',
  },
];
