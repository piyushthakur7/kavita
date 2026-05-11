"use client";
import { use, useState, useMemo } from "react";
import { products } from "@/lib/products";
import { ChevronRight, Star, Truck, ShieldCheck, RefreshCw, Heart, Share2, MessageCircle } from "lucide-react";
import { getWhatsAppQuoteLink } from "@/lib/whatsapp";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export default function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const product = products.find((p) => p.id === resolvedParams.id);
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState(product?.sizes[0] || "");
  const [selectedColor, setSelectedColor] = useState(product?.colors[0] || "");

  if (!product) return notFound();

  const whatsappQuoteLink = useMemo(() => {
    return getWhatsAppQuoteLink(product.title, product.price, {
      size: selectedSize,
      color: selectedColor,
      url: typeof window !== "undefined" ? window.location.href : ""
    });
  }, [product, selectedSize, selectedColor]);

  // Related products from the same category
  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="min-h-screen pt-24 pb-20 bg-white">
      {/* Breadcrumbs */}
      <div className="bg-slate-50 py-4 mb-12">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <nav className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-slate-400">
            <Link href="/" className="hover:text-[#2DB34A] transition-colors">Home</Link>
            <ChevronRight size={12} />
            <Link href="/shop" className="hover:text-[#2DB34A] transition-colors">Shop</Link>
            <ChevronRight size={12} />
            <span className="text-[#0A2733]">{product.category}</span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          
          {/* Visuals */}
          <div className="space-y-6">
            <div className="relative aspect-[4/5] w-full rounded-3xl overflow-hidden bg-slate-50 shadow-2xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedImage}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0"
                >
                  {product.images && product.images.length > 0 ? (
                    <Image 
                      src={product.images[selectedImage]} 
                      alt={product.title} 
                      fill 
                      className="object-cover"
                      priority
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center bg-slate-100 text-slate-300">
                      <div className="w-24 h-24 mb-4 opacity-20">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>
                      </div>
                      <span className="text-sm font-black uppercase tracking-[0.2em]">Image Coming Soon</span>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
            
            <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
              {product.images.map((img, i) => (
                <button 
                  key={i}
                  onClick={() => setSelectedImage(i)}
                  className={`relative w-24 aspect-[4/5] rounded-xl overflow-hidden border-2 shrink-0 transition-all ${selectedImage === i ? "border-[#2DB34A] scale-105 shadow-lg" : "border-transparent opacity-60 hover:opacity-100"}`}
                >
                  <Image src={img} alt={`Preview ${i}`} fill className="object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Core Info */}
          <div className="flex flex-col">
            <div className="mb-8">
              <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-[#0099D4] mb-4">
                <span>{product.subcategory}</span>
                <span className="w-1 h-1 bg-slate-300 rounded-full" />
                <div className="flex items-center gap-1.5 text-yellow-500">
                  <Star size={10} fill="currentColor" />
                  <Star size={10} fill="currentColor" />
                  <Star size={10} fill="currentColor" />
                  <Star size={10} fill="currentColor" />
                  <Star size={10} fill="currentColor" className="opacity-30" />
                  <span className="text-slate-400 font-bold ml-1 font-sans">4.0 (12 Reviews)</span>
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#0A2733] mb-4 leading-tight">{product.title}</h1>
              <p className="text-slate-500 text-lg font-light leading-relaxed mb-6">{product.description}</p>
              
              <div className="flex items-baseline gap-4 mb-4">
                <span className="text-4xl font-black text-[#0A2733]">₹{product.price.toLocaleString()}</span>
                <span className="text-slate-400 line-through text-lg">₹{(product.price * 1.25).toLocaleString()}</span>
                <div className="bg-red-50 text-red-600 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">20% OFF</div>
              </div>
              <p className="text-[#2DB34A] text-xs font-bold tracking-widest uppercase">✦ In Stock — Ships within 3-5 business days</p>
            </div>

            {/* Options */}
            <div className="space-y-8 mb-10 border-y border-slate-100 py-8">
              <div>
                <div className="flex justify-between items-center mb-4">
                  <label className="text-[10px] font-black uppercase tracking-[0.3em] text-[#0A2733]">Select Size (Inches)</label>
                  <button className="text-[10px] text-[#0099D4] font-bold uppercase tracking-widest underline underline-offset-4">Size Guide</button>
                </div>
                <div className="flex flex-wrap gap-3">
                  {product.sizes.map((size) => (
                    <button 
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-6 py-3 rounded-xl text-xs font-bold border-2 transition-all ${selectedSize === size ? "bg-[#0A2733] text-white border-[#0A2733] shadow-lg scale-105" : "border-slate-100 text-slate-500 hover:border-[#2DB34A]/30"}`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-black uppercase tracking-[0.3em] text-[#0A2733] mb-4">Finish / Color</label>
                <div className="flex flex-wrap gap-3">
                  {product.colors.map((color) => (
                    <button 
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`px-6 py-3 rounded-xl text-xs font-bold border-2 transition-all ${selectedColor === color ? "bg-[#2DB34A] text-white border-[#2DB34A] shadow-lg scale-105" : "border-slate-100 text-slate-500 hover:border-[#2DB34A]/30"}`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a 
                href={whatsappQuoteLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-[#2DB34A] text-white py-5 rounded-2xl flex items-center justify-center gap-3 text-xs font-black uppercase tracking-[0.3em] hover:bg-[#1F8A37] transition-all hover:scale-[1.02] active:scale-95 shadow-xl shadow-slate-200"
              >
                <MessageCircle size={18} />
                Get a Quote
              </a>
              <div className="flex gap-4">
                <button className="p-5 border-2 border-slate-100 rounded-2xl text-[#0A2733] hover:bg-slate-50 transition-colors">
                  <Heart size={20} />
                </button>
                <button className="p-5 border-2 border-slate-100 rounded-2xl text-[#0A2733] hover:bg-slate-50 transition-colors">
                  <Share2 size={20} />
                </button>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 bg-slate-50 rounded-3xl border border-slate-100">
              <div className="flex flex-col items-center text-center gap-2">
                <Truck size={20} className="text-[#0099D4]" />
                <span className="text-[8px] font-black uppercase tracking-widest text-[#0A2733]">Fast Shipping</span>
              </div>
              <div className="flex flex-col items-center text-center gap-2 border-l border-slate-200">
                <ShieldCheck size={20} className="text-[#0099D4]" />
                <span className="text-[8px] font-black uppercase tracking-widest text-[#0A2733]">Premium Quality</span>
              </div>
              <div className="flex flex-col items-center text-center gap-2 border-l border-slate-200">
                <RefreshCw size={20} className="text-[#0099D4]" />
                <span className="text-[8px] font-black uppercase tracking-widest text-[#0A2733]">Easy Returns</span>
              </div>
              <div className="flex flex-col items-center text-center gap-2 border-l border-slate-200">
                <Star size={20} className="text-[#0099D4]" />
                <span className="text-[8px] font-black uppercase tracking-widest text-[#0A2733]">Bulk Discounts</span>
              </div>
            </div>
          </div>
        </div>

        {/* Description & Technical */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-24 py-16 border-y border-slate-100">
          <div className="md:col-span-2 space-y-8">
            <h2 className="text-3xl font-serif font-bold text-[#0A2733]">Product Details & Specifications</h2>
            <div className="prose prose-slate max-w-none text-[#2A5566] leading-relaxed font-light">
              <p>The {product.title} is crafted with <strong>{product.material}</strong>, chosen specifically for its durability and professional finish. Built to meet commercial-grade standards.</p>
              <ul className="list-disc pl-5 mt-6 space-y-3">
                {product.features.map((f, i) => <li key={i}>{f}</li>)}
              </ul>
              <p className="mt-8">At Brand Easy, we use only premium materials and state-of-the-art printing technology to ensure every product meets the highest standards of quality and brand consistency.</p>
            </div>
          </div>
          <div className="bg-slate-50 p-8 rounded-3xl h-fit">
            <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-[#0A2733] mb-6">Specifications</h3>
            <div className="space-y-4">
              <div className="flex justify-between text-xs py-2 border-b border-slate-200">
                <span className="text-slate-500">Material</span>
                <span className="font-bold text-[#0A2733]">{product.material}</span>
              </div>
              <div className="flex justify-between text-xs py-2 border-b border-slate-200">
                <span className="text-slate-500">Category</span>
                <span className="font-bold text-[#0A2733]">{product.category}</span>
              </div>
              <div className="flex justify-between text-xs py-2 border-b border-slate-200">
                <span className="text-slate-500">Origin</span>
                <span className="font-bold text-[#0A2733]">Made in India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div>
            <h2 className="text-3xl font-serif font-bold text-[#0A2733] mb-12 text-center underline decoration-[#2DB34A]/30 underline-offset-8">You Might Also Like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {relatedProducts.map((rp) => (
                <Link key={rp.id} href={`/products/${rp.id}`} className="group">
                  <div className="relative aspect-[4/5] rounded-2xl overflow-hidden mb-4 bg-slate-50">
                    {rp.images && rp.images.length > 0 ? (
                      <Image src={rp.images[0]} alt={rp.title} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                    ) : (
                      <div className="w-full h-full flex flex-col items-center justify-center bg-slate-100 text-slate-300">
                        <div className="w-12 h-12 mb-2 opacity-20">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>
                        </div>
                        <span className="text-[8px] font-black uppercase tracking-widest">Image Coming Soon</span>
                      </div>
                    )}
                  </div>
                  <h3 className="font-serif font-bold text-[#0A2733] group-hover:text-[#2DB34A] transition-colors">{rp.title}</h3>
                  <span className="text-xs font-black text-[#0099D4]">₹{rp.price.toLocaleString()}</span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
