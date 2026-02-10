"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function TestFacilitiesSection() {
  return (
    <section className="relative py-12 sm:py-16 md:py-12 lg:py-20 xl:py-24 2xl:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 xl:gap-16 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4 sm:space-y-6"
          >
            <h2 className="font-display text-2xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl 2xl:text-5xl text-slate-900">
              Calibration & Test{" "}
              <span className="text-primary-yellow">Facilities</span>
            </h2>

            <div className="space-y-3 sm:space-y-4 md:space-y-5 lg:space-y-6 text-xs sm:text-xs md:text-sm lg:text-sm xl:text-base 2xl:text-lg leading-relaxed text-slate-700">
              <p>
                Virtec ensures precise and reliable performance validation
                through advanced calibration and testing infrastructure designed
                to support a wide range of flow measurement applications.
              </p>
              <p>
                From DN25 (25 mm) small-bore calibration benches to
                large-capacity DN1200 (1200 mm) test systems, the calibration
                scope covers an extensive spectrum of flow meter sizes and
                operating conditions. Each system is configured to deliver
                high-accuracy testing, repeatability, and compliance with
                internationally recognized standards.
              </p>
            </div>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative h-56 sm:h-64 md:h-72 lg:h-96 rounded-xl sm:rounded-2xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.12)]"
          >
            <Image
              src="/test-facilities/IMG_4996.JPG"
              alt="Virtec Calibration Workshop - Large-bore calibration and test facility"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
