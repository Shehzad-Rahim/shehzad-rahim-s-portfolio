
import React from 'react';
import MouseEffect from './components/MouseEffect';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import AIChat from './components/AIChat';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <main className="relative min-h-screen">
      {/* Background & Interactive Effects */}
      <MouseEffect />
      
      {/* Structural Components */}
      <Navbar />
      
      <div className="relative z-10">
        <Hero />
        
        {/* About Section - Brief Intro */}
        <section id="about" className="py-24 px-6 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="w-full aspect-square rounded-[3rem] bg-gradient-to-br from-blue-600 to-indigo-900 relative z-10 overflow-hidden">
                <img 
                  src="https://picsum.photos/1000/1000?grayscale" 
                  alt="Shehzad Rahim" 
                  className="w-full h-full object-cover mix-blend-overlay opacity-60"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-purple-500/10 rounded-full blur-3xl"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full border border-blue-500/20 rounded-[3rem] -rotate-6"></div>
            </div>
            
            <div>
              <p className="text-blue-400 font-bold uppercase tracking-widest text-sm mb-4">The Story</p>
              <h2 className="heading-font text-4xl md:text-5xl font-bold mb-6">Software engineer by trade, designer by heart.</h2>
              <p className="text-slate-400 text-lg leading-relaxed mb-6">
                With over 8 years in the digital industry, I've had the privilege of working with global startups and enterprise companies to deliver cutting-edge web applications.
              </p>
              <p className="text-slate-400 text-lg leading-relaxed mb-8">
                My philosophy is simple: build things that people love to use. I combine rigorous technical standards with an uncompromising eye for design detail.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <p className="text-3xl font-black heading-font text-white mb-1">8+</p>
                  <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">Years Experience</p>
                </div>
                <div>
                  <p className="text-3xl font-black heading-font text-white mb-1">50+</p>
                  <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">Projects Shipped</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Skills />
        <Projects />
        <Footer />
      </div>

      {/* Interactive AI Assistant */}
      <AIChat />
      
      {/* Global decorative background elements */}
      <div className="fixed top-1/4 -left-64 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="fixed bottom-1/4 -right-64 w-[500px] h-[500px] bg-purple-600/5 rounded-full blur-[100px] pointer-events-none"></div>
    </main>
  );
};

export default App;
