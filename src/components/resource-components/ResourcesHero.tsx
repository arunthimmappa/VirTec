"use client";

import { motion } from "framer-motion";

export default function ResourcesHero() {
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
              Resources & <span className="text-primary-yellow">Documentation</span>
            </h1>
            <div className="space-y-4 text-base lg:text-lg leading-relaxed text-slate-700">
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
            className="relative h-64 lg:h-96 rounded-2xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.12)]"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary-yellow/20 to-slate-900/10" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center space-y-2">
                <div className="text-6xl lg:text-8xl font-display text-primary-yellow/30">
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
