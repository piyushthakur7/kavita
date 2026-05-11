"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import { ChevronRight, ChevronLeft, Award, Palette, Factory } from "lucide-react";
import { useState, useEffect, useCallback } from "react";

const heroSlides = [
  {
    badge: "Launch Offer",
    title: "Grand Opening Special",
    highlight: "20% OFF",
    subtitle: "Sitewide",
    code: "BRAND20",
    image: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?auto=format&fit=crop&q=80&w=900",
    bg: "from-[#0A2733] to-[#0077A8]",
  },
  {
    badge: "New Arrivals",
    title: "Custom Banners &",
    highlight: "Display Stands",
    subtitle: "Starting ₹1,299",
    code: null,
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=900",
    bg: "from-[#1a1a2e] to-[#16213e]",
  },
  {
    badge: "Best Sellers",
    title: "Premium Table Covers",
    highlight: "& Event Setups",
    subtitle: "Free Design Proofs",
    code: null,
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=900",
    bg: "from-[#0d3b4a] to-[#0099D4]",
  },
];

const sidePromos = [
  {
    title: "Premium\nBusiness Cards",
    image: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?auto=format&fit=crop&q=80&w=400",
    link: "/products/marketing-01",
  },
  {
    title: "Custom\nFeather Flags",
    image: "https://images.unsplash.com/photo-1569974507005-6dc61f97fb5c?auto=format&fit=crop&q=80&w=400",
    link: "/products/flag-01",
  },
];

const trustBadges = [
  { icon: Award, label: "Premium Quality", highlight: "Products" },
  { icon: Palette, label: "Free Design", highlight: "Proofs" },
  { icon: Factory, label: "State-of-the-Art", highlight: "Manufacturing" },
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentPromo, setCurrentPromo] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  }, []);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPromo((prev) => (prev + 1) % sidePromos.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const slide = heroSlides[currentSlide];
  const promo = sidePromos[currentPromo];

  return (
    <section className="bg-[#f5f5f5] pt-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-6">
        {/* Main Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-4">
          
          {/* Main Slider */}
          <div className="relative rounded-2xl overflow-hidden h-[320px] md:h-[420px] group">
            {/* Background Image */}
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="absolute inset-0"
            >
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                className="object-cover"
                priority
              />
              <div className={`absolute inset-0 bg-gradient-to-r ${slide.bg} opacity-70`} />
            </motion.div>

            {/* Slide Content */}
            <div className="relative z-10 h-full flex items-center px-8 md:px-14">
              <motion.div
                key={`content-${currentSlide}`}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <span className="inline-block bg-[#2DB34A] text-white text-[9px] font-black uppercase tracking-[0.2em] px-4 py-1.5 rounded-full mb-4 shadow-lg">
                  {slide.badge}
                </span>
                <h1 className="text-white font-serif text-3xl md:text-5xl font-bold leading-tight mb-1">
                  {slide.title}
                </h1>
                <p className="text-white text-4xl md:text-6xl font-black mb-1">
                  {slide.highlight}
                </p>
                <p className="text-white/80 text-lg md:text-xl font-light mb-6">
                  {slide.subtitle}
                </p>

                <div className="flex items-center gap-3 flex-wrap">
                  {slide.code && (
                    <div className="bg-white/10 backdrop-blur border border-white/20 px-5 py-3 rounded-xl">
                      <span className="text-white/60 text-xs">Code: </span>
                      <span className="text-white font-black tracking-wider">{slide.code}</span>
                    </div>
                  )}
                  <Link
                    href="/shop"
                    className="bg-[#2DB34A] hover:bg-[#1F8A37] text-white px-8 py-3 rounded-xl text-xs font-black uppercase tracking-[0.15em] transition-all hover:scale-105 active:scale-95 shadow-lg flex items-center gap-2"
                  >
                    Shop Now
                    <ChevronRight size={14} />
                  </Link>
                </div>
              </motion.div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/20 backdrop-blur rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white/40 z-20"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/20 backdrop-blur rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white/40 z-20"
            >
              <ChevronRight size={18} />
            </button>

            {/* Dots */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
              {heroSlides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentSlide(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    currentSlide === i ? "w-8 bg-white" : "w-2 bg-white/40"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Side Promo Card */}
          <div className="hidden lg:block relative rounded-2xl overflow-hidden h-[420px] group cursor-pointer">
            <Link href={promo.link}>
              <motion.div
                key={currentPromo}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <Image
                  src={promo.image}
                  alt={promo.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
              </motion.div>
              <div className="relative z-10 h-full flex flex-col justify-end p-6">
                <p className="text-white font-serif text-xl font-bold leading-tight whitespace-pre-line mb-4">
                  {promo.title}
                </p>
                <span className="inline-block bg-[#0099D4] hover:bg-[#0077A8] text-white text-[10px] font-black uppercase tracking-[0.15em] px-5 py-2.5 rounded-lg transition-colors w-fit shadow-lg">
                  Shop Now
                </span>
              </div>
            </Link>
          </div>
        </div>

        {/* Trust Strip */}
        <div className="mt-6 bg-white rounded-2xl border border-slate-100 shadow-sm px-6 py-5 flex flex-wrap items-center justify-center gap-8 md:gap-16">
          {trustBadges.map((badge) => (
            <div key={badge.label} className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#E4F7E9] flex items-center justify-center">
                <badge.icon size={20} className="text-[#2DB34A]" />
              </div>
              <div>
                <span className="text-[#2DB34A] font-bold text-sm">{badge.label}</span>{" "}
                <span className="text-[#0A2733] font-bold text-sm">{badge.highlight}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
