"use client";

import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section className="relative py-20 lg:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Image/Visual */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative h-64 lg:h-96 rounded-2xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.12)]"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary-yellow/20 to-slate-900/10" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-6xl lg:text-8xl font-display text-primary-yellow/30">
                V
              </div>
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <h2 className="font-display text-4xl lg:text-5xl text-slate-900">
              About Us
            </h2>
            <div className="space-y-4 text-base lg:text-lg leading-relaxed text-slate-700 font-display">
              <p>
                <span className="text-primary-yellow">Virtec</span> is a global leader in{" "}
                <span className="text-primary-yellow">Heat and Flow Management Solutions</span> for{" "}
                <span className="text-primary-yellow">HVAC and Water applications</span>. Our solutions are built on advanced{" "}
                <span className="text-primary-yellow">Ultrasonic</span> and{" "}
                <span className="text-primary-yellow">Electromagnetic</span> measurement technologies, delivering exceptional accuracy, reliability, and performance. Through our high-end services and innovative product portfolio, Virtec has established itself as a trusted provider of technologically advanced heat and flow measurement instruments worldwide.
              </p>
              <p>
                Our comprehensive offering includes precision instrumentation, sophisticated software platforms, and specialized technical measurement services—engineered to meet the highest standards of quality, safety, and efficiency. We take complete responsibility for both the supply and overall performance of our installed systems, ensuring seamless integration and long-term reliability.
              </p>
              <p>
                At Virtec, we are committed to creating a{" "}
                <span className="text-primary-yellow">greener tomorrow</span> by delivering{" "}
                <span className="text-primary-yellow">smart metering solutions</span> today. Our devices are designed with a strong focus on{" "}
                <span className="text-primary-yellow">high precision</span>, measurement accuracy,{" "}
                <span className="text-primary-yellow">low power consumption</span>, and{" "}
                <span className="text-primary-yellow">long-term stability</span>, empowering sustainable energy and water management across industries.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
