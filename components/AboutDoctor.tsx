
import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export const AboutDoctor: React.FC = () => {
  const qualities = [
    'Compassionate & Gentle Care',
    'Expert handling of complex pain',
    'Patient-first philosophy',
    'Uses Modern Digital Techniques'
  ];

  return (
    <section id="about" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 relative">
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-orange-600/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-slate-600/10 rounded-full blur-3xl"></div>
            <img 
              src="istockphoto-1364917551-612x612.jpg" 
              alt="Dr. Rama - Best Dentist in Panipat" 
              className="w-full rounded-[40px] shadow-2xl relative z-10 grayscale-[0.2] hover:grayscale-0 transition-all duration-500"
            />
            <div className="absolute bottom-10 left-10 z-20 bg-white p-6 rounded-2xl shadow-xl flex items-center gap-4 animate-bounce-slow">
              <div className="bg-orange-100 text-orange-600 p-3 rounded-xl">
                <CheckCircle2 size={24} />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-800">10+ Years Experience</p>
                <p className="text-xs text-slate-500">Expert Dentist</p>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2">
            <h2 className="text-orange-600 text-sm font-extrabold tracking-widest uppercase mb-3">The Specialist</h2>
            <h3 className="text-4xl font-bold text-slate-900 mb-8">
              Meet Dr. Rama, <br /><span className="text-orange-600">Your Trusted Dental Partner</span>
            </h3>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Dr. Rama believes that every patient deserves a comfortable and painless experience. With years of expertise in HUDA, Panipat, she has built a reputation for her calm handling of patients and precision in complex dental procedures.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              {qualities.map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 shrink-0">
                    <CheckCircle2 size={16} />
                  </div>
                  <span className="font-semibold text-slate-700">{item}</span>
                </div>
              ))}
            </div>
            <a 
              href="#booking" 
              className="inline-block bg-slate-900 text-white px-10 py-4 rounded-full font-bold shadow-xl shadow-slate-200 hover:bg-slate-800 hover:-translate-y-1 transition-all"
            >
              Consult with Dr. Rama
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
