"use client";

import { motion } from "framer-motion";
import { Target } from "lucide-react";

export default function VisionSection() {
  return (
    <section className="relative py-20 lg:py-28 bg-white">
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
            <h2 className="font-display text-4xl lg:text-5xl font-semibold text-slate-900">
              <strong>Our </strong>
              <span className="text-primary-yellow">
                <strong>Vision</strong>
              </span>
            </h2>
            <p className="text-base lg:text-lg leading-relaxed text-slate-700">
              <strong>
                We work with a vision to set standards in the field of flow and heat measurement services. To achieve this, we have, over the years, focused our efforts continuously on improving and innovating our{" "}
                <span className="text-primary-yellow font-semibold">technology</span>. Our vision inspires us to develop advanced, useful products that meet customer requirements and are environmentally{" "}
                <span className="text-primary-yellow font-semibold">sustainable</span> as well.
              </strong>
            </p>
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
