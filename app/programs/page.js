"use client";

import { useState } from "react";
import { useModal } from "@/context/ModalContext";
import { 
  ChevronDown, 
  ChevronUp, 
  Star, 
  MessageSquare, 
  Calendar, 
  ArrowRight, 
  Check, 
  Heart, 
  Building, 
  BookOpen, 
  Compass,
  ArrowUpRight
} from "lucide-react";

export default function ProgramsLandingPage() {
  const { openModal } = useModal();
  const [expandedProgram, setExpandedProgram] = useState(null);
  const [expandedFaq, setExpandedFaq] = useState(null);

  const programs = [
    {
      id: 1,
      title: "Inner Child Healing Journey",
      tagline: "Group Program — 8 Weeks",
      icon: "🌟",
      lucideIcon: Heart,
      shortDesc: "An 8-week structured, intimate group program designed for women. We don't just talk about the past—we actively rewire the nervous system to feel safe in the present. Limited to 12 participants per cohort to ensure deep, individualized attention.",
      color: "#0ea5e9",
      themeColor: "sky",
      textColor: "text-sky-600",
      borderColor: "border-sky-500",
      bgLight: "bg-sky-50/50",
      buttonBg: "bg-sky-600 hover:bg-sky-700 focus:ring-sky-500",
      badgeBg: "bg-sky-100 text-sky-800",
      whatsappMsg: "Hi Dr. Kavita, I would like to know more about the Inner Child Healing Journey group program.",
      image: "/api/local-image?file=inner_child_healing_1783612150293.png",
      details: {
        ideal: "Women ready to deeply heal their past and break repetitive patterns. Limited to 12 participants per cohort for personalized attention.",
        what: [
          "Understanding childhood wounds and present triggers",
          "Active nervous system rewiring to feel safe in the present",
          "Somatic and emotional release of trapped trauma",
          "Building healthy boundaries and self-compassion"
        ],
        format: "8-week intimate cohort. Exclusive for women. Safe, confidential, and guided by somatic experts.",
      }
    },
    {
      id: 2,
      title: "The Desire Reclaimed",
      tagline: "Couples Track — 8 Weeks",
      icon: "💕",
      lucideIcon: Heart,
      shortDesc: "For couples who love each other but can't feel it anymore. Rewire safety. Reignite intimacy.",
      color: "#ec4899",
      themeColor: "rose",
      textColor: "text-rose-600",
      borderColor: "border-rose-500",
      bgLight: "bg-rose-50/50",
      buttonBg: "bg-rose-600 hover:bg-rose-700 focus:ring-rose-500",
      badgeBg: "bg-rose-100 text-rose-800",
      whatsappMsg: "Hi Dr. Kavita, I would like to know more about The Desire Reclaimed couples program.",
      image: "/api/local-image?file=couples_therapy_1783612162319.png",
      details: {
        ideal: "Couples together 5+ years who've become roommates. Relationships where one partner shut down. Couples ready to rebuild, not just fix.",
        what: [
          "Understanding why you stopped feeling safe",
          "Nervous system reset for emotional safety",
          "Embodied work: psychodrama, art, somatic practices",
          "Learning to desire again from a place of safety"
        ],
        format: "2-hour sessions, fortnightly. You + partner + me. Safe, confidential, judgment-free.",
      }
    },
    {
      id: 3,
      title: "The Healing Workplace",
      tagline: "Corporate Track — 12 Weeks",
      icon: "🌱",
      lucideIcon: Building,
      shortDesc: "For companies where people are burning out but nobody talks about it. Build psychological safety.",
      color: "#10b981",
      themeColor: "emerald",
      textColor: "text-emerald-600",
      borderColor: "border-emerald-500",
      bgLight: "bg-emerald-50/50",
      buttonBg: "bg-emerald-600 hover:bg-emerald-700 focus:ring-emerald-500",
      badgeBg: "bg-emerald-100 text-emerald-800",
      whatsappMsg: "Hi Dr. Kavita, I would like to know more about The Healing Workplace corporate program.",
      image: "/api/local-image?file=corporate_wellness_1783612173727.png",
      details: {
        ideal: "Tech startups with burnout. Companies where mental health is talked about but not actually addressed. Leaders who are exhausted.",
        what: [
          "Monthly full-day workshops creating psychological safety",
          "Bi-weekly team sessions on nervous system literacy",
          "Practical protocols for boundaries, feedback, wholeness",
          "Optional 1:1 sessions for leaders"
        ],
        format: "3-month journey. In-person (Gurgaon) or online. Available for teams of 8-50+.",
      }
    },
    {
      id: 4,
      title: "The Listening Self™",
      tagline: "Self-Paced Course — Lifetime Access",
      icon: "📚",
      lucideIcon: BookOpen,
      shortDesc: "For anyone ready to understand themselves, finally. Deep, integrated learning at your pace.",
      color: "#8b5cf6",
      themeColor: "violet",
      textColor: "text-violet-600",
      borderColor: "border-violet-500",
      bgLight: "bg-violet-50/50",
      buttonBg: "bg-violet-600 hover:bg-violet-700 focus:ring-violet-500",
      badgeBg: "bg-violet-100 text-violet-800",
      whatsappMsg: "Hi Dr. Kavita, I would like to know more about The Listening Self self-paced course.",
      image: "/api/local-image?file=self_paced_course_1783612183234.png",
      details: {
        ideal: "Anyone doing their own healing. Therapists deepening their practice. Women 20s-60s who know something is off but don't have language.",
        what: [
          "5 modules: Architecture, Nervous System, Art, Relationships, The Rewired Life",
          "Video lessons + workbook + audio journeys",
          "Somatic exercises, psychodrama practices, art medicine",
          "Community forum. Lifetime access. Go at your pace."
        ],
        format: "Self-paced, online. Access forever. Combine with 1:1 sessions if you want.",
      }
    },
    {
      id: 5,
      title: "The Rewiring Retreat",
      tagline: "Immersive — 4 Days / 3 Nights",
      icon: "🌸",
      lucideIcon: Compass,
      shortDesc: "For when you're ready to go deep. Immersive, embodied, transformational. Small group.",
      color: "#f59e0b",
      themeColor: "amber",
      textColor: "text-amber-600",
      borderColor: "border-amber-500",
      bgLight: "bg-amber-50/50",
      buttonBg: "bg-amber-600 hover:bg-amber-700 focus:ring-amber-500",
      badgeBg: "bg-amber-100 text-amber-800",
      whatsappMsg: "Hi Dr. Kavita, I would like to know more about The Rewiring Retreat immersive program.",
      image: "/api/local-image?file=rewiring_retreat_1783612195185.png",
      details: {
        ideal: "People serious about change. Those ready to show up fully, vulnerably. Who understand transformation requires presence + community.",
        what: [
          "Day 1: Arrive. Land here, now. Leave your to-do list.",
          "Day 2: The deep dive. Psychodrama, art therapy, somatic work.",
          "Day 3: Rewire. Movement, breathwork, guided imagery, new nervous system states.",
          "Day 4: Integration. Bring it home. Leave with practices and community."
        ],
        format: "12-15 people. Intentionally small. Held twice yearly (May & November). Gurgaon or Rishikesh. Includes meals, materials, all sessions.",
      }
    }
  ];

  const whyDifferent = [
    {
      title: "Not Just Talk Therapy",
      desc: "We use psychodrama, art, somatic practices, embodied work. Your body heals — not just your mind."
    },
    {
      title: "Not Positive Thinking",
      desc: "We don't ask you to manifest or think positive. We understand why your nervous system learned to protect itself. Then we rewire it."
    },
    {
      title: "Not American Psychology",
      desc: "Trained in global practices, but built for India. We understand intergenerational trauma, duty vs. desire, family vs. self. We work WITH your culture."
    },
    {
      title: "Not Transactional",
      desc: "You're not a case. You're a person. I know your name. I remember what you said last session. I care about your healing."
    },
    {
      title: "Built for Women, Held by a Woman",
      desc: "Our most intensive group programs are exclusively for women. The shared lived experience of navigating Indian familial and cultural expectations creates an immediate, unspoken safety in the room."
    }
  ];

  const faqs = [
    {
      q: "I have tried therapy before and it didn't work. How is this different?",
      a: "Traditional talk therapy often keeps you in your cognitive brain. We work somatically—which means we include the nervous system. We don't just analyze your patterns; we teach your body how to safely let them go."
    },
    {
      q: "Do you offer payment plans for longer programs?",
      a: "Yes. We believe healing should be accessible. For our 8-week programs, we offer a two-part split payment option."
    },
    {
      q: "How do I know which program is right for me?",
      a: "Start with a 30-min clarity call with me. We'll talk about your situation. I'll recommend what makes sense. No pressure. Book via WhatsApp (8287045427) or the button below."
    },
    {
      q: "Can I do multiple programs at once?",
      a: "Yes. Some people do the course while in individual work. Some couples do The Desire Reclaimed while attending the retreat. But I usually recommend starting with one and seeing how it lands."
    },
    {
      q: "What if therapy doesn't work for me?",
      a: "We check in every 4 weeks. If something isn't landing, we adjust. Therapy is collaborative. If I'm not the right fit after Month 1, I'll refer you to someone who is."
    },
    {
      q: "How do I book? What's the next step?",
      a: "Fill the form below with your program interest, or DM me on WhatsApp. I'll respond within a few hours. We'll talk about what you're looking for and confirm your first session/module."
    },
    {
      q: "Do you work with people outside India?",
      a: "The Listening Self™ is global (self-paced, online). Individual work & groups are available online pan-India. International clients: WhatsApp me for custom options."
    },
    {
      q: "What makes your approach different from other therapists?",
      a: "Most Indian therapy is talk-based. I integrate somatic work, art, psychodrama, nervous system science. I also built programs for couples, companies, and retreats — not just 1:1 therapy. You get a full ecosystem of healing."
    }
  ];

  const testimonials = [
    {
      name: "Priya K.",
      program: "The Desire Reclaimed",
      quote: "I kept choosing the same toxic relationships. After 8 weeks with Kavita, I finally understand why. More importantly, I know how to change it."
    },
    {
      name: "Anjali M.",
      program: "The Listening Self™",
      quote: "The course changed how I see my relationships. It's not my fault I grew up anxious. But it IS my responsibility to heal. Kavita showed me how."
    },
    {
      name: "Radhika S.",
      program: "The Healing Workplace",
      quote: "We brought Kavita to our startup for a 3-month program. The shift in how our team shows up is noticeable. People are less burned out, more connected."
    }
  ];

  const scrollToProgram = (id) => {
    const el = document.getElementById(`program-${id}`);
    if (el) {
      const offset = 100; // Account for fixed header
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      
      setExpandedProgram(id);
    }
  };

  return (
    <div className="bg-[#faf8f3] text-gray-800 font-sans-body antialiased min-h-screen">
      
      {/* ===== HERO SECTION ===== */}
      <section className="relative pt-36 pb-24 lg:pt-48 lg:pb-36 overflow-hidden bg-gradient-to-br from-[#fdfbf7] via-[#f9f3f0] to-[#f4e8e2] text-gray-800">
        {/* Glowing Decorative Radial Gradient */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-bl from-rose-200/40 to-transparent rounded-full pointer-events-none filter blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-[300px] h-[300px] bg-gradient-to-tr from-sky-200/40 to-transparent rounded-full pointer-events-none filter blur-3xl" />

        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <div className="flex flex-col items-start text-left z-10">
            {/* Tagline */}
            <div className="uppercase tracking-[0.25em] text-[11px] lg:text-[12px] font-semibold text-kavita-tan mb-6 animate-slide-up-fade">
              A New Genre of Healing in India
            </div>

            {/* Main Headline */}
            <h1 className="font-serif-display text-[40px] sm:text-[56px] lg:text-[68px] leading-[1.1] font-normal tracking-tight text-gray-900 mb-6 animate-slide-up-fade animation-delay-200">
              Healing that goes to the <span className="text-kavita-tan italic font-light relative after:absolute after:left-0 after:bottom-1 after:w-full after:h-[1px] after:bg-kavita-tan/30">root</span>,
              <br />
              not the symptom.
            </h1>

            {/* Subheadline */}
            <p className="text-[16px] sm:text-[18px] lg:text-[20px] text-gray-600 leading-relaxed max-w-xl mb-10 animate-slide-up-fade animation-delay-400 font-light">
              Your childhood taught you how to love. Your trauma lives in your nervous system. Your healing happens in the body — through presence, art, and understanding.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 items-center animate-slide-up-fade animation-delay-600">
              <button 
                onClick={() => {
                  const el = document.getElementById("programs-grid");
                  if (el) {
                    const offset = 100;
                    const elementPosition = el.getBoundingClientRect().top + window.scrollY;
                    window.scrollTo({ top: elementPosition - offset, behavior: "smooth" });
                  }
                }}
                className="px-8 py-4 bg-gray-900 hover:bg-gray-800 text-white shadow-md shadow-gray-900/10 font-semibold tracking-wide rounded-sm transition-all duration-300 transform hover:-translate-y-0.5 text-sm"
              >
                EXPLORE PROGRAMS
              </button>
              <button 
                onClick={openModal}
                className="px-8 py-4 bg-transparent border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white font-semibold tracking-wide rounded-sm transition-all duration-300 transform hover:-translate-y-0.5 text-sm"
              >
                CLARITY CALL
              </button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] animate-slide-up-fade animation-delay-400 border border-white/10 hidden lg:block group">
            <img 
              src="/api/local-image?file=programs_hero_1783613550176.png" 
              alt="Programs Hero" 
              className="w-full h-auto object-contain transform group-hover:scale-105 transition-transform duration-1000 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-[#a8d5d5]/10 pointer-events-none mix-blend-overlay" />
          </div>

        </div>
      </section>

      {/* ===== THE PROBLEM / POSITIONING ===== */}
      <section className="py-20 lg:py-28 bg-white border-b border-gray-100">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            
            {/* Left Column Text */}
            <div className="lg:col-span-7">
              <span className="uppercase tracking-[0.2em] text-[11px] font-semibold text-kavita-tan block mb-4">
                The Core Contrast
              </span>
              <h2 className="font-serif-display text-[32px] sm:text-[40px] lg:text-[44px] leading-tight text-gray-900 mb-8">
                What's Missing in Indian Healing
              </h2>
              
              <div className="space-y-6 text-gray-600 text-[15px] sm:text-[16px] leading-[1.85] font-light">
                <p>
                  We have talk therapy. We have yoga studios. We have life coaches.
                </p>
                <p className="border-l-3 border-kavita-tan pl-4 py-1 italic bg-[#faf8f3]/60 rounded-r-md">
                  But we don't have a coherent approach that says: <strong className="text-gray-900 font-semibold">Your trauma lives in your body. Your patterns were learned. Healing requires presence, art, embodied work — not just advice.</strong>
                </p>
                <p>
                  That's what I've built. Not Western psychology imported. Not one-size-fits-all solutions. A full, integrated ecosystem of somatic and emotional healing built specifically for the Indian context, honoring our unique familial dynamics and structures.
                </p>
              </div>
            </div>

            {/* Right Column Interactive Panel */}
            <div className="lg:col-span-5 bg-[#faf8f3] border border-gray-100 rounded-xl p-8 lg:p-10 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-kavita-tan/5 rounded-bl-full pointer-events-none" />
              
              <h3 className="font-serif-display text-[22px] text-gray-900 mb-6 font-semibold pb-4 border-b border-gray-200/80">
                Four Ways to Transform
              </h3>
              
              <div className="space-y-4">
                {programs.map((prog, i) => {
                  const IconComponent = prog.lucideIcon;
                  return (
                    <button
                      key={prog.id}
                      onClick={() => scrollToProgram(prog.id)}
                      className="w-full text-left p-4 rounded-lg bg-white border border-gray-100 hover:border-gray-300 hover:shadow-md transition-all duration-300 flex items-center gap-4 group"
                    >
                      <div className="w-10 h-10 rounded-full flex items-center justify-center bg-[#faf8f3] group-hover:scale-110 transition-transform duration-300">
                        <span className="text-xl">{prog.icon}</span>
                      </div>
                      <div className="flex-1">
                        <div className="text-[14px] font-bold text-gray-900 flex items-center gap-1.5">
                          {prog.title}
                          <ArrowUpRight size={13} className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-gray-500" />
                        </div>
                        <div className="text-[12px] text-gray-500 font-light mt-0.5">{prog.tagline}</div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ===== THE 4 PROGRAMS (YOUR PATH MATTERS) ===== */}
      <section id="programs-grid" className="py-20 lg:py-28 bg-[#faf8f3]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          
          <div className="text-center max-w-2xl mx-auto mb-16 lg:mb-20">
            <span className="uppercase tracking-[0.2em] text-[11px] font-semibold text-kavita-tan block mb-4">
              Choose Your Journey
            </span>
            <h2 className="font-serif-display text-[36px] sm:text-[48px] text-gray-900 font-normal leading-tight">
              Your Path Matters
            </h2>
            <div className="w-12 h-0.5 bg-kavita-tan mx-auto mt-6 mb-6" />
            <p className="text-gray-600 text-[15px] sm:text-[16px] leading-relaxed font-light">
              Each program is structured for different stages of transformation, depths, and formats. Click a card to expand curriculum, outcomes, and scheduling options.
            </p>
          </div>

          {/* Grid of Programs */}
          <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
            {programs.map((prog, idx) => {
              const isExpanded = expandedProgram === prog.id;
              
              return (
                <div
                  key={prog.id}
                  id={`program-${prog.id}`}
                  onClick={() => setExpandedProgram(isExpanded ? null : prog.id)}
                  className={`group bg-white rounded-xl border border-gray-200/80 transition-all duration-500 cursor-pointer overflow-hidden relative flex flex-col justify-between ${
                    isExpanded 
                      ? "shadow-2xl shadow-gray-200 translate-y-[-4px] ring-2 ring-opacity-20"
                      : "hover:shadow-lg hover:translate-y-[-4px]"
                  }`}
                  style={{ 
                    borderTop: `5px solid ${prog.color}`,
                    borderColor: isExpanded ? `${prog.color}20` : undefined,
                    boxShadow: isExpanded ? `0 20px 40px -15px ${prog.color}15` : undefined
                  }}
                >
                  
                  {/* Program Header Image */}
                  <div className="w-full h-48 lg:h-56 relative overflow-hidden bg-gray-100">
                    <img 
                      src={prog.image} 
                      alt={prog.title} 
                      className="w-full h-full object-contain transition-transform duration-1000 ease-in-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
                  </div>

                  {/* Card Content Wrapper */}
                  <div className="p-8 lg:px-10 lg:pb-10 pt-6 lg:pt-8">
                    
                    {/* Top row */}
                    <div className="flex items-start justify-between mb-6">
                      <div className="w-14 h-14 rounded-xl flex items-center justify-center text-3xl shadow-sm bg-gray-50 border border-gray-100">
                        {prog.icon}
                      </div>
                      
                      <span className={`text-[11px] font-semibold tracking-wider uppercase px-3 py-1 rounded-full ${prog.badgeBg}`}>
                        {prog.tagline.split(" — ")[1] || prog.tagline}
                      </span>
                    </div>

                    {/* Program Headers */}
                    <h3 className="font-serif-display text-[24px] lg:text-[28px] text-gray-900 font-semibold mb-2 group-hover:text-kavita-tan transition-colors">
                      {prog.title}
                    </h3>
                    <p className="text-[13px] font-semibold text-kavita-tan mb-4 uppercase tracking-[0.1em]">
                      {prog.tagline.split(" — ")[0]}
                    </p>
                    
                    <p className="text-[14.5px] text-gray-600 leading-relaxed font-light mb-6">
                      {prog.shortDesc}
                    </p>

                    {/* Expanded Curriculum/Details */}
                    <div className={`transition-all duration-500 overflow-hidden ${
                      isExpanded ? "max-h-[1000px] opacity-100 mt-6 pt-6 border-t border-gray-100" : "max-h-0 opacity-0"
                    }`}>
                      
                      {/* For Whom */}
                      <div className="mb-6">
                        <h4 className="text-[11px] uppercase tracking-wider font-bold text-gray-800 mb-2.5 flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: prog.color }} />
                          For Whom
                        </h4>
                        <p className="text-[14px] text-gray-600 leading-relaxed font-light">
                          {prog.details.ideal}
                        </p>
                      </div>

                      {/* What Happens */}
                      <div className="mb-6">
                        <h4 className="text-[11px] uppercase tracking-wider font-bold text-gray-800 mb-3 flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: prog.color }} />
                          What We Rewire
                        </h4>
                        <ul className="space-y-2">
                          {prog.details.what.map((item, i) => (
                            <li key={i} className="flex items-start gap-2.5 text-[14px] text-gray-600 font-light">
                              <Check size={16} className={`shrink-0 mt-0.5 ${prog.textColor}`} />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Format */}
                      <div className="mb-8">
                        <h4 className="text-[11px] uppercase tracking-wider font-bold text-gray-800 mb-2.5 flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: prog.color }} />
                          Format &amp; Environment
                        </h4>
                        <div className="bg-[#faf8f3] border border-gray-200/50 p-4 rounded-lg text-[13.5px] text-gray-600 leading-relaxed font-light italic">
                          {prog.details.format}
                        </div>
                      </div>

                      {/* CTA Buttons in Cards */}
                      <div className="grid sm:grid-cols-2 gap-3" onClick={(e) => e.stopPropagation()}>
                        <a
                          href={`https://wa.me/918287045427?text=${encodeURIComponent(prog.whatsappMsg)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`w-full py-3 px-4 rounded text-white font-bold tracking-wider text-center transition-all duration-300 text-[12px] uppercase shadow-sm flex items-center justify-center gap-2 ${prog.buttonBg}`}
                        >
                          Enquire on WhatsApp
                        </a>
                        <button
                          onClick={openModal}
                          className="w-full py-3 px-4 rounded bg-transparent hover:bg-gray-50 text-gray-700 border border-gray-300 font-bold tracking-wider text-[12px] uppercase transition-all duration-300"
                        >
                          Book Clarity Call
                        </button>
                      </div>

                    </div>
                  </div>

                  {/* Card Toggle Bar */}
                  <div className="bg-gray-50 border-t border-gray-100/60 py-4 px-8 flex items-center justify-between text-[13px] font-semibold text-gray-600 hover:text-gray-900 transition-colors">
                    <span>{isExpanded ? "Collapse Program Details" : "Explore Curriculum & Details"}</span>
                    {isExpanded ? <ChevronUp size={16} className="text-gray-400" /> : <ChevronDown size={16} className="text-gray-400" />}
                  </div>

                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ===== WHY THIS WORKS (PHILOSOPHY) ===== */}
      <section className="py-20 lg:py-28 bg-white border-t border-b border-gray-100">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          
          <div className="text-center max-w-2xl mx-auto mb-16 lg:mb-20">
            <span className="uppercase tracking-[0.2em] text-[11px] font-semibold text-kavita-tan block mb-4">
              Our Methodology
            </span>
            <h2 className="font-serif-display text-[32px] sm:text-[40px] lg:text-[44px] text-gray-900 font-normal">
              Why This Works
            </h2>
            <div className="w-12 h-0.5 bg-kavita-tan mx-auto mt-5" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyDifferent.map((item, i) => (
              <div 
                key={i} 
                className="p-6 rounded-xl border border-gray-100 hover:border-gray-200 hover:bg-[#faf8f3]/30 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Decorative Number */}
                  <div className="text-[36px] font-serif-display font-light text-kavita-tan/20 mb-3">
                    0{i + 1}
                  </div>
                  <h3 className="font-serif-display text-[18px] font-semibold text-gray-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-[14px] text-gray-600 leading-relaxed font-light">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="py-20 lg:py-28 bg-[#faf8f3]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          
          <div className="text-center max-w-2xl mx-auto mb-16 lg:mb-20">
            <span className="uppercase tracking-[0.2em] text-[11px] font-semibold text-kavita-tan block mb-4">
              Stories of Rewiring
            </span>
            <h2 className="font-serif-display text-[32px] sm:text-[40px] lg:text-[44px] text-gray-900 font-normal">
              Real People. Real Results.
            </h2>
            <div className="w-12 h-0.5 bg-kavita-tan mx-auto mt-5" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div 
                key={i} 
                className="bg-white rounded-xl border border-gray-200/50 p-8 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow duration-300"
              >
                <div>
                  {/* Star Ratings */}
                  <div className="flex gap-1 mb-6">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} size={15} fill="#d4af37" className="text-[#d4af37]" />
                    ))}
                  </div>
                  
                  {/* Quote */}
                  <p className="font-serif-display text-[15px] italic text-gray-700 leading-relaxed mb-8">
                    "{t.quote}"
                  </p>
                </div>
                
                {/* Author Info */}
                <div className="border-t border-gray-100 pt-4 flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-[14px] text-gray-900">{t.name}</div>
                    <div className="text-[12px] text-kavita-tan font-light mt-0.5">{t.program}</div>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-[#faf8f3] flex items-center justify-center text-xs text-kavita-tan">
                    ❞
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ===== FAQ SECTION ===== */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[800px] mx-auto px-6">
          
          <div className="text-center mb-16">
            <span className="uppercase tracking-[0.2em] text-[11px] font-semibold text-kavita-tan block mb-4">
              Answers to common queries
            </span>
            <h2 className="font-serif-display text-[32px] sm:text-[40px] text-gray-900 font-normal">
              Questions?
            </h2>
            <div className="w-12 h-0.5 bg-kavita-tan mx-auto mt-5" />
          </div>

          {/* Accordion container */}
          <div className="space-y-4">
            {faqs.map((faq, i) => {
              const isOpen = expandedFaq === i;
              
              return (
                <div
                  key={i}
                  className={`border rounded-lg overflow-hidden transition-all duration-300 ${
                    isOpen 
                      ? "border-kavita-tan bg-[#faf8f3]/40" 
                      : "border-gray-200 bg-white hover:border-gray-300"
                  }`}
                >
                  <button
                    onClick={() => setExpandedFaq(isOpen ? null : i)}
                    className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 font-semibold text-[14.5px] text-gray-900"
                  >
                    <span>{faq.q}</span>
                    <span className="shrink-0 text-kavita-tan text-xl leading-none">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>
                  
                  <div className={`transition-all duration-300 overflow-hidden ${
                    isOpen ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"
                  }`}>
                    <p className="px-6 pb-6 text-[14px] text-gray-600 leading-relaxed font-light">
                      {faq.a}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ===== FINAL CTA SECTION ===== */}
      <section className="bg-gradient-to-br from-[#fdfbf7] via-[#f9f3f0] to-[#f4e8e2] text-gray-800 py-20 lg:py-28 relative overflow-hidden">
        {/* Backdrop gradients */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(200,180,170,0.15),transparent_60%)] pointer-events-none" />
        
        <div className="relative max-w-[850px] mx-auto px-6 text-center">
          <h2 className="font-serif-display text-[36px] sm:text-[48px] lg:text-[56px] text-gray-900 font-normal mb-6 tracking-tight leading-tight">
            Ready to transform?
          </h2>
          
          <p className="text-gray-600 text-[15px] sm:text-[17px] leading-relaxed mb-10 max-w-xl mx-auto font-light">
            Each program is designed for different moments in your journey. Different paces. Different depths. There's no wrong choice — only the one that calls to you right now.
          </p>

          <div className="flex flex-wrap gap-4 justify-center items-center">
            <button 
              onClick={openModal}
              className="px-8 py-4 bg-gray-900 hover:bg-gray-800 text-white shadow-md shadow-gray-900/10 font-semibold tracking-wide rounded-sm transition-all duration-300 transform hover:-translate-y-0.5 text-sm"
            >
              START CLARITY CALL
            </button>
            <a 
              href="https://wa.me/918287045427?text=Hi%20Dr.%20Kavita,%20I'd%20like%20to%20schedule%20a%20clarity%20call%20regarding%20your%20signature%20programs."
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-transparent border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white font-semibold tracking-wide rounded-sm transition-all duration-300 transform hover:-translate-y-0.5 text-sm inline-flex items-center gap-2"
            >
              DM ME ON WHATSAPP
            </a>
          </div>

          <div className="mt-10 pt-8 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-center gap-6 text-[13px] tracking-wider text-gray-500">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Available for Pan-India &amp; International Sessions</span>
            </div>
            <div className="hidden sm:block text-gray-300">|</div>
            <div>
              WHATSAPP: <span className="text-gray-900 font-bold font-mono">8287045427</span>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
