import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative w-full h-[600px] overflow-hidden bg-gray-900 flex items-center">
      {/* Background with a gradient instead of image for now */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/20 z-10" />
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80')" }}
      />
      
      <div className="container mx-auto px-4 md:px-6 relative z-20 text-white">
        <div className="max-w-xl space-y-6">
          <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-sm font-medium tracking-wide uppercase">
            New Collection 2026
          </span>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Style Beyond <br /> Limits
          </h1>
          <p className="text-lg text-gray-300 max-w-md">
            Discover the latest trends in high-quality apparel designed for your everyday lifestyle. Elegance meets comfort.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-white text-black px-8 py-4 rounded-full font-bold flex items-center justify-center hover:bg-gray-200 transition-all group">
              Shop Men <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold flex items-center justify-center hover:bg-white/10 transition-all">
              Shop Women
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
