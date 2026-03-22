import { Rocket, RefreshCw, ShieldCheck, Users } from 'lucide-react';
import { Service, Project, Testimonial } from '../domain/models';

/**
 * Singleton Repository to manage data access.
 * In a real app, this would fetch from an API.
 */
class DevReliantRepository {
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
        "Build & Launch Your First Product Fast",
        "We build a working version of your business idea in weeks, not months. Prove your concept with real users and investors before making big investments.",
        <Rocket className="w-10 h-10" />,
        ["Fast Launch", "Investor Ready", "Proven Concept"]
      ),
      new Service(
        "Rescue Your Slow, Old Software",
        "Your software is outdated, slow, and expensive to run. We modernize it gradually without shutting down your business—keep operating while we rebuild it piece-by-piece.",
        <RefreshCw className="w-10 h-10" />,
        ["Zero Downtime", "Speed Boost", "Cost Savings"]
      ),
      new Service(
        "Find Bugs Before Your Customers Do",
        "Every new release breaks something. We set up automated testing that catches 95% of issues before customers find them. Ship updates with confidence.",
        <ShieldCheck className="w-10 h-10" />,
        ["Bug Prevention", "Automated Testing", "Quality Assurance"]
      ),
      new Service(
        "Your Technical Leader (Part-Time)",
        "You need someone making tech decisions—choosing tools, hiring engineers, setting quality standards. We provide CTO-level guidance without the full-time salary.",
        <Users className="w-10 h-10" />,
        ["Tech Leadership", "Team Building", "Strategy"]
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
        ["Go", "React", "Docker"],
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"
      ),
      new Project(
        "HealthStream MVP",
        "Healthcare",
        "Developed a HIPAA-compliant patient portal from scratch.",
        "Launched in 12 weeks; Client raised Series A.",
        ["TypeScript", "AWS", "Next.js"],
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800"
      ),
      new Project(
        "AutoTest Suite",
        "E-Commerce",
        "Built full coverage automation for a high-traffic shop.",
        "Caught 50+ critical bugs pre-production.",
        ["Selenium", "Python", "Jenkins"],
        "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800"
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

const repo = DevReliantRepository.getInstance();

export { repo }
