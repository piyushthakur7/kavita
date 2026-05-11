"use client";
import { motion } from "motion/react";

export default function MarqueeStrip() {
  const items = [
    "Custom Banners",
    "Trade Show Displays",
    "Business Cards",
    "Vehicle Wraps",
    "Custom Flags",
    "Table Covers",
    "Stickers & Labels",
    "Signage Solutions",
  ];

  return (
    <div className="py-8 bg-gradient-to-r from-[#0A2733] via-[#0d3b4a] to-[#0A2733] overflow-hidden">
      <motion.div 
        animate={{ x: [0, -1500] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="flex whitespace-nowrap gap-0"
      >
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex gap-0 items-center">
            {items.map((item) => (
              <div key={item} className="flex items-center gap-10 mx-5">
                <span className="text-white/15 text-4xl md:text-6xl font-black uppercase tracking-tight">
                  {item}
                </span>
                <span className="text-[#2DB34A]/30 text-2xl">✦</span>
              </div>
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
