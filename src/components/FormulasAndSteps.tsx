import React from 'react';
import { StepByStep } from './StepByStep';
import { MathBlock } from './MathBlock';

export default function FormulasAndSteps() {
  const steps = [
    {
      id: 1,
      title: "Paso 1: Identificar la ecuación",
      content: (
        <div>
          <p className="mb-2">Asegúrate de que la ecuación tenga la forma estándar lineal homogénea:</p>
          <MathBlock math="a_n y^{(n)} + \cdots + a_1 y' + a_0 y = 0" block className="bg-scientific-card p-3 rounded" />
          <p className="mt-2 text-sm text-scientific-text-muted">Ejemplo: <MathBlock math="y'' - 5y' + 6y = 0" /></p>
        </div>
      )
    },
    {
      id: 2,
      title: "Paso 2: Escribir la Ecuación Auxiliar",
      content: (
        <div>
          <p className="mb-2">Sustituye cada derivada <MathBlock math="y^{(k)}" /> por <MathBlock math="r^k" />:</p>
          <MathBlock math="a_n r^n + \cdots + a_1 r + a_0 = 0" block className="bg-scientific-card p-3 rounded" />
          <p className="mt-2 text-sm text-scientific-text-muted">Ejemplo: <MathBlock math="r^2 - 5r + 6 = 0" /></p>
        </div>
      )
    },
    {
      id: 3,
      title: "Paso 3: Resolver la Ecuación Algebraica",
      content: (
        <div>
          <p className="mb-2">Encuentra las raíces usando factorización o la fórmula general:</p>
          <MathBlock math="r = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}" block className="bg-scientific-card p-3 rounded" />
          <p className="mt-2 text-sm text-scientific-text-muted">Ejemplo: Factorizando <MathBlock math="(r-2)(r-3) = 0" /> obtenemos <MathBlock math="r_1=2, r_2=3" /></p>
        </div>
      )
    },
    {
      id: 4,
      title: "Paso 4: Construir la Solución General",
      content: (
        <div>
          <p className="mb-2">Revisa el tipo de raíz en el formulario y escribe la solución:</p>
          <MathBlock math="y(x) = C_1 e^{2x} + C_2 e^{3x}" block className="bg-scientific-card p-3 rounded" />
          <p className="mt-2 text-sm text-scientific-success font-bold flex items-center gap-2">
            ¡Problema Resuelto! 🎉
          </p>
        </div>
      )
    }
  ];

  return (
    <div className="grid lg:grid-cols-2 gap-12 items-start">
      {/* Formulario */}
      <div>
        <h3 className="font-title text-2xl text-white mb-6 flex items-center gap-2">
          Formulario Rápido
        </h3>
        <p className="text-scientific-text-muted mb-6">Usa esta tabla como referencia al momento de construir tu solución final según las raíces obtenidas.</p>
        
        <div className="space-y-4">
          <div className="bg-scientific-bg/50 p-5 rounded-xl border-l-4 border-scientific-math glow-soft transition-all hover:bg-scientific-card">
            <h4 className="text-white font-bold mb-2 text-sm flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-scientific-math"></div>
              Raíces Reales Distintas <span className="opacity-70 font-normal"><MathBlock math="(r_1 \neq r_2)" /></span>
            </h4>
            <MathBlock math="y = C_1e^{r_1x} + C_2e^{r_2x} + \cdots" block className="text-scientific-math bg-scientific-bg p-3 rounded" />
          </div>
          
          <div className="bg-scientific-bg/50 p-5 rounded-xl border-l-4 border-[#A78BFA] glow-soft transition-all hover:bg-scientific-card">
            <h4 className="text-white font-bold mb-2 text-sm flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#A78BFA]"></div>
              Raíces Reales Repetidas <span className="opacity-70 font-normal"><MathBlock math="(r_1 = r_2 = r)" /></span>
            </h4>
            <MathBlock math="y = C_1e^{rx} + C_2xe^{rx} + C_3x^2e^{rx} \cdots" block className="text-[#A78BFA] bg-scientific-bg p-3 rounded" />
          </div>

          <div className="bg-scientific-bg/50 p-5 rounded-xl border-l-4 border-scientific-success glow-soft transition-all hover:bg-scientific-card">
            <h4 className="text-white font-bold mb-2 text-sm flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-scientific-success"></div>
              Raíces Complejas <span className="opacity-70 font-normal"><MathBlock math="(\alpha \pm \beta i)" /></span>
            </h4>
            <MathBlock math="y = e^{\alpha x}(C_1\cos\beta x + C_2\sin\beta x)" block className="text-scientific-success bg-scientific-bg p-3 rounded" />
          </div>
        </div>
      </div>

      {/* Paso a paso */}
      <div className="sticky top-24">
        <h3 className="font-title text-2xl text-white mb-6">Guía Paso a Paso</h3>
        <StepByStep steps={steps} />
      </div>
    </div>
  );
}
