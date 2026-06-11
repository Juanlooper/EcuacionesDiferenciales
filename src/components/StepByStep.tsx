import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, RotateCcw } from 'lucide-react';

export interface Step {
  id: number;
  title: string;
  content: React.ReactNode;
}

interface StepByStepProps {
  steps: Step[];
}

export const StepByStep: React.FC<StepByStepProps> = ({ steps }) => {
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const reset = () => {
    setCurrentStep(0);
  };

  return (
    <div className="bg-scientific-card/50 border border-scientific-math/20 rounded-xl p-6 glow-soft">
      <div className="flex justify-between items-center mb-6 border-b border-scientific-math/10 pb-4">
        <h3 className="font-title text-lg text-white">Desarrollo Paso a Paso</h3>
        <div className="flex gap-2">
          <button 
            onClick={reset}
            className="p-2 rounded-lg bg-scientific-bg hover:bg-scientific-math/20 text-scientific-text-muted hover:text-white transition-colors"
            title="Reiniciar"
          >
            <RotateCcw size={18} />
          </button>
          <button 
            onClick={nextStep}
            disabled={currentStep >= steps.length - 1}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-scientific-math/10 hover:bg-scientific-math/20 text-scientific-math font-medium disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            Siguiente Paso <ChevronRight size={18} />
          </button>
        </div>
      </div>

      <div className="space-y-4">
        <AnimatePresence initial={false}>
          {steps.slice(0, currentStep + 1).map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, x: -20, height: 0 }}
              animate={{ opacity: 1, x: 0, height: 'auto' }}
              transition={{ duration: 0.4 }}
              className="bg-scientific-bg border-l-2 border-scientific-math p-4 rounded-r-lg relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-scientific-math/5 to-transparent pointer-events-none" />
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-scientific-math/20 flex items-center justify-center text-scientific-math font-bold font-mono text-sm border border-scientific-math/30">
                  {index + 1}
                </div>
                <div className="flex-1">
                  <h4 className="text-scientific-text-muted font-medium mb-2">{step.title}</h4>
                  <div className="text-white">
                    {step.content}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};
