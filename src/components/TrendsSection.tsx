"use client";

import { motion } from "framer-motion";

export default function TrendsSection() {
  return (
    <section className="relative py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Heading */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-4xl lg:text-5xl font-semibold text-slate-900">
              <strong>Setting</strong>
            </h2>
            <h2 className="font-display text-4xl lg:text-5xl font-semibold text-primary-yellow">
              Trends
            </h2>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <p className="text-base lg:text-lg leading-relaxed text-slate-700">
              Over the years, <span className="text-primary-yellow font-semibold">Virtec</span> has been setting trends in the manufacturing industry with customer-driven, innovative, and non-invasive energy solutions. Our products are certified and state-of-the-art in the field of energy measurement. With continuous efforts in innovative technological solutions that are not harmful to the environment, <span className="text-primary-yellow font-semibold">Virtec</span> has emerged as a pioneer in the field.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
