
import React from 'react';
import { Skill } from '../types';

const skills: Skill[] = [
  { name: 'React', icon: 'fa-brands fa-react', level: 95, category: 'Frontend' },
  { name: 'TypeScript', icon: 'fa-solid fa-code', level: 90, category: 'Frontend' },
  { name: 'Node.js', icon: 'fa-brands fa-node-js', level: 85, category: 'Backend' },
  { name: 'Tailwind CSS', icon: 'fa-solid fa-palette', level: 98, category: 'Frontend' },
  { name: 'Next.js', icon: 'fa-solid fa-bolt', level: 88, category: 'Frontend' },
  { name: 'PostgreSQL', icon: 'fa-solid fa-database', level: 80, category: 'Backend' },
  { name: 'Gemini API', icon: 'fa-solid fa-brain', level: 85, category: 'Tools' },
  { name: 'Docker', icon: 'fa-brands fa-docker', level: 75, category: 'Tools' },
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="heading-font text-4xl md:text-5xl font-bold mb-4">Technical Expertise</h2>
        <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full"></div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {skills.map((skill) => (
          <div 
            key={skill.name}
            className="group p-6 rounded-2xl glass hover:border-blue-500/50 transition-all duration-500 flex flex-col items-center text-center"
          >
            <div className="w-16 h-16 rounded-xl bg-slate-800 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-blue-500 transition-all duration-300">
              <i className={`${skill.icon} text-2xl text-blue-400 group-hover:text-white`}></i>
            </div>
            <h3 className="font-bold text-lg mb-2">{skill.name}</h3>
            <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
              <div 
                className="h-full bg-blue-500 rounded-full transition-all duration-1000 group-hover:bg-indigo-400"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
