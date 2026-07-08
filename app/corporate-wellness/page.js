"use client";
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { 
  Palette, Eye, Heart, Laugh, ArrowRight, Phone, Mail, MapPin, Clock, Check
} from 'lucide-react';
import PageBanner from '@/components/PageBanner';
import { useToast } from '@/hooks/use-toast';
import { contact } from '@/lib/mock';

// Trust counter component that counts to 9650 dynamically
const TrustCounter = () => {
  const ref = useRef(null);
  const [n, setN] = useState(0);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const o = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setInView(true)),
      { threshold: 0.1 }
    );
    o.observe(ref.current);
    return () => o.disconnect();
  }, []);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const end = 20;
    const duration = 2000;
    const startTs = performance.now();
    const step = (ts) => {
      const p = Math.min((ts - startTs) / duration, 1);
      // Easing curve (easeOutCubic)
      setN(Math.floor(start + (end - start) * (1 - Math.pow(1 - p, 3))));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView]);

  return (
    <div ref={ref} className="py-12 bg-[#fafafa] border-b border-gray-100 text-center relative select-none">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="inline-flex flex-col items-center justify-center">
          <div className="font-serif-display text-[54px] sm:text-[68px] font-bold text-[#1c1a1f] flex items-center justify-center leading-none">
            <span>{n.toLocaleString()}</span>
            <span className="text-[#c5a48e] font-light ml-1">+</span>
          </div>
          <p className="mt-3 text-[13px] uppercase tracking-[0.25em] font-semibold text-[#7e7a86] max-w-md mx-auto">
            Corporates trust us
          </p>
        </div>
      </div>
    </div>
  );
};

