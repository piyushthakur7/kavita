"use client";
import Link from "next/link";
import { motion } from "motion/react";
import Image from "next/image";

const spaces = [
  { name: "Corporate Headquarters", type: "Dimensional Signage", location: "Bangalore", img: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800" },
  { name: "Retail Flagship", type: "Vinyl Window Displays", location: "Mumbai", img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800" },
  { name: "Tech Park Event", type: "Large Format Banners", location: "Hyderabad", img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=800" },
  { name: "Exhibition Center", type: "Modular Fabric Stands", location: "New Delhi", img: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=800" },
];

export default function PortfolioSection() {
  return (
    <section className="bg-white py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 md:mb-24 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-[#0099D4] text-[10px] tracking-[0.5em] uppercase font-black mb-4">Latest Installations</p>
            <h2 className="text-[#0A2733] font-serif text-4xl md:text-7xl font-bold leading-tight">
              Impactful Brand <span className="text-[#0077A8] italic font-medium">Presence</span>
            </h2>
          </motion.div>
          <motion.div
             initial={{ opacity: 0, x: 30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
          >
            <Link
              href="/shop"
              className="inline-block bg-white border-2 border-[#0099D4] text-[#0099D4] px-12 py-5 rounded-full text-[10px] tracking-[0.3em] uppercase font-black hover:bg-[#0099D4] hover:text-white transition-all hover:scale-105 active:scale-95 shadow-lg shadow-slate-100"
            >
              View All Projects
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {spaces.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group relative h-[400px] md:h-[600px] rounded-[2.5rem] overflow-hidden cursor-pointer"
            >
              <Image 
                src={p.img} 
                alt={p.name} 
                fill 
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A2733]/80 via-[#0A2733]/20 to-transparent p-12 flex flex-col justify-end">
                 <div className="flex justify-between items-end">
                    <div>
                      <p className="text-[#2DB34A] text-[10px] font-black tracking-[0.4em] uppercase mb-4">{p.location}</p>
                      <h3 className="text-white font-serif text-3xl md:text-5xl font-bold leading-none">{p.name}</h3>
                      <div className="h-[2px] w-16 bg-[#2DB34A] mt-6 group-hover:w-32 transition-all duration-500" />
                    </div>
                    <div className="text-white/40 text-[9px] font-black tracking-[0.3em] uppercase hidden md:block">
                      {p.type}
                    </div>
                 </div>
              </div>
              
              <div className="absolute inset-0 bg-[#0099D4]/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
