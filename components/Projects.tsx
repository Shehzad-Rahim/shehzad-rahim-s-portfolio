
import React from 'react';
import { Project } from '../types';

const projects: Project[] = [
  {
    id: '1',
    title: 'Aura AI Dashboard',
    description: 'A comprehensive analytics dashboard for SaaS products featuring real-time Gemini-driven insights and forecasting.',
    image: 'https://picsum.photos/800/600?random=1',
    tags: ['React', 'D3.js', 'Node.js', 'Gemini'],
    link: '#'
  },
  {
    id: '2',
    title: 'Lumina Commerce',
    description: 'Next-generation e-commerce platform with 3D product previews and instant voice-guided checkout.',
    image: 'https://picsum.photos/800/600?random=2',
    tags: ['Next.js', 'Three.js', 'Tailwind', 'Stripe'],
    link: '#'
  },
  {
    id: '3',
    title: 'Echo Chat Protocol',
    description: 'High-security, decentralized messaging application built on top of WebRTC with end-to-end encryption.',
    image: 'https://picsum.photos/800/600?random=3',
    tags: ['TypeScript', 'WebRTC', 'Redux', 'Socket.io'],
    link: '#'
  }
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div className="max-w-xl">
          <h2 className="heading-font text-4xl md:text-5xl font-bold mb-4">Selected Works</h2>
          <p className="text-slate-400 text-lg">A collection of projects where I've pushed the boundaries of modern web development and user experience.</p>
        </div>
        <button className="text-blue-400 font-bold hover:text-blue-300 transition-colors flex items-center gap-2 group">
          View all archives
          <i className="fa-solid fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div key={project.id} className="group flex flex-col bg-slate-900/40 rounded-3xl overflow-hidden border border-white/5 hover:border-blue-500/30 transition-all duration-500">
            <div className="relative overflow-hidden aspect-[4/3]">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <a href={project.link} className="p-4 rounded-full bg-white text-slate-950 scale-0 group-hover:scale-100 transition-transform delay-100">
                  <i className="fa-solid fa-arrow-up-right-from-square text-xl"></i>
                </a>
              </div>
            </div>
            <div className="p-8 flex-grow">
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-[10px] font-bold tracking-widest uppercase">
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="heading-font text-2xl font-bold mb-3">{project.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">{project.description}</p>
              <div className="pt-4 mt-auto border-t border-white/5">
                <a href={project.link} className="flex items-center gap-2 text-sm font-semibold text-white hover:text-blue-400 transition-colors">
                  Case Study
                  <i className="fa-solid fa-chevron-right text-[10px]"></i>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
