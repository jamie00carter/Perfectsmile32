
import React from 'react';
import { Star, Zap, CreditCard, Users } from 'lucide-react';

const indicators = [
  {
    icon: <Star className="text-orange-500" size={32} />,
    title: '4.9 Google Rating',
    desc: 'Based on 137 verified reviews'
  },
  {
    icon: <Zap className="text-amber-500" size={32} />,
    title: 'Painless Treatment',
    desc: 'Gentle & compassionate care'
  },
  {
    icon: <CreditCard className="text-slate-600" size={32} />,
    title: 'Affordable Pricing',
    desc: 'Transparent dental care costs'
  },
  {
    icon: <Users className="text-orange-400" size={32} />,
    title: 'Family-Like Staff',
    desc: 'Friendly & caring environment'
  }
];

export const TrustIndicators: React.FC = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {indicators.map((item, idx) => (
            <div 
              key={idx} 
              className="p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:shadow-xl hover:shadow-orange-100/30 hover:-translate-y-1 transition-all duration-300 animate-in slide-in-from-bottom-8"
              style={{ animationDelay: `${idx * 150}ms` }}
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="font-bold text-slate-900 text-lg mb-1">{item.title}</h3>
              <p className="text-slate-500 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
