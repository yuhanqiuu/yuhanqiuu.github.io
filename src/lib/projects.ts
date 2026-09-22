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
import ultra_1 from "../assets/project-ultra-1.png"
import ultra_2 from "../assets/project-ultra-2.png"
import ultra_3 from "../assets/project-ultra-3.png"
import ultra_4 from "../assets/project-ultra-4.png"
import bachPoster from "../assets/project-bach-poster.png";


export interface ProjectSpec {
  label: string;
  value: string;
}

/** An inline figure rendered between paragraphs within a section's `body`. */
export interface ProjectSectionImage {
  image: string;
  caption?: string;
}

export interface ProjectSection {
  heading: string;
  /**
   * Section content rendered in order. Each entry is either a paragraph
   * (string) or an inline figure (`{ image, caption }`) shown between the
   * surrounding paragraphs.
   */
  body: (string | ProjectSectionImage)[];
  /** Optional inline figure shown below the whole section body. */
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
    sections: [
      {
        heading: "Overview",
        body: [
          "This project develops a compact 16-channel ultrasound system for portable medical imaging. It integrates FPGA-based signal processing, a high-voltage pulser, an analog front end, and wireless transmission. The modular design provides a scalable platform for future wearable ultrasound which are more affordable and more convenient.",
        ],
      },
      {
        heading: "Introduction",
        body: [
          "Conventional hospital ultrasound transducers are large, expensive, and difficult to access. Our client, NeuroPrior AI, is a technology company that aims to provide home-based medical care. As a part of this mission, the company seeks to develop a miniature, wearable ultrasound transducer device. This design enables patients to access affordable ultrasound imaging services at home via their personal computers, while providing key benefits of a conventional ultrasound transducer, such as non-penetration, real-time performance, and high resolution."
        ],
        image: ultra_2
      },
      {
        heading: "High-Level Design",
        body: [
          "The system integrates analog, digital, and communication subsystems coordinated by an FPGA. A 16-channel transducer array is driven by programmable high-voltage pulses (~26 Vpp), while echo signals are amplified, digitized at ≥60 MSPS, and processed in real time. To support scalability and debugging, the hardware was designed as a modular multi-board system, separating the FPGA SoM, analog front-end (AFE), and high-voltage pulser. This enabled independent development and reduced integration complexity when working across high-speed digital and sensitive analog domains.",
        ],
        image: ultra_1,
        caption: "Complete Ultrasound System Architecture Showing Transmit, Receive, and FPGA Processing Pathways",
      },
      {
        heading: "My Contribution",
        body: [
          "My primary contribution focused on FPGA-based signal processing and system integration. I developed a 16-channel preprocessing pipeline with synchronized acquisition, filtering, envelope detection, and decimation for real-time ultrasound processing. I also implemented FPGA-AFE control interfaces for programmable timing, gain control, and channel selection.",
          "I contributed to the Doppler processing pipeline, validating FFT-based frequency detection using simulated echo signals. To address the ~11.5 Gbps raw RF data rate, we implemented on-FPGA preprocessing that reduced data volume by 10-100x, making wireless transmission more practical.",
          "I also supported hardware integration and validation of the 26 Vpp transmit path and analog receive circuitry. This project strengthened my experience in FPGA development, signal processing, hardware integration, and system-level debugging."
        ],
        image: ultra_3
      },
      {
        heading: "Detailed Design",
        body: [
          "The pulser subsystem supports excitation frequencies up to 12 MHz. A low-side gate driver converts the FPGA's 3.3 V PWM into 26 V pulses, with 4.5 ns rise and 4 ns fall times. A 16-channel FPGA-controlled HV multiplexer selects transducer elements, while a T/R switch protects the receive path. The pulser is implemented on a compact 4-layer 45.5 x 35.5 mm PCB.",

          "The AFE daughterboard is a compact 6-layer 30 x 30 mm PCB based on the AD9671 analog front end. It provides low-noise amplification, variable gain, anti-alias filtering, and digitization at up to 80 MSPS with 14-bit resolution. Digitized data is transferred to the FPGA through JESD204B differential lanes.",

          "The FPGA implements 16-channel TX/RX control with synchronized timing across the transducer array. It generates phased transmit pulses and controls deterministic receive windows for echo acquisition. RTL simulations verified correct PRF generation and RX gating.",

          "The FPGA imaging pipeline includes B-mode and Doppler preprocessing. FFT-based Doppler processing was validated using a 64-sample simulated echo ensemble, producing the expected frequency peak. B-mode quadrature demodulation and envelope detection were also validated using simulated reflector locations.",

          "Wireless transmission was validated through TCP streaming over Wi-Fi 6E using simulated ultrasound frames. Testing achieved 40.8 - 54.2 Mbps throughput and 77.8 - 6.5 fps depending on frame size. Performance was limited by the DE1-SoC USB 2.0 interface, while the target Zynq platform supports USB 3.0 for higher bandwidth."
        ],
        image: ultra_4
      }
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
  },
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
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
