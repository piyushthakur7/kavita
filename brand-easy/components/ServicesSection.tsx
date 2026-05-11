"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";

const collections = [
  {
    title: "Banners",
    desc: "Vinyl, fabric, mesh & event banners with vibrant full-color printing for any occasion.",
    img: "https://images.unsplash.com/photo-1626785774625-ddcddc3445e9?auto=format&fit=crop&q=80&w=400",
    tag: "Best Seller",
  },
  {
    title: "Stands & Displays",
    desc: "Roll-up stands, pop-up displays, canopy tents & counters for trade shows and events.",
    img: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?auto=format&fit=crop&q=80&w=400",
    tag: null,
  },
  {
    title: "Table Covers",
    desc: "Fitted, stretch & custom table covers that give your booth a polished professional look.",
    img: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=400",
    tag: null,
  },
  {
    title: "Custom Flags",
    desc: "Feather flags, teardrop banners & desk flags for maximum brand visibility anywhere.",
    img: "https://images.unsplash.com/photo-1569974507005-6dc61f97fb5c?auto=format&fit=crop&q=80&w=400",
    tag: "Popular",
  },
  {
    title: "Signs & Decals",
    desc: "Acrylic signs, floor decals & vehicle wraps for impactful indoor and outdoor branding.",
    img: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=400",
    tag: null,
  },
  {
    title: "Marketing Materials",
    desc: "Business cards, brochures, stickers & labels — everything to power your brand presence.",
    img: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?auto=format&fit=crop&q=80&w=400",
    tag: null,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function ServicesSection() {
  return (
    <section className="floral-bg py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <p className="text-[#0099D4] text-[10px] tracking-[0.5em] uppercase font-black mb-4">What We Offer</p>
            <h2 className="text-[#0A2733] font-serif text-4xl md:text-6xl font-black leading-[1.1]">
              Our <span className="text-[#0077A8] italic font-medium">Product</span> Range
            </h2>
            <div className="flex items-center justify-center gap-4 mt-8">
              <div className="h-[2px] w-12 bg-[#2DB34A]" />
              <span className="text-[#2DB34A] text-xl">✦</span>
              <div className="h-[2px] w-12 bg-[#2DB34A]" />
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {collections.map((s) => (
            <motion.div key={s.title} variants={itemVariants}>
              <Link href="/shop" className="block h-full">
                <div className="group bg-white rounded-3xl overflow-hidden cursor-pointer hover:shadow-2xl hover:shadow-[#0099D4]/10 transition-all duration-500 relative h-full flex flex-col items-start border border-slate-100">
                  <div className="h-48 w-full overflow-hidden relative">
                    <Image 
                      src={s.img} 
                      alt={s.title} 
                      fill 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-60" />
                  </div>
                  
                  <div className="p-8 pt-4">
                    {s.tag && (
                      <span className="absolute top-4 right-4 text-[8px] bg-[#0099D4] text-white font-black px-3 py-1 tracking-widest uppercase rounded-full shadow-lg z-10">
                        {s.tag}
                      </span>
                    )}
                    <h3 className="text-[#0A2733] font-serif font-black mb-4 text-2xl">{s.title}</h3>
                    <p className="text-[#2A5566] text-base leading-relaxed mb-8 font-light">{s.desc}</p>
                    <div className="mt-auto pt-6 border-t border-slate-50 w-full text-[#2DB34A] text-[9px] font-black tracking-[0.2em] uppercase group-hover:translate-x-2 transition-transform">
                      Explore Products →
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-20">
          <Link
            href="/shop"
            className="inline-block bg-[#0A2733] text-white px-12 py-5 rounded-full text-[10px] tracking-[0.3em] uppercase font-black hover:bg-[#0099D4] transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-slate-200"
          >
            Browse All Products
          </Link>
        </div>
      </div>
    </section>
  );
}
