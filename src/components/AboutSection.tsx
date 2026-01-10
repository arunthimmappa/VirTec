"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section className="relative py-20 lg:py-28 bg-[#f5f0e8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Image/Visual */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative h-64 lg:h-96 rounded-2xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.12)]"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary-yellow/20 to-slate-900/10" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-6xl lg:text-8xl font-display font-bold text-primary-yellow/30">
                V
              </div>
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <h2 className="font-display text-4xl lg:text-5xl font-semibold text-slate-900">
              <strong>About Us</strong>
            </h2>
            <div className="space-y-4 text-base lg:text-lg leading-relaxed text-slate-700">
              <p>
                <strong>
                  <span className="text-primary-yellow font-semibold">Virtec</span> is one of the global leaders providing Heat & Flow management solutions in HVAC & Water applications. The solutions are based on two measuring technologies,{" "}
                  <span className="text-primary-yellow font-semibold">Ultrasonic & Electromagnetic</span> principle. Our high-end services and cutting-edge product solutions in this field have made us the leading providers of technologically advanced Heat and Flow measuring instruments.
                </strong>
              </p>
              <p>
                <strong>
                  Our comprehensive range of instrumentation, sophisticated software systems, and technical measurement services offer high quality and safety standards. We guarantee the full assumption of responsibility for the supply and the overall performance of the installed systems. We create a greener tomorrow by providing smart metering systems today. Our devices have been designed to focus on high precision and measurement accuracy that uses low consumption with better stability.
                </strong>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
