"use client";

import { motion } from "framer-motion";

export default function ResourcesHero() {
  return (
    <section className="relative pt-20 pb-10 sm:pt-24 sm:pb-12 md:pt-24 md:pb-12 lg:pt-32 lg:pb-16 xl:pt-40 xl:pb-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 xl:gap-16 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-3 sm:space-y-4 md:space-y-5 lg:space-y-6"
          >
            <h1 className="font-display text-2xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl 2xl:text-5xl text-slate-900 leading-tight">
              Resources & <span className="text-primary-yellow">Documentation</span>
            </h1>
            <div className="space-y-2 sm:space-y-3 md:space-y-4 text-xs sm:text-xs md:text-sm lg:text-sm xl:text-base 2xl:text-lg leading-relaxed text-slate-700">
              <p>
                Access our comprehensive collection of product catalogs, user manuals, technical drawings, and reference documents. All resources are available for download to help you get the most out of your Virtec products.
              </p>
              <p>
                Find detailed specifications, installation guides, user manuals, and technical documentation for our complete range of flow meters, heat meters, variable speed drives, and IAQ sensors.
              </p>
            </div>
          </motion.div>

          {/* Right Column - Image Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative h-56 sm:h-64 md:h-72 lg:h-96 rounded-xl sm:rounded-2xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.12)]"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary-yellow/20 to-slate-900/10" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center space-y-2">
                <div className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display text-primary-yellow/30">
                  V
                </div>
                <p className="text-sm text-slate-500 font-medium">
                  Resources
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
