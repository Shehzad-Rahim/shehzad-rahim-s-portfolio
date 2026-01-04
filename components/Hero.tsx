
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 px-6">
      <div className="text-center max-w-4xl z-10">
        <div className="inline-block px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/5 text-blue-400 text-xs font-bold uppercase tracking-widest mb-6 animate-pulse">
          Available for new opportunities
        </div>
        
        <h1 className="heading-font text-5xl md:text-8xl font-black mb-6 leading-[1.1] tracking-tight">
          Welcome to <br />
          <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent glow-text">
            Shehzad Rahim's
          </span>
          <br /> Portfolio
        </h1>
        
        <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Crafting exceptional digital experiences at the intersection of 
          <span className="text-white font-medium"> intelligent engineering</span> and 
          <span className="text-white font-medium"> intuitive design</span>. 
          Expert in React, TypeScript, and AI-driven solutions.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#projects" className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white text-slate-950 font-bold hover:bg-blue-50 transition-all shadow-xl shadow-white/10 flex items-center justify-center gap-2 group">
            View My Work
            <i className="fa-solid fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
          </a>
          <a href="#contact" className="w-full sm:w-auto px-8 py-4 rounded-xl glass font-bold hover:bg-white/10 transition-all border border-white/10 flex items-center justify-center gap-2">
            Let's Talk
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-40">
        <i className="fa-solid fa-chevron-down text-2xl"></i>
      </div>
    </section>
  );
};

export default Hero;
