"use client";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0A2733] text-white py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-serif font-black mb-8">Brand Easy</h3>
            <p className="text-white/60 text-lg max-w-md leading-relaxed mb-8">
              We provide customized branding and signage for business shops. High-quality banners, signs, and marketing materials.
            </p>
            <div className="space-y-2 mb-8">
              <p className="text-white/40 text-xs">Ground Floor Darshan Apartment, Katargam Main Rd, Surat</p>
              <p className="text-white/40 text-xs">hello@mediaconcept.in</p>
            </div>
            <div className="flex gap-6">
               {/* Social placeholders */}
               <div className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 transition-colors" />
               <div className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 transition-colors" />
               <div className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 transition-colors" />
            </div>
          </div>
          
          <div>
            <h4 className="text-[10px] font-black tracking-widest uppercase mb-8">Shop</h4>
            <ul className="space-y-4">
              <li><Link href="/shop" className="text-white/60 hover:text-[#2DB34A] transition-colors">Everything</Link></li>
              <li><Link href="/shop" className="text-white/60 hover:text-[#2DB34A] transition-colors">New Arrivals</Link></li>
              <li><Link href="/shop" className="text-white/60 hover:text-[#2DB34A] transition-colors">Best Sellers</Link></li>
            </ul>
          </div>

          <div>
             <h4 className="text-[10px] font-black tracking-widest uppercase mb-8">Company</h4>
             <ul className="space-y-4">
               <li><Link href="/about" className="text-white/60 hover:text-[#2DB34A] transition-colors">Our Story</Link></li>
               <li><Link href="/blog" className="text-white/60 hover:text-[#2DB34A] transition-colors">Art Journal</Link></li>
               <li><Link href="/contact" className="text-white/60 hover:text-[#2DB34A] transition-colors">Contact Us</Link></li>
             </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between gap-6 text-[10px] font-black tracking-widest uppercase text-white/40">
           <p>© 2026 Brand Easy. All Rights Reserved.</p>
           <div className="flex gap-8">
             <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
             <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
           </div>
        </div>
      </div>
    </footer>
  );
}
