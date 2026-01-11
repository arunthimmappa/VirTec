"use client";

import { motion } from "framer-motion";
import { Wrench } from "lucide-react";

export default function InstallationSection() {
  return (
    <section className="relative py-16 lg:py-20 bg-slate-50">
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
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 lg:w-14 lg:h-14 rounded-xl bg-primary-yellow/10 flex items-center justify-center">
                <Wrench className="w-6 h-6 lg:w-7 lg:h-7 text-primary-yellow" />
              </div>
              <div>
                <h2 className="font-display text-3xl lg:text-4xl text-slate-900 font-semibold mb-4">
                  Installation & Commissioning Assistance
                </h2>
              </div>
            </div>
            <p className="text-base lg:text-lg leading-relaxed text-slate-700">
              In each region, Virtec can connect you with the best installation partner for your application. We can help you make an informed decision thanks to our extensive network of installation partners operating throughout the region. Virtec can also provide full-service commissioning for your metering or AMR / data gathering system.
            </p>
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
                  Installation Services
                </p>
                <p className="text-xs text-slate-400">
                  Add your installation/commissioning image here
                </p>
              </div>
            </div>
            {/* Uncomment and update path when you have the image */}
            {/* <Image
              src="/images/installation-services.jpg"
              alt="Installation & Commissioning"
              fill
              className="object-cover"
            /> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
