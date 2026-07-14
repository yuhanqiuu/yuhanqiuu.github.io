import komorebiImage from "../assets/project-51-1.png";
import komorebi2 from "../assets/project-51-2.png";
import komorebi3 from "../assets/project-komorebi-3.jpg";
import ethosImage from "../assets/project-ethos.jpg";
import ethos2 from "../assets/project-ethos-2.jpg";
import ethos3 from "../assets/project-ethos-3.jpg";
import halcyonImage from "../assets/project-halcyon.jpg";
import halcyon2 from "../assets/project-halcyon-2.jpg";
import halcyon3 from "../assets/project-halcyon-3.jpg";
import lumenImage from "../assets/project-lumen.jpg";
import lumen2 from "../assets/project-lumen-2.jpg";
import lumen3 from "../assets/project-lumen-3.jpg";
import atlasImage from "../assets/project-atlas.jpg";
import atlas2 from "../assets/project-atlas-2.jpg";
import atlas3 from "../assets/project-atlas-3.jpg";
import formaImage from "../assets/project-forma.jpg";
import forma2 from "../assets/project-forma-2.jpg";
import forma3 from "../assets/project-forma-3.jpg";

export interface Project {
  slug: string;
  title: string;
  category: string;
  year: string;
  summary: string;
  description: string;
  image: string;
  images: string[];
  tags: string[];
  link?: string;
}

export const projects: Project[] = [
  {
    slug: "depth-camera-based-3d-gait-analysis",
    title: "Depth Camera Based 3D Gait Analysis",
    category: "Computer Vision",
    year: "2026",
    summary:
      "Extract gait metrics from videos captured by Orbbec Femto Bolt camera in the purpose of diagnosis of dimensia",
    description:
      "Wait for Later",
    image: komorebiImage,
    images: [komorebiImage, komorebi2, komorebi3],
    tags: ["Python", "Computer Vision"],
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
    images: [ethosImage, ethos2, ethos3],
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
    images: [halcyonImage, halcyon2, halcyon3],
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
    images: [lumenImage, lumen2, lumen3],
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
    images: [atlasImage, atlas2, atlas3],
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
    images: [formaImage, forma2, forma3],
    tags: ["Packaging", "Identity"],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
