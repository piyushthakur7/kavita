"use client";
import GoldChevronStrip from "@/components/GoldChevronStrip";
import { motion } from "motion/react";
import { Send, Layout, Hammer, Ruler, Users } from "lucide-react";
import Link from "next/link";

export default function CustomOrdersPage() {
  return (
    <div className="min-h-screen bg-white">
      <GoldChevronStrip />
      
      {/* Hero */}
      <section className="maroon-floral-bg py-24 text-center px-4">
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           animate={{ opacity: 1, scale: 1 }}
        >
          <p className="text-[#2DB34A] text-xs tracking-[0.4em] uppercase font-black mb-6">Bespoke Creations</p>
          <h1 className="text-white text-5xl md:text-7xl font-serif font-bold leading-tight mb-8">
            Tailored To <span className="text-[#2DB34A] italic">Your Vision</span>
          </h1>
          <p className="text-white/70 max-w-2xl mx-auto text-lg font-light leading-relaxed">
            Need a specific size, material, or a completely original concept? We specialize in bulk orders for hotels, offices, and luxury residences.
          </p>
        </motion.div>
      </section>

      <GoldChevronStrip />

      {/* Process */}
      <section className="py-24 md:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-20">
            <h2 className="text-[#0A2733] font-serif text-4xl font-bold mb-4">The Artisan Workflow</h2>
            <p className="text-slate-500 max-w-xl mx-auto">From concept sketches to high-precision manufacturing and installation.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {[
              { icon: <Layout className="text-[#0099D4]" />, title: "Consultation", desc: "Share your blueprints or mood boards with our design team." },
              { icon: <Ruler className="text-[#0099D4]" />, title: "Prototyping", desc: "We create digital mockups and material samples for approval." },
              { icon: <Hammer className="text-[#0099D4]" />, title: "Craftsmanship", desc: "Our skilled artisans bring your bespoke pieces to life." },
              { icon: <Send className="text-[#0099D4]" />, title: "White-Glove", desc: "Specialized crating and international shipping to your doorstep." },
            ].map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-white rounded-2xl shadow-xl flex items-center justify-center mx-auto mb-6">
                  {step.icon}
                </div>
                <h3 className="text-[#0A2733] font-serif font-bold text-xl mb-3">{step.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <div className="bg-white rounded-[3rem] shadow-2xl border border-slate-100 overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-5 h-full">
              <div className="md:col-span-2 maroon-floral-bg p-12 text-white flex flex-col justify-between">
                <div>
                  <h2 className="text-3xl font-serif font-bold mb-6 italic">Request a Proposal</h2>
                  <p className="text-white/60 text-sm font-light mb-8">Tell us about your project. Our lead curator will get back to you within 24 hours.</p>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                      <Users size={18} />
                    </div>
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-widest text-[#2DB34A]">Dedicated Manager</p>
                      <p className="text-xs">For B2B & Bulk</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="md:col-span-3 p-12">
                <form className="space-y-6">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Full Name</label>
                      <input type="text" className="w-full border-b-2 border-slate-100 focus:border-[#2DB34A] py-2 outline-none text-sm transition-colors" placeholder="John Doe" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Email Address</label>
                      <input type="email" className="w-full border-b-2 border-slate-100 focus:border-[#2DB34A] py-2 outline-none text-sm transition-colors" placeholder="john@example.com" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Project Type</label>
                    <select className="w-full border-b-2 border-slate-100 focus:border-[#2DB34A] py-2 outline-none text-sm bg-transparent transition-colors">
                      <option>Hospitality (Hotel/Resort)</option>
                      <option>Corporate Office</option>
                      <option>Residential Development</option>
                      <option>Personal Bespoke Art</option>
                      <option>Exhibition/Gallery</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Estimated Quantity</label>
                    <input type="number" className="w-full border-b-2 border-slate-100 focus:border-[#2DB34A] py-2 outline-none text-sm transition-colors" placeholder="10+" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Message / Requirements</label>
                    <textarea rows={4} className="w-full border-2 border-slate-100 focus:border-[#2DB34A] p-4 rounded-xl outline-none text-sm transition-colors" placeholder="Tell us more about your artistic vision..." />
                  </div>
                  <button className="w-full bg-[#0A2733] text-white py-4 rounded-xl text-[10px] font-black uppercase tracking-[0.3em] hover:bg-[#2DB34A] transition-all">Submit Request</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Link */}
      <section className="py-24 text-center">
        <Link href="/shop" className="text-[#0099D4] text-xs font-black uppercase tracking-[0.2em] underline underline-offset-8">
          Back To Gallery Collection
        </Link>
      </section>
    </div>
  );
}
