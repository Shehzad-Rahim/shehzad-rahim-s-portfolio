
import React, { useEffect, useRef, useState } from 'react';

const MouseEffect: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [trail, setTrail] = useState<{ x: number; y: number; id: number }[]>([]);
  const trailRef = useRef<{ x: number; y: number; id: number }[]>([]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      
      const newPoint = { x: e.clientX, y: e.clientY, id: Date.now() };
      trailRef.current = [newPoint, ...trailRef.current].slice(0, 15);
      setTrail([...trailRef.current]);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Primary Glow */}
      <div 
        className="absolute w-[600px] h-[600px] rounded-full opacity-10 blur-[120px] bg-blue-500 transition-transform duration-300 ease-out"
        style={{ 
          transform: `translate(${mousePos.x - 300}px, ${mousePos.y - 300}px)` 
        }}
      />
      
      {/* Secondary Accent */}
      <div 
        className="absolute w-[400px] h-[400px] rounded-full opacity-10 blur-[100px] bg-purple-500 transition-transform duration-500 ease-out"
        style={{ 
          transform: `translate(${mousePos.x - 200}px, ${mousePos.y - 200}px)` 
        }}
      />

      {/* Particles following mouse */}
      {trail.map((point, index) => (
        <div
          key={point.id}
          className="absolute w-2 h-2 rounded-full bg-blue-400 opacity-20 blur-[2px]"
          style={{
            left: point.x,
            top: point.y,
            transform: `scale(${1 - index * 0.05})`,
            opacity: 0.3 - index * 0.02,
            transition: 'opacity 0.2s linear'
          }}
        />
      ))}
    </div>
  );
};

export default MouseEffect;
