
import React from 'react';
import { Star, Quote } from 'lucide-react';

const testimonialList = [
  {
    text: '“Best dentist in Panipat, truly grateful for the professionalism and care shown. Highly recommended.”',
    author: 'Sunita Sharma',
    date: '1 month ago'
  },
  {
    text: '“One of the best dental clinics in Panipat, extremely gentle, reassuring, and compassionate.”',
    author: 'Rahul Verma',
    date: '3 months ago'
  },
  {
    text: '“Wisdom tooth surgery was smooth and comfortable. Everything went perfectly.”',
    author: 'Deepak Kumar',
    date: '2 weeks ago'
  },
  {
    text: '“The staff is friendly and they treat you like a family.”',
    author: 'Anjali Gupta',
    date: '5 months ago'
  }
];

export const Reviews: React.FC = () => {
  return (
    <section id="reviews" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/3">
            <div className="inline-block bg-orange-50 text-orange-600 px-4 py-1.5 rounded-full text-sm font-bold mb-6 border border-orange-100">
              Patient Love
            </div>
            <h2 className="text-4xl font-bold text-slate-900 mb-6 leading-tight">
              Trusted by 137+ Patients in Panipat
            </h2>
            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 shadow-inner">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-5xl font-black text-orange-600">4.9</span>
                <div>
                  <div className="flex text-orange-400">
                    {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="currentColor" />)}
                  </div>
                  <p className="text-slate-500 font-medium">137 Google Reviews</p>
                </div>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-xl shadow-sm border border-slate-100">
                <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" className="w-5 h-5" alt="Google" />
                <span className="text-sm font-bold text-slate-700">Verified Reviews</span>
              </div>
            </div>
          </div>

          <div className="lg:w-2/3 grid sm:grid-cols-2 gap-6">
            {testimonialList.map((review, idx) => (
              <div 
                key={idx} 
                className="bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:bg-white hover:shadow-xl hover:shadow-orange-100/20 transition-all relative group"
              >
                <Quote className="absolute top-6 right-8 text-orange-100/50 group-hover:text-orange-200 transition-colors" size={48} />
                <div className="flex text-orange-400 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <p className="text-slate-700 font-medium leading-relaxed mb-6 italic">
                  {review.text}
                </p>
                <div className="flex items-center gap-3 border-t border-slate-200 pt-4">
                  <div className="w-10 h-10 bg-orange-600 rounded-full flex items-center justify-center text-white font-bold">
                    {review.author[0]}
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-900 text-sm">{review.author}</h5>
                    <p className="text-slate-400 text-xs">{review.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
