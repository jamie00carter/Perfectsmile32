import React from 'react';
import { ChevronRight } from 'lucide-react';

const serviceList = [
  {
    title: 'Root Canal Treatment (RCT)',
    desc: 'Advanced painless root canal procedures for long-lasting relief from pain.',
    image: '/cavitiy.root_.png',
    bg: 'bg-white-100',
    imgSize: 'h-48'
  },
  {
    title: 'Dental Implants',
    desc: 'Permanent and natural-looking tooth replacement solutions with high precision.',
    image: '/Lifeguard-Tooth-1-1.png',
    bg: 'bg-white-100',
    imgSize: 'h-60'
  },
  {
    title: 'Braces & Aligners',
    desc: 'Straighten your smile comfortably and confidently with modern techniques.',
    image: '/cartoon-smiling-mouth-with-stages-of-crooked-teeth-alignment-using-orthodontic-metal-braces-vector.jpg',
    bg: 'bg-white-100',
    imgSize: 'h-48'
  },
  {
    title: 'Wisdom Tooth Surgery',
    desc: 'Smooth, gentle removal with minimal discomfort and rapid recovery time.',
    image: '/231695392-tooth-with-gum-3d-illustration-of-a-tooth-on-a-light-background.png',
    bg: 'bg-white-100',
    imgSize: 'h-48',
  },
  {
    title: 'General & Preventive Dentistry',
    desc: 'Routine checkups, cleaning, and complete oral care for the whole family.',
    image: '/full-mouth.svg',
    bg: 'bg-white-100',
    imgSize: 'h-48'
  }
];

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16"> <h2 className="text-orange-600 text-sm font-extrabold tracking-widest uppercase mb-3">Our Expertise</h2> <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6"> Comprehensive Dental Services for Your Perfect Smile </h3> <p className="text-lg text-slate-600"> From emergency dental care to cosmetic enhancements, Dr. Rama provides the highest quality treatment in HUDA, Panipat. </p> </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {serviceList.map((service, idx) => (
            <div
              key={idx}
              className="group bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >

              {/* Custom Background + Larger Image Area */}
              <div
                className={`w-full h-64 ${service.bg} rounded-t-3xl flex items-center justify-center p-6`}
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className={`${service.imgSize} w-auto object-contain transition-transform duration-300 group-hover:scale-110`}
                />
              </div>

              <div className="p-8">
                <h4 className="text-xl font-bold text-slate-900 mb-4">
                  {service.title}
                </h4>

                <p className="text-slate-600 leading-relaxed mb-6">
                  {service.desc}
                </p>

                <button className="flex items-center gap-2 text-orange-600 font-semibold group-hover:gap-3 transition-all">
                  Learn More
                  <ChevronRight size={18} />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
