import gait_1 from "../assets/project-gait-1.png";
import dev51_1 from "../assets/project-51-1.png";
import dev51_2 from "../assets/project-51-2.png";
import ethosImage from "../assets/project-ethos.jpg";
import ethos2 from "../assets/project-ethos-2.jpg";
import ethos3 from "../assets/project-ethos-3.jpg";
import halcyonImage from "../assets/project-halcyon.jpg";
import halcyon2 from "../assets/project-halcyon-2.jpg";
import halcyon3 from "../assets/project-halcyon-3.jpg";
import balance_1 from "../assets/project-balance-1.png";
import balance_2 from "../assets/project-balance-2.png";
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
      "A Python-based analysis framework that processes 3D skeletal video to extract gait metrics, supporting the study of gait changes associated with dementia.",
    description:
      "Wait for Later",
    image: gaitImage,
    images: [gait_1],
    tags: ["Python", "Computer Vision"],
  },
  {
    slug: "8051-mcu-development-board",
    title: "8051 MCU Development Board",
    category: "PCB Design",
    year: "2026",
    summary:
      "A compact, custom 8051 board based on the STC89C52RC microcontroller for embedded systems development.",
    description:
      "Wait for Later",
    image: dev51_1,
    images: [dev51_1, dev51_2],
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
    slug: "autonomous-self-balancing-robot",
    title: "Autonomous Self-Balancing Robot",
    category: "Robotics",
    year: "2025",
    summary:
      "A self-balncing robot featuring object detection and wireless remote control.",
    description:
      "Wait for Later",
    image: balance_1,
    images: [balance_1, balance_2],
    tags: ["Robotics", "PID", "Embedded Systems", "Computer Vision", "Flutter"],
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
