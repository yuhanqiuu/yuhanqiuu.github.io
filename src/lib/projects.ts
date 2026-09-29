import gait_1 from "../assets/project-gait-1.png";
import dev51_1 from "../assets/project-51-1.png";
import dev51_2 from "../assets/project-51-2.png";
import dev51_3 from "../assets/project-51-3.png";
import dev51_4 from "../assets/project-51-4.png";
import balance_1 from "../assets/project-balance-1.jpg";
import balance_2 from "../assets/project-balance-2.png";
import balance_3 from "../assets/project-balance-3.jpg";
import balance_4 from "../assets/project-balance-4.png";
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
          "outlines the development of a two-wheeled self-balancing robot designed to maintain an upright position while being remotely controlled via Bluetooth.The system is based on the Arduino Nano 33 BLE Sense Rev2, using onboard IMU data and a PID controller for real - time balancing.Speed feedback is provided by AS5600 rotary encoders, managed through a TCA9548A I²C multiplexer.An ESP32- CAM module enables video streaming and object detection using OpenCV.The project integrates control, communication, and vision systems, demonstrating practical applications of embedded systems and feedback control.",
        ],
      },
      {
        heading: "Description of Final Design",
        body: [
          "The robot’s main structure consists of three vertically stacked plates. The bottom plate holds the battery pack on top and supports two motors mounted on either side. The middle plate houses the breadboard, which serves as the central hub for most electrical connections. The top plate is positioned at the highest level, primarily to aid in balancing and to serve as a mounting point for the camera. Four metal rods run through the corners of the plates, providing alignment and structural stability to the overall assembly.",

          "The robot is controlled using an Arduino Nano 33 BLE Sense Rev2. It generates Pulse Width Modulation (PWM) signals that are sent to two motor driver PCBs to independently control the left and right motors. The Arduino’s built-in Inertial Measurement Unit (IMU) is used to measure the tilt angle of the robot relative to the vertical axis. These tilt readings are processed by an angle PID controller, which adjusts the motor PWM signals to counteract any imbalance and keep the robot upright.",

          "However, the angle PID controller alone is not sufficient for stable self-balancing. To improve stability, we also implemented a speed PID controller using one encoder. The encoder measures the rotational speed (RPM) of the left wheel. The speed PID controller uses this data to determine the appropriate PWM adjustments needed to maintain the desired motion and stability.",

          "An additional feature of the robot is a camera module mounted on the top plate. An ESP32-CAM is used for basic object detection. The object detection firmware is flashed onto the ESP32 before it is connected to power. The module is powered through connections to the breadboard via jumper wires.",
        ],
      },
      {
        heading: "System Design",
        body: [
          "The self-balancing robot consists of three core subsystems: **electrical, mechanical, and software**. Each subsystem plays a crucial role in achieving stability, responsiveness, and additional features such as wireless control and object detection. This section details the hardware components used for sensing, actuation, and power management, the mechanical structure enabling physical stability, and the modular coding framework that integrates control logic, communication, and vision processing.",
        ],
        image: balance_3,
        caption: "High-level communication and control architecture linking the robot, phone, and computer.",
      },
      {
        heading: "Electrical Subsystem",
        body: [
          "The electrical subsystem integrates all key components responsible for sensing, processing, actuation, and power distribution. It enables real-time control of the robot's balance and movement through a coordinated interaction of sensors, microcontrollers, drivers, and power electronics.",

          "**Microcontroller: Arduino Nano 33 BLE Sense Rev2**\nPowered by a regulated 5V supply from the 12V battery pack through a step-down voltage regulator. Handles sensor readings, motor control signals, Bluetooth communication, and overall system logic.",

          "**Motor Drivers: Two DRV8833 Dual H-Bridge modules**\nReceive PWM signals from the Arduino to control the speed and direction of the DC motors. Connected directly to the battery pack (12V) to power the motors.",

          "**Motors: Two Pololu 4741 DC motors**\nProvide torque and speed for balancing and maneuvering. Directly controlled by the DRV8833 motor drivers.",

          "**Encoders: Two AS5600 Magnetic Rotary Encoders**\nMeasure the angular velocity of each wheel to support velocity feedback and control. Connected via I²C interface through a multiplexer due to identical I²C addresses.",

          "**Multiplexer: TCA9548A I²C Multiplexer**\nAllows communication with both AS5600 encoders by enabling one I²C channel at a time. Controlled by the Arduino to switch between encoder channels dynamically.",

          "**Voltage Regulator: 5V Step-Down Regulator**\nConverts the 12V battery pack voltage to a stable 5V for powering the Arduino and other low-voltage components.",

          "**Power Supply: Rechargeable 12V Battery Pack**\nProvides the main power source for the motors and motor drivers, and regulated 5V supply for logic-level components.",
        ],
      },
      {
        heading: "Mechanical Subsystem",
        body: [
          "The mechanical subsystem provides the physical framework that supports all electrical components while ensuring the robot's **center of mass** is optimized for balance and stability during motion.",

          "Overall, The robot is built from **three vertically stacked plates supported by four metal rods** at the corners. This modular structure securely houses the Arduino, motor drivers, battery, and other components, while maintaining structural rigidity and a clean layout. The vertical stacking also helps elevate key components such as the camera for an unobstructed field of view.",

          "**Motor Mounts and Wheels:**\nMotors securely mounted to chassis, with wheels properly aligned to ensure smooth movement and accurate balancing control.",

          "**Sensor Placement:**\nArduino (with integrated IMU sensors) is securely mounted to detect precise orientation and motion accurately.",

          "**Battery Housing:**\nStrategically positioned to maintain a low center of gravity and enhance stability.",

          "**Camera Module Mounting (ESP32-CAM or similar):**\nSecurely mounted to provide an unobstructed view for real-time video streaming and object detection tasks.",
        ],
        image: balance_4,
        caption: "Front view of the robot CAD model showing the chassis layout and center of mass.",
      },
      {
        heading: "Software Subsystem",
        body: [
          "The code is modular and organized into distinct components for motor control, sensor processing, Bluetooth communication, video streaming, and object detection. It is primarily written in **C++ (Arduino IDE)** for real-time control and **Python** for external processing tasks such as object detection.",

          "**1. Main Control Loop (Arduino Nano 33 BLE Sense)**\nImplements a dual-loop control system: An **angle PD controller** maintains balance using tilt data from the BMI270 IMU. A **speed PI controller** adjusts motor speed using real-time RPM feedback from AS5600 encoders. A **complementary filter** is used to fuse sensor data and act as a weighting factor between the angle and speed controllers. The combined output of this system feeds into a final PID controller, which generates the PWM signals used to drive the motors.",

          "The main loop continuously reads sensor data (angle and RPM), filters and computes PID outputs, and sends PWM values to the motors for stable balancing and maneuvering.",

          "**2. Encoder and Multiplexer Handling**\nTo handle the identical I²C addresses of the two AS5600 magnetic encoders, the system uses a TCA9548A I²C multiplexer. This allows the Arduino to communicate with one encoder at a time by dynamically opening and closing specific I²C channels. The RPM data from each encoder is read in turn and used for speed feedback in the control loop.",

          "**3. Motor Control Module**\nMotor control is based on PWM signals generated from the outputs of the PID controllers. The system supports multiple driving modes including forward, backward, slow decay, and differential turning. These behaviors are implemented through modular functions defined in a dedicated **movement.h** file, allowing clean and reusable control logic.",

          "**4. Bluetooth Communication**\nThe **ArduinoBLE** library enables real-time Bluetooth communication with a mobile app. Commands such as W, A, S, D, and 0 are used to control movement directions and stopping. These inputs are interpreted as setpoints and passed to both the angle and speed PID controllers, enabling responsive remote control.",

          "**5. Video Streaming (ESP32-CAM)**\nAn ESP32-CAM module is used for video streaming, running a web server that broadcasts **MJPEG video at a resolution of 320×240**. The live video stream is accessible through the module’s IP address, providing visual feedback to the user for remote navigation and monitoring.",

          "**6. Object Detection & Email Alerts (Python)**\nA Python script uses **OpenCV** along with a pre-trained **SSD MobileNet** model for object detection in the ESP32-CAM video stream. Detected objects are annotated and displayed in real time. The system also allows the user to send captured frames via email and change the recipient address. A custom file is used to load a list of 91 object classes for detection.",

          "**7. Parameter Tuning Interface**\nFor tuning the PID controllers, the system includes a serial-based interface that allows dynamic adjustment of control parameters such as **Kp, Ki, and Kd**. Commands like \"kp\", \"ki\", \"s\", and \"reset\" can be entered during runtime to fine-tune system behaviour and improve balancing performance during testing.",
        ],
      },
      {
        heading: "Discussion",
        body: [
          "In this project, we successfully built a self-balancing robot capable of maintaining its upright position by reading the tilt angle using a gyroscope and accelerometer and measuring motor speed with encoders. These sensor readings were used to determine appropriate PWM signals to counteract any imbalance, enabling the robot to balance itself in real time.",

          "We also developed a Bluetooth-based remote control app that allowed us to maneuver the robot while it sustained its self-balancing function. Additionally, the robot was equipped with an ESP32-CAM module for live video feedback, and we implemented an object recognition feature using OpenCV.",

          "As a significant portion of the project focused on balancing the robot, we gained valuable hands-on experience with tuning PID controllers. We learned how to intuitively adjust the PID parameters by analyzing the robot’s response and behaviour in real time. This process deepened our understanding of control systems and real-time embedded programming.",
        ],
      },
      {
        heading: "Recommendation and Future Improvement",
        body: [
          "One key thing we could improve on is the maneuvering smoothness. Currently, the robot struggles with smooth forward and backward movement due to the balancing mechanism. Future iterations should refine the control algorithm to reduce swaying and enhance responsiveness.",

          "Having a more robust balancing system would lead to better stability and allow for more dynamic movement. This could probably be done through improving sensor fusion or a better-tuned PID loop.",

          "In addition to improving the core functionality, future work could expand the robot’s extra features by adding autonomous navigation, obstacle avoidance, or more advanced computer vision capabilities to make the robot more intelligent and interactive.",
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
