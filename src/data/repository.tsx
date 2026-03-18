import React from 'react';
import { Rocket, RefreshCw, ShieldCheck, Users } from 'lucide-react';
import { Service, Project, Testimonial } from '../domain/models';

/**
 * Singleton Repository to manage data access.
 * In a real app, this would fetch from an API.
 */
export class DevReliantRepository {
  private static instance: DevReliantRepository;

  private constructor() { }

  public static getInstance(): DevReliantRepository {
    if (!DevReliantRepository.instance) {
      DevReliantRepository.instance = new DevReliantRepository();
    }
    return DevReliantRepository.instance;
  }

  getServices(): Service[] {
    return [
      new Service(
        "MVP Launchpad",
        "Rapid prototyping and end-to-end development of Minimum Viable Products to help startups validate ideas and secure funding.",
        <Rocket className="w-10 h-10" />,
        ["React", "Node.js", "Cloud Native"]
      ),
      new Service(
        "Legacy Modernization",
        "Strategic refactoring of monolithic legacy systems into scalable, modern microservices without business interruption.",
        <RefreshCw className="w-10 h-10" />,
        ["Migration", "Refactoring", "Cloud"]
      ),
      new Service(
        "Enterprise QA Automation",
        "Implementation of rigorous automated testing suites using Playwright and Selenium to ensure regression-free releases.",
        <ShieldCheck className="w-10 h-10" />,
        ["Playwright", "CI/CD", "E2E Testing"]
      ),
      new Service(
        "Fractional CTO",
        "Executive-level technology leadership on a fractional basis. We handle architecture, team structure, and code audits.",
        <Users className="w-10 h-10" />,
        ["Architecture", "Code Reviews", "Strategy"]
      )
    ];
  }

  getProjects(): Project[] {
    return [
      new Project(
        "FinCore Migration",
        "FinTech",
        "Migrated a 15-year-old JSP codebase to React/Go.",
        "Reduced operational costs by 45% and improved load times by 2s.",
        ["Go", "React", "Docker"]
      ),
      new Project(
        "HealthStream MVP",
        "Healthcare",
        "Developed a HIPAA-compliant patient portal from scratch.",
        "Launched in 12 weeks; Client raised Series A.",
        ["TypeScript", "AWS", "Next.js"]
      ),
      new Project(
        "AutoTest Suite",
        "E-Commerce",
        "Built full coverage automation for a high-traffic shop.",
        "Caught 50+ critical bugs pre-production.",
        ["Selenium", "Python", "Jenkins"]
      )
    ];
  }

  getTestimonials(): Testimonial[] {
    return [
      new Testimonial("Sarah L.", "Founder", "TechStart", "DevReliant delivered our MVP faster than we thought possible."),
      new Testimonial("James R.", "VP Eng", "OldCorp", "The modernization process was seamless. Zero downtime."),
      new Testimonial("Mike T.", "Director", "RetailGiant", "Their QA automation saved us during Black Friday.")
    ];
  }
}

export const repo = DevReliantRepository.getInstance();