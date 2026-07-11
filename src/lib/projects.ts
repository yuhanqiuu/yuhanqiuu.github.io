import komorebiImage from "../assets/project-komorebi.jpg";
import ethosImage from "../assets/project-ethos.jpg";
import halcyonImage from "../assets/project-halcyon.jpg";
import lumenImage from "../assets/project-lumen.jpg";
import atlasImage from "../assets/project-atlas.jpg";
import formaImage from "../assets/project-forma.jpg";

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
      "Komorebi System is a design language built for generative audio platforms. We developed a visual system that responds to sound frequency in real-time, focusing on legibility in low-light environments.",
    image: komorebiImage,
    tags: ["Design System", "UI", "Motion", "React"],
  },
  {
    slug: "ethos-archive",
    title: "Ethos Archive",
    category: "Brand Identity",
    year: "2023",
    summary:
      "Preserving architectural heritage through high-fidelity digital documentation and an approachable browsing experience.",
    description:
      "Ethos Archive preserves architectural heritage through high-fidelity digital documentation, giving historians and enthusiasts a calm, precise place to explore.",
    image: ethosImage,
    tags: ["Identity", "Web Design", "Archive", "UX"],
  },
  {
    slug: "halcyon-type",
    title: "Halcyon Type",
    category: "Typography",
    year: "2024",
    summary:
      "A display typeface family designed for cultural institutions — six weights, two optical sizes, and full Latin coverage.",
    description:
      "Halcyon is a display typeface family designed for cultural institutions, spanning six weights and two optical sizes.",
    image: halcyonImage,
    tags: ["Typography", "Type Design"],
  },
  {
    slug: "lumen-app",
    title: "Lumen",
    category: "Product Design",
    year: "2024",
    summary:
      "A daily reading companion. Rethinking the mobile reading surface around focus, pace, and the ritual of returning.",
    description:
      "Lumen is a daily reading companion that reframes the mobile reading surface around focus, pace, and ritual.",
    image: lumenImage,
    tags: ["Product", "iOS", "UX"],
  },
  {
    slug: "atlas-monograph",
    title: "Atlas Monograph",
    category: "Editorial",
    year: "2023",
    summary:
      "A 240-page monograph documenting a decade of studio practice — commissioned print design, typesetting, and image direction.",
    description:
      "A 240-page monograph documenting a decade of studio practice — print design, typesetting, and image direction.",
    image: atlasImage,
    tags: ["Print", "Editorial", "Book"],
  },
  {
    slug: "forma-packaging",
    title: "Forma",
    category: "Packaging",
    year: "2022",
    summary:
      "A modular packaging system for a small-batch pantry brand. Kraft substrates, minimal ink, systemic labelling.",
    description:
      "A modular packaging system for a small-batch pantry brand, using kraft substrates and a systemic labelling approach.",
    image: formaImage,
    tags: ["Packaging", "Identity"],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
