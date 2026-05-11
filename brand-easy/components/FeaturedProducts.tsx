"use client";
import { products } from "@/lib/products";
import ProductCard from "./ProductCard";
import { motion } from "motion/react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function FeaturedProducts() {
  const featured = products.filter(p => p.isFeatured).length > 0 
    ? products.filter(p => p.isFeatured).slice(0, 6)
    : products.slice(0, 6);

  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div
            className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
          >
            <div>
              <p className="text-[#2DB34A] text-[10px] font-black tracking-[0.5em] uppercase mb-4">Curated Collection</p>
              <h2 className="text-[#0A2733] font-serif text-4xl md:text-6xl font-bold leading-tight">
                Product <span className="text-[#0099D4] italic">Showcase</span>
              </h2>
            </div>
            <div>
              <Link 
                href="/shop" 
                className="flex items-center gap-3 text-[10px] font-black tracking-[0.3em] uppercase text-[#0A2733] group hover:text-[#2DB34A] transition-colors"
              >
                Browse Shop
                <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {featured.length > 0 ? (
            featured.map((product) => (
              <div key={product.id}>
                <ProductCard product={product} />
              </div>
            ))
          ) : (
            <div className="col-span-full py-20 text-center">
              <p className="text-slate-400 font-sans italic">Our latest collection is arriving soon. Check back shortly.</p>
            </div>
          )}
        </div>

        {/* Categories Quick Links */}
        <div className="mt-20 flex flex-wrap justify-center gap-4">
             {["Banners", "Stands", "Table Covers", "Flags", "Signage", "Marketing"].map((tag) => (
               <Link 
                 key={tag}
                 href={`/shop`}
                 className="px-6 py-3 rounded-full border border-slate-200 text-[#0A2733]/60 text-[10px] font-bold tracking-widest uppercase hover:border-[#2DB34A] hover:text-[#2DB34A] transition-all bg-white"
               >
                 {tag}
               </Link>
             ))}
        </div>
      </div>
    </section>
  );
}
