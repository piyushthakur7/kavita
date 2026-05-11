import React from 'react';
import { Phone, CalendarCheck } from 'lucide-react';
import { aboutImage, drImage, contact } from '../mock';

const About = ({ onBookClick }) => {
  return (
    <section id="about" className="py-24 lg:py-32 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-14 items-center">
        <div className="relative">
          <div className="relative rounded-[280px] overflow-hidden h-[520px] lg:h-[640px] bg-[#efeefb]">
            <img
              src={aboutImage}
              alt="Clinic"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -right-2 bottom-10 lg:right-6 lg:bottom-16 bg-white p-3 rounded-2xl shadow-2xl w-[210px]">
            <img
              src={drImage}
              alt="Dr. Kavita Kabira"
              className="w-full h-44 object-cover rounded-xl"
            />
            <div className="px-1 py-3">
              <h4 className="font-serif-display text-[19px] text-[#1c1a1f] leading-tight">
                Dr. Kavita Kabira Bhutani
              </h4>
              <p className="text-[11px] uppercase tracking-[0.18em] text-[#7e7a86] mt-1">
                Psychologist & Mindset Coach
              </p>
              <div className="mt-3 space-y-1.5">
                <a
                  href={`tel:${contact.phoneRaw}`}
                  className="flex items-center gap-2 text-[12.5px] text-[#1c1a1f] hover:text-fuchsia-700"
                >
                  <Phone size={13} /> {contact.phone.replace('+91-', '')}
                </a>
                <button
                  onClick={onBookClick}
                  className="flex items-center gap-2 text-[12.5px] text-[#1c1a1f] hover:text-fuchsia-700"
                >
                  <CalendarCheck size={13} /> Book Appointment
                </button>
              </div>
            </div>
          </div>
        </div>

        <div>
          <p className="uppercase tracking-[0.28em] text-[11px] font-semibold text-[#7e7a86] mb-5">
            Welcome to Kavita Kabira Wellness Clinic
          </p>
          <h2 className="font-serif-display text-[44px] sm:text-[56px] lg:text-[64px] leading-[1.05] text-[#1c1a1f]">
            The Leading Psychology
            <br />
            & <span className="italic font-light">Wellness Clinic</span>
          </h2>
          <div className="mt-7 space-y-5 text-[15.5px] leading-relaxed text-[#4b4753]">
            <p>
              In today’s rapidly evolving society, many people face complex mental health
              challenges that can be overwhelming. Recognizing that mental well-being is a
              significant concern, it’s crucial to seek support from professionals like the{' '}
              <strong className="text-[#1c1a1f]">Best Psychologist in Gurgaon</strong> to navigate
              these issues.
            </p>
            <p>
              Acknowledging this essential need, we have established a dedicated psychological
              practice. As the{' '}
              <strong className="text-[#1c1a1f]">Top Psychotherapist in Gurgaon and Delhi</strong>,
              we offer comprehensive counseling and therapy services to support your mental health.
              Committed to accessibility, we strive to be an{' '}
              <strong className="text-[#1c1a1f]">affordable psychologist</strong> for everyone
              seeking guidance.
            </p>
            <p className="text-[#1c1a1f]">
              Call us 24/7. We can answer{' '}
              <a href="#contact" className="underline decoration-fuchsia-400 underline-offset-4">
                all your questions.
              </a>
            </p>
          </div>
          <div className="mt-8">
            <a href="#services" className="btn-dark">Read More</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
