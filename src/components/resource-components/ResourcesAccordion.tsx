"use client";

import { useState, useMemo } from "react";
import { ChevronDown, ChevronUp, Search, X, Package } from "lucide-react";
import ResourceRow from "./ResourceRow";
import { Resource, getCatalogs, getManuals } from "@/data/resources";

interface GroupedResources {
  [key: string]: Resource[];
}

export default function ResourcesAccordion() {
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set());

  const catalogs = getCatalogs();
  const manuals = getManuals();
  const allResources = [...catalogs, ...manuals];

  // Group all resources (catalogs + manuals) by product series
  const groupedResources = useMemo(() => {
    const grouped: GroupedResources = {};
    allResources.forEach((resource) => {
      const key = resource.productSeries || "Other";
      if (!grouped[key]) {
        grouped[key] = [];
      }
      grouped[key].push(resource);
    });
    
    // Sort resources within each group: catalogs first, then manuals
    Object.keys(grouped).forEach((key) => {
      grouped[key].sort((a, b) => {
        // Catalogs come before manuals
        if (a.category === "catalog" && b.category !== "catalog") return -1;
        if (a.category !== "catalog" && b.category === "catalog") return 1;
        // Otherwise sort alphabetically by name
        return a.name.localeCompare(b.name);
      });
    });
    
    return grouped;
  }, [allResources]);

  // Filter resources based on search query
  const filteredGroupedResources = useMemo(() => {
    if (!searchQuery.trim()) return groupedResources;
    const query = searchQuery.toLowerCase();
    const filtered: GroupedResources = {};
    
    Object.keys(groupedResources).forEach((key) => {
      const filteredResources = groupedResources[key].filter(
        (resource) =>
          resource.name.toLowerCase().includes(query) ||
          resource.description?.toLowerCase().includes(query) ||
          resource.productSeries?.toLowerCase().includes(query)
      );
      if (filteredResources.length > 0) {
        filtered[key] = filteredResources;
      }
    });
    
    return filtered;
  }, [groupedResources, searchQuery]);

  const toggleSection = (sectionId: string) => {
    setExpandedSections((prev) => {
      const next = new Set(prev);
      if (next.has(sectionId)) {
        next.delete(sectionId);
      } else {
        next.add(sectionId);
      }
      return next;
    });
  };

  // Expand sections that match search query
  useMemo(() => {
    if (searchQuery.trim()) {
      const newExpanded = new Set<string>();
      Object.keys(filteredGroupedResources).forEach((key) => {
        if (filteredGroupedResources[key].length > 0) {
          newExpanded.add(key);
        }
      });
      setExpandedSections(newExpanded);
    }
  }, [searchQuery, filteredGroupedResources]);

  return (
    <section className="relative py-12 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Search Bar */}
        <div className="relative w-full max-w-2xl mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search catalogs, manuals, and documentation..."
              className="w-full pl-12 pr-12 py-4 rounded-full border border-slate-200 bg-white text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-yellow/50 focus:border-primary-yellow transition-all duration-200 shadow-sm hover:shadow-md"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
                aria-label="Clear search"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>
        </div>

        {/* Product Series Sections - Grouped with Catalogs and Manuals Together */}
        {Object.keys(filteredGroupedResources)
          .sort((a, b) => {
            // Sort "Other" to the end
            if (a === "Other") return 1;
            if (b === "Other") return -1;
            return a.localeCompare(b);
          })
          .map((series) => {
            const sectionId = series;
            const resources = filteredGroupedResources[series];
            const isExpanded = expandedSections.has(sectionId);
            
            // Count catalogs and manuals
            const catalogCount = resources.filter(r => r.category === "catalog").length;
            const manualCount = resources.filter(r => r.category !== "catalog").length;

            return (
              <div key={series} className="mb-6">
                <button
                  onClick={() => toggleSection(sectionId)}
                  className="w-full flex items-center justify-between p-5 rounded-lg bg-slate-50 hover:bg-slate-100 transition-colors duration-200 group"
                >
                  <div className="flex items-center gap-3">
                    <Package className="w-5 h-5 text-primary-yellow" />
                    <h2 className="text-xl font-display text-slate-900">
                      {series === "Other" ? "Other Resources" : `${series} Series`}
                    </h2>
                    <span className="text-sm text-slate-500">
                      ({resources.length})
                      {(catalogCount > 0 || manualCount > 0) && (
                        <span className="ml-1 text-xs">
                          • {catalogCount > 0 && `${catalogCount} catalog${catalogCount !== 1 ? 's' : ''}`}
                          {catalogCount > 0 && manualCount > 0 && ', '}
                          {manualCount > 0 && `${manualCount} manual${manualCount !== 1 ? 's' : ''}`}
                        </span>
                      )}
                    </span>
                  </div>
                  {isExpanded ? (
                    <ChevronUp className="w-5 h-5 text-slate-600" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-600" />
                  )}
                </button>
                
                {isExpanded && (
                  <div className="mt-2 rounded-lg overflow-hidden bg-white border border-slate-100">
                    {/* Separate catalogs and manuals with small headings */}
                    {(() => {
                      const catalogsInSection = resources.filter(r => r.category === "catalog");
                      const manualsInSection = resources.filter(r => r.category !== "catalog");
                      
                      return (
                        <>
                          {catalogsInSection.length > 0 && (
                            <>
                              <div className="px-4 py-2 bg-slate-50/50 border-b border-slate-100">
                                <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Catalogs</h3>
                              </div>
                              {catalogsInSection.map((resource) => (
                                <ResourceRow key={resource.id} resource={resource} />
                              ))}
                            </>
                          )}
                          
                          {manualsInSection.length > 0 && (
                            <>
                              <div className={`px-4 py-2 bg-slate-50/50 border-slate-100 ${catalogsInSection.length > 0 ? 'border-t border-b' : 'border-b'}`}>
                                <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Manuals</h3>
                              </div>
                              {manualsInSection.map((resource) => (
                                <ResourceRow key={resource.id} resource={resource} />
                              ))}
                            </>
                          )}
                        </>
                      );
                    })()}
                  </div>
                )}
              </div>
            );
          })}

        {/* Empty State */}
        {Object.keys(filteredGroupedResources).length === 0 && (
          <div className="text-center py-16">
            <div className="max-w-md mx-auto space-y-4">
              <div className="w-16 h-16 mx-auto rounded-full bg-slate-100 flex items-center justify-center">
                <Search className="w-8 h-8 text-slate-400" />
              </div>
              <h3 className="text-xl font-display text-slate-900">No resources found</h3>
              <p className="text-slate-600">
                Try adjusting your search query to find what you're looking for.
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
