import gait_1 from "../assets/project-gait-1.png";
import shelf_1 from "../assets/project-shelf-1.png";
import shelf_2 from "../assets/project-shelf-2.png";
import shelf_3 from "../assets/project-shelf-3.png";
import shelf_4 from "../assets/project-shelf-4.png";
import gait_2 from "../assets/project-gait-2.png";
import gait_3 from "../assets/project-gait-3.png";
import dnn_1 from "../assets/project-dnn-1.png";
import sd_1 from "../assets/project-sd-1.png";
import sd_2 from "../assets/project-sd-2.png";
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
import metal_4 from "../assets/project-metal-4.jpg";
import metal_5 from "../assets/project-metal-5.jpg";
import metal_6 from "../assets/project-metal-6.jpg";
import metal_7 from "../assets/project-metal-7.jpg";
import metal_8 from "../assets/project-metal-8.jpg";
import metal_9 from "../assets/project-metal-9.jpg";
import oven_1 from "../assets/project-oven-1.png";
import oven_2 from "../assets/project-oven-2.png";
import oven_3 from "../assets/project-oven-3.png";
import oven_4 from "../assets/project-oven-4.png";
import oven_5 from "../assets/project-oven-5.png";
import oven_6 from "../assets/project-oven-6.png";
import oven_7 from "../assets/project-oven-7.png";
import oven_8 from "../assets/project-oven-8.png";
import ultrasoundPoster from "../assets/project-ultrasound-poster.png";
import ultra_1 from "../assets/project-ultra-1.png"
import ultra_2 from "../assets/project-ultra-2.png"
import ultra_3 from "../assets/project-ultra-3.png"
import ultra_4 from "../assets/project-ultra-4.png"
import bachPoster from "../assets/project-bach-poster.png";



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
  /** Long-form body sections with optional inline figures. */
  sections?: ProjectSection[];
  /** Optional external link label (defaults to "View project"). */
  linkLabel?: string;
}

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
    slug: "autonomous-self-balancing-robot",
    title: "Autonomous Self-Balancing Robot",
    category: "Robotics",
    year: "2025",
    summary:
      "A two-wheeled self-balancing robot integrating feedback control, Bluetooth remote operation, and live video with object detection.",
    image: balance_1,
    images: [balance_1, balance_2],
    link: "https://github.com/yuhanqiuu/Self-Balancing-Bot",
    linkLabel: "View on GitHub",
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
    slug: "de1-soc-tf-card-reader",
    title: "TF Card Reader and VGA Display",
    category: "FPGA",
    year: "2026",
    summary:
      "An FPGA-based TF card reader on the DE1-SoC that parses FAT32 and displays images over VGA, with a custom breakout PCB and a layered UVM verification environment.",
    sections: [
      {
        heading: "Overview",
        body: [
          "This project implements a TF card image reader and VGA display system on the DE1-SoC FPGA board using SystemVerilog. The design accesses a TF card in SD Native 1-bit mode, parses its FAT32 file system, and automatically locates IMAGE.BIN. A 320 × 240 image in RGB332 format is loaded into on-chip RAM and displayed at 640 × 480 resolution and 60 Hz using 2× pixel scaling.",
          "The project combines synthesizable RTL, a custom TF card breakout PCB, a layered UVM verification environment, and Python image generation and preview utilities. Together, these components support development from test-image preparation and simulation through FPGA programming and hardware validation.",
        ],
      },
      {
        heading: "System Architecture",
        body: [
          "The system is organized as a sequence of modules that handle card communication, sector access, file-system parsing, image storage, and display timing. The main data path is TF Card → sdcmd_ctrl → sd_reader → sd_file_reader → img_ram → vga_ctrl → VGA. The top_sd_vga module integrates these blocks into the complete design.",
          "The sdcmd_ctrl module sends SD commands and receives responses, while sd_reader manages card initialization and sector reads. The sd_file_reader module interprets FAT32 structures and locates the image file. Image bytes are written into img_ram, and vga_ctrl reads the buffered pixels to generate the VGA output. Buffering the image separates card access from the timing requirements of the display.",
          "The DE1-SoC’s onboard TF card slot is connected directly to the Hard Processor System (HPS), so it is not available as a direct FPGA interface. A custom breakout PCB routes the card signals to the FPGA-accessible 40-pin GPIO header. The hardware deliverables include the schematic, bill of materials, and Gerber files for the adapter.",
        ],
      },
      {
        heading: "Detailed Design",
        body: [
          "**SD Card Interface:** The controller implements the native initialization sequence using CMD0, CMD8, CMD55, ACMD41, CMD2, CMD3, CMD7, and CMD16. After initialization, CMD17 performs single-block reads, with card data captured through DAT0 in 1-bit mode. Command handling and sector reading are separated into dedicated modules to make protocol behavior easier to develop and verify.",
          "**FAT32 File Reader:** The file reader parses the master boot record, boot sector, root directory, and file data to locate IMAGE.BIN automatically. The expected file contains 320 × 240 pixels stored as RGB332, with one byte per pixel and a total size of 76,800 bytes. This gives the image reader and display controller a fixed data format.",
          "**Image Buffer and VGA Output:** The image is stored in on-chip RAM before display. The VGA controller generates a 640 × 480 output at 60 Hz and scales the source image by repeating each pixel across two output columns and two output rows. RGB332 provides a compact representation with three bits for red, three for green, and two for blue.",
          "**Verification and Image Utilities:** A layered UVM environment, organized from Layer1 to Layer3, accompanies the RTL for simulation in QuestaSim. Python utilities generate gradient, checkerboard, stripe, and ramp images in the required binary format. A separate preview utility allows the image data to be inspected before it is copied to the card.",
        ],
        image: sd_2,
        caption: "TF Card Breakout Board"
      },
      {
        heading: "Deployment",
        body: [
          "**Prepare the Image:** Use generate_image_bin.py to create IMAGE.BIN and inspect it with view_image_bin.py. Copy the 76,800-byte image file to a TF card formatted as FAT32, retaining the exact file name expected by the hardware reader.",
          "**Build and Program the FPGA:** Create a project in Intel Quartus Prime Lite 18.1, add the source files from the RTL directory, and select top_sd_vga as the top-level entity. Apply the supplied pin assignment Tcl script, compile the design, and program the generated bitstream onto the DE1-SoC using USB-Blaster.",
          "**Connect and Run:** Connect the breakout PCB to the DE1-SoC GPIO header using a 40-pin ribbon cable, attach a VGA monitor, and insert the prepared TF card. Press KEY0 to reset the design and begin initialization, file loading, and display. Correct TF card DAT pin mapping was essential to achieving a complete image on the hardware.",
          "**Check Hardware Status:** HEX0 = 6 indicates that the file reader has reached DONE. LEDR0 indicates that IMAGE.BIN was found, and LEDR1 indicates that image reading has completed. LEDR6 is a latched historical timeout indicator, so it may remain illuminated even after the image has been displayed successfully.",
        ],
      },
      {
        heading: "Conclusion",
        body: [
          "The completed design demonstrates an FPGA-based path from removable storage to VGA output, combining SD Native communication, FAT32 parsing, on-chip image buffering, and display timing. Hardware testing confirmed that the full IMAGE.BIN image could be displayed after correcting the TF card DAT pin mapping, highlighting the importance of checking physical connections alongside RTL behavior.",
          "The modular architecture, layered verification environment, and image preparation utilities provide a foundation for further development and debugging. The project’s architecture and data flow were inspired by FPGA-SDcard-Reader; the repository states that its RTL was independently implemented. The hardware demonstration uses Bloodborne fan art by wlop.",
        ],
      },
    ],
    image: sd_1,
    images: [sd_1, sd_2],
    link: "https://github.com/EOW319/DE1-Soc-TFcard-Reader",
    linkLabel: "View on GitHub",
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
    slug: "metal-detector-rover",
    title: "Metal Detector Rover",
    category: "Embedded System",
    year: "2024",
    summary:
      "A wireless metal detector robot capable of reporting magnetic field strength.",
    sections: [
      {
        heading: "Overview",
        body: [
          "This project aims to design and build a remote-controlled metal detector robot. This robot and remote must use two microcontrollers from two different families and use the JDY-40 to establish radio communication. Both the remote and the robot are battery-powered. The DC motors on the robot utilize MOSFETs and optocouplers for control, and the motor should be calibrated so that the robot would avoid drifting left or right when going forward. The robot must be able to detect any kind of metal using an inductor. A buzzer is attached to indicate the detection of metal along with the signal intensity. The strength of the signal is then displayed on an LCD screen attached to the remote controller. The robot should be able to maneuver smoothly and demonstrate complex driving patterns such as figure-eight, square, and “I”. Both the speed and direction should be adjustable."
        ],
      },
      {
        heading: "System Architecture",
        body: [
          "The system consists of a PIC32-based robot and an EFM8-based remote controller connected through a pair of JDY-40 radio modules. The remote reads joystick coordinates through an ADC and initiates communication to send movement commands and request metal detection data. On the robot, the PIC32 converts these commands into timer-driven PWM signals that control two DC motors through H-bridge circuits. It also measures changes in the Colpitts oscillator’s frequency relative to a calibrated baseline, converts them into metal detection intensity levels, and transmits the results to the remote. The remote displays the intensity on an LCD and adjusts the buzzer frequency to provide audible feedback. A second EFM8 handles recorded voice playback, reading audio from 25Q32 flash memory and outputting it through a DAC and LM386 amplifier to the speaker. Battery supplies and voltage regulators power the motor, control, and communication circuitry.",

          {
            image: metal_7,
            caption: "Robot software architecture showing timing, joystick inputs, oscillator frequency processing, PWM generation, and wireless feedback.",
          },
          {
            image: metal_8,
            caption: "Robot hardware architecture showing power supplies, control inputs, motor outputs, and JDY-40 communication.",
          },
          {
            image: metal_9,
            caption: "Remote controller and audio subsystem architecture showing user inputs, LCD feedback, wireless communication, and audio outputs.",
          },
        ],
      },
      {
        heading: "Detailed Hardware Design - Robot",
        body: [
          "The hardware design is responsible for the transmitter signal, motor control, and the oscillator. The main breadboard, battery pack, ball caster, and DC motors are housed in a pre-made aluminum chassis. One 9V battery and four 1.5V batteries are used to power the robot. The following sections describe the main hardware components of the robot in detail:",

          "**Voltage Regulator (3.3V and 5V):** The L7805CV voltage regulator converted the 9V battery into 5V, for powering the BO230XS USB receiver. The 5V is then converted into 3.3V by another regulator (MCP1700) to power the JDY-40 and the PIC32.",

          "**PIC32 Microcontroller and JDY-40:** The PIC32 is the main microcontroller of the robot. The JDY-40 is used by the PIC32 to send and receive strings.",

          "**H-bridge:** The H-Bridge allows the motors to be able to spin in one direction, while also being able to reverse its direction depending on the pins connecting on the optocoupler. The H-Bridge is composed of optocouplers, two 1 kilo-ohm resistors, two 10 kilo-ohm resistors, two n-channel MOSFET, and two p-channel MOSFETs.",

          "**Colpitts Oscillator:** This circuit consists of two capacitors, a resistor, an inductor, and a CMOS inverter. The CMOS inverter is made up of one p-channel and one n-channel MOSFET. The frequency of the inductor changes when metal gets close to the coil. This frequency is measured by connecting the gate of one of the MOSFETs to an ADC pin on the PIC32.",

          "The detailed schematic of the pinout diagram for the robot is shown below:",

          {
            image: metal_4,
            caption: "Table summarizing the mechanical components of the robot body",
          },
        ],
      },
      {
        heading: "Detailed Hardware Design - Remote",
        body: [
          "The remote design is mainly responsible for the functions of five components: transmission, the joystick, the LCD, the buzzer, and the speaker. In total, four breadboards, and two EFM8 microcontrollers were used to assemble the remote circuit. We apply three 1.5V batteries in series to supply a sum of 4.5V to the speaker and one 9V battery for the other components. The following sections include detailed descriptions for each of them:",

          "**Board #1:** Board #1 and Board #2 share one EFM8 microcontroller and the same software design. We used board #1 for the LCD only.",

          "**Board #2: Transmission, the Buzzer, and the Joystick.** Our team used a pair of JDY-40s that receive and send messages between the remote and the robot. A buzzer is connected to a pin of the microcontroller which increases the frequency when the strength of the metal increases. A joystick, which acts as a potentiometer, sends different voltage signals to the board when the positions of the x and y-axis values change.",

          "The detailed circuit diagram with all the pinout connections in board #1 and board #2 is shown below:",

          {
            image: metal_5,
            caption: "Schematic of Remote Transmission including combination of Board #1 and Board#2",
          },

          "**Board #3: The Speaker.** This board includes another EFM8. The two microcontrollers are connected by one pin from each, thus the message “metal detected” is triggered when a voltage signal is sent from the main transmission EFM8. The two main chips included on this board were 25Q32 and LM386. The former stored the flash memory of a WAV file, and the latter amplified the sound.",

          "The following diagram illustrates the connections for the speaker:",

          {
            image: metal_6,
            caption: "Schematic of the Speaker of Board#3",
          },

          "**Board #4: Battery Holder.** This board holds three 1.5V batteries and a 9V battery.",
        ],
      },
      {
        heading: "Detailed Software Design - Robot (Receiver)",
        body: [
          "The robot is responsible for sending metal intensity values to the remote and receiving commands to execute specific movements. The robot acts as the slave; it only receives and transmits strings when the master (the remote) sends it a ‘M’. The following sections detail how the robot functions.",

          "**Variable Initialization**\nTo start, we defined constant values such as system clock, baud rate, and max voltage for the joystick. We then initialized volatile int variables to control the PWM: ISR_pwm1, ISR_pwm2, and ISR_cnt. In the main loop, we defined int counters for both the timeout counter and the JDY-40 (timeout_cnt, cnt), an array to hold the PWM values of each wheel (pwm_arr), and the variables that would be received and sent using the JDY-40 (buff[ ], holder[ ]), and int values for frequency (f), and x and y (x,y).",

          "**Timer 1 and 4 Initialization and Interrupt Service Routine for PWM**\nTimer 1/PWM ISR: After initialization, timer 1 is used in the PWM ISR. The timer generates square waves for either wheel depending on the value of ISR_pwm1 and ISR_pwm2. The ISR_cnt is a time counter that would increment every 10 us. It is set back to zero upon 10000 or every 100 ms. The ISR_pwm can be set from -10000 to 10000 to determine the direction and speed of the motor. If the ISR_pwm is negative, the motors spin backward, if they are positive, the motors spin forward. If ISR_pwm is zero or ISR_cnt reaches the desired ISR_pwm value, the motor turns off. Timer 4 waits for a set amount of microseconds.",

          "**JDY-40 Functions**\nTwo primary functions, SerialRecieve and SerialTransmit were used in transmission. SerialRecieve receives a string and copies it into a local buffer string. SerialTransmit would copy a local buffer string and send it to the other JDY-40.",

          "**Sprintf Alternative**\nTo improve the performance of the main loop, we made a faster version of sprintf that would convert integer numbers to strings. This was done using integer division and the modulo operator. This function was used in both the receiver and transmitter code.",

          "**PWM Value Calculation**\nWe created a function named pwmcalc to calculate the PWM values that would be sent to the ISR. The PWM value consisted of a magnitude and direction. The direction was calculated by setting each wheel to 0%, 50%, or 100% depending on the x and y values given by the joystick. For instance, if the joystick was moved to the top left corner, the right wheel would be set to 100% and the left would be set to 50%, to turn left.",

          "The magnitude is represented as a ratio; it is the square root of the normal of x and y squared divided by the max voltage of the joystick. The PWM values are calculated by multiplying the magnitude and direction.",

          "**Metal Detection Function**\nThe function LevelSender was used to detect metal. The default metal frequency was set by measuring the frequency of the oscillator without any metal nearby; this is automatically done whenever the robot is reset. In the main loop, the robot would continuously record frequency values. LevelSender would subtract that value with the default frequency to determine the intensity of nearby metal.",

          "The intensity of the metal detector is divided into 4 levels: level 0, 1, 2, and 3. Level 0 means there is no metal nearby, and level 3 means that there is a lot of metal nearby.",

          "**Main Loop**\nThe main loop is comprised of two parts: an if statement for sending/receiving strings, and the PWM calculation. A signal is received when the JDY-40 sets the URXDA bit to ‘1’. When this happens, the SerialRecieve function is called, and the received string is checked; if it contains an ‘M’, then the message is let through. Afterward, the length of the message is checked. If the string fails either of these checks, it is discarded. After those checks, the string is decoded and its contents are assigned to an integer for x or y. This is done using the atoi function.",

          "Now the receiver must send metal intensity to the transmitter. First, the current frequency is calculated using the GetPeriod function. LevelSender is then called and returns the metal intensity. This metal intensity is then put into a buffer string using our modified sprintf, and sent to the transmitter using SerialTransmit.",

          "Finally, the PWM values for each wheel are calculated by calling the pwmcalc function. At this point, the loop resets back to the beginning.",
        ],
      },
      {
        heading: "Detailed Software Design - Remote (Transmitter)",
        body: [
          "The software design for the remote controller was written in C. The remote acted as the master of the transmission process. It sends the letter “M” as an instruction for the robot to send any string. The code is responsible for the functionality of the buzzer, the transmitter, and the joystick. The following sections describe how we implemented these.",

          "**Variable and Timer Initialization**\nAt the start of the code, necessary constants for the timer like baud rate were defined. The pinout connections between the microcontroller and the rest of the hardware components were also listed. Next, we initialized timers 2 and 3 and their respective ISRs. Timer 3 was used for the Timer3us function and waitms which waits for a set number of milliseconds. Timer 2 was used to output a square wave to the buzzer.",

          "**LCD Functions**\nTwo LCD functions initialized the LCD screens' pins and displayed the metal's strength. The remote received the level of intensity from the robot. The string would then be displayed on the LCD with a short delay to ensure readability.",

          "**Voltage Reading Functions**\nThe joystick works as a potentiometer. It outputs a voltage to indicate the position of the stick. The joystick was given a 4.8V, and the middle position resulted in a 2.4 V in both the x and y axes. The top right corner position would result in a 4.8V in x and 4.8V in y, while the bottom left would give (0,0) in x-y coordinate. Therefore, reading the voltage output of the joystick was essential. To do this, we initialized an analog-to-digital converter (ADC) and used it to measure the voltage of the pins.",

          "**Main**\nIn the main function, we first called the initialization functions. The voltages of the x-axis and the y-axis were read through ADC and sent using thefastestsprintf function. The buzzer reload was included in the main function, too. Since the robot sent a metal intensity between 0-3, we simply multiplied that value by 200 to calculate a frequency. The frequency of the buzzer is raised by 200Hz as the robot approaches the metal.",

          "**Speaker**\nUnlike any other remote components, the speaker was connected to another EFM8 and used a different code. The speaker program was divided into two parts: one was to load the WAV file into 25Q32, which has 32Mb of memory, and another was used to trigger sound out once a button was pressed. We used an online website to generate a speech file, converted it into a WAV audio file, and then loaded it into flash memory using the sample code. The other part only contained the logic to trigger the button. To do this, we used a digital-to-analog converter (DAC). It was used to read the memory of the chip and output the voltage required. Since there was a wire connected between two EFM8s microcontrollers, we created a pulse in the main function which acted as a button to trigger the sound",
        ],
      },
      {
        heading: "Conclusion",
        body: [
          "The objective of this project is to design and construct a remote-controlled metal detector robot. The remote controller and robot were constructed using microcontrollers from two distinct families, with communication facilitated by the JDY-40 radio module. The robot can detect the metal and report the strength of the metal signal and display with an LCD screen and a buzzer that changes frequency. A speaker is attached for a user to play customized messages. Lastly, the robot can move in fundamental directions and perform intricate driving patterns, including figure-eight, square, and straight paths.",

          "We mainly spent time for troubleshooting We had delay and noises for the radio transmission. We resolved this issue by checking the hardware component, transmitting data with smaller size, and relocating to an environment with less signal interference. The main problems we encountered were having delay and noises for the radio transmission. Overall, our group spent approximately 50 hours completing this project.",
        ],
      },
    ],
    image: metal_1,
    images: [metal_1, metal_2, metal_3],
    link: "https://github.com/yuhanqiuu/Remote-Metal-Detector-Rover",
    linkLabel: "View on GitHub",
  },
  {
    slug: "reflow-oven-controller",
    title: "Reflow Oven Controller",
    category: "Embedded System",
    year: "2024",
    summary:
      "An oven controller designed for PCB solder reflow, using programmable heating profiles and real-time LCD temperature monitoring.",
    sections: [
      {
        heading: "Introduction",
        body: [
          "This project is to design a reflow oven controller utilizing the N76E003 microcontroller. The device would enable a standard oven to perform reflow soldering by varying the temperature. This controller will facilitate reflow soldering in a standard oven by regulating temperature, with a target range of 25 to 240°C. It features a user interface allowing the selection of reflow profile parameters such as soak temperature, soak time, reflow temperature, and reflow time. An LCD is attached, and it displays the selected parameter as well as showing temperature, running time, and current status during the reflow process. An emergency stop button is incorporated for unexpected situations.",
        ],
      },
      {
        heading: "System Design",
        body: [
          "The reflow oven controller integrates temperature sensing, oven power control, and a user interface around the N76E003 microcontroller. A thermocouple and amplification circuit provide temperature feedback, while pushbuttons allow users to configure soak temperature, soak time, reflow temperature, and reflow time. The LCD displays the selected parameters, measured temperature, elapsed time, and current operating state. The software uses a Finite State Machine (FSM) to coordinate the heating and cooling stages, adjusting oven power according to temperature and timing requirements. Timer interrupts support timing and audible notifications, while serial communication sends temperature data to a Python script for visualization. Start/stop control, a heating timeout, and an overtemperature warning support monitoring and operation.",
          {
            image: oven_2,
            caption: "System Block diagram for hardware",
          },

          {
            image: oven_3,
            caption: "System Block diagram for software",
          },
        ],
      },
      {
        heading: "Data Synthesis",
        body: [
          "Our group synthesized data and information to reach appropriate conclusions regarding temperature validation and the functionality of the microcontroller-based reflow oven system.",

          "1. **Temperature Validation**: Temperature readings from the microcontroller were compared simultaneously with accurate values obtained from a multimeter using Python. The comparison of these two sets of temperature values was conducted in Excel to assess the margin of error ± 3 ℃.",

          "2. **Reflow Oven Functionality**: The FSM code was uploaded into the microcontroller without any errors to control the reflow oven process. Subsequently, we analyzed the reflow oven graph generated by the Python script. The graph closely matched the expected reflow soldering profile, indicating the proper functioning of the reflow oven system. Additionally, the FSM stages and the temperatures were accurately displayed on the LCD screen.",

          {
            image: oven_4,
            caption: "Example of Reflow Soldering Profile",
          },
          {
            image: oven_5,
            caption: "Reflow Soldering profile generated by the Python script",
          },
        ],
      },
      {
        heading: "Detailed Hardware Design",
        body: [
          "The table below summarises all the parts used for breadboard circuitry for the microcontroller system:",

          {
            image: oven_6,
            caption: "Table summarising the components of the breadboard",
          },

          "The detailed circuit diagram with all the pinout connections is shown below:",

          {
            image: oven_7,
            caption: "The detailed schematic of the circuit on the breadboard",
          },

          "To properly assemble the board and to minimize potential errors, we followed a step-by-step approach:",

          "**Making sure the LCD screen works:**",

          "i) Connected the BO230XS USB adapter to the N76E003 microcontroller by following the pinout diagram provided by the datasheet [2]",

          "ii) Made sure the microcontroller works by compiling and running test code",

          "iii) Connected the LCM-S01602DTR/M LCD screen to microcontroller system",

          "iv) Wrote and ran sample code (see Appendix B and E) to confirm that LCD screen properly displays",

          "**Making sure the buzzer works for the music (extra feature)**",

          "i) Attached the CEM-1302 speaker to pin 16 of N76E003. The speaker was connected in parallel to a 1N4148 diode and powered by a FQU13N06LS mosfet.",

          "ii) Tested sample music code before implementing it into the main code to ensure the speaker worked as intended (See Appendix A)",

          "**Setting up 5 push buttons**",

          "i) Connected 5 1N4148 with 5 pushbuttons and 1 10kΩ resistor to N76E003 and LCD as shown in the above diagram. This was done by putting a diode in series with each pushbutton and multiplexing them by wiring them to the N76E003 and the LCD",

          "ii) Ran sample code (see Appendix C) on the N765003 to confirm that it works",

          "**Making sure the correct temperature measurement setup is functional**",

          "i) Connected the OP07 opamp to LMC7660 according to datasheet specifications and pinout diagrams [3][4]. The OP07 needs dual power supplies, so LMC7660 delivers both +5V and -5V to the opamp.",

          "ii) Chose appropriate resistor values for R1 and R2 through opamp calculations and repeated trial and error; this is to ensure proper thermocouple voltage amplification.",

          "iii) R1 and R2 resistor values were 100kΩ and 470Ω, respectively.",

          "iv) Made the hot junction of the thermocouple by twisting ends of chromel and alumel of thermocouple and placed it in the oven, and connected the cold junction to the breadboard, as seen in this figure:",

          "v) We recorded the temperature readings in real-time from a temperature range of 25-240℃ and compared them with controller temperatures of Fluke 45 using Python",

          "vi) The temperature differences were within 3℃ range for all readings",

          "**Making sure the FSM works on this setup**",

          "i) Loaded the main code (see Appendix A) to the N76E003 microcontroller after completing all of the above-mentioned steps",

          "ii) The stages were correctly displayed along with of the extra features and the speaker worked accordingly at the end of the demo",

          "iii) The push buttons were working as expected and we could increment and decrement values with them",
        ],
      },
      {
        heading: "Detailed Software Design",
        body: [
          "**Variable Initialization**\nOur team uses 185 lines of code to initialize variables. We allowed the interfacing with hardware by assigning pins for the LCD, speaker, and pushbuttons as well as different strings to be displayed in the LCD. A keyboard was created to initialize the frequencies of notes. We also reserved space for flags, temperature, time, FSM state indicator, etc.",

          "**Initialization and Interrupt Service Routine for Timer 0 and 2**",

          "Timer 0: After initialization, timer 0 is set to execute every 1/4096Hz to generate a 2048 Hz wave to the assigned pin (SOUND_OUT). The pin is connected to the speaker, which outputs a sound based on the set frequency. Different frequencies were used to generate different sounds.",

          "Timer 2: This timer is used to manage the various counters, such as the power and second counter. The interrupt occurs every 1 ms. The timer 2 function contains a variable that increments every time the interrupt is used and it compares the power percentage desired. If the carry bit is set to 1, it ends the interrupt until the counter equals the power percentage. If the variable counter reaches 100, it increments the second counter.",

          "**Push Button Setup**\nFour push buttons are used to set the soak temperature, soak time, reflow temperature, and reflow time. We created a function that increases the parameter while the button is held. A short delay is applied so that users can press shortly when changing the parameters step by step. Our design does not feature a decrement parameter; instead, we set a threshold for each parameter that automatically loops back to zero when the parameter reaches its maximum value.",

          "We assigned one push button and a flag to the start/stop function. When users push the button, the flag toggles between 1 and 0 to indicate start and stop. After a stop is requested, the FSM state will not change unless the button is pushed again.",

          "**Data Transfer through Serial Port and Display with LCD**\nWe used the Display_BCD function to send BCD data to the LCD.",

          "**Voltage to Temperature Conversion**\nWe converted voltage output to temperature using functions in math32.inc.",

          "**Temperature Comparison Function**\nThe temperature comparison function reads the temperature value and compares it to a value stored in register ‘A’. After using the Display_Data function, it is used to store the temperature value in variable ‘Y’ and then compared with the value of register ‘A’ inside variable ‘X’. Both of these variables are stored in hexadecimal. We then use the x_lteq_y function in the math32.inc file to compare if ‘X’ is lesser than ‘Y’. The ‘mf’ flag is set to 1 if ‘X’ is less than ‘Y’, and 0 if it isn’t.",

          "**Main Loop**\nIn the main loop, we display default parameters and enable interrupts for the FSM.",

          "**Finite State Machine**",

          "**State Setting**\nThere are six states in total in our finite state machine. The detailed FSM diagram with all states and conditions is shown in the figure below:",

          {
            image: oven_8,
            caption: "FSM Diagram",
          },

          "**Abort**\nThe abort function is called when the temperature inside the oven does not reach 50℃ within the first 60 seconds of starting.",

          "**Compare Temperature**\nCompare the desired temperature constantly in the ramp to reach the desired soak temperature and the ramp to reflow temperature.",

          "**Display strings and values**\nConstant strings are displayed in the LCD to indicate the current state to the user. The temperature values and seconds are displayed as well in each state using the different counters.",

          "**PWM**\nAcross different states, we load PWM with a number (0 to 100) that indicates the current percentage of the power in the oven. Loading 0 to the PWM variable at the setting(state 0) and the cooling (state 5) would indicate that the oven should be off. During ramp to soak (state 1) and ramp to peak (state 3), full power should be applied to the oven, so the PWM variable will be changed to 100. During preheating (state 2) and reflow (state 4), only 20 percent of the power is required.",

          "**Music**\nAs forementioned, we initialize a keyboard with different frequencies. In state 6 of the FSM, we reload frequencies into Timer 0 and set the proper length of delay to create the melody of Turkish March. Only nine bars of the piece were created since our original intent was to notify users at the end of the cooling stage.",

          "**Special Characters**\nWe created special characters using an online custom character creator [1]. It provides an 8x16 bitmap where you can craft your shapes and convert the bits to hex-decimal values. To coordinate with our music, we created a bell, a music note, a double music note, and a bell. Later in the code, we write additional branches to display these special characters.",

          "**Overheat**\nIf the temperature of the oven exceeds 250 ℃, the LCD will indicate \"too hot,\" alerting the user to an abnormal oven condition. Our team creates a fire character, which shows on the LCD as well.",
        ],
      },
      {
        heading: "Conclusion",
        body: [
          "Our team designed a reflow oven controller using the N76E003 microcontroller. The purpose of the oven controller is to assemble surface mount devices (SMD) onto PCBs by carefully heating the solder paste. The software was written in 8051 Assembly. The controller can measure temperatures ranging from 25℃ to 240℃ using a K-type thermocouple. For the user interface, we made sure that the LCD displayed the soak temperature, soak time, reflow temperature, and reflow time. The 5 push buttons are used to select the parameters, start and stop the reflow process, and reset the oven. As a safety precaution, the reflow process is aborted if the oven does not reach 50℃ in the first 60 seconds.",

          "In terms of problems, we had the most trouble calculating the R1 and R2 resistor values to obtain the optimal gain value for the opamp. The hardware team needed to validate the controller temperature data using the lab multimeter multiple times due to issues with the testing procedure; these issues were eventually fixed, but it still took a significant amount of time. For the software team, debugging the main code was a huge obstacle due to the many stages and flags of the FSM. Furthermore, the extra features needed to be integrated with the main code, and then debugged. Despite the challenges, our team took around 35 hours of hard work to complete the project and create a functional reflow oven controller.",
        ],
      },
    ],
    image: oven_1,
    images: [oven_1],
  },
  {
    slug: "deep-neural-network-accelerator-on-fpga",
    title: "Deep Neural Network Accelerator on FPGA",
    category: "FPGA",
    year: "2025",
    summary:
      "An FPGA acceleration platform for MNIST handwritten digit recognition, combining a Nios II processor, Q16.16 arithmetic, custom Avalon accelerators, and VGA output.",
    image: dnn_1,
    images: [dnn_1],
    link: "https://github.com/yuhanqiuu/Deep-Neural-Network-Accelerator-on-FPGA",
    linkLabel: "View on GitHub",
    sections: [
      {
        heading: "Overview",
        body: [
          "This project develops an FPGA-based acceleration platform for recognizing handwritten digits from the MNIST dataset. A Nios II embedded processor runs the control software, while custom SystemVerilog peripherals support memory transfers and fixed-point dot-product computation. The system targets the DE1-SoC board and combines processor software, external memory, and dedicated hardware within a single system-on-chip design.",
          "The inference workload is a multilayer perceptron with 784 inputs, two hidden layers of 1,000 neurons each, and 10 outputs corresponding to digits 0–9. Each 28 × 28 grayscale image is flattened into an input vector, processed through weighted sums and biases, and classified by selecting the largest output. ReLU activation maps negative hidden-layer values to zero. Pretrained parameters and formatted test images provide the workload, allowing the project to focus on inference hardware and system integration.",
        ],
      },
      {
        heading: "System Architecture",
        body: [
          "The system is built in Platform Designer around a Nios II soft processor, 32 KB of on-chip program memory, an external SDRAM controller, and an Avalon memory-mapped interconnect. The processor executes the application from on-chip memory, while the 64 MB SDRAM holds network weights, biases, input images, and intermediate activations. JTAG supports program loading and debugging, and a JTAG UART provides a channel for diagnostic output.",
          "The reference clocking design uses a PLL with a 50 MHz input and two 50 MHz outputs. One clocks the processor and peripheral logic; the other drives the external SDRAM with a −3 ns phase shift to account for board-level timing. The SDRAM clock uses zero phase shift in simulation. Keeping the PLL independent of the processor’s debug reset allows the clock source to remain active during program loading and debugging.",
          "The custom accelerators expose CPU-facing configuration registers and memory-facing Avalon master interfaces. Software writes buffer addresses and operation lengths, starts an operation, and reads the completion or result register. A VGA peripheral provides grayscale image output, while a seven-segment display provides a simple interface for the recognized digit or test status.",
        ],
      },
      {
        heading: "Detailed Design",
        body: [
          "**Q16.16 Arithmetic:** Weights, biases, and activations use signed 32-bit Q16.16 fixed-point values, with a resolution of 1/65,536. Multiplication produces a 64-bit intermediate, which is shifted right by 16 bits to restore the original scale. The arithmetic uses truncation rather than rounding. Matching the software and hardware treatment of signed values and fractional bits is essential to obtaining consistent inference results.",
          "**Avalon Communication:** The memory interface must distinguish between acceptance of a request and arrival of its data. The waitrequest signal indicates that a transaction must wait, while readdatavalid identifies a valid read response. SDRAM refresh and access latency can delay either stage. The accelerator control logic must therefore coordinate requests and responses instead of assuming that a memory read completes in one cycle.",
          "**Memory-Copy Accelerator:** The word-copy peripheral moves blocks of aligned 32-bit words between memory locations. Software supplies a destination address, source address, and word count, then writes the start register. The hardware performs the read-and-write sequence, and a subsequent read of the completion register blocks until the transfer finishes. This provides a reusable hardware path for moving data without a processor-executed copy loop.",
          "**Dot-Product Accelerator:** The dot-product peripheral receives the addresses of a weight vector and an activation vector, together with their length. It fetches the operands from memory and accumulates their fixed-point products. Software reads the result after completion, adds the neuron bias, and applies ReLU where required. Repeating this operation across the neurons implements the matrix-vector computation for a network layer.",
          "**VGA Visualization:** A memory-mapped wrapper connects the processor to an eight-bit grayscale VGA core. Each pixel command packs its horizontal coordinate, vertical coordinate, and brightness into a single 32-bit write. A C plotting function provides the software interface, and a weighted neighborhood filter offers a way to transform a binary test image into shades of gray.",
          "**Data-Reuse Extension:** The reference design proposes two on-chip SRAM banks for activation storage. Alternating the banks between layer inputs and outputs would allow activations to be reused across many neurons without repeatedly fetching them from SDRAM. A second accelerator master port could read activations from SRAM concurrently with weights from SDRAM. An optional further extension combines dot products, bias addition, ReLU, and result writeback in hardware. These are extension paths beyond the local repository’s implemented word-copy and basic dot-product modules.",
        ],
      },
      {
        heading: "Deployment",
        body: [
          "**Build the Processor System:** Configure the processor, program memory, PLL, SDRAM controller, and peripherals in Platform Designer. Assign their address ranges, connect clocks and resets, and export the board-facing SDRAM and VGA signals. Generate the system HDL, add the top-level design and timing constraints to Quartus, and compile the FPGA configuration.",
          "**Load the Application and Data:** Use the Intel FPGA Monitor Program to program the board and load the Nios II application. Load nn.bin as binary data at SDRAM address 0x08000000 and a selected test image at 0x08800000. The application selects the software or accelerator path, processes the input, and uses the display peripherals for visual feedback.",
          "**Verify the Interfaces and Arithmetic:** Test the VGA wrapper and accelerators individually before running the complete processor system. Memory-interface models can exercise delayed responses and stalled requests, while arithmetic tests compare fixed-point results against a software reference. System-level ModelSim simulation requires the generated processor modules, memory initialization files, and functional SDRAM model.",
          "The checked-in application currently selects a memory-copy test, and its layer routine still calls the software dot-product implementation. Running fully accelerated inference therefore requires enabling and connecting the hardware path, then comparing its outputs with the reference model. Classification accuracy and acceleration should be reported only after those tests and timing measurements are completed.",
        ],
      },
      {
        heading: "Conclusion",
        body: [
          "This project connects neural network computation with practical FPGA system design. The main challenge extends beyond multiplication and accumulation to include memory latency, bus handshaking, fixed-point consistency, clock generation, and coordination between embedded software and custom peripherals.",
          "The implemented memory-copy and dot-product modules provide the basis for progressively accelerating the inference workload. The next stage is complete inference validation and performance measurement, followed by exploring activation reuse in on-chip SRAM and integrating more of each layer’s computation into hardware.",
        ],
      },
    ],
  },
  {
    slug: "depth-camera-based-3d-gait-analysis",
    title: "Depth Camera Based 3D Gait Analysis",
    category: "Computer Vision",
    year: "2026",
    summary:
      "A Python-based analysis framework that processes 3D skeletal video to extract gait metrics, supporting the study of gait changes associated with dementia.",
    image: gait_3,
    images: [gait_3, gait_2],
    link: "https://github.com/yuhanqiuu/Orbbec-Femto-Bolt-Data-Analysis",
    linkLabel: "View on GitHub",
    sections: [
      {
        heading: "Overview",
        body: [
          "This project develops a Python-based framework for extracting quantitative gait parameters from depth-camera skeletal recordings. Using data captured with an Orbbec Femto Bolt, the workflow connects three-dimensional body tracking with measurements of walking speed, step geometry, timing, and gait phases. The research context is the study of gait changes associated with dementia.",
          "The analysis script takes exported skeletal JSON as input and uses NumPy, pandas, and SciPy to process joint trajectories. It estimates walking repetitions, detects alternating gait events, computes spatial and temporal parameters, and saves one summary per dataset to an Excel workbook. The skeleton visualization and numerical output make the relationship between recorded movement and derived measurements easier to inspect.",
        ],
      },
      {
        heading: "System Architecture",
        body: [
          "The pipeline proceeds from skeletal JSON to frame selection, coordinate smoothing, directional projection, event detection, parameter calculation, and export. Frames without tracked bodies are removed. From the first body listed in each retained frame, the script extracts the pelvis, left and right ankles, and left and right feet. Time is reconstructed from frame IDs and the specified frame rate, which defaults to 30 frames per second.",
          "Coordinate units are normalized with a magnitude-based check: if the largest absolute coordinate exceeds 100, the script divides all coordinates by 1,000 to convert assumed millimeters to meters. A seven-sample moving average smooths the joint coordinates. Additional nine-sample smoothing is applied to the foot vertical signals and relative forward ankle displacement before subsequent analysis.",
        ],
      },
      {
        heading: "Skeleton Extraction",
        body: [
          "The visualization below shows an extracted skeleton overlaid on the three-dimensional depth scene. The highlighted joints and connecting segments represent the tracked head, torso, arms, and legs, while the surrounding point cloud preserves the corridor and floor. This view makes the relationship between the body model and the original recording visible.",
          "Skeleton extraction is upstream of the supplied analysis script, which reads joint positions already stored in JSON. For parameter calculation, the script estimates a horizontal forward direction from the pelvis displacement between the first and last retained frames, treating the y-axis as vertical. A perpendicular lateral axis is calculated using a cross product. Projecting the ankle positions onto these axes produces forward separation and lateral width signals.",
        ],
        image: gait_3,
        caption: "Extracted body skeleton overlaid on the depth-camera point cloud",
      },
      {
        heading: "Gait Parameter Extraction",
        body: [
          "**Gait Event Detection:** SciPy’s find_peaks identifies maxima and minima in the smoothed right-minus-left forward ankle displacement. Maxima are labeled right-foot events and minima left-foot events. Peak detection uses a minimum separation of approximately 0.35 seconds, with a floor of five samples, and a prominence threshold equal to the larger of 0.01 m or 8% of the signal range. Events are sorted by time, and consecutive events with the same foot label are discarded. These are motion-derived event estimates, rather than directly measured foot contacts.",
          "**Walking Repetitions and Speed:** The script selects whichever horizontal pelvis coordinate has the larger range and smooths it with a window of approximately one second. After normalization, transitions between the lower 20% and upper 20% of the trajectory are counted as walkway traversals, with a minimum estimate of one traversal. Estimated distance is the traversal count multiplied by the measured 4.346448 m walkway length. Gait speed is this distance divided by the duration between the first and last retained frames; cadence is the cleaned event count divided by that duration and multiplied by 60.",
          "**Step Length and Width:** Raw step-length contributions are the absolute changes in the relative ankle displacement between consecutive alternating events. A common scale factor makes their sum equal the estimated walking distance. Left and right lengths are averaged separately, and the reported mean is the average of those two side means. Step width is the mean absolute lateral ankle separation sampled at the detected events.",
          "**Step Timing:** Time differences between consecutive alternating events are grouped by the foot associated with the later event. Intervals outside 0.35–1.6 seconds are excluded before computing the left, right, and overall means. A missing side uses the overall mean; if the two side means differ by more than 0.35 seconds, both are replaced with the overall mean. This fallback reduces large discrepancies in the output but can also conceal genuine timing asymmetry.",
          "**Stance, Swing, and Double Support:** Each foot is classified as being in contact when its smoothed y coordinate is at or below that foot’s 60th-percentile value. Within intervals bounded by successive events of the same foot, contact and non-contact sample fractions give stance and swing percentages. Samples where both feet meet the contact condition are divided by the frame rate to estimate double-support time. Results are averaged across intervals from both feet. These measures use a coordinate-threshold heuristic whose interpretation depends on the input coordinate convention.",
        ],
      },
      {
        heading: "Example Analysis Output",
        body: [
          "The example below shows the final parameter summary for one analyzed recording. It reports a gait speed of 1.125 m/s and a cadence of 105.699 steps/min. Left and right step lengths are 0.756 m and 0.741 m, respectively, with a reported mean of 0.749 m and a step width of 0.103 m.",
          "The corresponding left and right step times are 0.554 s and 0.540 s, with a mean of 0.547 s. The reported stance and swing proportions are 66.108% and 33.892%, and double-support time is 0.619 s. The summary also reports 10 estimated walkway traversals. These are values from the supplied example image; the recording was not rerun here to verify that this script version reproduces them.",
          {
            image: gait_2,
            caption: "Example output showing extracted spatial, temporal, and gait-phase parameters",
          },
          "The command-line interface accepts a JSON recording and an optional frame-rate argument. It prints the metrics to three decimal places and saves them to final_gait_metrics.xlsx in the user’s Desktop directory. Each row is identified by the input filename without its extension. Reanalyzing the same dataset replaces its existing row, while a new dataset is appended, supporting repeated processing without duplicate entries.",
        ],
      },
      {
        heading: "Conclusion",
        body: [
          "This project turns exported skeletal trajectories into a repeatable analysis workflow combining signal smoothing, directional projection, event detection, distance normalization, and structured reporting. The two visual outputs connect the tracked body representation with the extracted gait summary, while Excel export supports comparison across recordings.",
          "The current implementation assumes a consistent tracked person, a known walkway length, and an appropriate vertical-axis convention. A single forward axis estimated from the recording endpoints can become unreliable when an out-and-back trial ends near its starting point, and foot-event labels need review across direction changes. Missing body frames preserve elapsed time through frame IDs, but smoothing and contact-duration calculations still operate on retained samples. Segmenting straight walking passes, checking body identity and missing data, and validating events against an independent reference are the next steps toward more reliable measurements.",
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
    link: "https://github.com/yuhanqiuu/Heart-Health-Monitor",
    linkLabel: "View on GitHub",
    sections: [
      {
        heading: "Overview",
        body: [
          "This project explores an embedded heart-rate monitoring system that combines a **photoplethysmography (PPG) sensor** with a microcontroller and a character LCD. The prototype brings together pulse sensing, timing, and local feedback, with a serial connection providing additional measurement information during development.",
          "The firmware in the repository targets the **STM32L051** and is written in C. Its measurement routine determines the interval between successive pulse edges and converts that interval into beats per minute. The interface also introduces prompts for user information, although this part of the published source remains incomplete.",
        ],
      },
      {
        heading: "System Architecture",
        body: [
          "The system follows a signal path from the PPG sensor assembly to a digital pulse input, then to the microcontroller's timing routine and display outputs. The firmware expects a pulse signal on **PA8**; it measures digital transitions rather than sampling the raw optical waveform with an ADC. The external sensing circuitry must therefore provide a signal suitable for this input.",
          "The STM32 firmware uses a **32 MHz clock** and the **24-bit SysTick counter** for period measurement and timing delays. A 16-character, two-line LCD connects through a four-bit parallel interface on PA0–PA5, while USART1 provides a serial connection for user input and diagnostic output. The build configuration opens the serial terminal at 115200 baud.",
        ],
        image: heart_1,
        caption: "Heart-rate monitoring prototype with PPG sensor and LCD",
      },
      {
        heading: "Detailed Design",
        body: [
          "**Pulse-period measurement:** The measurement routine first synchronizes with the input by waiting for a low level followed by a rising edge. It then counts elapsed clock cycles until the next rising edge. A software overflow counter extends the range of the SysTick timer, allowing the routine to track intervals longer than a single counter cycle. If the overflow limit is exceeded while waiting for transitions, the routine returns a zero result to indicate an unsuccessful measurement.",
          "**Heart-rate calculation:** The measurement loop requests one pulse period at a time. It converts the accumulated count into seconds using the configured clock frequency, then calculates beats per minute from that period. The result is formatted to two decimal places for the LCD, while the serial output also reports the measured period and counter value. A 200 ms delay follows each iteration; the total update interval additionally includes the time spent waiting for pulse edges.",
          "**LCD interface:** A separate display module handles initialization, commands, and text output. Each byte is transmitted as two four-bit transfers, reducing the number of data pins required. Its printing function selects either display line and can clear unused character positions, preventing remnants of a longer previous message from remaining on screen.",
          "**User interaction:** At startup, the display flashes a welcome message and prompts for sex and age, with responses entered through the serial terminal. In the published source, the sex response is not assigned to the variable that enables monitoring, and the age input is not correctly converted from text to an integer. These issues must be corrected before the existing startup flow can reach the measurement loop. The source does not implement a completed health classification algorithm.",
        ],
      },
      {
        heading: "Deployment",
        body: [
          "The supplied build configuration uses the **GNU Arm Embedded toolchain** for a Cortex-M0 target. It compiles the application and LCD driver alongside startup, serial, and system support modules, links the firmware with an STM32L051 linker script, and produces an Intel HEX file. The programming target uses stm32flash and launches a PuTTY serial terminal afterward.",
          "Rebuilding the project requires the shared headers, source files, and linker script referenced through the adjacent Common directory, as well as the programming utilities referenced by the build file. After correcting the startup input handling, verification should begin with a known pulse signal on PA8 to check the period and BPM calculation, followed by testing with the sensor assembly. When the measurement routine times out, the existing code reports NO SIGNAL through the serial terminal.",
        ],
      },
      {
        heading: "Conclusion",
        body: [
          "The project brings together **pulse timing, embedded C, LCD control, and serial communication** in a compact heart-rate monitoring prototype. Its central design translates the timing of a digital pulse signal into a readable BPM value, while separating display handling from the main measurement logic.",
          "The next development steps are to complete and validate the startup input handling, add filtering across successive readings, and provide a clear signal-loss message on the LCD. These improvements would make the prototype more consistent and easier to use while building on the existing sensing and display architecture.",
        ],
      },
    ],
  },
  {
    slug: "ai-food-freshness-detection-system",
    title: "AI Food Freshness Detection System",
    category: "AI / Computer Vision",
    year: "2025",
    summary:
      "Shelf Life uses zero-shot image classification to assess visible food freshness and present confidence scores. First-place winner at the Voxel51 Visual AI Hackathon.",
    image: shelf_1,
    images: [shelf_1],
    link: "https://github.com/HirokiNariyoshi/Shelf-Life",
    linkLabel: "View on GitHub",
    overview:
      "Developed in March 2025 by a five-member team, Shelf Life is a Python-based visual AI prototype that analyzes food images to support freshness assessment and reduce food waste. Our project won first place at the Voxel51 Visual AI Hackathon.",
    sections: [
      {
        heading: "Overview",
        body: [
          "Food can show ambiguous signs of aging: a change in color or texture may be difficult to interpret from appearance alone. Shelf Life explores how **visual AI and confidence scores** can help users understand these cases and make more informed storage and disposal decisions. I collaborated in a **five-member team** to develop the application during March 2025.",
          "The project uses **zero-shot image classification** to compare food images with descriptions of their condition. This approach allows us to explore different food types and visual states by changing the candidate descriptions, without training a separate classifier from scratch for each category. The prototype focuses on fruits and vegetables, with experiments covering apples, bananas, and tomatoes.",
        ],
        image: shelf_3,
        caption: "Project Value Analysis",
      },
      {
        heading: "System Architecture",
        body: [
          "The workflow connects three components: **dataset preparation, model inference, and visual inspection**. Python scripts import images and their labels into FiftyOne, pretrained CLIP models compare images against text descriptions, and the FiftyOne interface supports browsing images alongside predictions and confidence scores.",
          "The source dataset is the Fruit and Vegetable Disease (Healthy vs Rotten) collection referenced in the repository. Import scripts extract the food type and condition from folder names, store the condition as a ground-truth classification, and retain the food type as separate metadata. This keeps the reference labels available for reviewing model outputs across different categories.",
        ],
        image: shelf_4,
        caption: "Fruit and Vegetable Disease (Healthy vs Rotten) Dataset"
      },
      {
        heading: "Detailed Design",
        body: [
          "**Dataset organization:** The importer searches the dataset folders for JPG, JPEG, and PNG files, then creates a FiftyOne sample for each image. A persistent-dataset variant retains the collection between sessions. Storing food type separately from freshness condition makes it easier to inspect how the same condition appears across different fruits and vegetables.",
          "**Zero-shot classification:** The repository explores two CLIP-based inference paths. One uses the Hugging Face Transformers pipeline with CLIP ViT-L/14 and candidate descriptions such as unripe tomato, ripe tomato, and rotten tomato. Another uses the FiftyOne Model Zoo's CLIP ViT-B/32 with descriptions of apples and bananas, including visible characteristics such as browning and wrinkling.",
          "**Confidence and ambiguous cases:** Confidence scores make the model's uncertainty visible instead of presenting every prediction as equally decisive. The experiments include confidence-based filtering in FiftyOne to inspect subsets of predictions. These scores express the model's preference among the supplied descriptions; they are not calibrated probabilities that food is safe to consume.",
          "**Visual review:** FiftyOne brings the images, metadata, and predictions into one workspace so that the team can examine individual examples and refine the candidate descriptions. This supports an iterative development process in which visually ambiguous samples help reveal where labels or prompts need improvement.",
        ],
        image: shelf_2,
        caption: "Analyzing Freshness  & Advising Consumption",
      },
      {
        heading: "Deployment",
        body: [
          "The prototype is organized as Python scripts and notebook experiments. The local import workflow reads a dataset path from an environment variable and launches the FiftyOne application, while the notebook workflow supports uploading and extracting an image archive in Google Colab. Model inference relies on pretrained checkpoints accessed through Transformers or the FiftyOne Model Zoo.",
          "To adapt the workflow to another food category, a developer can import the relevant images, define candidate condition descriptions, and inspect the resulting predictions. This provides a flexible foundation for broader coverage, although each new category still needs validation. The repository represents a hackathon prototype rather than a packaged consumer application or a benchmarked production deployment.",
        ],
      },
      {
        heading: "Conclusion",
        body: [
          "Shelf Life won **first place at the Voxel51 Visual AI Hackathon**. Working as a five-member team, we combined Python, zero-shot classification, and visual dataset exploration into a food-freshness assessment prototype designed to help reduce food waste. Presenting confidence alongside predictions was central to helping users interpret uncertain cases.",
          "The project established an extensible approach to exploring multiple food categories through text descriptions and shared pretrained models. Future work could evaluate classification performance by food type, improve confidence calibration, and develop a simpler image-upload interface. Its current scope is the assessment of visible condition from images, rather than the detection of hazards that cannot be seen.",
        ],
      },
    ],
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
