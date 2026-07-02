"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { products, Product } from "@/config/products";
import { siteConfig } from "@/config/site";

export default function ProductCatalog() {
  // Filter States
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedMaterials, setSelectedMaterials] = useState<string[]>([]);
  const [selectedGenders, setSelectedGenders] = useState<string[]>([]);
  const [selectedPriceRanges, setSelectedPriceRanges] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState<string>("popular");

  // Mobile Filter Drawer State
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState<boolean>(false);

  // Accordion States for Sidebar Filters
  const [isMaterialExpanded, setIsMaterialExpanded] = useState<boolean>(true);
  const [isPriceExpanded, setIsPriceExpanded] = useState<boolean>(true);
  const [isGenderExpanded, setIsGenderExpanded] = useState<boolean>(true);

  // Detail Modal State
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Categories list
  const categories = [
    { id: "all", label: "All Masterpieces" },
    { id: "rings", label: "Rings" },
    { id: "earrings", label: "Earrings" },
    { id: "pendants", label: "Pendants" },
    { id: "bangles", label: "Bangles & Bracelets" },
    { id: "necklaces", label: "Necklaces" }
  ];

  // Price ranges helper
  const priceRanges = [
    { id: "under-25k", label: "Under ₹25,000", min: 0, max: 25000 },
    { id: "25k-50k", label: "₹25,000 - ₹50,000", min: 25000, max: 50000 },
    { id: "50k-100k", label: "₹50,000 - ₹1,00,000", min: 50000, max: 100000 },
    { id: "over-100k", label: "Over ₹1,00,000", min: 100000, max: 99999999 }
  ];

  // Handlers for checkboxes
  const toggleMaterial = (material: string) => {
    setSelectedMaterials(prev =>
      prev.includes(material) ? prev.filter(m => m !== material) : [...prev, material]
    );
  };

  const toggleGender = (gender: string) => {
    setSelectedGenders(prev =>
      prev.includes(gender) ? prev.filter(g => g !== gender) : [...prev, gender]
    );
  };

  const togglePriceRange = (rangeId: string) => {
    setSelectedPriceRanges(prev =>
      prev.includes(rangeId) ? prev.filter(r => r !== rangeId) : [...prev, rangeId]
    );
  };

  const resetFilters = () => {
    setSelectedCategory("all");
    setSearchQuery("");
    setSelectedMaterials([]);
    setSelectedGenders([]);
    setSelectedPriceRanges([]);
    setSortBy("popular");
  };

  // Filter and Sort Logic
  const filteredProducts = useMemo(() => {
    return products
      .filter(product => {
        // Category Filter
        if (selectedCategory !== "all" && product.category !== selectedCategory) {
          return false;
        }

        // Search Filter
        if (searchQuery.trim() !== "") {
          const query = searchQuery.toLowerCase();
          const matchName = product.name.toLowerCase().includes(query);
          const matchDesc = product.description.toLowerCase().includes(query);
          const matchCat = product.category.toLowerCase().includes(query);
          const matchMat = product.material.toLowerCase().includes(query);
          if (!matchName && !matchDesc && !matchCat && !matchMat) {
            return false;
          }
        }

        // Material Filter
        if (selectedMaterials.length > 0 && !selectedMaterials.includes(product.material)) {
          return false;
        }

        // Gender Filter
        if (selectedGenders.length > 0 && !selectedGenders.includes(product.gender)) {
          return false;
        }

        // Price Filter
        if (selectedPriceRanges.length > 0) {
          const matchPrice = selectedPriceRanges.some(rangeId => {
            const range = priceRanges.find(r => r.id === rangeId);
            if (!range) return false;
            return product.price >= range.min && product.price <= range.max;
          });
          if (!matchPrice) return false;
        }

        return true;
      })
      .sort((a, b) => {
        // Sorting Logic
        if (sortBy === "price-asc") {
          return a.price - b.price;
        } else if (sortBy === "price-desc") {
          return b.price - a.price;
        } else if (sortBy === "weight-desc") {
          const getWeightNum = (w: string) => parseFloat(w.replace(/[^\d.]/g, "")) || 0;
          return getWeightNum(b.weight) - getWeightNum(a.weight);
        } else {
          // Default: Popularity (Bestsellers / custom order)
          const getScore = (p: Product) => {
            if (p.badge === "Bestseller") return 4;
            if (p.badge === "Trending") return 3;
            if (p.badge === "New Arrival") return 2;
            if (p.badge === "Popular") return 1;
            return 0;
          };
          return getScore(b) - getScore(a);
        }
      });
  }, [selectedCategory, searchQuery, selectedMaterials, selectedGenders, selectedPriceRanges, sortBy]);

  // Prefilled WhatsApp link builder
  const getWhatsAppLink = (product: Product) => {
    const message = `Hi Anas & Sons Jewellers, I am interested in viewing / purchasing this piece from your online catalog:\n\n✨ *${product.name}*\n• Category: ${product.category.toUpperCase()}\n• Material: ${product.material.toUpperCase()}\n• Purity: ${product.purity}\n• Weight: ${product.weight}\n• Est. Price: ${product.priceDisplay}\n\nPlease share more details and availability.`;
    return `https://wa.me/${siteConfig.phone.replace("+", "")}?text=${encodeURIComponent(message)}`;
  };

  return (
    <section id="catalog" className="py-24 md:py-36 relative overflow-hidden bg-noir border-t border-gold/5">
      {/* Background radial accent */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gold/[0.015] rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-10 relative">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <span className="w-12 h-px bg-gold/30" />
              <span className="section-label">Luxury Showroom</span>
            </div>
            <h2>
              The <span className="gold-text italic">Atelier</span> Catalog
            </h2>
            <p className="text-champagne/50 max-w-xl mt-3 font-light text-sm md:text-base">
              Browse Okhla&apos;s largest collection of fine gold, diamond, and sterling silver ornaments, crafted for generations.
            </p>
          </div>
          <button
            onClick={resetFilters}
            className="self-start md:self-end text-xs tracking-widest uppercase text-gold hover:text-gold-light border border-gold/10 hover:border-gold/30 px-5 py-2.5 transition-all duration-300 font-medium"
          >
            Reset All Filters
          </button>
        </div>

        {/* Categories Horizontal Tabs */}
        <div className="overflow-x-auto pb-4 mb-10 -mx-6 px-6 scrollbar-thin">
          <div className="flex gap-3 md:gap-4 whitespace-nowrap">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-5 py-3 rounded-full text-xs tracking-wider uppercase transition-all duration-500 font-light border ${
                  selectedCategory === cat.id
                    ? "bg-gradient-to-r from-gold to-gold-dark text-noir border-transparent font-medium shadow-[0_4px_20px_rgba(198,165,90,0.15)]"
                    : "bg-noir-card text-champagne/60 border-gold/5 hover:border-gold/20 hover:text-ivory"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Main Interface Layout */}
        <div className="grid lg:grid-cols-12 gap-8 md:gap-10">
          
          {/* LEFT SIDEBAR FILTERS (Desktop) */}
          <aside className="hidden lg:block lg:col-span-3 space-y-6">
            <div className="bg-noir-card border border-gold/5 p-6 rounded-sm sticky top-28">
              <h3 className="font-heading text-xl text-ivory border-b border-gold/10 pb-4 mb-6 font-light">
                Refine Pieces
              </h3>

              {/* Search Box in Sidebar */}
              <div className="mb-6 relative">
                <input
                  type="text"
                  placeholder="Search catalog..."
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  className="w-full bg-noir border border-gold/10 px-4 py-3 pr-10 text-xs text-champagne placeholder-champagne/30 focus:outline-none focus:border-gold/30 transition-all font-light rounded-sm"
                />
                <svg className="w-4 h-4 text-gold/40 absolute right-3 top-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>

              {/* Material Filter Accordion */}
              <div className="border-b border-gold/5 py-4">
                <button
                  onClick={() => setIsMaterialExpanded(!isMaterialExpanded)}
                  className="flex items-center justify-between w-full text-xs uppercase tracking-wider text-ivory/80 font-medium hover:text-gold"
                >
                  <span>Metal / Material</span>
                  <svg className={`w-3 h-3 transform transition-transform duration-300 ${isMaterialExpanded ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <AnimatePresence initial={false}>
                  {isMaterialExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden mt-3 space-y-2.5"
                    >
                      {["gold", "diamond", "silver"].map(mat => (
                        <label key={mat} className="flex items-center gap-3 text-xs text-champagne/60 hover:text-ivory cursor-pointer font-light">
                          <input
                            type="checkbox"
                            checked={selectedMaterials.includes(mat)}
                            onChange={() => toggleMaterial(mat)}
                            className="w-3.5 h-3.5 accent-gold bg-noir border-gold/20 rounded-sm focus:ring-0"
                          />
                          <span className="capitalize">{mat}</span>
                        </label>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Price Filter Accordion */}
              <div className="border-b border-gold/5 py-4">
                <button
                  onClick={() => setIsPriceExpanded(!isPriceExpanded)}
                  className="flex items-center justify-between w-full text-xs uppercase tracking-wider text-ivory/80 font-medium hover:text-gold"
                >
                  <span>Price Range</span>
                  <svg className={`w-3 h-3 transform transition-transform duration-300 ${isPriceExpanded ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <AnimatePresence initial={false}>
                  {isPriceExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden mt-3 space-y-2.5"
                    >
                      {priceRanges.map(range => (
                        <label key={range.id} className="flex items-center gap-3 text-xs text-champagne/60 hover:text-ivory cursor-pointer font-light">
                          <input
                            type="checkbox"
                            checked={selectedPriceRanges.includes(range.id)}
                            onChange={() => togglePriceRange(range.id)}
                            className="w-3.5 h-3.5 accent-gold bg-noir border-gold/20 rounded-sm focus:ring-0"
                          />
                          <span>{range.label}</span>
                        </label>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Gender Filter Accordion */}
              <div className="py-4">
                <button
                  onClick={() => setIsGenderExpanded(!isGenderExpanded)}
                  className="flex items-center justify-between w-full text-xs uppercase tracking-wider text-ivory/80 font-medium hover:text-gold"
                >
                  <span>Gender / Styling</span>
                  <svg className={`w-3 h-3 transform transition-transform duration-300 ${isGenderExpanded ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <AnimatePresence initial={false}>
                  {isGenderExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden mt-3 space-y-2.5"
                    >
                      {["women", "men", "unisex", "kids"].map(gen => (
                        <label key={gen} className="flex items-center gap-3 text-xs text-champagne/60 hover:text-ivory cursor-pointer font-light">
                          <input
                            type="checkbox"
                            checked={selectedGenders.includes(gen)}
                            onChange={() => toggleGender(gen)}
                            className="w-3.5 h-3.5 accent-gold bg-noir border-gold/20 rounded-sm focus:ring-0"
                          />
                          <span className="capitalize">{gen}</span>
                        </label>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

            </div>
          </aside>

          {/* RIGHT PRODUCT GRID CONTAINER */}
          <div className="lg:col-span-9 space-y-6">
            
            {/* Mobile Filter & Sort Bar */}
            <div className="flex items-center justify-between gap-4 bg-noir-card border border-gold/5 p-4 rounded-sm">
              <button
                onClick={() => setIsMobileFilterOpen(true)}
                className="lg:hidden flex items-center gap-2 text-xs tracking-wider uppercase text-champagne/80 border border-gold/10 px-4 py-2 hover:bg-gold/5 transition-all"
              >
                <svg className="w-3.5 h-3.5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
                <span>Filters ({selectedMaterials.length + selectedPriceRanges.length + selectedGenders.length})</span>
              </button>
              
              {/* Search (Mobile/Tablet Viewports) */}
              <div className="lg:hidden flex-1 max-w-xs relative">
                <input
                  type="text"
                  placeholder="Search catalog..."
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  className="w-full bg-noir border border-gold/10 px-3 py-2 pr-8 text-[11px] text-champagne placeholder-champagne/30 focus:outline-none focus:border-gold/30 rounded-sm"
                />
              </div>

              {/* Sort Selector */}
              <div className="flex items-center gap-2 text-xs">
                <span className="text-champagne/40 hidden md:inline">Sort:</span>
                <select
                  value={sortBy}
                  onChange={e => setSortBy(e.target.value)}
                  className="bg-noir border border-gold/10 text-champagne/80 text-[11px] md:text-xs px-3 py-2 pr-6 rounded-sm focus:outline-none focus:border-gold/30 appearance-none relative cursor-pointer"
                >
                  <option value="popular">Popularity</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="weight-desc">Weight: Heavy to Light</option>
                </select>
              </div>
            </div>

            {/* Product Count indicator */}
            <div className="text-[11px] tracking-widest text-champagne/30 uppercase">
              Showing {filteredProducts.length} of {products.length} masterworks
            </div>

            {/* Grid */}
            {filteredProducts.length === 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="border border-dashed border-gold/10 p-16 text-center rounded-sm bg-noir-card/30"
              >
                <svg className="w-12 h-12 text-gold/20 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h4 className="font-heading text-lg text-ivory mb-2 font-light">No Matching Pieces Found</h4>
                <p className="text-xs text-champagne/40 max-w-sm mx-auto mb-6 leading-relaxed">
                  Try adjusting your filters, searching for a different keyword, or resetting the filter options.
                </p>
                <button
                  onClick={resetFilters}
                  className="px-6 py-2.5 bg-gold/10 border border-gold/20 text-gold text-xs tracking-wider uppercase hover:bg-gold/20 transition-all font-medium"
                >
                  Clear Filters
                </button>
              </motion.div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
                {filteredProducts.map((product) => (
                  <motion.div
                    key={product.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-noir-card border border-gold/5 rounded-sm overflow-hidden group hover:border-gold/20 hover:bg-noir-light transition-all duration-500 flex flex-col cursor-pointer"
                    onClick={() => setSelectedProduct(product)}
                  >
                    {/* Image Container */}
                    <div className="relative aspect-square w-full bg-noir overflow-hidden">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                        sizes="(max-w-768px) 50vw, (max-w-1024px) 33vw, 25vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-noir/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      {/* Floating Badge */}
                      {product.badge && (
                        <span className="absolute top-3 left-3 bg-gradient-to-r from-gold to-gold-dark text-noir font-body text-[9px] tracking-wider uppercase px-2 py-0.5 font-semibold rounded-sm">
                          {product.badge}
                        </span>
                      )}

                      {/* Floating Spec Quick Details */}
                      <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[9px] text-ivory/60 tracking-wider uppercase font-body opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span>{product.purity.split(" ")[0]}</span>
                        <span>{product.weight}</span>
                      </div>
                    </div>

                    {/* Meta Content */}
                    <div className="p-4 flex-1 flex flex-col justify-between">
                      <div>
                        <span className="text-[9px] text-gold/50 tracking-[0.2em] uppercase font-body mb-1 block">
                          {product.category}
                        </span>
                        <h4 className="font-heading text-base md:text-lg text-ivory group-hover:text-gold transition-colors font-light leading-tight mb-2 line-clamp-1">
                          {product.name}
                        </h4>
                      </div>
                      
                      <div className="flex items-end justify-between border-t border-gold/5 pt-3 mt-2">
                        <div>
                          <div className="text-[9px] text-champagne/30 tracking-wider uppercase mb-0.5">Est. Price</div>
                          <div className="font-heading text-sm text-gold font-medium">{product.priceDisplay}</div>
                        </div>
                        <div className="w-7 h-7 rounded-full bg-gold/5 border border-gold/10 group-hover:bg-gold group-hover:border-transparent flex items-center justify-center transition-all">
                          <svg className="w-3.5 h-3.5 text-gold group-hover:text-noir transition-colors" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2C6.477 2 2 6.477 2 12c0 1.821.487 3.53 1.338 5L2.015 22l5.127-1.328A9.957 9.957 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm1.061 14.281c-.378.378-.853.53-1.339.424a6.533 6.533 0 01-3.662-2.148 6.533 6.533 0 01-2.148-3.662c-.106-.486.046-.961.424-1.339l.617-.617a.64.64 0 01.905 0l1.242 1.242a.64.64 0 010 .905l-.348.348c-.097.097-.123.243-.064.368a4.417 4.417 0 001.371 1.777c.489.377 1.054.671 1.668.868.125.04.271.014.368-.083l.348-.348a.64.64 0 01.905 0l1.242 1.242a.64.64 0 010 .905l-.617.617z"/>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* MOBILE FILTER SIDEBAR OVERLAY SHEET */}
        <AnimatePresence>
          {isMobileFilterOpen && (
            <>
              {/* Dark Overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.7 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsMobileFilterOpen(false)}
                className="fixed inset-0 bg-noir z-[999]"
              />

              {/* Drawer Content */}
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: 0 }}
                exit={{ x: "-100%" }}
                transition={{ type: "tween", duration: 0.4 }}
                className="fixed top-0 left-0 bottom-0 w-4/5 max-w-xs bg-noir-card border-r border-gold/10 p-6 z-[1000] overflow-y-auto"
              >
                <div className="flex items-center justify-between border-b border-gold/10 pb-4 mb-6">
                  <h3 className="font-heading text-lg text-ivory font-light">Filters</h3>
                  <button
                    onClick={() => setIsMobileFilterOpen(false)}
                    className="text-champagne/40 hover:text-gold text-xs tracking-widest uppercase font-medium"
                  >
                    Close
                  </button>
                </div>

                {/* Filters Content */}
                <div className="space-y-6">
                  {/* Material */}
                  <div className="border-b border-gold/5 pb-4">
                    <h5 className="text-[10px] uppercase tracking-wider text-gold mb-3 font-semibold">Metal / Material</h5>
                    <div className="space-y-2">
                      {["gold", "diamond", "silver"].map(mat => (
                        <label key={mat} className="flex items-center gap-3 text-xs text-champagne/60 hover:text-ivory cursor-pointer capitalize">
                          <input
                            type="checkbox"
                            checked={selectedMaterials.includes(mat)}
                            onChange={() => toggleMaterial(mat)}
                            className="w-3.5 h-3.5 accent-gold bg-noir border-gold/20 rounded-sm"
                          />
                          <span>{mat}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Price Range */}
                  <div className="border-b border-gold/5 pb-4">
                    <h5 className="text-[10px] uppercase tracking-wider text-gold mb-3 font-semibold">Price Range</h5>
                    <div className="space-y-2">
                      {priceRanges.map(range => (
                        <label key={range.id} className="flex items-center gap-3 text-xs text-champagne/60 hover:text-ivory cursor-pointer">
                          <input
                            type="checkbox"
                            checked={selectedPriceRanges.includes(range.id)}
                            onChange={() => togglePriceRange(range.id)}
                            className="w-3.5 h-3.5 accent-gold bg-noir border-gold/20 rounded-sm"
                          />
                          <span>{range.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Gender */}
                  <div className="pb-4">
                    <h5 className="text-[10px] uppercase tracking-wider text-gold mb-3 font-semibold">Gender / Styling</h5>
                    <div className="space-y-2">
                      {["women", "men", "unisex", "kids"].map(gen => (
                        <label key={gen} className="flex items-center gap-3 text-xs text-champagne/60 hover:text-ivory cursor-pointer capitalize">
                          <input
                            type="checkbox"
                            checked={selectedGenders.includes(gen)}
                            onChange={() => toggleGender(gen)}
                            className="w-3.5 h-3.5 accent-gold bg-noir border-gold/20 rounded-sm"
                          />
                          <span>{gen}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Reset button at drawer bottom */}
                <button
                  onClick={() => {
                    resetFilters();
                    setIsMobileFilterOpen(false);
                  }}
                  className="w-full mt-8 py-3 bg-gold/10 border border-gold/20 text-gold text-xs tracking-wider uppercase font-semibold text-center hover:bg-gold/20 transition-all"
                >
                  Clear All Filters
                </button>
              </motion.div>
            </>
          )}
        </AnimatePresence>

        {/* LIGHTBOX PRODUCT DETAILS MODAL */}
        <AnimatePresence>
          {selectedProduct && (
            <>
              {/* Dark Overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.8 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProduct(null)}
                className="fixed inset-0 bg-noir/90 z-[9999] backdrop-blur-sm"
              />

              {/* Lightbox Container */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 30 }}
                transition={{ duration: 0.4 }}
                className="fixed inset-x-4 bottom-4 top-4 md:inset-10 lg:inset-x-20 lg:inset-y-16 bg-noir-card border border-gold/10 z-[10000] overflow-y-auto rounded-sm flex flex-col md:flex-row shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="absolute top-5 right-5 w-8 h-8 rounded-full border border-gold/20 hover:border-gold/50 flex items-center justify-center text-champagne/60 hover:text-gold transition-colors z-[10001] bg-noir"
                >
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                {/* Left Side: Product Image Showcase */}
                <div className="w-full md:w-1/2 relative bg-noir aspect-square md:aspect-auto md:h-full flex items-center justify-center border-b md:border-b-0 md:border-r border-gold/10">
                  <Image
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-w-768px) 100vw, 50vw"
                  />
                  {selectedProduct.badge && (
                    <span className="absolute top-6 left-6 bg-gradient-to-r from-gold to-gold-dark text-noir font-body text-xs tracking-wider uppercase px-3 py-1 font-semibold rounded-sm">
                      {selectedProduct.badge}
                    </span>
                  )}
                </div>

                {/* Right Side: Product Details & Specs */}
                <div className="w-full md:w-1/2 p-6 md:p-12 flex flex-col justify-between bg-noir-card text-left">
                  <div className="space-y-6">
                    <div>
                      <span className="text-[10px] text-gold tracking-[0.35em] uppercase font-body block mb-2">
                        {selectedProduct.category} Catalog
                      </span>
                      <h3 className="font-heading text-3xl md:text-4xl text-ivory font-light leading-tight">
                        {selectedProduct.name}
                      </h3>
                    </div>

                    <div className="editorial-divider" />

                    <p className="text-champagne/70 text-sm leading-relaxed font-light">
                      {selectedProduct.description}
                    </p>

                    {/* Specs Table */}
                    <div className="bg-noir/40 border border-gold/5 p-4 space-y-3 rounded-sm">
                      <div className="flex justify-between text-xs py-1 border-b border-gold/5">
                        <span className="text-champagne/40">Product Reference</span>
                        <span className="text-ivory uppercase tracking-wider font-mono font-medium">{selectedProduct.id}</span>
                      </div>
                      <div className="flex justify-between text-xs py-1 border-b border-gold/5">
                        <span className="text-champagne/40">Primary Metal</span>
                        <span className="text-ivory capitalize font-medium">{selectedProduct.material}</span>
                      </div>
                      <div className="flex justify-between text-xs py-1 border-b border-gold/5">
                        <span className="text-champagne/40">Gold Purity / Grade</span>
                        <span className="text-ivory font-medium">{selectedProduct.purity}</span>
                      </div>
                      <div className="flex justify-between text-xs py-1 border-b border-gold/5">
                        <span className="text-champagne/40">Gross Weight</span>
                        <span className="text-ivory font-medium">{selectedProduct.weight}</span>
                      </div>
                      <div className="flex justify-between text-xs py-1">
                        <span className="text-champagne/40">Suitable For</span>
                        <span className="text-ivory capitalize font-medium">{selectedProduct.gender}</span>
                      </div>
                    </div>
                  </div>

                  {/* Pricing & WhatsApp CTA */}
                  <div className="mt-8 border-t border-gold/10 pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                    <div>
                      <div className="text-[10px] text-champagne/30 tracking-widest uppercase mb-1 font-body">Estimated Showcase Price</div>
                      <div className="font-heading text-2xl md:text-3xl text-gold font-medium">{selectedProduct.priceDisplay}</div>
                    </div>
                    <a
                      href={getWhatsAppLink(selectedProduct)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto btn-gold-fill cursor-pointer flex items-center justify-center gap-3 px-8 py-3 rounded-sm shadow-md"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.965C16.59 1.977 14.113.953 11.487.953c-5.442 0-9.866 4.372-9.87 9.802 0 1.714.453 3.39 1.31 4.869L1.933 21.05l5.714-1.496zm12.183-5.263c-.328-.164-1.942-.958-2.242-1.069-.3-.109-.519-.164-.738.164-.219.328-.848 1.069-1.039 1.288-.19.22-.382.246-.71.082-.328-.164-1.386-.511-2.64-1.631-.975-.87-1.633-1.946-1.824-2.274-.192-.328-.02-.505.143-.668.148-.146.328-.382.493-.574.164-.192.219-.328.328-.547.11-.219.055-.411-.027-.574-.082-.164-.738-1.78-.984-2.383-.247-.6-.515-.516-.707-.525-.183-.009-.393-.01-.601-.01-.21 0-.547.079-.834.394-.287.315-1.094 1.069-1.094 2.603 0 1.533 1.12 3.013 1.274 3.218.154.205 2.203 3.364 5.336 4.717.745.322 1.328.514 1.782.658.749.238 1.432.205 1.972.125.6-.09 1.942-.794 2.215-1.56.273-.767.273-1.423.191-1.56-.081-.137-.299-.219-.628-.383z"/>
                      </svg>
                      <span>Enquire on WhatsApp</span>
                    </a>
                  </div>
                </div>

              </motion.div>
            </>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
