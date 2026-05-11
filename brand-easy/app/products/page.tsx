"use client";
import { products, categories as categoryList } from "@/lib/products";
import ProductCard from "@/components/ProductCard";
import { motion } from "motion/react";
import { ChevronRight, LayoutGrid, ListFilter } from "lucide-react";
import Link from "next/link";

export default function ProductsListingPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <p className="text-[#2DB34A] text-[10px] font-black tracking-[0.5em] uppercase mb-4">Complete Catalog</p>
            <h1 className="text-[#0A2733] font-serif text-4xl md:text-6xl font-bold leading-tight">
              Our <span className="text-[#0099D4] italic">Collections</span>
            </h1>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex items-center gap-6"
          >
            <Link 
              href="/shop" 
              className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-[#0A2733] transition-colors"
            >
              <ListFilter size={14} />
              Advanced Filters
            </Link>
            <div className="h-4 w-px bg-slate-200" />
            <Link 
              href="/custom-orders" 
              className="px-6 py-3 bg-[#0A2733] text-white rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-[#2DB34A] transition-all shadow-lg"
            >
              Custom Request
            </Link>
          </motion.div>
        </div>

        {/* Categories Navigation */}
        <div className="flex flex-wrap gap-3 mb-20">
          {categoryList.map((category, i) => (
            <motion.a
              key={category}
              href={`#${category.toLowerCase().replace(/\s+/g, "-")}`}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.05 }}
              className="px-5 py-2.5 bg-white border border-slate-100 rounded-full text-[10px] font-bold uppercase tracking-widest text-slate-500 hover:text-[#2DB34A] hover:border-[#2DB34A] hover:shadow-md transition-all whitespace-nowrap"
            >
              {category}
            </motion.a>
          ))}
        </div>

        {/* Categorized Products */}
        <div className="space-y-32">
          {categoryList.map((category, idx) => {
            const categoryProducts = products.filter(p => p.category === category);
            if (categoryProducts.length === 0) return null;

            return (
              <section 
                key={category} 
                id={category.toLowerCase().replace(/\s+/g, "-")}
                className="scroll-mt-32"
              >
                <div className="flex items-center justify-between mb-12 border-b border-slate-100 pb-8">
                  <div>
                    <h2 className="text-[#0A2733] font-serif text-3xl md:text-4xl font-bold mb-2">
                       {category}
                    </h2>
                    <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.3em]">
                      {categoryProducts.length} Premium Pieces
                    </p>
                  </div>
                  <Link 
                    href={`/shop?category=${encodeURIComponent(category)}`}
                    className="group flex items-center gap-2 text-[#2DB34A] text-[10px] font-black uppercase tracking-widest"
                  >
                    View All in Category
                    <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                  {categoryProducts.map((product, pIdx) => (
                    <motion.div
                      key={product.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: pIdx * 0.05 }}
                      viewport={{ once: true }}
                    >
                      <ProductCard product={product} />
                    </motion.div>
                  ))}
                </div>
              </section>
            );
          })}
        </div>

      </div>
    </div>
  );
}
