"use client";

import { motion } from "framer-motion";
import { Target } from "lucide-react";

export default function VisionSection() {
  return (
    <section className="relative py-20 lg:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="font-display text-4xl lg:text-5xl text-slate-900">
              Our <span className="text-primary-yellow">Vision</span>
            </h2>
            <div className="space-y-4 text-base lg:text-lg leading-relaxed text-slate-700">
              <p>
                At Virtec, our vision is to set HVAC industry benchmarks in the field of Heat/Flow measurement services, VFDs, and IAQ Sensors. We are committed to continuous technological advancement through{" "}
                <span className="text-primary-yellow">innovation</span>,{" "}
                <span className="text-primary-yellow">precision</span>, and{" "}
                <span className="text-primary-yellow">reliability</span>. By consistently enhancing our product portfolio with the latest solutions for the HVAC industry, we deliver advanced, practical, and sustainable technologies that meet evolving customer needs while supporting environmental responsibility.
              </p>
              <p>
                Our vision drives us to create long-term value through{" "}
                <span className="text-primary-yellow">excellence</span>,{" "}
                <span className="text-primary-yellow">integrity</span>, and{" "}
                <span className="text-primary-yellow">forward-looking engineering</span>.
              </p>
            </div>
          </motion.div>

          {/* Right Column - Icon/Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center justify-center"
          >
            <div className="relative w-64 h-64 lg:w-80 lg:h-80">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary-yellow/20 to-primary-yellow/5" />
              <div className="absolute inset-0 flex items-center justify-center">
                <Target
                  size={120}
                  className="text-primary-yellow"
                  strokeWidth={1.5}
                />
              </div>
              <div className="absolute inset-0 rounded-full border-4 border-primary-yellow/30 animate-pulse" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
