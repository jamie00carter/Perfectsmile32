
import React from 'react';
import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

const BrandLogoFooter = () => (
  <div className="flex flex-col -space-y-1">
    <div className="flex items-center gap-1">
      <span className="text-2xl font-black text-orange-500 tracking-tighter">perfect</span>
      <div className="relative w-8 h-8 flex items-center justify-center">
        <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full text-slate-500">
          <path d="M50 10 A40 40 0 1 1 50 90 A40 40 0 1 1 50 10" fill="none" stroke="currentColor" strokeWidth="8" strokeDasharray="180 60" />
        </svg>
        <span className="text-[10px] font-black text-orange-500 z-10">32</span>
      </div>
    </div>
    <span className="text-xl font-bold text-slate-400 ml-1 leading-none tracking-wide">smile</span>
  </div>
);

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <div className="mb-6">
              <BrandLogoFooter />
            </div>
            <p className="text-slate-400 leading-relaxed mb-8">
              Modern dental clinic providing premium oral healthcare in HUDA, Panipat. Dedicated to creating perfect smiles through advanced technology and compassionate care.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors"><Facebook size={18} /></a>
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors"><Instagram size={18} /></a>
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors"><Twitter size={18} /></a>
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors"><Linkedin size={18} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-8 text-white border-l-4 border-orange-600 pl-4">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Home</a></li>
              <li><a href="#services" className="text-slate-400 hover:text-white transition-colors">Treatments</a></li>
              <li><a href="#reviews" className="text-slate-400 hover:text-white transition-colors">Reviews</a></li>
              <li><a href="#about" className="text-slate-400 hover:text-white transition-colors">About Dr. Rama</a></li>
              <li><a href="#booking" className="text-slate-400 hover:text-white transition-colors">Book Appointment</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-8 text-white border-l-4 border-orange-600 pl-4">Services</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Root Canal (RCT)</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Dental Implants</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Braces & Aligners</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Teeth Whitening</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Wisdom Tooth Removal</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-8 text-white border-l-4 border-orange-600 pl-4">Clinic Hours</h4>
            <div className="space-y-4 text-slate-400">
              <div className="flex justify-between">
                <span>Monday - Sunday</span>
                <span className="text-white font-medium">10am - 8pm</span>
              </div>
              <div className="pt-6 border-t border-slate-800">
                <p className="text-sm">Location:</p>
                <p className="text-white font-medium mt-1">Sector 13-17, HUDA, Panipat</p>
                <p className="text-orange-500 text-xs mt-1">Near Mithan Sweets</p>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} Perfect Smile 32. All Rights Reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
