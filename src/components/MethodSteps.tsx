import React from 'react';
import { StepByStep } from './StepByStep';
import { MathBlock } from './MathBlock';

export const MethodSteps: React.FC = () => {
  const auxSteps = [
    {
      id: 1,
      title: 'Plantear la ecuación',
      content: (
        <div>
          <p className="mb-2">Dada una ecuación diferencial lineal homogénea de segundo orden con coeficientes constantes:</p>
          <MathBlock math={"y'' - 5y' + 6y = 0"} block className="bg-scientific-bg/50 p-4 rounded-lg" />
        </div>
      )
    },
    {
      id: 2,
      title: 'Proponer una solución exponencial',
      content: (
        <div>
          <p className="mb-2">El método asume una solución de la forma <MathBlock math={"y = e^{rx}"} />. Calculamos sus derivadas:</p>
          <div className="bg-scientific-bg/50 p-4 rounded-lg space-y-2">
            <MathBlock math={"y' = re^{rx}"} block />
            <MathBlock math={"y'' = r^2e^{rx}"} block />
          </div>
        </div>
      )
    },
    {
      id: 3,
      title: 'Sustituir y factorizar',
      content: (
        <div>
          <p className="mb-2">Sustituyendo en la ecuación original y factorizando el término común:</p>
          <div className="bg-scientific-bg/50 p-4 rounded-lg space-y-2">
            <MathBlock math={"r^2e^{rx} - 5re^{rx} + 6e^{rx} = 0"} block />
            <MathBlock math={"e^{rx}(r^2 - 5r + 6) = 0"} block />
          </div>
        </div>
      )
    },
    {
      id: 4,
      title: 'Resolver la ecuación auxiliar',
      content: (
        <div>
          <p className="mb-2">Dado que <MathBlock math={"e^{rx} \\neq 0"} />, la expresión entre paréntesis debe ser cero. Esta es la ecuación auxiliar:</p>
          <div className="bg-scientific-bg/50 p-4 rounded-lg space-y-2">
            <MathBlock math={"r^2 - 5r + 6 = 0"} block />
            <MathBlock math={"(r-2)(r-3) = 0"} block />
            <p className="text-center text-scientific-math mt-2 text-lg">Raíces: <MathBlock math={"r_1=2, \\quad r_2=3"} /></p>
          </div>
        </div>
      )
    },
    {
      id: 5,
      title: 'Construir la solución general',
      content: (
        <div>
          <p className="mb-2">Por el principio de superposición, la solución general es una combinación lineal:</p>
          <MathBlock math={"y = C_1e^{2x} + C_2e^{3x}"} block className="bg-scientific-math/10 border border-scientific-math/30 p-4 rounded-lg" />
        </div>
      )
    }
  ];

  return <StepByStep steps={auxSteps} />;
};
