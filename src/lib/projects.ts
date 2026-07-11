import komorebiImage from "../assets/project-komorebi.jpg";
import ethosImage from "../assets/project-ethos.jpg";

export interface Project {
  slug: string;
  title: string;
  category: string;
  year: string;
  summary: string;
  description: string;
  image: string;
  tags: string[];
  link?: string;
}

export const projects: Project[] = [
  {
    slug: "komorebi-system",
    title: "Komorebi System",
    category: "Interaction Design",
    year: "2024",
    summary:
      "A comprehensive design system built for generative audio platforms, focusing on legibility in low-light environments.",
    description:
      "Komorebi System is a design language built for generative audio platforms. We developed a visual system that responds to sound frequency in real-time, focusing on legibility in low-light environments. The project included a full component library, interaction patterns, and motion guidelines that help users stay immersed while maintaining clarity across the interface.",
    image: komorebiImage,
    tags: ["Design System", "UI", "Motion", "React"],
    link: "https://example.com",
  },
  {
    slug: "ethos-archive",
    title: "Ethos Archive",
    category: "Brand Identity",
    year: "2023",
    summary:
      "Preserving architectural heritage through high-fidelity digital documentation and an approachable browsing experience.",
    description:
      "Ethos Archive preserves architectural heritage through high-fidelity digital documentation. The challenge was creating an interface that allowed for immense detail without overwhelming the user. We built a calm, archival browsing experience that lets historians, students, and enthusiasts explore high-resolution photography with precision and focus.",
    image: ethosImage,
    tags: ["Identity", "Web Design", "Archive", "UX"],
    link: "https://example.com",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
