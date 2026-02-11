
import React from 'react';
import { MapPin, Phone, Clock, Mail } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-4xl font-bold text-slate-900 mb-8">Visit Our Clinic</h2>
            
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-orange-50 text-orange-600 rounded-2xl flex items-center justify-center shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Location</h4>
                  <p className="text-slate-600 leading-relaxed">
                    DS no 141-P, <span className="text-orange-600 font-bold">near Mithan Sweets</span>,<br />
                    Sector 13-17, HUDA, Panipat, Haryana 132104
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-12 h-12 bg-slate-100 text-slate-700 rounded-2xl flex items-center justify-center shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Call Us</h4>
                  <p className="text-slate-600 font-bold text-xl hover:text-orange-600 transition-colors">
                    <a href="tel:09050156663">090501 56663</a>
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-12 h-12 bg-amber-50 text-amber-600 rounded-2xl flex items-center justify-center shrink-0">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Working Hours</h4>
                  <p className="text-slate-600">
                    Mon - Sun: 10:00 AM - 08:00 PM
                  </p>
                  <p className="text-orange-600 text-sm font-bold mt-1">Open Now</p>
                </div>
              </div>
            </div>

            <div className="mt-12 p-8 bg-slate-50 rounded-3xl border border-slate-100">
              <h4 className="font-bold text-slate-900 mb-4">Patient Support</h4>
              <p className="text-slate-600 text-sm mb-6">Need immediate help or have questions? Email us or call directly.</p>
              <div className="flex items-center gap-3 text-orange-600 font-bold">
                <Mail size={18} />
                <span>support@perfectsmile32.com</span>
              </div>
            </div>
          </div>

          <div className="h-[500px] rounded-[40px] overflow-hidden shadow-2xl border-4 border-white relative group">
            <div className="absolute inset-0 border-2 border-orange-600/0 group-hover:border-orange-600/20 transition-all pointer-events-none rounded-[36px] z-10"></div>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3476.9859560411314!2d76.96131491176228!3d29.35607385100067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390dd94489be406b%3A0x6b44a7065f3775b0!2sPerfect%20Smile%2032!5e0!3m2!1sen!2sin!4v1716321234567!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};
