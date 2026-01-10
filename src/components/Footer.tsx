"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-8">
          {/* Address Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <div className="flex items-start gap-3">
              <MapPin size={20} className="text-primary-yellow mt-1 flex-shrink-0" />
              <div className="text-base font-semibold leading-relaxed">
                <strong>2005 E 2700 S, STE 200</strong>
                <br />
                <strong>Salt Lake City, Utah 84109</strong>
              </div>
            </div>
          </motion.div>

          {/* Logo Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center justify-center"
          >
            <Image
              src="/virtec-logo.png"
              alt="Virtec Logo"
              width={227}
              height={227}
              className="h-auto w-48 lg:w-56 opacity-90 hover:opacity-100 transition-opacity"
            />
          </motion.div>

          {/* Contact Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-4"
          >
            <div className="flex items-center gap-3">
              <Phone size={20} className="text-primary-yellow flex-shrink-0" />
              <a
                href="tel:+13045194567"
                className="text-base font-semibold hover:text-primary-yellow transition-colors"
              >
                +1 (304) 519-4567
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Mail size={20} className="text-primary-yellow flex-shrink-0" />
              <a
                href="mailto:sales@virtec.us"
                className="text-base font-semibold hover:text-primary-yellow transition-colors"
              >
                sales@virtec.us
              </a>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="h-px bg-slate-700 mb-8" />

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <p className="text-sm font-semibold text-slate-300">
            © {new Date().getFullYear()} by Virtec
          </p>
        </motion.div>

        {/* Disclaimer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xs leading-relaxed text-slate-400 max-w-4xl mx-auto"
        >
          <p className="mb-2">
            <strong className="text-slate-300">Disclaimer:</strong>
          </p>
          <p>
            Logos and trademarks used are accredited to the OEM and belongs to the OEM. Virtec will accept no responsibility for possible errors in catalogues, brochures, and other printed material. Virtec reserves the right to alter its products without notice. This also applies to products already on order provided that such alteration can be made without subsequential changes being necessary for specifications already agreed. All trademarks in this material are property of the respective companies. Virtec and all Virtec logo types are trademarks of Virtec Instruments Inc. USA. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
