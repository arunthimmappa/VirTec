"use client";

import { motion } from "framer-motion";
import { Download, FileText } from "lucide-react";
import Link from "next/link";
import { Resource } from "@/data/resources";

interface ResourceCardProps {
  resource: Resource;
  index?: number;
}

export default function ResourceCard({ resource, index = 0 }: ResourceCardProps) {
  const getCategoryLabel = (category: string) => {
    switch (category) {
      case "catalog":
        return "Catalog";
      case "product-manual":
        return "Manual";
      case "technical-drawing":
        return "Drawing";
      case "reference":
        return "Reference";
      case "certificate":
        return "Certificate";
      default:
        return category;
    }
  };

  const getFileExtension = (path: string) => {
    const ext = path.split(".").pop()?.toUpperCase();
    return ext || "PDF";
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative rounded-2xl overflow-hidden border border-slate-200 shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.18)] hover:border-primary-yellow/30 transition-all duration-300 bg-white"
    >
      <div className="p-6 space-y-4">
        {/* Icon and Category Badge */}
        <div className="flex items-start justify-between gap-4">
          <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary-yellow/10 flex items-center justify-center group-hover:bg-primary-yellow/20 transition-colors">
            <FileText className="w-6 h-6 text-primary-yellow" />
          </div>
          <div className="flex flex-wrap gap-2 flex-shrink-0">
            <span className="px-3 py-1 rounded-full text-xs font-medium bg-slate-100 text-slate-700">
              {getCategoryLabel(resource.category)}
            </span>
            {resource.productSeries && (
              <span className="px-3 py-1 rounded-full text-xs font-medium bg-primary-yellow/20 text-slate-900">
                {resource.productSeries}
              </span>
            )}
          </div>
        </div>

        {/* Resource Name */}
        <div>
          <h3 className="text-lg font-display text-slate-900 mb-2 group-hover:text-primary-yellow transition-colors duration-300 leading-tight line-clamp-2">
            {resource.name}
          </h3>
          {resource.description && (
            <p className="text-sm text-slate-600 line-clamp-2 leading-relaxed">
              {resource.description}
            </p>
          )}
        </div>

        {/* File Type and Download */}
        <div className="flex items-center justify-between pt-2 border-t border-slate-100">
          <span className="text-xs text-slate-500 font-medium">
            {getFileExtension(resource.path)}
          </span>
          <Link
            href={resource.path}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary-yellow text-slate-900 font-medium text-sm hover:bg-primary-yellow/90 transition-colors shadow-sm hover:shadow-md"
          >
            <Download className="w-4 h-4" />
            Download
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
