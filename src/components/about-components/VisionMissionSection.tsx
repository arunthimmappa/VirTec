"use client";

import { motion } from "framer-motion";
import { Lightbulb } from "lucide-react";

export default function VisionMissionSection() {
  const missionPoints = [
    "Accurate HVAC flow monitoring",
    "Save Energy with advanced VFD solutions",
    "Green sensing for reduced consumption with IAQ sensors",
    "Established excellence in thermal solutions",
  ];

  return (
    <section className="relative py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-14 h-14 rounded-xl bg-primary-yellow/10 flex items-center justify-center">
              <Lightbulb className="w-7 h-7 text-primary-yellow" strokeWidth={1.5} />
            </div>
            <h2 className="font-display text-4xl lg:text-5xl text-slate-900">
              Virtec <span className="text-primary-yellow">Mission</span>
            </h2>
          </div>
          
          <div className="space-y-6 text-center">
            <p className="text-xl lg:text-2xl font-semibold text-slate-900 leading-relaxed">
              Dependable know-how you trust.
            </p>
            
            <p className="text-base lg:text-lg leading-relaxed text-slate-700 max-w-3xl mx-auto">
              We instill lasting sustainability in edifices for tenants and Developers. Our approach involves directing information and procedures to foster eco-conscious, hazard-free, and inviting atmospheres via cutting-edge metering tech.
            </p>
            
            <ul className="space-y-4 mt-8 text-left max-w-2xl mx-auto">
              {missionPoints.map((point, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-primary-yellow mt-2.5 flex-shrink-0" />
                  <span className="text-base lg:text-lg leading-relaxed text-slate-700">
                    {point}
                  </span>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
