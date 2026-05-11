"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Ensure the preloader shows for at least 1.5 seconds for branding
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            transition: { duration: 0.8, ease: "easeInOut" }
          }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0077A8] text-white"
          style={{
            background: "radial-gradient(circle at center, #0099D4 0%, #0077A8 50%, #005A80 100%)",
          }}
        >
          {/* Decorative background elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-white/10 blur-[100px]" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-[#2DB34A]/20 blur-[100px]" />
          </div>

          <div className="relative z-10 flex flex-col items-center">
            {/* Animated Logo/Text */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex flex-col items-center"
            >
              <h1 className="text-4xl md:text-6xl font-serif tracking-widest mb-2 text-white">
                BRAND EASY
              </h1>
              <motion.div 
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.5, duration: 1, ease: "easeInOut" }}
                className="h-[1px] w-32 bg-[#2DB34A] origin-center"
              />
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="mt-4 text-sm md:text-base font-sans tracking-[0.3em] text-white/70 uppercase"
              >
                Art & Luxury Gallery
              </motion.p>
            </motion.div>

            {/* Loading Indicator */}
            <div className="mt-12 relative w-48 h-[2px] bg-white/10 overflow-hidden rounded-full">
              <motion.div
                initial={{ left: "-100%" }}
                animate={{ left: "100%" }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 1.5, 
                  ease: "easeInOut" 
                }}
                className="absolute top-0 bottom-0 w-1/2 bg-gradient-to-r from-transparent via-[#2DB34A] to-transparent"
              />
            </div>
          </div>

          {/* Bottom text */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="absolute bottom-10 text-[10px] tracking-[0.2em] text-white/40 uppercase"
          >
            Elevating Your Spaces
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
