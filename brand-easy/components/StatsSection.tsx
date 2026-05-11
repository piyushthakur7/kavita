"use client";
import { motion } from "motion/react";

const stats = [
  { label: "Orders Delivered", value: "25,000+" },
  { label: "Business Clients", value: "1,200+" },
  { label: "Quality Checks", value: "100%" },
  { label: "Customer Rating", value: "4.9/5.0" }
];

export default function StatsSection() {
  return (
    <section className="py-24 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          {stats.map((stat, i) => (
            <motion.div 
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <p className="text-4xl md:text-5xl font-serif font-black text-[#0A2733] mb-2">{stat.value}</p>
              <p className="text-[10px] font-black tracking-widest uppercase text-slate-400">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
