
import React, { useState } from 'react';
import { Phone, Menu, X, Calendar } from 'lucide-react';

interface HeaderProps {
  isScrolled: boolean;
}

const BrandLogo = () => (
  <div className="flex flex-col items-start leading-none group">
    <div className="flex items-center">
      <div className="flex flex-col -space-y-1">
        <span className="text-2xl font-black text-orange-600 tracking-tighter">perfect</span>
        <span className="text-xl font-bold text-slate-500 tracking-wide">smile</span>
      </div>
      <div className="ml-2 relative w-10 h-10 flex items-center justify-center">
        {/* Outer Swirl (Slate) */}
        <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full text-slate-500 transform -rotate-12 transition-transform group-hover:rotate-45 duration-500">
          <path d="M85 50 A35 35 0 1 1 15 50" fill="none" stroke="currentColor" strokeWidth="8" strokeLinecap="round" />
        </svg>
        {/* Inner Swirl (Orange) */}
        <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full text-orange-600 transform rotate-160 transition-transform group-hover:rotate-180 duration-500">
          <path d="M85 50 A35 35 0 0 1 50 85" fill="none" stroke="currentColor" strokeWidth="8" strokeLinecap="round" />
        </svg>
        <span className="text-[12px] font-black text-orange-600 z-10 pt-0.5">32</span>
      </div>
    </div>
    {/* Under-logo Swoosh Accent */}
    <div className="w-20 h-1.5 bg-gradient-to-r from-orange-600 to-transparent rounded-full mt-0.5 opacity-80"></div>
  </div>
);

export const Header: React.FC<HeaderProps> = ({ isScrolled }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Treatments', href: '#services' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md py-1' : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Brand Logo */}
        <div className="cursor-pointer transform hover:scale-105 transition-transform duration-300">
          <BrandLogo />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-bold text-slate-700 hover:text-orange-600 transition-colors uppercase tracking-wider"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <a 
            href="tel:09050156663" 
            className="flex items-center gap-2 text-sm font-bold text-orange-600 hover:text-orange-700 group"
          >
            <div className="bg-orange-50 p-2 rounded-full group-hover:bg-orange-100 transition-colors">
              <Phone size={16} />
            </div>
            090501 56663
          </a>
          <a 
            href="#booking" 
            className="bg-orange-600 text-white px-6 py-2.5 rounded-full text-sm font-bold shadow-lg shadow-orange-100 hover:bg-orange-700 hover:-translate-y-0.5 transition-all"
          >
            Book Slot
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden p-2 text-slate-900 focus:outline-none" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-slate-100 absolute top-full left-0 w-full py-6 shadow-2xl animate-in fade-in slide-in-from-top-4">
          <div className="container mx-auto px-4 flex flex-col gap-5">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-xl font-bold text-slate-800 flex items-center justify-between"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
                <X size={16} className="text-slate-200" />
              </a>
            ))}
            <div className="pt-6 border-t border-slate-100 flex flex-col gap-4">
              <a 
                href="tel:09050156663" 
                className="flex items-center justify-center gap-3 text-orange-600 font-bold py-4 bg-orange-50 rounded-2xl border border-orange-100"
              >
                <Phone size={22} />
                Call Dr. Rama
              </a>
              <a 
                href="#booking" 
                className="flex items-center justify-center gap-3 bg-orange-600 text-white font-bold py-4 rounded-2xl shadow-xl shadow-orange-100"
                onClick={() => setIsOpen(false)}
              >
                <Calendar size={22} />
                Book Now
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
