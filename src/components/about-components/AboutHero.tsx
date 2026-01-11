"use client";

import { motion } from "framer-motion";

export default function AboutHero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h1 className="font-display text-4xl lg:text-6xl text-slate-900 leading-tight">
              About <span className="text-primary-yellow">Virtec</span>
            </h1>
            <div className="space-y-4 text-base lg:text-lg leading-relaxed text-slate-700">
              <p>
                Virtec Instruments Inc. is a global leader in{" "}
                <span className="text-primary-yellow">Heat and Flow Management Solutions</span> for HVAC and Water applications. Since our founding, we have been dedicated to delivering exceptional accuracy, reliability, and performance through advanced ultrasonic and electromagnetic measurement technologies.
              </p>
              <p>
                Our commitment to excellence has established Virtec as a trusted provider of technologically advanced heat and flow measurement instruments worldwide, serving industries that demand precision, innovation, and sustainable solutions.
              </p>
            </div>
          </motion.div>

          {/* Right Column - Image Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative h-64 lg:h-96 rounded-2xl overflow-hidden bg-gradient-to-br from-primary-yellow/10 to-slate-900/5 border border-slate-200 shadow-[0_8px_30px_rgba(0,0,0,0.12)]"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center space-y-3">
                <div className="text-7xl lg:text-9xl font-display text-primary-yellow/20">
                  V
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
