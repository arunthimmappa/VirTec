"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ResourceCard from "./ResourceCard";
import ResourceSearch from "./ResourceSearch";
import { Resource, ProductSeries, getCatalogs, getManuals } from "@/data/resources";

type TabType = "catalogs" | "manuals";

const productSeriesOptions: ProductSeries[] = [
  "VIR-800",
  "VIR-832",
  "VIR-850",
  "LXC",
  "VIR-DX-900",
  "TUF-2000",
  "TAO2000",
  "M-BUS",
  "MC-603",
  "Other",
];

export default function ResourcesTabs() {
  const [activeTab, setActiveTab] = useState<TabType>("catalogs");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProductSeries, setSelectedProductSeries] = useState<ProductSeries | "all">("all");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const catalogs = getCatalogs();
  const manuals = getManuals();

  // Filter resources based on active tab, search, and filters
  const filteredResources = useMemo(() => {
    let resources: Resource[] = activeTab === "catalogs" ? catalogs : manuals;

    // Apply search filter
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      resources = resources.filter(
        (resource) =>
          resource.name.toLowerCase().includes(query) ||
          resource.description?.toLowerCase().includes(query) ||
          resource.productSeries?.toLowerCase().includes(query)
      );
    }

    // Apply product series filter (only for manuals)
    if (activeTab === "manuals" && selectedProductSeries !== "all") {
      resources = resources.filter(
        (resource) => resource.productSeries === selectedProductSeries
      );
    }

    // Apply category filter (only for manuals)
    if (activeTab === "manuals" && selectedCategory !== "all") {
      resources = resources.filter((resource) => resource.category === selectedCategory);
    }

    return resources;
  }, [activeTab, searchQuery, selectedProductSeries, selectedCategory, catalogs, manuals]);

  const handleTabChange = (tab: TabType) => {
    setActiveTab(tab);
    setSelectedProductSeries("all");
    setSelectedCategory("all");
    setSearchQuery("");
  };

  return (
    <section className="relative py-12 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 lg:gap-4 mb-8">
          <button
            onClick={() => handleTabChange("catalogs")}
            className={`px-6 py-3 rounded-full text-sm lg:text-base font-medium transition-all duration-300 ${
              activeTab === "catalogs"
                ? "bg-primary-yellow text-slate-900 shadow-[0_4px_20px_rgba(255,203,8,0.35)]"
                : "bg-white text-slate-700 hover:bg-primary-yellow/20 border border-slate-200"
            }`}
          >
            Catalogs ({catalogs.length})
          </button>
          <button
            onClick={() => handleTabChange("manuals")}
            className={`px-6 py-3 rounded-full text-sm lg:text-base font-medium transition-all duration-300 ${
              activeTab === "manuals"
                ? "bg-primary-yellow text-slate-900 shadow-[0_4px_20px_rgba(255,203,8,0.35)]"
                : "bg-white text-slate-700 hover:bg-primary-yellow/20 border border-slate-200"
            }`}
          >
            Manuals ({manuals.length})
          </button>
        </div>

        {/* Search */}
        <ResourceSearch
          value={searchQuery}
          onChange={setSearchQuery}
          placeholder={
            activeTab === "catalogs" ? "Search catalogs..." : "Search manuals..."
          }
        />

        {/* Filters for Manuals */}
        {activeTab === "manuals" && (
          <div className="mb-8 space-y-4">
            {/* Category Filter */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Filter by Category
              </label>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setSelectedCategory("all")}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    selectedCategory === "all"
                      ? "bg-primary-yellow text-slate-900"
                      : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                  }`}
                >
                  All Categories
                </button>
                <button
                  onClick={() => setSelectedCategory("product-manual")}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    selectedCategory === "product-manual"
                      ? "bg-primary-yellow text-slate-900"
                      : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                  }`}
                >
                  Product Manuals
                </button>
                <button
                  onClick={() => setSelectedCategory("technical-drawing")}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    selectedCategory === "technical-drawing"
                      ? "bg-primary-yellow text-slate-900"
                      : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                  }`}
                >
                  Technical Drawings
                </button>
                <button
                  onClick={() => setSelectedCategory("reference")}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    selectedCategory === "reference"
                      ? "bg-primary-yellow text-slate-900"
                      : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                  }`}
                >
                  Reference Documents
                </button>
              </div>
            </div>

            {/* Product Series Filter */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Filter by Product Series
              </label>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setSelectedProductSeries("all")}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    selectedProductSeries === "all"
                      ? "bg-primary-yellow text-slate-900"
                      : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                  }`}
                >
                  All Series
                </button>
                {productSeriesOptions.map((series) => {
                  const count = manuals.filter((r) => r.productSeries === series).length;
                  if (count === 0) return null;
                  return (
                    <button
                      key={series}
                      onClick={() => setSelectedProductSeries(series)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                        selectedProductSeries === series
                          ? "bg-primary-yellow text-slate-900"
                          : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                      }`}
                    >
                      {series} ({count})
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* Resources Grid */}
        <AnimatePresence mode="wait">
          {filteredResources.length > 0 ? (
            <motion.div
              key={`${activeTab}-${selectedProductSeries}-${selectedCategory}-${searchQuery}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
            >
              {filteredResources.map((resource, index) => (
                <ResourceCard key={resource.id} resource={resource} index={index} />
              ))}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center py-16"
            >
              <div className="max-w-md mx-auto space-y-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-slate-100 flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-slate-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-display text-slate-900">No resources found</h3>
                <p className="text-slate-600">
                  Try adjusting your search query or filters to find what you&apos;re looking for.
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
