"use client";
import { useRouter } from "next/navigation";
import { Product } from "@/lib/products";
import Image from "next/image";
import { motion } from "motion/react";
import { MessageCircle, Heart } from "lucide-react";
import { getWhatsAppQuoteLink } from "@/lib/whatsapp";

export default function ProductCard({ product }: { product: Product }) {
  const router = useRouter();

  const whatsappLink = getWhatsAppQuoteLink(product.title, product.price, {
    url: typeof window !== "undefined" ? `${window.location.origin}/products/${product.id}` : ""
  });

  return (
    <div 
      className="group bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col h-full"
    >
      {/* Image Container */}
      <div 
        className="relative aspect-[4/5] overflow-hidden cursor-pointer bg-slate-50"
        onClick={() => router.push(`/products/${product.id}`)}
      >
        {product.images && product.images.length > 0 ? (
          <Image 
            src={product.images[0]} 
            alt={product.title} 
            fill 
            className="object-cover group-hover:scale-110 transition-transform duration-700"
            referrerPolicy="no-referrer"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center bg-slate-100 text-slate-300">
             <div className="w-16 h-16 mb-2 opacity-20">
               <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>
             </div>
             <span className="text-[10px] font-black uppercase tracking-widest">Image Coming Soon</span>
          </div>
        )}
        
        {/* Hover Actions */}
        <div className="absolute top-4 right-4 flex flex-col gap-2 translate-x-12 group-hover:translate-x-0 transition-transform duration-300">
          <button className="p-3 bg-white/90 backdrop-blur rounded-full text-[#0A2733] hover:text-[#2DB34A] shadow-lg transition-colors">
            <Heart size={18} />
          </button>
          <a 
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-[#2DB34A] rounded-full text-white shadow-lg transition-transform hover:scale-110 active:scale-95"
            onClick={(e) => e.stopPropagation()}
          >
            <MessageCircle size={18} />
          </a>
        </div>

        {product.isFeatured && (
          <div className="absolute top-4 left-4 bg-[#2DB34A] text-white text-[8px] font-black tracking-widest uppercase px-3 py-1 rounded-full shadow-lg">
            Featured
          </div>
        )}
      </div>

      {/* Details */}
      <div className="p-6 flex flex-col flex-1">
        <div className="mb-4">
          <span className="text-[9px] font-black tracking-[0.2em] uppercase text-[#0099D4]/60 block mb-1">
            {product.subcategory}
          </span>
          <h3 
            className="font-serif text-xl font-bold text-[#0A2733] cursor-pointer hover:text-[#2DB34A] transition-colors line-clamp-1"
            onClick={() => router.push(`/products/${product.id}`)}
          >
            {product.title}
          </h3>
        </div>

        <div className="mt-auto flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-lg font-black text-[#0A2733]">₹{product.price.toLocaleString()}</span>
            <span className="text-[8px] text-slate-400 font-bold uppercase tracking-widest">Incl. GST</span>
          </div>
          <a 
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[9px] font-black uppercase tracking-[0.2em] text-[#0A2733] border-b-2 border-[#2DB34A]/30 hover:border-[#2DB34A] transition-all pb-1"
          >
            Get Quote →
          </a>
        </div>
      </div>
    </div>
  );
}
