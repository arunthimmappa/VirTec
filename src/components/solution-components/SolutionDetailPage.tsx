"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight, Target } from "lucide-react";
import Link from "next/link";
import { Solution } from "@/data/solutions";
import { getProductBySlug } from "@/lib/products";

interface SolutionDetailPageProps {
  solution: Solution;
}

export default function SolutionDetailPage({ solution }: SolutionDetailPageProps) {

  // Get related products if they exist
  const relatedProducts = solution.relatedProducts
    ? solution.relatedProducts
        .map((slug) => getProductBySlug(slug))
        .filter((product) => product !== undefined)
    : [];

  return (
    <div className="bg-white min-h-screen text-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-12 lg:pt-12 lg:pb-16">
        <div className="space-y-12 lg:space-y-16">
          {/* Hero Section */}
          <div className="space-y-8">
            <div className="text-center space-y-6">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-slate-900 leading-tight">
                {solution.title}
              </h1>
              {solution.subtitle && (
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-display font-medium text-primary-yellow leading-tight">
                  {solution.subtitle}
                </h2>
              )}
              <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                {solution.description}
              </p>
            </div>
            
            {/* Hero Image Placeholder */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative w-full h-64 sm:h-80 lg:h-96 rounded-2xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.12)]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary-yellow/20 to-slate-900/10" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center space-y-2">
                  <div className="text-6xl lg:text-8xl font-display text-primary-yellow/30">
                    V
                  </div>
                  <p className="text-sm text-slate-500 font-medium">
                    Image Placeholder
                  </p>
                  <p className="text-xs text-slate-400">
                    Add your solution image here
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Overview Section - Business Focused */}
          <div className="bg-gradient-to-br from-slate-50 to-white rounded-2xl p-8 sm:p-10 lg:p-12 border border-slate-200">
            <div className="max-w-4xl mx-auto space-y-6">
              <div className="flex items-center gap-3 mb-4">
                <Target className="w-6 h-6 text-primary-yellow" />
                <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-900">
                  Solution Overview
                </h2>
              </div>
              <div className="prose prose-slate max-w-none">
                <p className="text-base sm:text-lg text-slate-700 leading-relaxed whitespace-pre-line">
                  {solution.overview}
                </p>
              </div>
            </div>
          </div>

          {/* How It Works Section */}
          {solution.howItWorks && solution.howItWorks.length > 0 && (
            <div className="space-y-8">
              <div className="text-center">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-slate-900">
                  How It Works
                </h2>
                <p className="text-base text-slate-600 mt-2">Our implementation approach</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {solution.howItWorks.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative bg-white border border-slate-200 rounded-xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:border-primary-yellow/30 transition-all duration-300"
                  >
                    <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-primary-yellow text-slate-900 font-bold text-lg flex items-center justify-center shadow-lg">
                      {index + 1}
                    </div>
                    <p className="text-base text-slate-700 leading-relaxed pt-2">
                      {step}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* Related Products Section */}
          {relatedProducts.length > 0 && (
            <div className="space-y-8">
              <div className="text-center">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-slate-900">
                  Products Used in This Solution
                </h2>
                <p className="text-base text-slate-600 mt-2">Key products that power this solution</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedProducts.map((product, index) => (
                  <motion.div
                    key={product.slug}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group bg-white border border-slate-200 rounded-xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:border-primary-yellow/30 transition-all duration-300"
                  >
                    <Link href={`/products/${product.slug}`} className="block">
                      <h3 className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-primary-yellow transition-colors">
                        {product.title}
                      </h3>
                      {product.subtitle && (
                        <p className="text-sm text-primary-yellow font-medium mb-3">
                          {product.subtitle}
                        </p>
                      )}
                      <p className="text-sm text-slate-600 leading-relaxed line-clamp-3">
                        {product.description}
                      </p>
                      <div className="mt-4 flex items-center gap-2 text-primary-yellow text-sm font-semibold group-hover:gap-3 transition-all">
                        <span>View Product</span>
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* Contact CTA Section */}
          <div className="bg-slate-900 rounded-2xl p-8 sm:p-10 lg:p-12 text-center">
            <div className="max-w-3xl mx-auto space-y-6">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-white">
                Ready to Implement This Solution?
              </h2>
              <p className="text-base sm:text-lg text-slate-300">
                Contact our team to discuss how this solution can address your specific business needs and requirements.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="mailto:sales@virtec.us"
                  className="inline-flex items-center justify-center gap-2 bg-primary-yellow text-slate-900 px-8 py-4 rounded-xl font-semibold shadow-[0_8px_30px_rgba(255,203,8,0.35)] hover:shadow-[0_12px_40px_rgba(255,203,8,0.45)] hover:brightness-105 transition-all duration-300"
                >
                  Schedule a Consultation
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
