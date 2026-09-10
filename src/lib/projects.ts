import gait_1 from "../assets/project-gait-1.png";
import dev51_1 from "../assets/project-51-1.png";
import dev51_2 from "../assets/project-51-2.png";
import balance_1 from "../assets/project-balance-1.png";
import balance_2 from "../assets/project-balance-2.png";
import heart_1 from "../assets/project-heart-1.png";
import metal_1 from "../assets/project-metal-1.jpeg";
import metal_2 from "../assets/project-metal-2.png";
import metal_3 from "../assets/project-metal-3.png";
import oven_1 from "../assets/project-oven-1.png";
import ultrasoundPoster from "../assets/project-ultrasound-poster.png";
import bachPoster from "../assets/project-bach-poster.png";


export interface ProjectSpec {
  label: string;
  value: string;
}

export interface ProjectSection {
  heading: string;
  /** Paragraphs rendered in order. */
  body: string[];
  /** Optional inline figure shown below the text. */
  image?: string;
  caption?: string;
}

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

  /**
   * Article-only fields. All optional so existing projects keep working as
   * short cards. Fill these to turn a project into a full detail article.
   */
  /** Lead paragraph shown beneath the title. Falls back to `summary`. */
  overview?: string;
  /** Small spec grid, e.g. Role / Tools / Timeline / Status. */
  specs?: ProjectSpec[];
  /** Long-form body sections with optional inline figures. */
  sections?: ProjectSection[];
  /** Optional external link label (defaults to "View project"). */
  linkLabel?: string;
}

// All projects use a standardized spec grid: Tool, Focus, Timeline, Status.
// Values below are drafts based on each project's summary/tags — correct as needed.
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
    specs: [
      { label: "Tool", value: "Python, OpenCV" },
      { label: "Focus", value: "3D skeletal gait analysis" },
      { label: "Timeline", value: "2026" },
      { label: "Status", value: "Research" },
    ],
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
    tags: ["Embedded Systems", "PCB Design"],
    specs: [
      { label: "Tool", value: "KiCad, C" },
      { label: "Focus", value: "STC89C52RC development board" },
      { label: "Timeline", value: "2026" },
      { label: "Status", value: "Built" },
    ],
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

    // — Worked example article. Specs/figures are drafts — correct as needed. —
    overview:
      "A miniaturized telehealth ultrasound system built for home-based care, enabling continuous, low-cost monitoring of tissue health. The system pairs a compact transducer front end with FPGA-based signal processing to deliver diagnostic-quality imaging without the cost or footprint of a clinical cart.",
    specs: [
      { label: "Tool", value: "SystemVerilog, FPGA, Vivado, SPI, Altium Designer, MATLAB, Wi-Fi 6E" },
      { label: "Focus", value: "FPGA Design, Signal Processing, Hardware Integration, Custimized PCB" },
      { label: "Timeline", value: "2026" },
      { label: "Status", value: "Complete" },
    ],
    sections: [
      {
        heading: "Overview",
        body: [
          "This project aimed to design and prototype a compact, wearable ultrasound imaging system capable of real-time data acquisition and wireless transmission for home-based medical diagnostics. Traditional ultrasound systems are bulky, expensive, and require clinical environments, limiting accessibility. Our goal was to develop a scalable embedded system that enables continuous, non-invasive monitoring by integrating multi-channel sensing, real-time signal processing, and high-speed communication into a compact form factor.",
        ],
      },
      {
        heading: "High-Level Design",
        body: [
          "The system integrates analog, digital, and communication subsystems coordinated by an FPGA. A 16-channel transducer array is driven by programmable high-voltage pulses (~26 Vpp), while echo signals are amplified, digitized at ≥60 MSPS, and processed in real time. To support scalability and debugging, the hardware was designed as a modular multi-board system, separating the FPGA SoM, analog front-end (AFE), and high-voltage pulser. This enabled independent development and reduced integration complexity when working across high-speed digital and sensitive analog domains.",
        ],
        image: ultrasoundPoster,
        caption: "System poster — portable ultrasound front end and imaging pipeline.",
      },
      {
        heading: "System design",
        body: [
          "Mechanical and electrical design were kept compact for handheld use, with the power budget tuned for continuous monitoring rather than short clinical scans.",
          "Imaging data is passed through a telehealth path so clinicians can review tissue health remotely, closing the loop between home use and clinical follow-up.",
        ],
      },
    ],
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
    specs: [
      { label: "Tool", value: "C, Flutter" },
      { label: "Focus", value: "PID self-balancing + object detection" },
      { label: "Timeline", value: "2025" },
      { label: "Status", value: "Prototype" },
    ],
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
    image: heart_1,
    images: [heart_1],
    poster: heart_1,
    video: "https://youtube.com/shorts/5wjq4J4NAsk",
    tags: ["Medical Devices", "Embedded Systems"],
    specs: [
      { label: "Tool", value: "C" },
      { label: "Focus", value: "Real-time heart rate monitoring" },
      { label: "Timeline", value: "2024" },
      { label: "Status", value: "Built" },
    ],
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
    images: [metal_1, metal_2, metal_3],
    tags: ["Embedded Systems"],
    specs: [
      { label: "Tool", value: "C" },
      { label: "Focus", value: "Wireless metal detection rover" },
      { label: "Timeline", value: "2024" },
      { label: "Status", value: "Built" },
    ],
  },
  {
    slug: "reflow-oven-controller",
    title: "Reflow Oven Controller",
    category: "Embedded System",
    year: "2024",
    summary:
      "An oven controller designed for PCB solder reflow, using programmable heating profiles and real-time LCD temperature monitoring.",
    description:
      "Wait for Later",
    image: oven_1,
    images: [oven_1],
    tags: ["Embedded Systems"],
    specs: [
      { label: "Tool", value: "C" },
      { label: "Focus", value: "PCB solder reflow temperature control" },
      { label: "Timeline", value: "2024" },
      { label: "Status", value: "Built" },
    ],
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
    specs: [
      { label: "Tool", value: "Piano" },
      { label: "Focus", value: "Solo piano performance" },
      { label: "Timeline", value: "2024" },
      { label: "Status", value: "Completed" },
    ],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
