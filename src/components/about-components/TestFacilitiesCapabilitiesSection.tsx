"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle } from "lucide-react";

const facilityImages = [
  {
    src: "/test-facilities/IMG_4997.JPG",
    alt: "Large-bore pipe calibration bench at Virtec testing facility",
  },
  {
    src: "/test-facilities/IMG_5032.JPG",
    alt: "Small-bore calibration stations with precision control equipment",
  },
  {
    src: "/test-facilities/IMG_5033.JPG",
    alt: "Calibration setup with reference instrumentation and control panels",
  },
  {
    src: "/test-facilities/IMG_5034.JPG",
    alt: "Computerized control workstations for calibration data acquisition",
  },
];

const capabilities = [
  "Calibration range from DN25 to DN1200",
  "Wet calibration under stable and controlled flow conditions",
  "High-precision reference instrumentation",
  "Verification of volumetric flow and thermal energy measurement",
  "Testing aligned with EN 1434 requirements for heat meters",
  "Accuracy validation for Class 2 and other specified performance classes",
  "Complete documentation with traceable calibration reports",
];

export default function TestFacilitiesCapabilitiesSection() {
  return (
    <section className="relative py-12 sm:py-16 md:py-12 lg:py-20 xl:py-24 2xl:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6 sm:space-y-8 md:space-y-10 lg:space-y-12"
        >
          {/* Heading */}
          <div className="text-center space-y-2 sm:space-y-3 md:space-y-4">
            <h2 className="font-display text-2xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl 2xl:text-5xl text-slate-900">
              Capability Highlights
            </h2>
            <p className="text-xs sm:text-xs md:text-sm lg:text-sm xl:text-base 2xl:text-lg text-slate-700 max-w-3xl mx-auto px-4">
              Our state-of-the-art facilities deliver comprehensive testing and
              calibration across an extensive range of flow meter sizes and
              operating conditions.
            </p>
          </div>

          {/* Image Gallery */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5 lg:gap-6">
            {facilityImages.map((image, index) => (
              <motion.div
                key={image.src}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative h-36 sm:h-44 md:h-52 lg:h-56 rounded-xl sm:rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-shadow duration-300"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </motion.div>
            ))}
          </div>

          {/* Capabilities List */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-slate-50 rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-10 border border-slate-200"
          >
            <h3 className="font-display text-lg sm:text-xl md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl text-slate-900 font-semibold mb-4 sm:mb-6">
              Testing & Calibration Capabilities
            </h3>
            <div className="grid grid-cols-1 gap-3 sm:gap-3.5 md:gap-4">
              {capabilities.map((capability, index) => (
                <div key={index} className="flex items-start gap-2 sm:gap-3">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-primary-yellow mt-0.5 flex-shrink-0" />
                  <span className="text-xs sm:text-sm md:text-sm lg:text-base xl:text-lg text-slate-700 leading-relaxed">
                    {capability}
                  </span>
                </div>
              ))}
            </div>
            <p className="mt-4 sm:mt-6 text-xs sm:text-xs md:text-sm lg:text-sm xl:text-base 2xl:text-lg leading-relaxed text-slate-700">
              These comprehensive testing capabilities ensure every instrument
              undergoes rigorous verification prior to dispatch, delivering
              dependable measurement accuracy, regulatory compliance, and
              long-term operational reliability.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
