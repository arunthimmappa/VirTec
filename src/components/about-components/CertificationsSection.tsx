"use client";

import { motion } from "framer-motion";
import { Shield, CheckCircle, Star, FileCheck } from "lucide-react";

const certifications = [
  {
    icon: Shield,
    title: "ISO Standards",
    description: "Compliance with international quality management systems and standards for precision instrumentation.",
  },
  {
    icon: CheckCircle,
    title: "Industry Certifications",
    description: "Certified for use in HVAC, water utilities, and industrial applications across global markets.",
  },
  {
    icon: Star,
    title: "Quality Assurance",
    description: "Rigorous testing and quality control processes ensuring reliability and accuracy in all our products.",
  },
  {
    icon: FileCheck,
    title: "Regulatory Compliance",
    description: "Meet or exceed regulatory requirements in multiple jurisdictions, ensuring global compatibility.",
  },
];

const standards = [
  "MID (Measuring Instruments Directive) compliant",
  "EN 1434 Heat Meter Standards",
  "ISO 9001 Quality Management",
  "CE Marking for European Markets",
  "UL/CSA Standards for North America",
  "EMC Directive Compliance",
];

export default function CertificationsSection() {
  return (
    <section className="relative py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-12"
        >
          <div className="text-center space-y-4">
            <h2 className="font-display text-4xl lg:text-5xl text-slate-900">
              Certifications & <span className="text-primary-yellow">Standards</span>
            </h2>
            <p className="text-base lg:text-lg text-slate-700 max-w-3xl mx-auto">
              Virtec is committed to maintaining the highest standards of quality, safety, and compliance across all our products and services.
            </p>
          </div>

          {/* Certification Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => {
              const Icon = cert.icon;
              return (
                <motion.div
                  key={cert.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group bg-slate-50 rounded-2xl p-6 border border-slate-200 shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-xl bg-primary-yellow/10 flex items-center justify-center mb-4 group-hover:bg-primary-yellow/20 transition-colors duration-300">
                    <Icon className="w-6 h-6 lg:w-7 lg:h-7 text-primary-yellow" />
                  </div>
                  <h3 className="font-display text-lg lg:text-xl text-slate-900 font-semibold mb-3 group-hover:text-primary-yellow transition-colors duration-300 leading-tight">
                    {cert.title}
                  </h3>
                  <p className="text-sm lg:text-base leading-relaxed text-slate-700">
                    {cert.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* Standards List */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-slate-50 rounded-2xl p-8 lg:p-10 border border-slate-200"
          >
            <h3 className="font-display text-2xl lg:text-3xl text-slate-900 font-semibold mb-6">
              Key Standards & Compliance
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {standards.map((standard, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary-yellow mt-0.5 flex-shrink-0" />
                  <span className="text-base lg:text-lg text-slate-700 leading-relaxed">
                    {standard}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
