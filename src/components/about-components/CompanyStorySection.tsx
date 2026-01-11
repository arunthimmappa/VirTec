"use client";

import { motion } from "framer-motion";

export default function CompanyStorySection() {
  return (
    <section className="relative py-20 lg:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Image Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative h-64 lg:h-96 rounded-2xl overflow-hidden bg-gradient-to-br from-primary-yellow/10 to-slate-900/5 border border-slate-200 shadow-[0_8px_30px_rgba(0,0,0,0.12)]"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center space-y-3">
                <div className="text-7xl lg:text-9xl font-display text-primary-yellow/20">
                  V
                </div>
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
              Our <span className="text-primary-yellow">Story</span>
            </h2>
            
            <div className="space-y-6 text-base lg:text-lg leading-relaxed text-slate-700">
              <p>
                Founded with a vision to revolutionize heat and flow measurement technology, Virtec Instruments Inc. emerged from a deep understanding of the growing need for precision instrumentation in HVAC and water management systems. Our journey began with a simple yet powerful mission: to provide solutions that combine cutting-edge technology with practical applications.
              </p>
              <p>
                From our headquarters in Salt Lake City, Utah, we have grown into a globally recognized brand, serving clients across continents with our comprehensive portfolio of ultrasonic and electromagnetic measurement devices. Our commitment to innovation has driven us to continuously push the boundaries of what&apos;s possible in flow and heat measurement technology.
              </p>
              <p>
                Today, Virtec stands as a testament to what can be achieved when technical expertise meets customer-focused innovation. We have built lasting relationships with clients who trust us not just for our products, but for our dedication to their success and our shared commitment to creating a more sustainable future.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