// Testimonials slider showing Sohal, Aditya, and Manvi reviews
const TestimonialsSection = () => {
  const list = [
    {
      name: 'Priya Desai',
      role: 'HR Professional',
      quote: "Our corporate wellness program was completely transformed by Dr. Kavita. She brought a compassionate yet practical approach to mental health that truly resonated with our entire team."
    }
  ];

  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % list.length), 8500);
    return () => clearInterval(t);
  }, [list.length]);

  return (
    <section className="py-20 lg:py-24 bg-[#f5f4ef] border-y border-gray-200 relative overflow-hidden select-none">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 text-center">
        <p className="uppercase tracking-[0.28em] text-[11px] font-semibold text-[#7e7a86] mb-3">
          WHAT HAPPY CLIENTS SAY
        </p>
        <h2 className="font-serif-display text-[42px] sm:text-[54px] lg:text-[60px] leading-tight text-[#1c1a1f] font-medium">
          Testimonials
        </h2>

        <div className="relative max-w-4xl mx-auto min-h-[180px] mt-12 flex flex-col justify-center">
          <p className="text-[19px] sm:text-[21px] leading-[1.65] font-serif-display italic text-gray-700 px-6 sm:px-12 transition-all duration-500">
            “{list[idx].quote}”
          </p>
          <div className="mt-8">
            <h4 className="font-serif-display text-xl font-bold text-gray-900">{list[idx].name}</h4>
          </div>
        </div>

        <div className="mt-10 flex justify-center gap-3">
          {list.map((_, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                i === idx ? 'bg-fuchsia-800 w-8' : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

// Contact form component for Corporate wellness queries
const ContactFormSection = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: '', email: '', message: '', agree: false });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast({ title: 'Please complete all required fields' });
      return;
    }
    if (!form.agree) {
      toast({ title: 'Please accept the privacy policy' });
      return;
    }
    // Mock save to local storage
    const current = JSON.parse(localStorage.getItem('kk_corporate_contact') || '[]');
    current.push({ ...form, at: new Date().toISOString() });
    localStorage.setItem('kk_corporate_contact', JSON.stringify(current));

    // Trigger mailto email sending
    const subjectLine = `New Corporate Wellness inquiry from ${form.name}`;
    const bodyText = `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`;
    window.location.href = `mailto:kavitakabira1@gmail.com?subject=${encodeURIComponent(subjectLine)}&body=${encodeURIComponent(bodyText)}`;

    toast({ title: 'Email Client Opened', description: 'Redirecting to send your message to kavitakabira1@gmail.com.' });
    setForm({ name: '', email: '', message: '', agree: false });
  };

  return (
    <section className="py-20 lg:py-24 bg-white border-t border-gray-100">
      <div className="max-w-[800px] mx-auto px-6 text-center">
        <p className="uppercase tracking-[0.28em] text-[11px] font-semibold text-[#7e7a86] mb-3">
          If you are having problems
        </p>
        <h2 className="font-serif-display text-[40px] sm:text-[48px] leading-tight text-[#1c1a1f] font-medium">
          Contact Us Immediately
        </h2>
        <p className="mt-4 text-[15px] text-[#5b5670] max-w-xl mx-auto leading-relaxed">
          If you are having problems needing help from us, do not hesitate to contact us whenever you need us we are here to help.
        </p>

        <form onSubmit={handleSubmit} className="mt-12 text-left space-y-6 bg-[#fcfbf9] border border-gray-100 rounded-3xl p-8 sm:p-10 shadow-sm">
          <div>
            <label className="text-[12.5px] uppercase tracking-[0.22em] font-semibold text-[#7e7a86]">Your Name *</label>
            <input 
              value={form.name} 
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full mt-2 px-4 py-3 bg-white rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-fuchsia-400 text-[15px] transition-all" 
              placeholder="Full Name"
              required 
            />
          </div>
          <div>
            <label className="text-[12.5px] uppercase tracking-[0.22em] font-semibold text-[#7e7a86]">Your E-mail *</label>
            <input 
              type="email"
              value={form.email} 
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full mt-2 px-4 py-3 bg-white rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-fuchsia-400 text-[15px] transition-all" 
              placeholder="email@example.com"
              required 
            />
          </div>
          <div>
            <label className="text-[12.5px] uppercase tracking-[0.22em] font-semibold text-[#7e7a86]">Your Message *</label>
            <textarea 
              rows={5}
              value={form.message} 
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full mt-2 px-4 py-3 bg-white rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-fuchsia-400 text-[15px] transition-all" 
              placeholder="How can we help your organization?"
              required 
            />
          </div>
          <label className="flex items-start gap-3 text-[13px] text-[#5b5670] select-none cursor-pointer">
            <input 
              type="checkbox" 
              className="mt-1 accent-fuchsia-700" 
              checked={form.agree}
              onChange={(e) => setForm({ ...form, agree: e.target.checked })} 
            />
            <span>I agree that my submitted data is being collected and stored.</span>
          </label>
          <button type="submit" className="w-full py-4 bg-[#050302] hover:bg-[#c5a48e] text-white text-[13px] uppercase tracking-[0.2em] font-semibold transition-all duration-300 rounded-[2px]">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default function CorporatePage() {
  return (
    <>
      <PageBanner
        title={<><span>Corporate</span> <span className="italic font-light">Wellness</span></>}
        subtitle="Home"
        crumbs={[{ label: 'Corporate Wellness' }]}
        image="/images/44D7C705-DC0E-44F8-BBFE-CCD95A51D89D.jpeg"
      />

      {/* Stats Counter Section */}
      <TrustCounter />

      {/* Intro / About Section */}
      <section className="py-20 lg:py-28 bg-white select-none">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6">
              <p className="uppercase tracking-[0.28em] text-[11px] font-semibold text-[#7e7a86] mb-3">
                WELCOME
              </p>
              <h2 className="font-serif-display text-[40px] sm:text-[50px] lg:text-[56px] leading-[1.1] text-[#1c1a1f] font-medium">
                Welcome to Kavita Kabira <span className="italic font-light text-[#c5a48e]">Corporate Wellness</span>
              </h2>
              <h3 className="text-[20px] font-medium text-[#4b4753] mt-5 leading-normal">
                Because burnout is not a character flaw.
              </h3>
              <p className="mt-6 text-[15.5px] leading-relaxed text-[#5b5670]">
                It is a nervous system in crisis. For too long, corporate wellness has meant generic yoga classes and meditation apps that employees never open. Real wellness requires psychological safety.
              </p>
              <p className="mt-4 text-[15.5px] leading-relaxed text-[#5b5670]">
                We offer deep, somatic-informed interventions that give your leaders and teams the actual tools to regulate stress, navigate conflict, and return to their baseline.
              </p>
            </div>

            <div className="lg:col-span-6">
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  { title: 'Collaborative Art Therapy', icon: Palette, desc: 'Process workplace anxiety and foster authentic team cohesion through guided creative expression—no art skills required.' },
                  { title: 'Nervous System Literacy', icon: Heart, desc: 'Teach your executives how to map their own stress responses and down-regulate their nervous systems in real time.' },
                  { title: 'Trauma-Informed Leadership', icon: Eye, desc: 'Equip managers with the tools to lead teams without triggering defensiveness or compounding burnout.' },
                  { title: 'Conflict & Boundary Mapping', icon: Laugh, desc: 'Move beyond "communication skills" and look at the psychological boundaries that make healthy conflict possible.' }
                ].map((w, i) => {
                  const Icon = w.icon;
                  return (
                    <div key={i} className="bg-[#fcfbf9] border border-gray-100 rounded-3xl p-7 hover:shadow-[0_20px_50px_rgba(0,0,0,0.04)] hover:-translate-y-0.5 transition-all duration-300 flex flex-col">
                      <div className="w-12 h-12 rounded-2xl bg-fuchsia-50 flex items-center justify-center mb-5 shrink-0">
                        <Icon className="text-fuchsia-700" size={22} />
                      </div>
                      <h4 className="font-serif-display text-[20px] text-[#1c1a1f] font-semibold mb-2">{w.title}</h4>
                      <p className="text-[13.5px] text-[#5b5670] leading-relaxed flex-1">{w.desc}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Top Psychological Services */}
      <section className="py-20 lg:py-28 bg-[#fbfbf9] border-t border-gray-50 select-none">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="uppercase tracking-[0.28em] text-[11px] font-semibold text-[#7e7a86] mb-3">
              WE PROVIDE
            </p>
            <h2 className="font-serif-display text-[42px] sm:text-[54px] lg:text-[60px] leading-tight text-[#1c1a1f] font-medium">
              Top Psychological <span className="italic font-light">Services</span>
            </h2>
            <p className="mt-5 text-[15.5px] leading-relaxed text-[#4b4753]">
              At Dr. Kavita Kabira Wellness Clinic, we focus on promoting mental well-being in the workplace. Our goal is to help your team overcome challenges and create a healthier, more productive work environment, led by the Best Wellness Coach for Executives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
            {[
              {
                id: 'impulsivity',
                title: 'Chronic Impulsivity',
                desc: 'Being angry will make things worse, be calm in any situation to be more smart, be a smart.',
                image: '/images/chronic_impulsivity_ai.png'
              },
              {
                id: 'career',
                title: 'Career Counseling',
                desc: 'Career counseling is a type of advice-giving and support provided by career counselors to their clients, to help',
                image: '/images/career_counseling_ai.png'
              },
              {
                id: 'young-adult',
                title: 'Young Adult Intensive',
                desc: 'Adolescents are the age when they are forming their thoughts, so it is difficult to understand themselves.',
                image: '/images/young_adult_intensive_ai.png'
              }
            ].map((s) => (
              <article key={s.id} className="group bg-white rounded-[32px] overflow-hidden border border-gray-100 hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] transition-all duration-500 flex flex-col hover:-translate-y-1 transform">
                <div className="h-[250px] overflow-hidden relative">
                  <img src={s.image} alt={s.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out" />
                </div>
                <div className="p-8 flex-1 flex flex-col items-center text-center">
                  <h3 className="font-serif-display text-[23px] text-[#1c1a1f] mb-3 font-semibold group-hover:text-fuchsia-800 transition-colors duration-300">{s.title}</h3>
                  <p className="text-[14px] text-[#5b5670] leading-relaxed mb-6 flex-1">{s.desc}</p>
                  <a 
                    href="https://wa.me/919971880693" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.2em] text-[#1c1a1f] hover:text-[#c5a48e] transition-colors"
                  >
                    Click here <ArrowRight size={14} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Choose Us Section */}
      <section className="py-20 lg:py-28 bg-white border-t border-gray-100 select-none">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-12 items-start mb-16">
            <div className="lg:col-span-5 lg:sticky lg:top-24">
              <p className="uppercase tracking-[0.28em] text-[11px] font-semibold text-[#7e7a86] mb-3">Choose Us</p>
              <h2 className="font-serif-display text-[40px] sm:text-[50px] lg:text-[56px] leading-[1.1] text-[#1c1a1f] font-medium">
                Go Beyond Just Employee Wellness & <span className="italic font-light text-[#c5a48e]">Experience The Difference</span>
              </h2>
              <p className="mt-6 text-[15.5px] leading-relaxed text-[#4b4753]">
                At Kavita Kabira Wellness Clinic, we are always prepared to face any challenge and help you achieve mental well-being. Our commitment is to provide personalized care and resolve your concerns with compassion and expertise.
              </p>
              <div className="mt-8">
                <a href="https://wa.me/919971880693" target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-3.5 bg-[#050302] hover:bg-[#c5a48e] text-white text-[12px] uppercase tracking-[0.2em] font-semibold transition-all duration-300 rounded-[2px]">
                  CONTACT US
                </a>
              </div>
            </div>

            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
              {[
                { title: 'Evidence-Based & Trauma-Informed', desc: 'No toxic positivity. We use clinical frameworks that respect the complexity of human psychology.' },
                { title: 'Culturally Grounded', desc: 'We understand the specific pressures of the Indian corporate landscape—from hierarchy dynamics to family obligations.' },
                { title: 'Somatic Focus', desc: 'We don’t just talk about stress. We teach the body how to process it using nervous-system regulation techniques.' },
                { title: 'Sustainable Change', desc: 'We provide tools that outlast the workshop, empowering employees to manage their own emotional baseline long-term.' }
              ].map((f, i) => (
                <div key={i} className="p-8 border border-gray-100 rounded-3xl bg-[#fafafa] hover:bg-white hover:shadow-[0_15px_40px_rgba(0,0,0,0.02)] transition-all duration-300">
                  <h4 className="font-serif-display text-[20px] text-[#1c1a1f] font-semibold mb-3">{f.title}</h4>
                  <p className="text-[14px] text-[#5b5670] leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialsSection />

      {/* Online Portal / Home Therapy Section */}
      <section className="py-20 lg:py-28 bg-white select-none">
        <div className="max-w-[1100px] mx-auto px-6 lg:px-10 text-center">
          <h2 className="font-serif-display text-[38px] sm:text-[48px] leading-tight text-[#1c1a1f] font-medium">
            Working online and <span className="italic font-light text-[#c5a48e]">at home therapy</span>
          </h2>
          <p className="mt-6 text-[15.5px] text-[#5b5670] leading-relaxed max-w-4xl mx-auto">
            In light of the current public health situation, we at Kavita Kabira Wellness Clinic have adapted our services to provide online counseling, CBT, and therapy via phone or video sessions. Our newly launched online platform is designed to help you easily connect with the right therapist for your needs. We offer a range of online services including individual therapy, couples/relationship therapy, geriatric therapy, and consultative support for children and young people. If you have specific concerns or requests, feel free to reach out— we are here to help. Contact us today by phone or email.
          </p>
          <div className="mt-10">
            <a 
              href="https://wa.me/919971880693" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-block px-8 py-4 bg-[#050302] hover:bg-[#c5a48e] text-white text-[13px] uppercase tracking-[0.2em] font-semibold transition-all duration-300 rounded-[2px] shadow-sm hover:shadow"
            >
              VISIT OUR ONLINE PORTAL
            </a>
          </div>
        </div>
      </section>

      {/* Blog/Latest News section */}
      <section className="py-20 lg:py-28 bg-[#fafafa] border-t border-gray-100 select-none">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
            <div>
              <p className="uppercase tracking-[0.2em] text-[11px] font-semibold text-[#7e7a86] mb-3">
                What&apos;s Going On In Our Blog?
              </p>
              <h2 className="font-serif-display text-[42px] sm:text-[54px] lg:text-[60px] leading-tight text-[#1c1a1f] font-medium">
                Latest New &amp; Event
              </h2>
              <p className="mt-4 max-w-xl text-[15px] text-[#5b5670] leading-relaxed">
                Contact our office for a free quote! It is always good to have a rough idea on your budget at this stage to enable us to quote as necessary
              </p>
            </div>
            <Link href="/blog" className="inline-block px-6 py-3 border border-gray-300 hover:border-black text-[12px] uppercase tracking-[0.15em] font-semibold transition-all shrink-0">
              View all posts
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
            {[
              {
                id: 'happiness',
                category: 'Therapy',
                title: 'How to catch the happiness',
                date: 'January 13, 2023',
                image: '/images/DSC_0224.jpeg',
                excerpt: "Today, it feels like everything has changed—it’s either been closed, postponed, or canceled. Some states have officially shut down. You’re working from home, while watching your kids..."
              },
              {
                id: 'quarantine',
                category: 'Articles',
                title: '10 Quarantine Activities That Don’t Involve Watching the News',
                date: 'January 16, 2023',
                image: '/images/DSC_0234.jpeg',
                excerpt: "Today, it feels like everything has changed—it’s either been closed, postponed, or canceled. Some states have officially shut down. You’re working from home, while watching your kids..."
              },
              {
                id: 'please-thank-you',
                category: 'Articles',
                title: 'Is It Important to Say “Please” and “Thank You” to Your Partner?',
                date: 'January 16, 2023',
                image: '/images/DSC_0237.jpeg',
                excerpt: "Politeness in long-term relationships may seem unnecessary, but research suggests these small phrases create big emotional safety."
              }
            ].map((b) => (
              <article key={b.id} className="bg-white border border-gray-100 rounded-3xl overflow-hidden hover:shadow-[0_15px_40px_rgba(0,0,0,0.04)] transition-all duration-300 flex flex-col">
                <Link href={`/blog/${b.id}`} className="h-56 overflow-hidden block">
                  <img src={b.image} alt={b.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                </Link>
                <div className="p-7 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[11px] uppercase tracking-[0.18em] font-semibold text-[#c5a48e] bg-[#c5a48e]/5 px-2.5 py-1 rounded mb-3 inline-block">
                      {b.category}
                    </span>
                    <h3 className="font-serif-display text-[22px] text-[#1c1a1f] font-semibold mb-3 hover:text-fuchsia-850 transition-colors">
                      <Link href={`/blog/${b.id}`}>{b.title}</Link>
                    </h3>
                    <p className="text-[14.5px] text-[#5b5670] leading-relaxed mb-4 line-clamp-3">{b.excerpt}</p>
                  </div>
                  <div className="flex items-center justify-between text-[12px] text-[#8e8b98] pt-4 border-t border-gray-100 mt-4">
                    <span>{b.date}</span>
                    <Link href={`/blog/${b.id}`} className="font-semibold text-[#1c1a1f] hover:text-[#c5a48e] uppercase tracking-wider flex items-center gap-1">
                      Read More <ArrowRight size={12} />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <ContactFormSection />

      {/* Copyright strip at the bottom of the page */}
      <div className="py-6 bg-white border-t border-gray-100 text-center text-[13px] text-gray-400">
        <p>Copyright © 2026. All rights reserved.</p>
      </div>
    </>
  );
}
