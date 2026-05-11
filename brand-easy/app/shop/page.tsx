"use client";
import { useState, useMemo } from "react";
import { products, categories } from "@/lib/products";
import { Search, SlidersHorizontal, ChevronDown, Grid, List as ListIcon, MessageCircle, Heart } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import Link from "next/link";

export default function ShopPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedSubcategory, setSelectedSubcategory] = useState("All");
  const [sortBy, setSortBy] = useState("featured");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const availableSubcategories = useMemo(() => {
    if (selectedCategory === "All") return [];
    const subs = products
      .filter((p) => p.category === selectedCategory)
      .map((p) => p.subcategory);
    return Array.from(new Set(subs)).sort();
  }, [selectedCategory]);

  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            p.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === "All" || p.category === selectedCategory;
      const matchesSubcategory = selectedSubcategory === "All" || p.subcategory === selectedSubcategory;
      return matchesSearch && matchesCategory && matchesSubcategory;
    }).sort((a, b) => {
      if (sortBy === "price-low") return a.price - b.price;
      if (sortBy === "price-high") return b.price - a.price;
      return 0;
    });
  }, [searchQuery, selectedCategory, selectedSubcategory, sortBy]);

  const handleCategoryClick = (cat: string) => {
    setSelectedCategory(cat);
    setSelectedSubcategory("All"); // Reset subcategory when changing category
  };

  return (
    <div className="min-h-screen pt-24 pb-20 bg-slate-50">
      {/* Header */}
      <div className="maroon-floral-bg py-16 mb-8">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-white font-serif text-4xl md:text-6xl font-bold mb-4"
          >
            The <span className="text-[#2DB34A] italic">Complete</span> Catalog
          </motion.h1>
          <p className="text-white/60 text-sm md:text-lg max-w-2xl mx-auto font-light">
            Premium printing & branding solutions. From banners to business cards.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Sidebar Filters */}
          <aside className="w-full lg:w-72 shrink-0 space-y-8">
            <div>
              <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-[#0A2733] mb-4 border-b border-slate-200 pb-2">Categories</h3>
              <ul className="space-y-1">
                <li>
                  <button 
                    onClick={() => handleCategoryClick("All")}
                    className={`text-sm w-full text-left py-2 px-4 rounded-xl transition-all ${selectedCategory === "All" ? "bg-[#2DB34A] text-white font-bold shadow-md shadow-[#2DB34A]/20" : "text-[#2A5566] hover:bg-white"}`}
                  >
                    All Collections
                  </button>
                </li>
                {categories.map((cat) => (
                  <li key={cat}>
                    <button 
                      onClick={() => handleCategoryClick(cat)}
                      className={`text-sm w-full text-left py-2 px-4 rounded-xl transition-all ${selectedCategory === cat ? "bg-[#2DB34A] text-white font-bold shadow-md shadow-[#2DB34A]/20" : "text-[#2A5566] hover:bg-white"}`}
                    >
                      {cat}
                    </button>
                    
                    {/* Subcategories (Only visible if parent category is selected) */}
                    <AnimatePresence>
                      {selectedCategory === cat && availableSubcategories.length > 0 && (
                        <motion.ul 
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="ml-4 mt-1 border-l-2 border-[#2DB34A]/20 pl-2 space-y-1 overflow-hidden"
                        >
                          <li>
                            <button 
                              onClick={() => setSelectedSubcategory("All")}
                              className={`text-[11px] w-full text-left py-1.5 px-3 rounded-lg transition-colors ${selectedSubcategory === "All" ? "text-[#2DB34A] font-bold" : "text-slate-500 hover:text-[#2DB34A]"}`}
                            >
                              View All {cat}
                            </button>
                          </li>
                          {availableSubcategories.map((sub) => (
                            <li key={sub}>
                              <button 
                                onClick={() => setSelectedSubcategory(sub)}
                                className={`text-[11px] w-full text-left py-1.5 px-3 rounded-lg transition-colors ${selectedSubcategory === sub ? "text-[#2DB34A] font-bold bg-[#2DB34A]/5" : "text-slate-500 hover:text-[#2DB34A] hover:bg-slate-100"}`}
                              >
                                {sub}
                              </button>
                            </li>
                          ))}
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
              <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-[#0A2733] mb-4">Newsletter</h3>
              <p className="text-xs text-slate-500 mb-4">Get exclusive deals and new product updates.</p>
              <input type="email" placeholder="Email Address" className="w-full px-3 py-2 text-xs border rounded-lg mb-2 focus:outline-none focus:ring-1 focus:ring-[#2DB34A]" />
              <button className="w-full bg-[#0A2733] text-white text-[10px] font-bold py-2 rounded-lg uppercase tracking-widest">Subscribe</button>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1">
            {/* Toolbar */}
            <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm flex flex-wrap items-center justify-between gap-4 mb-8">
              <div className="flex flex-1 min-w-[200px] items-center gap-3 px-4 py-2 bg-slate-50 rounded-xl border border-slate-100 focus-within:ring-2 focus-within:ring-[#2DB34A]/20 transition-all">
                <Search size={18} className="text-slate-400" />
                <input 
                  type="text" 
                  placeholder="Search products..." 
                  className="bg-transparent border-none focus:outline-none text-sm w-full"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 p-1 bg-slate-100 rounded-lg">
                  <button 
                    onClick={() => setViewMode("grid")}
                    className={`p-1.5 rounded ${viewMode === "grid" ? "bg-white shadow text-[#0A2733]" : "text-slate-400"}`}
                  >
                    <Grid size={18} />
                  </button>
                  <button 
                    onClick={() => setViewMode("list")}
                    className={`p-1.5 rounded ${viewMode === "list" ? "bg-white shadow text-[#0A2733]" : "text-slate-400"}`}
                  >
                    <ListIcon size={18} />
                  </button>
                </div>

                <div className="relative group">
                  <select 
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="appearance-none bg-white border border-slate-200 px-4 py-2 pr-10 rounded-xl text-sm focus:outline-none cursor-pointer"
                  >
                    <option value="featured">Sort by: Featured</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="newest">Newest First</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={16} />
                </div>
              </div>
            </div>

            {/* Product Grid */}
            <div className={viewMode === "grid" ? "grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8" : "space-y-6"}>
              <AnimatePresence mode="popLayout">
                {filteredProducts.map((product) => (
                  <motion.div
                    layout
                    key={product.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                  >
                    <Link href={`/products/${product.id}`}>
                      <div className={`group bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 h-full ${viewMode === "list" ? "flex flex-col md:flex-row" : ""}`}>
                        {/* Image Container */}
                        <div className={`relative overflow-hidden bg-slate-100 ${viewMode === "list" ? "md:w-64 shrink-0 h-64 md:h-auto" : "aspect-[4/5]"}`}>
                          {product.images && product.images.length > 0 ? (
                            <Image 
                              src={product.images[0]} 
                              alt={product.title} 
                              fill 
                              className="object-cover group-hover:scale-110 transition-transform duration-700"
                            />
                          ) : (
                            <div className="w-full h-full flex flex-col items-center justify-center bg-slate-100 text-slate-300">
                               <div className="w-12 h-12 mb-2 opacity-20">
                                 <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>
                               </div>
                               <span className="text-[10px] font-black uppercase tracking-widest">Image Coming Soon</span>
                            </div>
                          )}
                          <div className="absolute top-4 right-4 flex flex-col gap-2 translate-x-12 group-hover:translate-x-0 transition-transform duration-300">
                            <button className="p-2.5 bg-white/90 backdrop-blur rounded-full text-[#0A2733] hover:text-[#2DB34A] shadow-lg transition-colors">
                              <Heart size={18} />
                            </button>
                          </div>
                          {product.isFeatured && (
                            <div className="absolute top-4 left-4 bg-[#2DB34A] text-white text-[8px] font-black tracking-widest uppercase px-3 py-1 rounded-full shadow-lg">
                              Limited
                            </div>
                          )}
                        </div>

                        {/* Details */}
                        <div className="p-6 flex flex-col">
                          <div className="flex justify-between items-start mb-2">
                            <span className="text-[9px] font-black tracking-[0.2em] uppercase text-[#0099D4]/60">
                              {product.subcategory}
                            </span>
                          </div>
                          <h3 className="font-serif text-xl font-bold text-[#0A2733] mb-3 group-hover:text-[#2DB34A] transition-colors">
                            {product.title}
                          </h3>
                          <div className="flex items-center gap-3 mb-6">
                            <span className="text-xl font-black text-[#0A2733]">₹{product.price.toLocaleString()}</span>
                            <span className="text-[10px] text-slate-400 italic">Free Shipping</span>
                          </div>
                          
                          <div className="mt-auto flex items-center gap-3">
                            <a 
                              href={`https://wa.me/919310011931?text=${encodeURIComponent(`Hello, I'm interested in getting a quote for: ${product.title}\nPrice: ₹${product.price.toLocaleString()}\nLink: ${typeof window !== "undefined" ? window.location.origin : ""}/products/${product.id}`)}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex-1 bg-[#2DB34A] text-white py-3 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-[#1F8A37] transition-colors flex items-center justify-center gap-2"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <MessageCircle size={14} />
                              Get Quote
                            </a>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-32 bg-white rounded-3xl border-2 border-dashed border-slate-200">
                <Search size={48} className="mx-auto text-slate-200 mb-6" />
                <p className="text-[#0A2733] font-serif text-xl font-bold mb-2">No products found</p>
                <p className="text-slate-400 text-sm">Try adjusting your filters or search keywords.</p>
                <button 
                  onClick={() => {setSearchQuery(""); setSelectedCategory("All"); setSelectedSubcategory("All");}}
                  className="mt-6 text-[#2DB34A] text-xs font-bold uppercase tracking-widest underline underline-offset-8"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
