"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Globe, 
  ArrowRight,
  Linkedin 
} from "lucide-react";

const quickLinks = [
  { name: "Services", href: "#services" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [logoError, setLogoError] = useState(false);

  return (
    <footer className="bg-slate-900 text-white relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 bg-primary-yellow/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-primary-yellow/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 py-6 sm:py-8 md:py-10 lg:py-12 xl:py-14 2xl:py-16">
        {/* Main Footer Content */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12 mb-4 sm:mb-6 md:mb-8"
        >
          {/* Company Info */}
          <motion.div
            variants={itemVariants}
          >
            <div className="flex items-center gap-2 sm:gap-3 mb-4">
              <motion.div 
                className="relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 flex items-center"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <Image
                  src={logoError ? "/virtec-logo.png" : "/virtec-logoYellow.png"}
                  alt="Virtec Logo"
                  width={80}
                  height={80}
                  className="object-contain"
                  onError={() => setLogoError(true)}
                />
              </motion.div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">VIRTEC</h3>
                <p className="text-slate-300 text-xs sm:text-sm">Instruments Inc.</p>
              </div>
            </div>
            
            <p className="text-slate-300 leading-relaxed mb-4 text-xs sm:text-sm">
              Global leader in Heat and Flow Management Solutions for HVAC and Water applications.
            </p>

            {/* Social Media Links */}
            <div className="flex space-x-3 sm:space-x-4">
              <motion.a
                href="https://www.linkedin.com/company/virtec"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-primary-yellow transition-colors p-2 -m-2 min-h-[44px] min-w-[44px] flex items-center justify-center"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6 sm:w-7 sm:h-7" />
              </motion.a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            variants={itemVariants}
            transition={{ delay: 0.1 }}
          >
            <h4 className="text-base sm:text-lg font-bold text-white mb-3 sm:mb-4 flex items-center gap-2">
              <Globe className="w-4 h-4 sm:w-5 sm:h-5 text-primary-yellow" />
              Quick Links
            </h4>
            <ul className="space-y-2 sm:space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-slate-300 hover:text-white transition-colors flex items-center gap-2 group py-2 -my-2 min-h-[44px]"
                  >
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-primary-yellow flex-shrink-0" />
                    <span className="text-sm sm:text-base">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-6 sm:mb-8"
        >
          <h4 className="text-base sm:text-lg font-bold text-white mb-3 sm:mb-4 flex items-center gap-2">
            <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-primary-yellow" />
            Contact Us
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {/* Address */}
            <div className="flex items-start gap-2 sm:gap-3">
              <MapPin size={16} className="text-primary-yellow mt-1 flex-shrink-0" />
              <div className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                2005 E 2700 S, STE 200<br />
                Salt Lake City, Utah 84109
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-2 sm:gap-3">
              <Phone size={16} className="text-primary-yellow flex-shrink-0" />
              <a
                href="tel:+13045194567"
                className="text-slate-300 hover:text-primary-yellow transition-colors text-xs sm:text-sm py-2 -my-2 min-h-[44px] flex items-center"
              >
                +1 (304) 519-4567
              </a>
            </div>

            {/* Email */}
            <div className="flex items-center gap-2 sm:gap-3">
              <Mail size={16} className="text-primary-yellow flex-shrink-0" />
              <a
                href="mailto:sales@virtec.us"
                className="text-slate-300 hover:text-primary-yellow transition-colors text-xs sm:text-sm py-2 -my-2 min-h-[44px] flex items-center break-all"
              >
                sales@virtec.us
              </a>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="pt-4 sm:pt-6 border-t border-primary-yellow/30"
        >
          <p className="text-slate-300 text-xs sm:text-sm text-center">
            © {currentYear} Virtec Instruments Inc. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}