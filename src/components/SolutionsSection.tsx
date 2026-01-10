"use client";

import { motion } from "framer-motion";
import {
  Zap,
  Wind,
  Server,
  Building2,
  FileSearch,
  Fan,
} from "lucide-react";

const solutions = [
  {
    id: 1,
    name: "Energy Saving",
    icon: Zap,
  },
  {
    id: 2,
    name: "Air Conditioning",
    icon: Wind,
  },
  {
    id: 3,
    name: "Data Center",
    icon: Server,
  },
  {
    id: 4,
    name: "Building Automation Systems",
    icon: Building2,
  },
  {
    id: 5,
    name: "Energy Audit",
    icon: FileSearch,
  },
  {
    id: 6,
    name: "Heating, Ventilation & Air Conditioning (HVAC)",
    icon: Fan,
  },
];

export default function SolutionsSection() {
  return (
    <section id="solutions" className="relative py-20 lg:py-28 bg-[#f5f0e8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 lg:mb-16"
        >
          <h2 className="font-display text-4xl lg:text-5xl font-semibold text-slate-900 mb-4">
            <strong>Our Solutions</strong>
          </h2>
          <p className="text-base lg:text-lg text-slate-700 max-w-3xl">
            <strong>
              We have a wide range of products and services for our clients that focus on:
            </strong>
          </p>
        </motion.div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {solutions.map((solution, index) => {
            const IconComponent = solution.icon;
            return (
              <motion.div
                key={solution.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group flex flex-col items-center text-center p-6 rounded-2xl bg-white/50 hover:bg-white transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)]"
              >
                {/* Icon */}
                <div className="mb-4 p-4 rounded-full bg-primary-yellow/10 group-hover:bg-primary-yellow/20 transition-colors">
                  <IconComponent
                    size={48}
                    className="text-primary-yellow"
                    strokeWidth={1.5}
                  />
                </div>
                
                {/* Solution Name */}
                <h3 className="font-semibold text-lg lg:text-xl text-slate-900">
                  <strong>{solution.name}</strong>
                </h3>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
