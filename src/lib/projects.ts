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
import heart_1 from "../assets/project-heart-1.jpeg";
import atlas2 from "../assets/project-atlas-2.jpg";
import atlas3 from "../assets/project-atlas-3.jpg";
import metal_1 from "../assets/project-metal-1.jpeg";
import metal_2 from "../assets/project-metal-2.png";
import forma3 from "../assets/project-forma-3.jpg";
import ultrasoundPoster from "../assets/project-ultrasound-poster.png";
import bachPoster from "../assets/project-bach-poster.png";
import cardioPoster from "../assets/project-cardio-poster.jpg";


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
  video?: string;
  poster?: string;
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
    image: gait_1,
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
    slug: "portable-ultrasound-transducer-for-medical-imaging",
    title: "Portable Ultrasound Transducer for Medical Imaging",
    category: "FPGA",
    year: "2026",
    summary:
      "A miniaturized telehealth system designed for home-based care, enabling continuous, low-cost monitoring of tissue health.",
    description:
      "Wait for Later",
    image: ultrasoundPoster,
    images: [ultrasoundPoster],
    poster: ultrasoundPoster,
    video: "https://youtu.be/MPopVZgi72s",
    tags: ["FPGA", "Medical Devices", "Embedded Systems"],
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
    slug: "cardio-health-monitor",
    title: "Cardio Health Monitor",
    category: "Embedded System",
    year: "2024",
    summary:
      "A real-time cardio health monitor with live heart rate visualization on an oscillocscope and LCD-based health feedback.",
    description:
      "Wait for Later",
    image: cardioPoster,
    images: [cardioPoster, heart_1],
    poster: cardioPoster,
    video: "https://youtube.com/shorts/5wjq4J4NAsk",
    tags: ["Medical Devices", "Embedded Systems"],
  },
  {
    slug: "metal-detector-rover",
    title: "Metal Detector Rover",
    category: "Embedded System",
    year: "2024",
    summary:
      "A wireless metal detector robot capable of reporting magnetic field strength.",
    description:
      "Wait for Later",
    image: metal_1,
    images: [metal_1, metal_2],
    tags: ["Embedded Systems"],
  },
  {
    slug: "me-playing-bach",
    title: "Bonus: Me Playing Bach",
    category: "Performance",
    year: "2024",
    summary:
      "Thanks for viewing this portfolio. This is my solo piano performance of Prelude in C Major. Enjoy!",
    description:
      "Wait for Later",
    image: bachPoster,
    images: [bachPoster],
    poster: bachPoster,
    video: "https://youtu.be/fU3B2pN_iLU",
    tags: ["Music", "Piano"],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
