"use client";
import { useState, useRef, useMemo } from "react";
import { Sparkles, Download, RefreshCw, Send, Image as LucideImage, MessageCircle, Maximize2, Layers, PenTool, Eraser } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import { getWhatsAppQuoteLink } from "@/lib/whatsapp";
import { generateAIDesign } from "@/lib/actions";

const DESIGN_MODES = [
  { id: "wall-art", label: "Wall Art", icon: LucideImage, prompt: "Fine art gallery style wall decor, artistic, textured." },
  { id: "signage", label: "Signage", icon: PenTool, prompt: "Professional architectural signage, 3D letters, modern branding." },
  { id: "mural", label: "Murals", icon: Layers, prompt: "Full wall mural art, immersive environment, detailed patterns." },
];

export default function AIDesignPage() {
  const [prompt, setPrompt] = useState("");
  const [brandName, setBrandName] = useState("");
  const [mode, setMode] = useState("wall-art");
  const [aspectRatio, setAspectRatio] = useState("1:1");
  const [loading, setLoading] = useState(false);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [showMockup, setShowMockup] = useState(false);

  const generateArt = async () => {
    if (!prompt && mode === "wall-art") {
      setError("Please describe the art you want to create");
      return;
    }
    if (!brandName && mode === "signage") {
      setError("Please enter your brand name for the signage");
      return;
    }

    setLoading(true);
    setError(null);
    setGeneratedImage(null);

    try {
      const result = await generateAIDesign(prompt, mode, brandName, aspectRatio);
      
      if (result.success && result.imageUrl) {
        setGeneratedImage(result.imageUrl);
      } else {
        setError(result.error || "The creative process encountered a block. Please refine your description and try again.");
      }
    } catch (err) {
      console.error(err);
      setError("A server error occurred. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const whatsappQuoteLink = useMemo(() => {
    return getWhatsAppQuoteLink(
      brandName || (prompt.slice(0, 20) + "... AI Art"),
      50000, 
      { 
        url: generatedImage || "",
        size: "Custom AI Dimensions"
      }
    );
  }, [brandName, prompt, generatedImage]);

  return (
    <div className="min-h-screen bg-[#F8FAFC] pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <p className="text-[#2DB34A] text-[10px] font-black tracking-[0.5em] uppercase mb-4">Intelligent Creation</p>
            <h1 className="text-[#0A2733] font-serif text-4xl md:text-6xl font-bold leading-tight">
              AI Art <span className="text-[#0099D4] italic">Laboratory</span>
            </h1>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex bg-white p-1.5 rounded-2xl shadow-sm border border-slate-100"
          >
            {DESIGN_MODES.map((m) => (
              <button
                key={m.id}
                onClick={() => setMode(m.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${
                  mode === m.id 
                    ? "bg-[#0A2733] text-white shadow-lg" 
                    : "text-slate-400 hover:text-[#0A2733] hover:bg-slate-50"
                }`}
              >
                <m.icon size={14} />
                {m.label}
              </button>
            ))}
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Controls: 4 Columns */}
          <div className="lg:col-span-4 space-y-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white p-8 rounded-[2.5rem] shadow-xl shadow-slate-200/40 border border-slate-100"
            >
              <div className="space-y-6">
                {mode === "signage" && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                  >
                    <label className="block text-[10px] font-black uppercase tracking-widest text-[#0A2733]/60 mb-2">Subject Name</label>
                    <input 
                      type="text" 
                      value={brandName}
                      onChange={(e) => setBrandName(e.target.value)}
                      placeholder="e.g. LUXE STUDIO"
                      className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#2DB34A]/20 transition-all font-serif italic text-lg"
                    />
                  </motion.div>
                )}

                <div>
                  <label className="block text-[10px] font-black uppercase tracking-widest text-[#0A2733]/60 mb-2">
                    {mode === "signage" ? "Design Style & Details" : "Describe Your Masterpiece"}
                  </label>
                  <textarea 
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    placeholder={mode === "signage" ? "Neon glow, matte black mount, industrial feel..." : "Abstract oil painting of a futuristic city with golden hour lighting, deep blues and glowing oranges..."}
                    className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#2DB34A]/20 transition-all text-sm resize-none h-40 font-light leading-relaxed"
                  />
                  <p className="mt-3 text-[9px] text-slate-400 font-medium uppercase tracking-wider">Tip: Mention colors, textures, and lighting for better results.</p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-black uppercase tracking-widest text-[#0A2733]/60 mb-2">Aspect Ratio</label>
                    <select 
                      value={aspectRatio}
                      onChange={(e) => setAspectRatio(e.target.value)}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-[10px] font-bold uppercase tracking-widest appearance-none cursor-pointer"
                    >
                      <option value="1:1">Square (1:1)</option>
                      <option value="4:3">classic (4:3)</option>
                      <option value="16:9">Wide (16:9)</option>
                      <option value="3:4">Portrait (3:4)</option>
                    </select>
                  </div>
                  <div className="flex items-end">
                    <button 
                      onClick={() => { setPrompt(""); setBrandName(""); }}
                      className="w-full py-3 px-4 border border-slate-100 text-slate-300 hover:text-red-400 hover:border-red-100 rounded-xl transition-all flex items-center justify-center gap-2"
                    >
                      <Eraser size={14} />
                      <span className="text-[10px] font-bold uppercase tracking-widest">Clear</span>
                    </button>
                  </div>
                </div>

                <button 
                  onClick={generateArt}
                  disabled={loading}
                  className="w-full bg-[#0A2733] text-white py-5 rounded-2xl font-black text-xs tracking-[0.2em] uppercase flex items-center justify-center gap-3 hover:bg-[#2DB34A] transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-2xl shadow-slate-200 group"
                >
                  {loading ? (
                    <>
                      <RefreshCw className="animate-spin" size={18} />
                      Manifesting...
                    </>
                  ) : (
                    <>
                      <Sparkles size={18} className="group-hover:rotate-12 transition-transform" />
                      Create Masterpiece
                    </>
                  )}
                </button>

                {error && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-red-50 text-red-600 text-[10px] font-bold uppercase tracking-wider rounded-xl border border-red-100 text-center"
                  >
                    {error}
                  </motion.div>
                )}
              </div>
            </motion.div>

            <div className="bg-[#0A2733] p-8 rounded-[2.5rem] text-white">
              <h3 className="text-xl font-serif font-bold mb-4 italic">Artisan's Note</h3>
              <p className="text-white/60 text-xs leading-relaxed font-light mb-6">
                Our AI model is trained on thousands of high-end architectural and artistic references. 
                Use precise descriptors like "minimalist", "brutalist", or "avant-garde" to guide the vision.
              </p>
              <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-[#2DB34A]">
                <div className="w-2 h-2 rounded-full bg-[#2DB34A] animate-pulse" />
                System Balanced & Ready
              </div>
            </div>
          </div>

          {/* Preview: 8 Columns */}
          <div className="lg:col-span-8">
            <div className="sticky top-32">
              <div className="relative group overflow-hidden rounded-[3rem] shadow-2xl bg-white border-[1rem] border-white min-h-[600px] flex items-center justify-center">
                
                {/* Visualizer Frame */}
                {showMockup ? (
                  <div className="absolute inset-0 bg-[#E2E8F0]">
                    {/* Mockup room background */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-300 to-slate-100" />
                    <div className="absolute bottom-0 w-full h-1/3 bg-slate-200" style={{ transform: 'skewY(-2deg)' }} />
                    <div className="absolute inset-0 flex items-center justify-center p-20">
                       {generatedImage && (
                         <div className="relative w-full max-w-lg aspect-square shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] border-[1.5rem] border-white transform hover:scale-105 transition-transform duration-700">
                           <Image 
                            src={generatedImage} 
                            alt="Mockup view" 
                            fill 
                            className="object-cover" 
                            referrerPolicy="no-referrer"
                           />
                         </div>
                       )}
                    </div>
                    <div className="absolute top-8 left-8">
                      <span className="px-4 py-2 bg-black/10 backdrop-blur rounded-full text-[10px] font-bold text-slate-600 uppercase tracking-widest">Sanctuary Visualization</span>
                    </div>
                  </div>
                ) : (
                  <>
                    <AnimatePresence mode="wait">
                      {generatedImage ? (
                        <motion.div
                          key="result"
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 1.05 }}
                          className="absolute inset-0 bg-slate-50 flex items-center justify-center p-1"
                        >
                          <Image 
                            src={generatedImage} 
                            alt="AI Art Piece" 
                            fill 
                            className="object-contain"
                            referrerPolicy="no-referrer"
                            priority
                          />
                        </motion.div>
                      ) : (
                        <motion.div
                          key="placeholder"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="text-center p-12"
                        >
                          <div className="w-24 h-24 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-8 border border-slate-100">
                            <LucideImage className="text-slate-200" size={40} />
                          </div>
                          <h4 className="text-[#0A2733] font-serif text-2xl font-bold mb-2">Awaiting Vision</h4>
                          <p className="text-slate-400 text-xs tracking-[0.2em] font-light uppercase max-w-xs mx-auto leading-relaxed">
                            Your custom artistic projection will materialize in this frame.
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </>
                )}

                {/* Overlays & Status */}
                {loading && (
                  <div className="absolute inset-0 bg-white/90 backdrop-blur-md z-30 flex flex-col items-center justify-center">
                    <motion.div
                      animate={{ rotate: 360, scale: [1, 1.1, 1] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                      className="mb-8"
                    >
                      <div className="relative">
                        <Sparkles size={64} className="text-[#0099D4]" />
                        <motion.div 
                          animate={{ opacity: [0, 1, 0], scale: [0.8, 1.2, 0.8] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="absolute -top-2 -right-2 p-2 bg-[#2DB34A] rounded-full"
                        />
                      </div>
                    </motion.div>
                    <p className="text-[12px] tracking-[0.5em] uppercase font-black text-[#0A2733] animate-pulse text-center">
                      Analyzing Aesthetics<br/>
                      <span className="text-[#2DB34A]">Refining Pixels...</span>
                    </p>
                  </div>
                )}

                {/* Bottom Actions */}
                {generatedImage && !loading && (
                  <motion.div 
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="absolute bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-4 z-40"
                  >
                    <button 
                      onClick={() => setShowMockup(!showMockup)}
                      className="px-8 py-4 bg-white text-[#0A2733] rounded-2xl shadow-2xl border border-slate-100 flex items-center gap-3 text-[10px] font-black uppercase tracking-widest hover:bg-[#F8FAFC] transition-all"
                    >
                      <Maximize2 size={16} />
                      {showMockup ? "Hide Mockup" : "Live Preview"}
                    </button>
                    
                    <a 
                      href={whatsappQuoteLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-8 py-4 bg-[#2DB34A] text-white rounded-2xl shadow-2xl flex items-center gap-3 text-[10px] font-black uppercase tracking-widest hover:bg-[#1F8A37] transition-all"
                    >
                      <MessageCircle size={16} />
                      Get Quote
                    </a>

                    <button 
                      onClick={() => {
                        const link = document.createElement('a');
                        link.href = generatedImage;
                        link.download = `brand-easy-art-${Date.now()}.png`;
                        link.click();
                      }}
                      className="p-4 bg-[#0A2733] text-white rounded-2xl shadow-2xl hover:bg-[#1A3A4A] transition-all"
                    >
                      <Download size={18} />
                    </button>
                  </motion.div>
                )}
              </div>

              {/* Inspiration Tags */}
              {!generatedImage && !loading && (
                <div className="mt-12 flex flex-wrap justify-center gap-4">
                  {["Abstract", "Minimalist", "Industrial Neon", "Golden Hour", "Textured Canvas", "Brutalist"].map(tag => (
                    <button 
                      key={tag}
                      onClick={() => setPrompt(prev => prev ? `${prev}, ${tag}` : tag)}
                      className="px-5 py-2.5 rounded-full border border-slate-200 text-slate-500 text-[10px] font-bold uppercase tracking-widest hover:bg-white hover:text-[#0099D4] hover:border-[#0099D4] transition-all"
                    >
                      + {tag}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
