"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";

type ProductCategory = "flow" | "heat" | "vsd" | "iaq";

interface Product {
  id: string;
  name: string;
  description: string;
  category: ProductCategory[];
  image?: string;
}

const categories: { id: ProductCategory; name: string; description: string }[] = [
  {
    id: "flow",
    name: "Flow Meters",
    description: "High-precision ultrasonic and electromagnetic flow measurement for water and HVAC applications",
  },
  {
    id: "heat",
    name: "Heat Meters",
    description: "Accurate thermal energy measurement for district heating, cooling, and energy management systems",
  },
  {
    id: "vsd",
    name: "Variable Speed Drives (VSDs)",
    description: "Intelligent motor control solutions for improved energy efficiency and system performance",
  },
  {
    id: "iaq",
    name: "Indoor Air Quality (IAQ) Sensors",
    description: "Advanced monitoring solutions for temperature, humidity, CO₂, PM, and air quality optimization",
  },
];

const products: Product[] = [
  // Flow Meters
  {
    id: "vir-800",
    name: "Electromagnetic Flow Meter and Heat Meter - VIR-800 Series",
    description: "Inline Flanged Connection",
    category: ["flow", "heat"],
    image: "https://virtec.us/images/Virtec-Website_-1_edited.png",
  },
  {
    id: "vir-isrt-800",
    name: "Electromagnetic Flow Meter - VIR-ISRT-800 Series",
    description: "Inline Insertion Type",
    category: ["flow"],
  },
  {
    id: "lxc-battery",
    name: "Ultrasonic Flow Meter and Heat Meter - LXC Series",
    description: "Inline Flanged Connection - Battery Operated",
    category: ["flow", "heat"],
    image: "https://uploads-ssl.webflow.com/6438d84d995878788d71027c/64390ac59cb66255c49ac27d_Virtec%20Ultrasonic%20Water%20Meter_edited%20(1).png",
  },
  {
    id: "vir-850",
    name: "Ultrasonic Flow Meter and Heat Meter - VIR-850 Series",
    description: "Inline Flanged Connection - 24V",
    category: ["flow", "heat"],
  },
  {
    id: "vir-832-insertion",
    name: "Ultrasonic Flow Meter - VIR-832",
    description: "Insertion Type",
    category: ["flow"],
    image: "https://virtec.us/images/VIR-832-CLAMPONflowmeter.png",
  },
  {
    id: "vir-832-clamp",
    name: "Clamp On Meter - Non Invasive",
    description: "VIR-832, VIR-DX-900, VIR-1000",
    category: ["flow"],
    image: "https://virtec.us/images/VIR-832-CLAMPONflowmeter.png",
  },
  {
    id: "lxc-water",
    name: "Ultrasonic Water Meter - LXC Series",
    description: "Electronic Flow Meter for Water",
    category: ["flow"],
    image: "https://uploads-ssl.webflow.com/6438d84d995878788d71027c/64390ac59cb66255c49ac27d_Virtec%20Ultrasonic%20Water%20Meter_edited%20(1).png",
  },
  // Heat Meters
  {
    id: "vir-uf",
    name: "Ultrasonic Heat Meter - VIR UF",
    description: "Range 125mm to 800mm",
    category: ["heat"],
    image: "https://uploads-ssl.webflow.com/6438d84d995878788d71027c/64390842903fd056ef75182c_IMAGRE%20-1_%20(1).png",
  },
  {
    id: "lxc-threaded",
    name: "Ultrasonic Heat Meter - LXC Threaded Brass Series",
    description: "Threaded Brass Series",
    category: ["heat"],
    image: "https://uploads-ssl.webflow.com/6438d84d995878788d71027c/64390b220c91652aa1b0e977_IMAGRE%20-1_edited.png",
  },
  {
    id: "lxc-flange",
    name: "Ultrasonic Heat Meter - LXC Flange Series",
    description: "Range 50mm to 300mm",
    category: ["heat"],
    image: "https://virtec.us/images/UltrasonicHeatMeter-LXCFlangeSeries.jpeg",
  },
  // VSDs
  {
    id: "em-700",
    name: "Eco EM-700",
    description: "For Ventilation",
    category: ["vsd"],
    image: "https://virtec.us/images/EM700%20Basic%20HVAC%20Inverter.jpeg",
  },
  {
    id: "em-750",
    name: "Basic EM-750 Series",
    description: "For AHU",
    category: ["vsd"],
  },
  {
    id: "em-760",
    name: "Advanced EM-760",
    description: "For Advanced control logic in AHU and Pumps",
    category: ["vsd"],
  },
  // IAQ Sensors
  {
    id: "vir-iaq-6",
    name: "VIR-IAQ-6-Series",
    description: "Multi Sensor Option",
    category: ["iaq"],
  },
  {
    id: "iaq-display",
    name: "IAQ Sensor",
    description: "With Display",
    category: ["iaq"],
  },
  {
    id: "iaq-no-display",
    name: "IAQ Sensor",
    description: "Without Display",
    category: ["iaq"],
  },
];

