"use client";

import { motion } from "framer-motion";
import { Database } from "lucide-react";

export default function DataAcquisitionSection() {
  return (
    <section className="relative py-16 lg:py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Image Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative h-64 lg:h-96 rounded-2xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.12)] order-2 lg:order-1"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary-yellow/20 to-slate-900/10" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center space-y-2">
                <div className="text-6xl lg:text-8xl font-display text-primary-yellow/30">
                  V
                </div>
                <p className="text-sm text-slate-500 font-medium">
                  Data Acquisition Systems
                </p>
                <p className="text-xs text-slate-400">
                  Add your AMR/data collection image here
                </p>
              </div>
            </div>
            {/* Uncomment and update path when you have the image */}
            {/* <Image
              src="/images/data-acquisition.jpg"
              alt="Data Acquisition Systems"
              fill
              className="object-cover"
            /> */}
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6 order-1 lg:order-2"
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 lg:w-14 lg:h-14 rounded-xl bg-primary-yellow/10 flex items-center justify-center">
                <Database className="w-6 h-6 lg:w-7 lg:h-7 text-primary-yellow" />
              </div>
              <div>
                <h2 className="font-display text-3xl lg:text-4xl text-slate-900 font-semibold mb-4">
                  High-End Data Acquisition Systems
                </h2>
              </div>
            </div>
            <p className="text-base lg:text-lg leading-relaxed text-slate-700">
              Virtec provides AMR and Data Collections devices that use a combination of Pulsed and M-Bus technology. With this, you may achieve more accurate meter readings and billings with fewer site visits and manual readings.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
