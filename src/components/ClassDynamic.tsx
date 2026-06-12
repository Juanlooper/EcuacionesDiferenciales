import React, { useState } from 'react';
import { Trophy, Eye, ArrowRight, CheckCircle2 } from 'lucide-react';
import { MathBlock } from './MathBlock';

const problems = [
  {
    title: "Nivel 1: Calentamiento",
    equation: "y'' - y = 0",
    question: "Encuentra la ecuación auxiliar y sus raíces.",
    answerMath: "r^2 - 1 = 0 \\Rightarrow r = \\pm 1",
    answerText: "Raíces reales distintas. ¡El sistema es inestable (crecimiento exponencial)!"
  },
  {
    title: "Nivel 2: Intermedio",
    equation: "y'' + 9y = 0",
    question: "¿Cuáles son las raíces y qué tipo de movimiento genera?",
    answerMath: "r^2 + 9 = 0 \\Rightarrow r = \\pm 3i",
    answerText: "Raíces complejas puras. Genera oscilaciones perpetuas (movimiento armónico simple)."
  },
  {
    title: "Nivel 3: Trampa Mortal",
    equation: "y'' + 4y' + 4y = 0",
    question: "Halla las raíces de la ecuación auxiliar.",
    answerMath: "(r + 2)^2 = 0 \\Rightarrow r = -2",
    answerText: "Raíz real repetida (multiplicidad 2). Es un sistema críticamente amortiguado."
  }
];

export default function ClassDynamic() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  const problem = problems[currentIndex];

  const handleNext = () => {
    if (currentIndex < problems.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setShowAnswer(false);
    } else {
      setCurrentIndex(0);
      setShowAnswer(false);
    }
  };

  return (
    <div className="bg-scientific-bg border border-[#F59E0B]/30 rounded-2xl p-8 shadow-[0_0_30px_rgba(245,158,11,0.1)] relative overflow-hidden transition-all">
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#F59E0B]/10 rounded-full blur-[80px] pointer-events-none"></div>
      
      <div className="flex items-center gap-4 mb-8 relative z-10">
        <div className="w-14 h-14 rounded-xl bg-[#F59E0B]/20 flex items-center justify-center text-[#F59E0B] shadow-[0_0_15px_rgba(245,158,11,0.3)]">
          <Trophy size={32} />
        </div>
        <div>
          <h3 className="font-title text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-[#F59E0B]">
            ¡Dinámica por un Premio!
          </h3>
          <p className="text-[#F59E0B]/80 text-sm mt-1">El primero en responder correctamente gana.</p>
        </div>
      </div>
      
      <div className="bg-scientific-card/80 border border-[#F59E0B]/20 p-8 rounded-xl mb-8 relative z-10">
        <div className="flex justify-between items-center mb-6 border-b border-[#F59E0B]/10 pb-4">
          <span className="text-[#F59E0B] font-mono font-bold uppercase tracking-widest">{problem.title}</span>
          <span className="px-3 py-1 bg-[#F59E0B]/10 text-[#F59E0B] rounded-full text-xs font-bold">
            Reto {currentIndex + 1} de {problems.length}
          </span>
        </div>
        
        <p className="text-white mb-6 text-xl text-center font-light">{problem.question}</p>
        <div className="flex justify-center">
          <MathBlock math={problem.equation} block className="bg-scientific-bg/80 px-8 py-6 rounded-xl text-3xl border border-[#F59E0B]/30 shadow-lg" />
        </div>
      </div>

      <div className="relative z-10 min-h-[140px]">
        {showAnswer ? (
          <div className="bg-scientific-success/10 border border-scientific-success/30 p-6 rounded-xl animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="flex items-center gap-2 mb-4 text-scientific-success font-bold text-lg justify-center">
              <CheckCircle2 size={24} />
              <span>Respuesta Correcta:</span>
            </div>
            <div className="flex justify-center mb-4">
              <MathBlock math={problem.answerMath} block className="text-2xl text-white" />
            </div>
            <p className="text-scientific-text-muted text-center text-lg">{problem.answerText}</p>
          </div>
        ) : (
          <div className="flex justify-center items-center h-full">
            <button 
              onClick={() => setShowAnswer(true)}
              className="flex items-center gap-3 px-8 py-4 bg-[#F59E0B]/10 text-[#F59E0B] hover:bg-[#F59E0B] hover:text-scientific-bg border-2 border-[#F59E0B]/50 hover:border-[#F59E0B] rounded-xl transition-all duration-300 font-bold text-lg group hover:shadow-[0_0_20px_rgba(245,158,11,0.4)] hover:-translate-y-1"
            >
              <Eye size={24} className="group-hover:animate-pulse" />
              Revelar Respuesta
            </button>
          </div>
        )}
      </div>

      <div className="flex justify-end mt-6 pt-6 border-t border-[#F59E0B]/10 relative z-10">
        <button 
          onClick={handleNext}
          className="flex items-center gap-2 px-6 py-3 text-white/70 hover:text-white hover:bg-white/5 rounded-lg transition-colors font-bold group"
        >
          {currentIndex < problems.length - 1 ? 'Siguiente Reto' : 'Reiniciar Dinámica'}
          <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
}