export default function FeaturedProducts() {
  const [activeCategory, setActiveCategory] = useState<ProductCategory>("flow");

  const filteredProducts = products.filter((product) =>
    product.category.includes(activeCategory)
  );

  return (
    <section id="products" className="relative py-12 sm:py-16 md:py-12 lg:py-20 xl:py-24 2xl:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12 xl:mb-16"
        >
          <h2 className="font-display text-2xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl 2xl:text-5xl text-slate-900 mb-3 sm:mb-4 md:mb-6">
            Featured <span className="text-primary-yellow">Products</span>
          </h2>
          
          {/* Product Portfolio Intro */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xs sm:text-xs md:text-sm lg:text-sm xl:text-base 2xl:text-lg text-slate-700 max-w-3xl mx-auto mb-4 sm:mb-6 md:mb-8 px-4"
          >
            Virtec offers a comprehensive range of advanced solutions designed to optimize efficiency, accuracy, and sustainability:
          </motion.p>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-3 lg:gap-4 mb-6 sm:mb-8 md:mb-10 lg:mb-12 px-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 rounded-full text-xs sm:text-sm md:text-base font-medium transition-all duration-300 min-h-[44px] flex items-center justify-center ${
                  activeCategory === category.id
                    ? "bg-primary-yellow text-slate-900 shadow-[0_4px_20px_rgba(255,203,8,0.35)]"
                    : "bg-white text-slate-700 hover:bg-primary-yellow/20 border border-slate-200"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Category Description */}
          <motion.p
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-xs sm:text-xs md:text-sm lg:text-sm xl:text-base 2xl:text-lg text-slate-600 max-w-2xl mx-auto mb-4 sm:mb-6 md:mb-8 px-4"
          >
            {categories.find((cat) => cat.id === activeCategory)?.description}
          </motion.p>

          {/* All Products CTA */}
          <Link
            href="#products"
            className="inline-flex items-center justify-center rounded-full bg-primary-yellow px-5 py-2 sm:px-6 sm:py-2.5 md:px-7 md:py-2.5 lg:px-8 lg:py-3 text-xs sm:text-sm md:text-base text-slate-900 shadow-[0_14px_30px_rgba(255,203,8,0.35)] transition hover:brightness-95 min-h-[40px] sm:min-h-[44px]"
          >
            All Products
            <ArrowRight size={16} className="sm:w-4 sm:h-4 md:w-5 md:h-5 ml-1.5 sm:ml-2" />
          </Link>
        </motion.div>

        {/* Products Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8"
          >
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative rounded-xl sm:rounded-2xl overflow-hidden border border-slate-200 shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.18)] hover:border-primary-yellow/30 transition-all duration-300 bg-white"
              >
                {/* Product Image */}
                <div className="relative h-48 sm:h-56 md:h-64 lg:h-72 overflow-hidden bg-slate-100">
                  {product.image ? (
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary-yellow/20 to-slate-900/10">
                      <div className="text-3xl sm:text-4xl font-display text-primary-yellow/30">V</div>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Product Info */}
                <div className="p-4 sm:p-5 md:p-6">
                  <h3 className="text-sm sm:text-base md:text-base lg:text-lg xl:text-xl 2xl:text-2xl text-slate-900 mb-2 group-hover:text-primary-yellow transition-colors leading-tight">
                    {product.name}
                  </h3>
                  {product.description && (
                    <p className="text-xs sm:text-xs md:text-sm lg:text-sm xl:text-base 2xl:text-lg text-slate-600 font-medium line-clamp-2 sm:line-clamp-3">
                      {product.description}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
