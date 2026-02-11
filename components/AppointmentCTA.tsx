
import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

export const AppointmentCTA: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.phone) {
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 5000);
      setFormData({ name: '', phone: '' });
    }
  };

  return (
    <section id="booking" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-orange-50/50 -z-10"></div>
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto bg-white rounded-[40px] shadow-2xl overflow-hidden flex flex-col md:flex-row border border-slate-100">
          <div className="md:w-1/2 p-10 lg:p-16 bg-orange-600 text-white flex flex-col justify-center relative">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-bl-full"></div>
            <h2 className="text-3xl lg:text-5xl font-bold mb-6 relative z-10">Get Relief Today.</h2>
            <p className="text-orange-50 text-lg mb-8 relative z-10">
              Book your appointment now and take the first step towards a healthier, brighter smile. Our team is ready to help you!
            </p>
            <div className="flex items-center gap-4 text-sm font-bold relative z-10">
              <div className="flex -space-x-2">
                {[1, 2, 3].map(i => (
                  <div key={i} className="w-8 h-8 rounded-full bg-orange-400 border-2 border-orange-600 flex items-center justify-center text-[10px]">
                    ★
                  </div>
                ))}
              </div>
              <span>Trusted by 500+ Local Families</span>
            </div>
          </div>

          <div className="md:w-1/2 p-10 lg:p-16">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Full Name</label>
                  <input 
                    type="text" 
                    required
                    placeholder="Enter your name"
                    className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-orange-600 focus:bg-white transition-all"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Phone Number</label>
                  <input 
                    type="tel" 
                    required
                    placeholder="e.g., 090501 56663"
                    className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-orange-600 focus:bg-white transition-all"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
                <button 
                  type="submit" 
                  className="w-full bg-orange-600 text-white py-5 rounded-2xl font-bold text-lg shadow-xl shadow-orange-100 hover:bg-orange-700 hover:-translate-y-1 transition-all flex items-center justify-center gap-3"
                >
                  <Send size={20} />
                  Confirm Booking
                </button>
                <p className="text-xs text-center text-slate-400">
                  By clicking, you agree to be contacted for appointment scheduling.
                </p>
              </form>
            ) : (
              <div className="h-full flex flex-col items-center justify-center text-center py-10 animate-in zoom-in">
                <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle size={40} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Booking Requested!</h3>
                <p className="text-slate-500">Dr. Rama's team will call you within 15 minutes to confirm your slot.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
