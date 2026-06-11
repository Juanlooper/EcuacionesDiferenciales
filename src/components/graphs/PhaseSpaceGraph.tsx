import React from 'react';
import Plot from 'react-plotly.js';

export default function PhaseSpaceGraph() {
  const xValues = [];
  const vValues = [];

  // Phase space of a simple harmonic oscillator: x'' + x = 0
  // x(t) = cos(t), v(t) = -sin(t)
  for (let t = 0; t <= Math.PI * 2 + 0.1; t += 0.05) {
    xValues.push(Math.cos(t));
    vValues.push(-Math.sin(t));
  }

  // Phase space of a damped oscillator: x'' + 0.2x' + x = 0
  const xDamped = [];
  const vDamped = [];
  for (let t = 0; t <= Math.PI * 6; t += 0.05) {
    const x = Math.exp(-0.1 * t) * Math.cos(Math.sqrt(0.99) * t);
    const v = -0.1 * Math.exp(-0.1 * t) * Math.cos(Math.sqrt(0.99) * t) - Math.sqrt(0.99) * Math.exp(-0.1 * t) * Math.sin(Math.sqrt(0.99) * t);
    xDamped.push(x);
    vDamped.push(v);
  }

  return (
    <div className="bg-scientific-card p-4 rounded-xl border border-scientific-math/20 glow-soft">
      <div className="mb-4">
        <h4 className="text-white font-title text-sm">Espacio de Fase (x vs dx/dt)</h4>
        <p className="text-scientific-text-muted text-xs">Comparación entre un sistema conservativo (azul) y uno disipativo (violeta).</p>
      </div>
      
      <div className="w-full overflow-hidden rounded-lg">
        <Plot
          data={[
            {
              x: xValues,
              y: vValues,
              type: 'scatter',
              mode: 'lines',
              name: 'Oscilador Armónico',
              line: { color: '#00E5FF', width: 2 }
            },
            {
              x: xDamped,
              y: vDamped,
              type: 'scatter',
              mode: 'lines',
              name: 'Oscilador Amortiguado',
              line: { color: '#A78BFA', width: 2 }
            }
          ]}
          layout={{
            paper_bgcolor: 'transparent',
            plot_bgcolor: '#0A0E17',
            font: { color: '#EAF2FF', family: 'Inter, sans-serif' },
            xaxis: { title: 'Posición (x)', gridcolor: '#1A2333', zerolinecolor: '#00E5FF', scaleanchor: 'y', scaleratio: 1 },
            yaxis: { title: 'Velocidad (dx/dt)', gridcolor: '#1A2333', zerolinecolor: '#00E5FF' },
            margin: { l: 50, r: 20, t: 20, b: 50 },
            autosize: true,
            showlegend: true,
            legend: { x: 0, y: 1, bgcolor: 'rgba(10, 14, 23, 0.8)' }
          }}
          useResizeHandler={true}
          style={{ width: '100%', height: '400px' }}
          config={{ responsive: true, displayModeBar: false }}
        />
      </div>
    </div>
  );
}
