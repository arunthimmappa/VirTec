"use client";

import { motion } from "framer-motion";
import { TrendingUp } from "lucide-react";

export default function SettingTrendsSection() {
  return (
    <section className="relative py-20 lg:py-28 bg-white">
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
            <h2 className="font-display text-4xl lg:text-5xl text-slate-900">
              Setting <span className="text-primary-yellow">Trends</span>
            </h2>
            <div className="space-y-4 text-base lg:text-lg leading-relaxed text-slate-700">
              <p>
                For years, <span className="text-primary-yellow">Virtec</span> has set bold trends in manufacturing through customer-driven innovations—delivering non-invasive energy solutions, IAQ sensing, and energy savings via advanced VFDs that slash costs, boost efficiency, and ensure seamless integration. Our rigorously certified, state-of-the-art products represent the gold standard in precise energy measurement, trusted worldwide for reliability and accuracy.
              </p>
              <p>
                With unwavering commitment to sustainable, environmentally harmless technologies, <span className="text-primary-yellow">Virtec</span> pioneers a greener future, empowering customers with forward-thinking solutions that protect the planet and drive long-term value.
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
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary-yellow/20 to-primary-yellow/5" />
              <div className="absolute inset-0 flex items-center justify-center">
                <TrendingUp
                  size={120}
                  className="text-primary-yellow"
                  strokeWidth={1.5}
                />
              </div>
              <div className="absolute inset-0 rounded-2xl border-4 border-primary-yellow/30" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
