/**
 * Shared Type Definitions for Geeksatb landing page
 */

export interface ServiceItem {
  id: string;
  title: string;
  category: "Core" | "AI" | "Data" | "Governance";
  description: string;
  bulletPoints: string[];
}

export interface HowWeWorkStep {
  number: number;
  phase: string;
  title: string;
  description: string;
}

export interface CaseStudy {
  id: string;
  clientName: string;
  subtitle: string;
  country: string;
  engagementFocus: string;
  challenge: string[];
  engineeredSolution: string[];
  techStack: string[];
  deliveredImpact: string[];
}

export interface IndustryCard {
  id: string;
  title: string;
  description: string;
  bulletPoints: string[];
}

export interface Differentiator {
  title: string;
  highlight: string;
  description: string;
}
