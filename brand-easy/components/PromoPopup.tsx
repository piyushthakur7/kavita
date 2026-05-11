"use client";
import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";

export default function PromoPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    // Check if popup was already dismissed in this session
    const dismissed = sessionStorage.getItem("promo_popup_dismissed");
    if (dismissed) return;

    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 3000); // Show after 3 seconds

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem("promo_popup_dismissed", "true");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
    sessionStorage.setItem("promo_popup_dismissed", "true");
    setTimeout(() => setIsOpen(false), 2500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[9999]"
          />

          {/* Popup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 40 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed inset-0 z-[10000] flex items-center justify-center p-4 pointer-events-none"
          >
            <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden max-w-[820px] w-full flex flex-col md:flex-row pointer-events-auto">
              
              {/* Close Button */}
              <button
                onClick={handleClose}
                className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center transition-colors group"
                aria-label="Close popup"
              >
                <X size={16} className="text-slate-500 group-hover:text-slate-800 transition-colors" />
              </button>

              {/* Left Image Section */}
              <div className="relative w-full md:w-[45%] h-56 md:h-auto min-h-[280px] shrink-0 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1591115765373-5207764f72e7?auto=format&fit=crop&q=80&w=600"
                  alt="Brand Easy Products — Banners, Flags & Displays"
                  fill
                  className="object-cover"
                  priority
                />
                {/* Overlay Labels */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5 space-y-2">
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-white/95 backdrop-blur text-[#0A2733] text-[9px] font-black uppercase tracking-widest px-3 py-1.5 rounded-md shadow-sm">
                      Custom Banners
                    </span>
                    <span className="bg-white/95 backdrop-blur text-[#0A2733] text-[9px] font-black uppercase tracking-widest px-3 py-1.5 rounded-md shadow-sm">
                      Display Stands
                    </span>
                    <span className="bg-white/95 backdrop-blur text-[#0A2733] text-[9px] font-black uppercase tracking-widest px-3 py-1.5 rounded-md shadow-sm">
                      Table Covers
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Content Section */}
              <div className="flex-1 p-8 md:p-10 flex flex-col justify-center">
                {!submitted ? (
                  <>
                    <h2 className="text-3xl md:text-4xl font-black text-[#0A2733] leading-tight mb-1">
                      GET{" "}
                      <span className="text-[#0099D4]">20% OFF</span>
                      <br />
                      <span className="text-[#2DB34A]">INSTANTLY</span>
                    </h2>
                    <p className="text-slate-400 text-sm mb-6 mt-2">
                      Subscribe and get an exclusive discount on your first order.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-3">
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        className="w-full px-4 py-3.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#0099D4]/30 focus:border-[#0099D4] transition-all placeholder:text-slate-400"
                      />

                      <div className="flex items-center border border-slate-200 rounded-xl overflow-hidden focus-within:ring-2 focus-within:ring-[#0099D4]/30 focus-within:border-[#0099D4] transition-all">
                        <div className="flex items-center gap-1.5 px-3 py-3.5 border-r border-slate-200 bg-slate-50 shrink-0">
                          <span className="text-lg leading-none">🇮🇳</span>
                          <span className="text-xs text-slate-500 font-medium">+91</span>
                        </div>
                        <input
                          type="tel"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="Phone Number (optional)"
                          className="flex-1 px-3 py-3.5 text-sm focus:outline-none placeholder:text-slate-400"
                        />
                      </div>

                      <p className="text-[10px] text-slate-400 leading-relaxed">
                        By subscribing, you agree to receive marketing emails and texts. You can 
                        opt out anytime. See our{" "}
                        <a href="/privacy" className="underline text-slate-500 hover:text-[#0099D4]">Privacy Policy</a>
                        {" "}&{" "}
                        <a href="/terms" className="underline text-slate-500 hover:text-[#0099D4]">Terms</a>
                        , for more info.
                      </p>

                      <button
                        type="submit"
                        className="w-full bg-[#0099D4] hover:bg-[#0077A8] text-white py-4 rounded-xl text-sm font-black uppercase tracking-[0.2em] transition-all hover:scale-[1.02] active:scale-95 shadow-lg shadow-[#0099D4]/20 mt-2"
                      >
                        🔓 Unlock Savings
                      </button>
                    </form>
                  </>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-8"
                  >
                    <div className="text-5xl mb-4">🎉</div>
                    <h3 className="text-2xl font-black text-[#0A2733] mb-2">You&apos;re In!</h3>
                    <p className="text-slate-500 text-sm">
                      Check your inbox for your <span className="font-bold text-[#2DB34A]">20% discount code</span>.
                    </p>
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
