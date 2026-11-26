// All portfolio content lives here. Edit this file to update the site.
// Project descriptions are drafts written from repo names and READMEs: review and adjust them.

export const profile = {
  name: 'Antonio Yip',
  role: 'Software Engineer',
  tagline:
    'I build personal-finance software end to end: native Apple apps, Python services, and AI agents that work with real financial data.',
  about: [
    'I work across the stack, from Swift apps on iOS and macOS to Python back ends, MCP servers and LLM agents. Lately I have been building tools that let AI assistants read and reason over financial data safely.',
    'Outside finance, I tinker with embedded C++ for HomeKit devices and Bluetooth hardware.',
  ],
  location: '', // e.g. 'Sydney, Australia'
  links: {
    github: 'https://github.com/antoniokly',
    linkedin: '', // e.g. 'https://www.linkedin.com/in/your-handle'
    email: '', // e.g. 'you@example.com'
    resume: '', // e.g. '/resume.pdf' (put the file in public/)
  },
};

export const skills: { group: string; items: string[] }[] = [
  { group: 'Languages', items: ['Swift', 'Python', 'TypeScript', 'JavaScript', 'C++'] },
  { group: 'Apple', items: ['SwiftUI', 'Combine', 'Core Data', 'Core Bluetooth', 'HomeKit'] },
  { group: 'Back end', items: ['FastAPI', 'Pydantic', 'Postgres', 'Docker', 'GitHub Actions'] },
  { group: 'AI', items: ['LLM agents', 'MCP servers', 'Tool calling', 'Ollama', 'OpenRouter'] },
];

export type Project = {
  name: string;
  summary: string;
  tags: string[];
  repo?: string; // public repos only
  demo?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    name: 'ChatFinance',
    summary:
      'A chat-plus-dashboard web app on a forecasting engine. Ask the assistant to add, say, a property loan: it asks for missing details, validates them in a service layer, confirms, and the dashboard updates live over SSE.',
    tags: ['Python', 'FastAPI', 'React', 'LLM agent', 'MCP'],
    featured: true,
  },
  {
    name: 'CoreFinance',
    summary:
      'A financial forecasting engine with typed models for loans, assets and cash flows, in Swift and in Python (Pydantic v2). It powers the apps and services below.',
    tags: ['Swift', 'Python', 'Pydantic'],
    featured: true,
  },
  {
    name: 'Money',
    summary:
      'A personal-finance app for macOS and iOS that tracks accounts, holdings, transactions and tax, with sync through a companion Swift server.',
    tags: ['Swift', 'SwiftUI', 'macOS', 'iOS'],
    featured: true,
  },
  {
    name: 'Finance MCP servers',
    summary:
      'Model Context Protocol servers that give AI assistants read access to banking, brokerage and email data, deployed with shared Docker and GitHub Actions runbooks.',
    tags: ['MCP', 'Python', 'Docker', 'CI/CD'],
  },
  {
    name: 'BluetoothThing',
    summary:
      'An open-source Swift library for fast Bluetooth LE development: no delegates, built on Combine, start listening to devices in one line.',
    tags: ['Swift', 'Combine', 'Core Bluetooth', 'Open source'],
    repo: 'https://github.com/antoniokly/BluetoothThing',
  },
  {
    name: 'HomeSpan devices',
    summary:
      'Custom HomeKit accessories on ESP32 (irrigation controller, security sensors) written in C++ with HomeSpan.',
    tags: ['C++', 'ESP32', 'HomeKit'],
  },
];
