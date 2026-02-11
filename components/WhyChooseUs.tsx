
import React from 'react';
import { Users2, Microscope, Sparkles, Eye } from 'lucide-react';

const reasons = [
  {
    icon: <Users2 size={28} />,
    title: 'Experienced Team',
    desc: 'Our professionals are trained in the latest dental methodologies.'
  },
  {
    icon: <Microscope size={28} />,
    title: 'Modern Equipment',
    desc: 'Advanced digital X-rays and imaging for precise diagnosis.'
  },
  {
    icon: <Sparkles size={28} />,
    title: 'Hygienic Environment',
    desc: 'Strict sterilization protocols for your safety and peace of mind.'
  },
  {
    icon: <Eye size={28} />,
    title: 'Transparent Consultation',
    desc: 'We explain every procedure and cost upfront with no hidden fees.'
  }
];

export const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="bg-slate-900 rounded-[50px] p-12 lg:p-20 relative overflow-hidden">
          {/* Decorative shapes */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-orange-600/10 rounded-full -mr-20 -mt-20"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-orange-600/5 rounded-full -ml-10 -mb-10"></div>

          <div className="relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-orange-500 text-sm font-extrabold tracking-widest uppercase mb-3">Why Patients Choose Us</h2>
              <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">Built on Trust and Results</h3>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {reasons.map((item, idx) => (
                <div key={idx} className="text-center group">
                  <div className="w-20 h-20 bg-white/10 text-white rounded-[2rem] flex items-center justify-center mx-auto mb-6 group-hover:bg-orange-600 group-hover:text-white transition-all duration-300 border border-white/10">
                    {item.icon}
                  </div>
                  <h4 className="text-xl font-bold text-white mb-3">{item.title}</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
