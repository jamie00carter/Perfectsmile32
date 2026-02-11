
import React from 'react';
import { Calendar, Phone, Star } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen pt-28 pb-16 flex items-center overflow-hidden">
      {/* Background: Modern Dental Office - High Quality Unsplash Placeholder with Fallback */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/hero.jpeg" 
          alt="Modern Dental Clinic Panipat" 
          className="w-full h-full object-cover"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = "/images/hero.jpeg";
          }}
        />
        {/* Semi-transparent white overlay to ensure text readability while maintaining visual depth */}
        <div className="absolute inset-0 bg-white/50 lg:bg-white/50 "></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl animate-in fade-in slide-in-from-left-10 duration-1000">
          <div className="flex items-center gap-2 mb-4">
            <div className="flex text-orange-500">
              {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
            </div>
            <span className="text-sm font-bold text-slate-700 bg-orange-50 px-3 py-1 rounded-full border border-orange-100 shadow-sm">
              4.9★ Rated Dental Clinic in Panipat
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 leading-tight mb-6">
            Best Dentist in Panipat for <span className="gradient-text">Painless</span> Root Canal, Implants & Braces
          </h1>

          <p className="text-lg text-slate-700 font-medium mb-8 leading-relaxed max-w-lg">
            Experience gentle care and modern dentistry at Perfect Smile 32. Our state-of-the-art facility in HUDA, Panipat, is designed for your ultimate comfort.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#booking" 
              className="bg-orange-600 text-white px-8 py-4 rounded-full text-lg font-bold shadow-xl shadow-orange-100 hover:bg-orange-700 flex items-center justify-center gap-2 transition-transform hover:scale-105 active:scale-95"
            >
              <Calendar size={20} />
              Book Appointment
            </a>
            <a 
              href="tel:09050156663" 
              className="bg-white text-orange-600 border-2 border-orange-600 px-8 py-4 rounded-full text-lg font-bold hover:bg-orange-50 flex items-center justify-center gap-2 transition-all shadow-sm"
            >
              <Phone size={20} />
              Call Now
            </a>
          </div>

          <div className="mt-12 flex items-center gap-4 text-slate-600 text-sm">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map(i => (
                <img 
                  key={i} 
                  src={`https://picsum.photos/seed/${i + 32}/40/40`} 
                  alt="Reviewer" 
                  className="w-10 h-10 rounded-full border-2 border-white shadow-md"
                />
              ))}
            </div>
            <span className="font-semibold">Join 137+ happy patients in HUDA, Panipat</span>
          </div>
        </div>
      </div>
      
      {/* Decorative Brand Accent */}
      <div className="hidden lg:block absolute bottom-10 right-10 w-64 h-64 bg-orange-600/10 rounded-full blur-[100px] z-0 animate-pulse"></div>
    </section>
  );
};
