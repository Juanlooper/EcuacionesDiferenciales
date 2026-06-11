import React from 'react';
import { motion } from 'framer-motion';

interface InfoCardProps {
  title?: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export const InfoCard: React.FC<InfoCardProps> = ({ title, icon, children, className = '', delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
      className={`bg-scientific-card border border-scientific-math/20 rounded-xl p-6 glow-soft relative overflow-hidden group ${className}`}
    >
      {/* Decorative gradient corner */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-scientific-math/5 rounded-bl-full transition-transform duration-500 group-hover:scale-110 pointer-events-none" />
      
      {title && (
        <div className="flex items-center gap-3 mb-4">
          {icon && <div className="text-scientific-math">{icon}</div>}
          <h3 className="font-title text-lg font-bold text-white tracking-wide">{title}</h3>
        </div>
      )}
      <div className="text-scientific-text relative z-10 leading-relaxed space-y-4">
        {children}
      </div>
    </motion.div>
  );
};
