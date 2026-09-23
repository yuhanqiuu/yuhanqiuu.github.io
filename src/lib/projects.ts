import gait_1 from "../assets/project-gait-1.png";
import dev51_1 from "../assets/project-51-1.png";
import dev51_2 from "../assets/project-51-2.png";
import dev51_3 from "../assets/project-51-3.png";
import dev51_4 from "../assets/project-51-4.png";
import balance_1 from "../assets/project-balance-1.png";
import balance_2 from "../assets/project-balance-2.png";
import balancePrototype from "../assets/project-balance-prototype.jpg";
import balanceArchitecture from "../assets/project-balance-architecture.jpg";
import balanceSimulation from "../assets/project-balance-simulation.png";
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
  description?: string;
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
    sections: [
      {
        heading: "Overview",
        body: [
          "This project is a custom development board built around the STC89C52RC, an 8051-based microcontroller. The goal was to design a compact and practical platform for embedded-system development while gaining hands-on experience with the complete PCB design workflow, from schematic capture and component selection to layout and fabrication preparation.",

          "The board integrates the core circuitry required for standalone microcontroller operation and provides accessible connections for programming, debugging, and peripheral development."
        ],
        image: dev51_1,
      },

      {
        heading: "Schematic Design",
        body: [
          "The schematic was designed around the STC89C52RC and its supporting circuitry, including power, clock, reset, programming, and external I/O connections. The circuit was organized into functional blocks to make signal flow easier to understand, verify, and troubleshoot.",

          "Supporting components and interfaces were selected to provide reliable standalone operation while keeping important MCU signals accessible for programming and peripheral development."
        ],
        image: dev51_3
      },

      {
        heading: "PCB Layout",
        body: [
          "The schematic was translated into a compact PCB layout with component placement organized around the microcontroller and its supporting circuitry. Connectors and user-accessible interfaces were positioned for convenient access, while related components were grouped to simplify routing.",

          "The routing process focused on short signal paths, practical power distribution, and clear organization of the board. Design-rule checks and iterative layout refinement were used to verify manufacturability and reduce potential routing and assembly issues."
        ],
        image: dev51_4
      },

      {
        heading: "Final Design",
        body: [
          "The final PCB provides a compact and reusable platform for 8051-based embedded development. The 3D render was used to verify component orientation, connector accessibility, mechanical spacing, and the overall arrangement of the assembled board before fabrication.",

          "This project strengthened my experience with schematic capture, component and footprint selection, PCB placement and routing, design-rule verification, and preparing a hardware design for fabrication."
        ],
      }
    ],
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
    image: gait_1,
    images: [gait_1],
  },
  {
    slug: "autonomous-self-balancing-robot",
    title: "Autonomous Self-Balancing Robot",
    category: "Robotics",
    year: "2025",
    summary:
      "A two-wheeled self-balancing robot integrating feedback control, Bluetooth remote operation, and live video with object detection.",
    image: balance_1,
    images: [balance_1, balance_2],
    sections: [
      {
        heading: "Overview",
        body: [
          "This project combines real-time balance control, wireless operation, and computer vision in a two-wheeled robot. An Arduino Nano 33 BLE Sense Rev2 processes inertial measurements and wheel-speed feedback to keep the robot upright while receiving movement commands over Bluetooth. An ESP32-CAM provides live video to a computer, where a Python application detects and labels objects.",
          "The central challenge was maintaining balance while maneuvering. This required coordinating sensor processing, motor actuation, and feedback control, then refining the system through physical testing.",
        ],
        image: balancePrototype,
        caption: "The assembled prototype with a three-level chassis, motor drive system, and ESP32-CAM.",
      },
      {
        heading: "System Architecture",
        body: [
          "The system separates balance control from video processing. The Arduino handles orientation sensing, wheel-speed feedback, motor commands, and Bluetooth communication. The ESP32-CAM sends images over Wi-Fi to an external computer running OpenCV and a pretrained SSD MobileNet model.",
          "This arrangement keeps vision processing off the microcontroller responsible for balancing. A mobile interface provides forward, backward, turning, and stop commands, while the computer displays the camera feed with object annotations.",
        ],
        image: balanceArchitecture,
        caption: "High-level communication and control architecture linking the robot, phone, and computer.",
      },
      {
        heading: "Mechanical Design and Modeling",
        body: [
          "The chassis consists of three stacked plates supported by four metal rods. The lower level carries the battery and motors, the middle level supports the control electronics, and the upper plate provides a mounting point for the camera. SolidWorks was used to examine the assembly and estimate its mass properties, with the modeled robot weighing approximately 890 grams.",
          "We initially modeled the robot as an inverted pendulum in MATLAB and Simulink to explore its dynamics and obtain starting PID gains. However, these gains produced poor balance on the physical prototype. The model also preceded changes to the upper plate position, limiting its relevance to the final assembly. We therefore shifted to experimental tuning based on the robot’s measured behavior.",
        ],
        image: balanceSimulation,
        caption: "Early simulation model used to explore the robot’s mechanical dynamics.",
      },
      {
        heading: "Balance Control and Sensor Feedback",
        body: [
          "The balance controller estimates tilt using the Arduino’s onboard accelerometer and gyroscope. A complementary filter combines the two measurements, providing an orientation estimate for the feedback controller. Motor PWM commands are continuously adjusted to counteract deviations from the upright position.",
          "Angle feedback alone did not provide sufficient stability, so we added wheel-speed feedback using an AS5600 magnetic encoder. The control software combines angle regulation with speed correction to support balancing and commanded motion. A serial tuning interface allows controller parameters to be adjusted during testing without repeatedly editing and uploading the firmware.",
          "We originally explored independent feedback from both wheels through a TCA9548A I²C multiplexer, since the encoders share the same address. Testing revealed unreliable readings from the right encoder, so the final implementation used the left encoder for speed feedback. This decision simplified the working system while leaving independent wheel-speed regulation as a future improvement.",
        ],
      },
      {
        heading: "Wireless Control and Computer Vision",
        body: [
          "Bluetooth commands are interpreted as movement setpoints, allowing the operator to steer while the balance controller continues running. Separate motor-control functions support forward and backward motion, differential turning, and stopping.",
          "The ESP32-CAM provides a 320 × 240 video feed over Wi-Fi. On the computer, a Python application uses OpenCV and SSD MobileNet to identify objects and overlay bounding boxes and class labels. The application also supports sending either an original frame or an annotated image by email when requested by the operator.",
        ],
      },
      {
        heading: "Testing, Results, and Improvements",
        body: [
          "The completed prototype demonstrated self-balancing, Bluetooth-controlled movement, live video, and object detection. The project report records recovery from disturbances of up to 15 degrees within two seconds, Bluetooth response below 200 milliseconds under optimal conditions, and video streaming at 15 frames per second under typical Wi-Fi conditions.",
          "Forward and backward movement remained less smooth than intended, with swaying caused by the interaction between motion commands and balance corrections. Further work would focus on refining the controller, improving sensor feedback, and restoring reliable measurements from both wheels. More consistent Wi-Fi connectivity would also improve the video experience.",
          "The project provided practical experience in feedback control, embedded programming, mechanical integration, and computer vision. Its most valuable lesson was the importance of testing the complete physical system: simulation provided a starting point, while hardware behavior guided the final control design.",
        ],
      },
    ],
  },
  {
    slug: "cardio-health-monitor",
    title: "Cardio Health Monitor",
    category: "Embedded System",
    year: "2024",
    summary:
      "A real-time cardio health monitor with live heart rate visualization on an oscillocscope and LCD-based health feedback.",
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
    image: bachPoster,
    images: [bachPoster],
    poster: bachPoster,
    video: "https://youtu.be/fU3B2pN_iLU",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
