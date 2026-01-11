"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Check, Download, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Product } from "@/data/products";

interface ProductDetailPageProps {
  product: Product;
}

export default function ProductDetailPage({ product }: ProductDetailPageProps) {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="bg-white min-h-screen text-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="space-y-12 lg:space-y-16">
          {/* Hero Section */}
          <div className="space-y-6">
            <div className="text-center space-y-4">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-slate-900 leading-tight">
                {product.title}
              </h1>
              {product.subtitle && (
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-display font-medium text-primary-yellow leading-tight">
                  {product.subtitle}
                </h2>
              )}
            </div>

            {/* Product Image */}
            {product.image && (
              <div className="relative w-full h-64 sm:h-80 lg:h-96 rounded-2xl overflow-hidden bg-slate-100">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1280px"
                />
              </div>
            )}
          </div>

          {/* Overview Section */}
          <div className="bg-slate-50 rounded-2xl p-6 sm:p-8 lg:p-12">
            <div className="max-w-4xl mx-auto space-y-6">
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 mb-6">
                Overview
              </h2>
              <div className="prose prose-slate max-w-none">
                <p className="text-base sm:text-lg text-slate-700 leading-relaxed whitespace-pre-line">
                  {product.description}
                </p>
              </div>
            </div>
          </div>

          {/* Key Features Section */}
          {product.keyFeatures && product.keyFeatures.length > 0 && (
            <div className="space-y-6">
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 text-center">
                Key Features
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
                {product.keyFeatures.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start gap-4 bg-white border border-slate-200 rounded-xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-all duration-300"
                  >
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-yellow/20 flex items-center justify-center mt-0.5">
                      <Check className="w-4 h-4 text-primary-yellow" />
                    </div>
                    <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                      {feature}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* Specifications Section */}
          {product.specifications && product.specifications.length > 0 && (
            <div className="bg-slate-50 rounded-2xl p-6 sm:p-8 lg:p-12">
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 mb-6">
                Specifications
              </h2>
              <ul className="space-y-3">
                {product.specifications.map((spec, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary-yellow flex-shrink-0 mt-0.5" />
                    <span className="text-base text-slate-700">{spec}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Download Brochure Section */}
          <div className="bg-gradient-to-r from-primary-yellow/10 to-primary-yellow/5 rounded-2xl p-6 sm:p-8 lg:p-12 text-center">
            <div className="max-w-2xl mx-auto space-y-6">
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-900">
                Download Brochure
              </h2>
              <p className="text-base sm:text-lg text-slate-700">
                Get detailed technical specifications and information about this product.
              </p>
              {product.brochurePath ? (
                <Link
                  href={product.brochurePath}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 bg-primary-yellow text-slate-900 px-8 py-4 rounded-xl font-semibold shadow-[0_8px_30px_rgba(255,203,8,0.35)] hover:shadow-[0_12px_40px_rgba(255,203,8,0.45)] hover:brightness-105 transition-all duration-300"
                >
                  <Download className="w-5 h-5" />
                  Download Brochure
                </Link>
              ) : (
                <div className="inline-flex items-center justify-center gap-3 bg-slate-300 text-slate-600 px-8 py-4 rounded-xl font-semibold cursor-not-allowed">
                  <Download className="w-5 h-5" />
                  Brochure Coming Soon
                </div>
              )}
            </div>
          </div>

          {/* FAQs Section */}
          {product.faqs && product.faqs.length > 0 && (
            <section className="bg-white w-full py-8 sm:py-12 lg:py-16">
              <div className="max-w-4xl mx-auto">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-slate-900 mb-8 sm:mb-12 text-center"
                >
                  Frequently Asked Questions
                </motion.h2>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="bg-slate-50 rounded-xl p-4 sm:p-6 lg:p-8 space-y-2 border border-slate-200"
                >
                  {product.faqs.map((faq, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className="border-b border-slate-200 last:border-none overflow-hidden"
                    >
                      <motion.div
                        className="flex items-center justify-between py-4 sm:py-5 cursor-pointer"
                        onClick={() => toggleFaq(index)}
                      >
                        <p className="text-base sm:text-lg font-medium text-slate-900 pr-4 leading-tight">
                          {index + 1}. {faq.question}
                        </p>
                        <motion.div
                          animate={{ rotate: openFaqIndex === index ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                          className="flex-shrink-0"
                        >
                          <ChevronDown className="h-5 w-5 sm:h-6 sm:w-6 text-primary-yellow" />
                        </motion.div>
                      </motion.div>

                      <AnimatePresence>
                        {openFaqIndex === index && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="overflow-hidden"
                          >
                            <p className="text-sm sm:text-base text-slate-700 pb-4 sm:pb-5 pl-2 leading-relaxed">
                              {faq.answer}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </section>
          )}

          {/* Contact CTA Section */}
          <div className="bg-slate-900 rounded-2xl p-6 sm:p-8 lg:p-12 text-center">
            <div className="max-w-3xl mx-auto space-y-6">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-white">
                Interested in this Product?
              </h2>
              <p className="text-base sm:text-lg text-slate-300">
                Contact our sales team to learn more about this product or request a quote.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="mailto:sales@virtec.us"
                  className="inline-flex items-center justify-center gap-2 bg-primary-yellow text-slate-900 px-8 py-4 rounded-xl font-semibold shadow-[0_8px_30px_rgba(255,203,8,0.35)] hover:shadow-[0_12px_40px_rgba(255,203,8,0.45)] hover:brightness-105 transition-all duration-300"
                >
                  Contact Us
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
