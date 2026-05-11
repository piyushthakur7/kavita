"use client";
import { motion } from "motion/react";
import { Truck, Palette, Clock, ShieldCheck, Phone } from "lucide-react";

export default function GoldChevronStrip() {
  const items = [
    { icon: Truck, text: "Free Shipping Over ₹999" },
    { icon: Palette, text: "Free Design Proofs" },
    { icon: Clock, text: "3-5 Day Delivery" },
    { icon: ShieldCheck, text: "Premium Quality Guaranteed" },
    { icon: Phone, text: "1800-XXX-XXXX" },
  ];

  return (
    <div className="bg-gradient-to-r from-[#0A2733] via-[#0d3b4a] to-[#0A2733] overflow-hidden py-2.5 border-b border-white/10">
      <motion.div 
        initial={{ x: 0 }}
        animate={{ x: "-50%" }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="flex whitespace-nowrap gap-0 items-center"
      >
        {[...Array(10)].map((_, i) => (
          <div key={i} className="flex items-center gap-0">
            {items.map((item, idx) => (
              <div key={idx} className="flex items-center">
                <div className="flex items-center gap-2 px-6">
                  <item.icon size={14} className="text-[#2DB34A]" />
                  <span className="text-[11px] font-semibold tracking-wide text-white/80">
                    {item.text}
                  </span>
                </div>
                <span className="text-[#2DB34A] text-xs">|</span>
              </div>
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
