"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const products = [
  {
    id: 1,
    name: "EM700 Series Mini Inverter for Ventilation",
    image: "https://virtec.us/images/EM700%20Basic%20HVAC%20Inverter.jpeg",
    range: "",
  },
  {
    id: 2,
    name: "Electromagnetic Flow Meter - VIR EM",
    image: "https://virtec.us/images/Virtec-Website_-1_edited.png",
    range: "(Range 6mm to 1000mm)",
  },
  {
    id: 3,
    name: "Ultrasonic Heat Meter - VIR UF",
    image: "https://uploads-ssl.webflow.com/6438d84d995878788d71027c/64390842903fd056ef75182c_IMAGRE%20-1_%20(1).png",
    range: "(Range 125mm to 800mm)",
  },
  {
    id: 4,
    name: "VIR-832 Clamp-On Type UltraSonic Flow Meter/Heat Meter",
    image: "https://virtec.us/images/VIR-832-CLAMPONflowmeter.png",
    range: "",
  },
  {
    id: 5,
    name: "Ultrasonic Electronic Flow Meter for Water - LXC Series",
    image: "https://uploads-ssl.webflow.com/6438d84d995878788d71027c/64390ac59cb66255c49ac27d_Virtec%20Ultrasonic%20Water%20Meter_edited%20(1).png",
    range: "",
  },
  {
    id: 6,
    name: "Ultrasonic Heat Meter - LXC Threaded Brass Series",
    image: "https://uploads-ssl.webflow.com/6438d84d995878788d71027c/64390b220c91652aa1b0e977_IMAGRE%20-1_edited.png",
    range: "",
  },
  {
    id: 7,
    name: "Ultrasonic Heat Meter - LXC Flange Series",
    image: "https://virtec.us/images/UltrasonicHeatMeter-LXCFlangeSeries.jpeg",
    range: "(Range 50mm to 300mm)",
  },
];

export default function FeaturedProducts() {
  return (
    <section id="products" className="relative py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="font-display text-4xl lg:text-5xl font-semibold text-slate-900 mb-6">
            <strong>Featured </strong>
            <span className="text-primary-yellow">
              <strong>Products</strong>
            </span>
          </h2>
          
          {/* Product Categories List */}
          <ul className="flex flex-wrap justify-center gap-4 lg:gap-6 mb-8 text-base lg:text-lg font-semibold text-slate-700">
            <li className="flex items-center">
              <span className="w-2 h-2 rounded-full bg-primary-yellow mr-2"></span>
              <strong>Electromagnetic Flow</strong>
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 rounded-full bg-primary-yellow mr-2"></span>
              <strong>Ultrasonic Heat Meter</strong>
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 rounded-full bg-primary-yellow mr-2"></span>
              <strong>Ultrasonic Electronic Flow Meter</strong>
            </li>
          </ul>

          {/* All Products CTA */}
          <Link
            href="#products"
            className="inline-flex items-center justify-center rounded-full bg-primary-yellow px-8 py-3 text-base font-semibold text-slate-900 shadow-[0_14px_30px_rgba(255,203,8,0.35)] transition hover:brightness-95"
          >
            <strong>All Products</strong>
            <ArrowRight size={20} className="ml-2" />
          </Link>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative rounded-2xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.18)] transition-all duration-300 bg-white"
            >
              {/* Product Image */}
              <div className="relative h-64 overflow-hidden bg-slate-100">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Product Info */}
              <div className="p-6">
                <h3 className="font-semibold text-lg text-slate-900 mb-2 group-hover:text-primary-yellow transition-colors">
                  <strong>{product.name}</strong>
                </h3>
                {product.range && (
                  <p className="text-sm text-slate-600 font-medium">
                    {product.range}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
