"use client";

import { motion } from "framer-motion";
import { TrendingUp } from "lucide-react";

export default function SettingTrendsSection() {
  return (
    <section className="relative py-12 sm:py-16 md:py-12 lg:py-20 xl:py-24 2xl:py-28 bg-white">
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
              Setting <span className="text-primary-yellow">Trends</span>
            </h2>
            <div className="space-y-3 sm:space-y-4 text-xs sm:text-xs md:text-sm lg:text-sm xl:text-base 2xl:text-lg leading-relaxed text-slate-700">
              <p>
                For years, Virtec has set bold trends in manufacturing through customer-driven innovations—delivering non-invasive energy solutions, IAQ sensing, and energy savings via advanced VFDs that slash costs, boost efficiency, and ensure seamless integration. Our rigorously certified, state-of-the-art products represent the gold standard in precise energy measurement, trusted worldwide for reliability and accuracy.
              </p>
              <p>
                With unwavering commitment to sustainable, environmentally harmless technologies, Virtec pioneers a greener future, empowering customers with forward-thinking solutions that protect the planet and drive long-term value.
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
            <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80">
              <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-br from-primary-yellow/20 to-primary-yellow/5" />
              <div className="absolute inset-0 flex items-center justify-center">
                <TrendingUp
                  size={80}
                  className="sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-[120px] lg:h-[120px] text-primary-yellow"
                  strokeWidth={1.5}
                />
              </div>
              <div className="absolute inset-0 rounded-xl sm:rounded-2xl border-2 sm:border-3 md:border-4 border-primary-yellow/30" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
