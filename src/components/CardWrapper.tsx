'use client';

import { motion } from 'framer-motion';
import { Tilt } from 'react-tilt';
import { useRef, useState } from 'react';

const defaultTiltOptions = {
	reverse:        false,  // reverse the tilt direction
	max:            15,     // max tilt rotation (degrees)
	perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
	scale:          1.02,    // 2 = 200%, 1.5 = 150%, etc..
	speed:          1000,   // Speed of the enter/exit transition
	transition:     true,   // Set a transition on enter/exit.
	axis:           null,   // What axis should be disabled. Can be X or Y.
	reset:          true,    // If the tilt effect has to be reset on exit.
	easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
}

interface CardWrapperProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export default function CardWrapper({ children, className = '', delay = 0 }: CardWrapperProps) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.95, filter: 'blur(10px)' }}
      whileInView={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.8, delay: delay, ease: [0.16, 1, 0.3, 1] }}
      className="h-full w-full"
    >
      <Tilt options={defaultTiltOptions} style={{ height: '100%', width: '100%' }}>
        <div 
          ref={cardRef}
          className={`relative overflow-hidden h-full ${className}`}
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Glow Effect */}
          <div
            className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 z-10 rounded-[inherit]"
            style={{
              opacity: isHovered ? 1 : 0,
              background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(139, 92, 246, 0.15), transparent 40%)`,
            }}
          />
          {children}
        </div>
      </Tilt>
    </motion.div>
  );
}
