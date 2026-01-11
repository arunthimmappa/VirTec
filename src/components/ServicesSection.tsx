"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export default function ServicesSection() {
  return (
    <section id="services" className="relative py-20 lg:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column - Heading */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-4xl lg:text-5xl text-slate-900 mb-8">
              Customer-Driven
              <br />
              <span className="text-primary-yellow">Services</span>
            </h2>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6 text-base lg:text-lg leading-relaxed text-slate-700"
          >
            <p>
              <span className="text-primary-yellow">Virtec</span> highly prioritizes the needs of its customers and the requirements of various industries. We ensure that customer preferences and inquiries are kept as the company&apos;s first priority. For this, we work endlessly on our customer care services. Our staff is specially trained to handle customer queries with patience and ease.
            </p>

            <p>
              The provision of maintenance contracts from <span className="text-primary-yellow">Virtec</span> includes inspection, servicing, recalibration, surveying, and training on how to use equipment as required.
            </p>

            <p>
              We possess the necessary on-site safety certifications to ensure the all-inclusive protection standards for safety equipment & project sites.
            </p>

            <p>
              We provide the pre-sales visit to our clients to give them a demonstration of all the products, aiming for the client-satisfaction as our first priority.
            </p>

            <p>
              <span className="text-primary-yellow">Virtec</span> has manufactured products that will take care of your energy and HVAC requirements while ensuring safety for the environment. Some of such pioneering products that have been widely appreciated by our customers include Ultrasonic Heat Meters, Ultrasonic Electronic Flow Meter - Water, Electromagnetic Flow Meters, and Clamp-On Heat Meters (Compact, E3-Compact, E5-Compact).
            </p>

            {/* Quote Section */}
            <div className="relative mt-8 p-6 lg:p-8 rounded-2xl bg-white border-l-4 border-l-primary-yellow border-t border-r border-b border-slate-200 shadow-[0_4px_20px_rgba(0,0,0,0.08)]">
              <Quote
                size={32}
                className="text-primary-yellow/30 absolute top-4 left-4"
              />
              <p className="text-base lg:text-lg italic text-slate-800 pl-8">
                &quot;When we partner with our clients, we ensure that all their needs are met through a wide range of services, including on-site measurements, consulting services, lab analysis, instrument commissioning, instrument rentals, project handling, and training&quot;.
              </p>
            </div>

            <p className="mt-6">
              All our services are focused on providing <span className="text-primary-yellow">modern and automated solutions</span> for client satisfaction.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
