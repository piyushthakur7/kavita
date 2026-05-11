"use client";
import { motion } from "motion/react";
import Link from "next/link";
import GoldChevronStrip from "@/components/GoldChevronStrip";

const services = [
  {
    title: "LED Sign Boards",
    desc: "High-brightness indoor & outdoor LED sign boards built for every business type. Weather-resistant, energy-efficient, and crafted to grab attention 24/7.",
    features: ["Weather-resistant casing", "Energy-efficient LEDs", "Indoor & outdoor variants", "Custom shapes & sizes", "5-year warranty"],
    icon: "💡",
  },
  {
    title: "Neon Signs",
    desc: "Classic glass neon and modern flex-neon signs — vibrant, eye-catching, and built to last. Perfect for cafes, salons, shops, and hospitality businesses.",
    features: ["Custom lettering & logos", "100+ color options", "Indoor & outdoor", "Low power consumption", "Easy installation"],
    icon: "✨",
  },
  {
    title: "Acrylic 3D Letters",
    desc: "Premium acrylic channel letters with backlit or front-lit options. Bold 3D presence by day, stunning glow by night.",
    features: ["3D raised letters", "Front-lit / back-lit", "Multi-color options", "Halo glow effect", "Stainless steel options"],
    icon: "🔤",
  },
  {
    title: "Digital Signage",
    desc: "Remote-controlled LED video walls and digital displays that update your content in real-time.",
    features: ["Remote content control", "HD / 4K resolution", "Live data feeds", "Video & animation support", "24/7 operation"],
    icon: "📺",
  },
  {
    title: "Large Format Printing",
    desc: "Large-format flex printing with weather-proof, UV-resistant inks. Fast turnaround for banners, hoardings, and backdrops.",
    features: ["Vibrant UV inks", "Large-format prints", "Hoarding-grade material", "Fast 48hr turnaround", "Custom sizes"],
    icon: "🖨️",
  },
  {
    title: "Installation & Maintenance",
    desc: "End-to-end installation by expert technicians plus Annual Maintenance Contracts across India.",
    features: ["Pan-India installation", "Permit handling", "Safety compliance", "Preventive maintenance", "Emergency repairs"],
    icon: "🔧",
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <div className="maroon-floral-bg py-24 md:py-32 text-center relative overflow-hidden">
        <motion.div 
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           className="relative z-10"
        >
          <p className="text-[#2DB34A] text-xs md:text-sm tracking-[0.5em] uppercase font-black mb-6">Expert Solutions</p>
          <h1 className="text-white font-serif text-5xl md:text-8xl font-bold leading-tight">
            Our <span className="text-[#2DB34A] italic">Services</span>
          </h1>
          <div className="flex items-center justify-center gap-6 mt-12">
            <div className="h-0.5 w-16 bg-[#2DB34A]/40" />
            <span className="text-[#2DB34A] text-2xl">✦</span>
            <div className="h-0.5 w-16 bg-[#2DB34A]/40" />
          </div>
        </motion.div>
      </div>

      <div className="floral-bg py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-12">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className={`bg-white rounded-3xl overflow-hidden shadow-2xl shadow-slate-200/50 flex flex-col md:flex-row border border-slate-100 ${i % 2 !== 0 ? "md:flex-row-reverse" : ""}`}
            >
              <div className="md:w-[40%] flex flex-col items-center justify-center bg-slate-900 shadow-inner p-12 md:p-20 text-center shrink-0 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 blur-2xl bg-gradient-to-br from-[#2DB34A] to-[#0099D4]" />
                <div className="relative text-7xl mb-8 transform group-hover:scale-110 transition-transform">{s.icon}</div>
                <h2 className="relative text-white font-serif font-bold text-3xl md:text-4xl leading-tight">{s.title}</h2>
              </div>
              
              <div className="flex-1 p-10 md:p-16 lg:p-20 flex flex-col justify-center">
                <p className="text-[#0099D4] text-[10px] tracking-[0.4em] uppercase font-black mb-6">Category {i + 1}</p>
                <h3 className="text-[#0A2733] font-serif font-bold mb-6 text-3xl md:text-4xl">{s.title}</h3>
                <p className="text-[#2A5566] text-lg leading-relaxed mb-10 font-light">{s.desc}</p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
                  {s.features.map((f) => (
                    <div key={f} className="flex items-center gap-4 text-sm text-[#0A2733] font-medium p-3 bg-slate-50 rounded-lg">
                      <div className="w-2 h-2 rounded-full bg-[#2DB34A] shrink-0" />
                      {f}
                    </div>
                  ))}
                </div>
                
                <Link href="/contact" className="self-start bg-[#0A2733] text-white px-10 py-4 rounded-full text-[10px] tracking-[0.3em] font-black uppercase hover:bg-[#2DB34A] transition-all hover:scale-105 active:scale-95 shadow-xl">
                  Get Started →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
