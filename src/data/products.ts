export type ProductCategory = "flow" | "heat" | "vsd" | "iaq";

export interface ProductFeature {
  title: string;
  description: string;
}

export interface ProductFAQ {
  question: string;
  answer: string;
}

export interface Product {
  slug: string;
  title: string;
  subtitle: string;
  category: ProductCategory[];
  description: string;
  features?: ProductFeature[];
  keyFeatures?: string[];
  faqs?: ProductFAQ[];
  brochurePath?: string;
  image?: string;
  range?: string;
  specifications?: string[];
}

export const products: Product[] = [
  // Flow Meters
  {
    slug: "vir-800",
    title: "Electromagnetic Flow Meter",
    subtitle: "VIR EM (Range 6mm to 1000mm)",
    category: ["flow"],
    description: "Electromagnetic Flow Meters are intended for fluid measurement in most industries including Water, Wastewater, Food & Beverage, Pharmaceutical and Chemical. There are two basic components of Virtec Electromagnetic Flow Meter: 1. Detector & 2. Converter. Detector includes the flow tube, isolating linear and measuring electrodes. Converter is an electronic device responsible for signal processing, flow calculation, display and output signals. Our Electronic Flow Meters are factory-tested and calibrated. A calibration certificate is included in the shipment of each meter.",
    keyFeatures: [
      "Range from 6mm to 1000mm for various applications",
      "Factory-tested and calibrated with certificate included",
      "Suitable for Water, Wastewater, Food & Beverage, Pharmaceutical and Chemical industries",
      "Two-component design: Detector (flow tube, electrodes) and Converter (signal processing)",
      "Reliable signal processing and flow calculation",
      "Clear display and output signals"
    ],
    brochurePath: "/catalogs/VIR-800 ELECTRO MAGNETIC FLOW METER ONLY-24sept.pdf",
    faqs: [
      {
        question: "What industries can use the VIR-800 Electromagnetic Flow Meter?",
        answer: "The VIR-800 is suitable for Water, Wastewater, Food & Beverage, Pharmaceutical, and Chemical industries."
      },
      {
        question: "What is the measurement range of the VIR-800?",
        answer: "The VIR-800 Electromagnetic Flow Meter has a range from 6mm to 1000mm, making it suitable for various pipe sizes and flow rates."
      },
      {
        question: "Is calibration included with the meter?",
        answer: "Yes, our Electronic Flow Meters are factory-tested and calibrated. A calibration certificate is included in the shipment of each meter."
      },
      {
        question: "What are the main components of the VIR-800?",
        answer: "The VIR-800 consists of two basic components: 1. Detector (includes flow tube, isolating linear and measuring electrodes) and 2. Converter (electronic device for signal processing, flow calculation, display and output signals)."
      }
    ]
  },
  {
    slug: "vir-isrt-800",
    title: "Electromagnetic Flow Meter",
    subtitle: "VIR-ISRT-800 Series - Inline Insertion Type",
    category: ["flow"],
    description: "The VIR-ISRT-800 Series is an inline insertion type electromagnetic flow meter designed for applications where inline installation is required. This series offers reliable flow measurement with insertion-type installation convenience.",
    keyFeatures: [
      "Inline insertion type design for easy installation",
      "Electromagnetic flow measurement technology",
      "Reliable and accurate flow measurement",
      "Suitable for various industrial applications"
    ],
    faqs: []
  },
  {
    slug: "lxc-battery",
    title: "Ultrasonic Flow Meter",
    subtitle: "LXC Series - Battery Operated",
    category: ["flow"],
    description: "The LXC Series Ultrasonic Flow Meter offers battery-operated convenience for applications where power supply may be limited. This portable solution provides accurate flow measurement without requiring external power connections.",
    keyFeatures: [
      "Battery-operated for portable use",
      "Ultrasonic flow measurement technology",
      "No external power supply required",
      "Ideal for remote or mobile applications"
    ],
    brochurePath: "/catalogs/LXC SERIES ULTRASONIC-24B19.pdf",
    faqs: []
  },
  {
    slug: "vir-850",
    title: "Ultrasonic Flow Meter and Heat Meter",
    subtitle: "VIR-850 Series - 24V",
    category: ["flow", "heat"],
    description: "The VIR-850 Series is a versatile ultrasonic flow meter and heat meter operating on 24V power supply. This series combines flow measurement with thermal energy measurement capabilities for comprehensive monitoring.",
    keyFeatures: [
      "24V power supply operation",
      "Combined flow and heat measurement",
      "Ultrasonic technology for accurate readings",
      "Remote version available"
    ],
    brochurePath: "/catalogs/VIR-850-ULTRASONIC-Remote version-25603.pdf",
    faqs: []
  },
  {
    slug: "vir-832-insertion",
    title: "Ultrasonic Flow Meter",
    subtitle: "VIR-832 Insertion Type",
    category: ["flow"],
    description: "The VIR-832 Insertion Type ultrasonic flow meter provides non-invasive flow measurement with insertion probe installation. This design offers flexibility for various pipe sizes and applications.",
    keyFeatures: [
      "Insertion type installation",
      "Ultrasonic flow measurement",
      "Non-invasive measurement technology",
      "Flexible for various pipe sizes"
    ],
    brochurePath: "/catalogs/VIR-832-insertion25103.pdf",
    faqs: []
  },
  {
    slug: "vir-832-clamp",
    title: "Clamp On Meter",
    subtitle: "Non-Invasive - VIR-832, VIR-DX-900",
    category: ["flow"],
    description: "The VIR-832 and VIR-DX-900 Clamp On meters offer completely non-invasive flow measurement. These meters can be installed without cutting pipes or interrupting flow, making them ideal for retrofit applications.",
    keyFeatures: [
      "Completely non-invasive installation",
      "No pipe cutting or flow interruption required",
      "Ideal for retrofit applications",
      "Easy installation and removal",
      "Suitable for temporary or permanent use"
    ],
    brochurePath: "/catalogs/VIR-832-VIR-832M-CLAMP ON-25818.PDF",
    faqs: []
  },
  {
    slug: "lxc-water",
    title: "Ultrasonic Electronic Flow Meter for Water",
    subtitle: "LXC Series",
    category: ["flow"],
    description: "The Virtec Ultrasonic Heat Meter is a cutting-edge, accurate heat meter with a static flow sensor that ensures excellent measurement precision and long operational life regardless of where it is mounted. The ultrasonic heat meter is designed in a modular manner to measure the usage of heating in which water serves as the heat/cool bearing medium. The flow sensor has a sturdy brass construction and may be used with pressure scopes with threaded or flanged connections. It utilizes ultrasonic measurement technologies as well as microprocessor technology. Because all computation and flow monitoring circuits are developed on a single board, the accuracy and dependability are remarkable.",
    keyFeatures: [
      "Cutting-edge ultrasonic measurement technology",
      "Excellent measurement precision and long operational life",
      "Modular design for flexible installation",
      "Sturdy brass construction for durability",
      "Threaded or flanged connection options",
      "Single-board design for remarkable accuracy and dependability",
      "Microprocessor technology for advanced processing",
      "Suitable for water as heat/cool bearing medium"
    ],
    brochurePath: "/catalogs/LXC SERIES ULTRASONIC-24B19.pdf",
    faqs: [
      {
        question: "What makes the LXC Series flow meter accurate?",
        answer: "The LXC Series utilizes ultrasonic measurement technologies and microprocessor technology. All computation and flow monitoring circuits are developed on a single board, which ensures remarkable accuracy and dependability."
      },
      {
        question: "What type of connections are available?",
        answer: "The flow sensor has a sturdy brass construction and may be used with pressure scopes with threaded or flanged connections, providing flexibility for various installation requirements."
      },
      {
        question: "What is the typical operational life of the LXC Series?",
        answer: "The LXC Series is designed with a static flow sensor that ensures excellent measurement precision and long operational life regardless of where it is mounted."
      },
      {
        question: "What medium does the LXC Series measure?",
        answer: "The ultrasonic heat meter is designed to measure the usage of heating in which water serves as the heat/cool bearing medium."
      }
    ]
  },
  // Heat Meters
  {
    slug: "vir-uf",
    title: "Ultrasonic Heat Meter",
    subtitle: "VIR UF - Range 125mm to 800mm",
    category: ["heat"],
    description: "The VIR UF Ultrasonic Heat Meter provides accurate thermal energy measurement for larger diameter pipes ranging from 125mm to 800mm. This meter is ideal for district heating and cooling systems requiring precise energy measurement.",
    keyFeatures: [
      "Range from 125mm to 800mm",
      "Ultrasonic heat measurement technology",
      "Ideal for district heating and cooling systems",
      "Accurate thermal energy measurement"
    ],
    faqs: []
  },
  {
    slug: "lxc-threaded",
    title: "Ultrasonic Heat Meter",
    subtitle: "LXC Threaded Brass Series",
    category: ["heat"],
    description: "The LXC Threaded Brass Series ultrasonic heat meter features threaded brass construction for reliable thermal energy measurement. The threaded connection provides secure installation for various heating system applications.",
    keyFeatures: [
      "Threaded brass construction",
      "Ultrasonic heat measurement",
      "Reliable thermal energy measurement",
      "Secure threaded connection"
    ],
    faqs: []
  },
  {
    slug: "lxc-flange",
    title: "Ultrasonic Heat Meter",
    subtitle: "LXC Flange Series - Range 50mm to 300mm",
    category: ["heat"],
    description: "The LXC Flange Series ultrasonic heat meter offers flanged connection design for pipes ranging from 50mm to 300mm. This series provides accurate thermal energy measurement for medium-sized district heating and cooling applications.",
    keyFeatures: [
      "Range from 50mm to 300mm",
      "Flanged connection design",
      "Accurate thermal energy measurement",
      "Suitable for medium-sized district systems"
    ],
    faqs: []
  },
  // VSDs
  {
    slug: "em-700",
    title: "Eco EM-700",
    subtitle: "VSD for Ventilation",
    category: ["vsd"],
    description: "The Eco EM-700 Variable Speed Drive is designed specifically for ventilation applications. This VSD provides efficient motor control for ventilation systems, optimizing energy consumption while maintaining optimal air flow.",
    keyFeatures: [
      "Designed for ventilation applications",
      "Energy-efficient motor control",
      "Optimized air flow management",
      "Reduced energy consumption"
    ],
    faqs: []
  },
  {
    slug: "em-750",
    title: "Basic EM-750 Series",
    subtitle: "VSD for AHU",
    category: ["vsd"],
    description: "The Basic EM-750 Series Variable Speed Drive is tailored for Air Handling Unit (AHU) applications. This VSD provides essential control functions for AHU systems, ensuring reliable and efficient operation.",
    keyFeatures: [
      "Designed for Air Handling Units (AHU)",
      "Essential control functions",
      "Reliable and efficient operation",
      "Optimized for HVAC applications"
    ],
    faqs: []
  },
  {
    slug: "em-760",
    title: "HVAC Inverter",
    subtitle: "EM 760 Series",
    category: ["vsd"],
    description: "The EM 760 series is tailored to meet the unique demands of HVAC systems. It includes advanced features such as automatic energy optimization, which ensures that the system operates at peak efficiency, reducing energy consumption and operational costs. The Virtec Instruments HVAC VFD Series EM 760 is a powerful and versatile solution for modern HVAC systems. With its dedicated HVAC functionality, advanced features, and robust design, it offers unparalleled performance and reliability. Whether you are looking to improve energy efficiency, enhance system control, or ensure long-term reliability, the EM 760 series is the ideal choice for your HVAC needs.",
    keyFeatures: [
      "HVAC-Dedicated Functionality: The EM 760 series is tailored to meet the unique demands of HVAC systems. It includes advanced features such as automatic energy optimization, which ensures that the system operates at peak efficiency, reducing energy consumption and operational costs.",
      "DC Reactor and EMC Filters: To enhance performance and ensure compliance with international standards, the EM 760 series comes equipped with a built-in 5% Impedance DC reactor and EMC filters. The DC reactor helps in reducing harmonic distortion, improving the overall power quality. The EMC filters, C2 as standard and C1 optional, minimize electromagnetic interference, ensuring smooth and reliable operation of the HVAC system.",
      "User-Friendly Interface: The VFD features an intuitive and user-friendly interface, making it easy for operators to configure and monitor the system. The interface includes a clear display and simple navigation, allowing for quick adjustments and troubleshooting.",
      "Robust Design and Reliability: Built to withstand the demanding conditions of HVAC environments, the EM 760 series boasts a robust design that ensures long-term reliability and durability. The VFD is designed to operate efficiently in a wide range of temperatures up to 50°C and environmental conditions, providing consistent performance and reducing maintenance requirements.",
      "Energy Efficiency and Cost Savings: One of the primary benefits of the EM 760 series is its ability to significantly reduce energy consumption. By optimizing the operation of HVAC systems, the VFD helps in lowering energy bills and reducing the overall carbon footprint. The energy savings achieved with the EM 760 series contribute to a more sustainable and environmentally friendly operation."
    ],
    faqs: [
      {
        question: "What makes the EM 760 series suitable for HVAC systems?",
        answer: "The EM 760 series is specifically tailored to meet the unique demands of HVAC systems. It includes advanced features such as automatic energy optimization, DC reactor, and EMC filters that ensure peak efficiency and reliable operation."
      },
      {
        question: "What temperature range can the EM 760 operate in?",
        answer: "The EM 760 series is designed to operate efficiently in a wide range of temperatures up to 50°C and various environmental conditions, providing consistent performance."
      },
      {
        question: "What are the EMC filter options available?",
        answer: "The EM 760 series comes with EMC filters where C2 is standard and C1 is optional. These filters minimize electromagnetic interference, ensuring smooth and reliable operation of the HVAC system."
      },
      {
        question: "How does the EM 760 series reduce energy consumption?",
        answer: "By optimizing the operation of HVAC systems through automatic energy optimization features, the EM 760 series significantly reduces energy consumption, helping to lower energy bills and reduce the overall carbon footprint."
      },
      {
        question: "What is the DC reactor specification?",
        answer: "The EM 760 series comes equipped with a built-in 5% Impedance DC reactor that helps in reducing harmonic distortion, improving the overall power quality."
      }
    ]
  },
  // IAQ Sensors
  {
    slug: "vir-iaq-6",
    title: "VIR-IAQ-6-Series",
    subtitle: "Multi Sensor Option",
    category: ["iaq"],
    description: "The VIR-IAQ-6-Series Indoor Air Quality sensor offers multiple sensor options for comprehensive air quality monitoring. This series provides advanced monitoring capabilities for various air quality parameters.",
    keyFeatures: [
      "Multi-sensor configuration",
      "Comprehensive air quality monitoring",
      "Advanced sensor technology",
      "Flexible sensor options"
    ],
    faqs: []
  },
  {
    slug: "iaq-display",
    title: "IAQ Sensor",
    subtitle: "With Display",
    category: ["iaq"],
    description: "The IAQ Sensor with Display provides real-time indoor air quality monitoring with an integrated display. This sensor offers visual feedback for temperature, humidity, CO₂, PM, and other air quality parameters.",
    keyFeatures: [
      "Integrated display for real-time readings",
      "Temperature and humidity monitoring",
      "CO₂ and PM measurement",
      "Visual feedback and easy monitoring"
    ],
    faqs: []
  },
  {
    slug: "iaq-no-display",
    title: "IAQ Sensor",
    subtitle: "Without Display",
    category: ["iaq"],
    description: "The IAQ Sensor without Display provides comprehensive indoor air quality monitoring through digital output. This sensor is ideal for applications where display is not required or where remote monitoring is preferred.",
    keyFeatures: [
      "Digital output for remote monitoring",
      "Temperature and humidity sensing",
      "CO₂ and PM measurement",
      "Compact design without display"
    ],
    faqs: []
  }
];
