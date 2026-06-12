import React, { useState } from 'react';
import Plot from 'react-plotly.js';

export default function MassSpringGraph() {
  const [m, setM] = useState(1);
  const [k, setK] = useState(9);

  const tValues = [];
  const xValues = [];

  // Equation: mx'' + kx = 0 => x'' + (k/m)x = 0
  // omega = sqrt(k/m)
  // Solution: x(t) = C1 cos(omega t) + C2 sin(omega t). Let C1=1, C2=0
  const omega = Math.sqrt(k / m);

  for (let t = 0; t <= 10; t += 0.05) {
    tValues.push(t);
    xValues.push(Math.cos(omega * t));
  }

  return (
    <div className="bg-scientific-card p-4 rounded-xl border border-scientific-math/20 glow-soft">
      <div className="mb-4 flex gap-6 items-center flex-wrap">
        <label className="flex items-center gap-3 text-scientific-text-muted text-sm">
          <span>Masa (m):</span>
          <input 
            type="range" min="0.5" max="5" step="0.5" 
            value={m} onChange={(e) => setM(parseFloat(e.target.value))} 
            className="accent-scientific-example w-24" 
          />
          <span className="w-8">{m.toFixed(1)}</span>
        </label>
        <label className="flex items-center gap-3 text-scientific-text-muted text-sm">
          <span>Constante (k):</span>
          <input 
            type="range" min="1" max="20" step="1" 
            value={k} onChange={(e) => setK(parseFloat(e.target.value))} 
            className="accent-scientific-math w-24" 
          />
          <span className="w-8">{k}</span>
        </label>
        <div className="ml-auto text-scientific-success font-mono text-sm border border-scientific-success/30 px-3 py-1 rounded bg-scientific-success/10">
          ω = {omega.toFixed(2)} rad/s
        </div>
      </div>
      
      <div className="w-full overflow-hidden rounded-lg">
        <Plot
          data={[{
            x: tValues,
            y: xValues,
            type: 'scatter',
            mode: 'lines',
            name: 'Posición x(t)',
            line: { color: '#00E5FF', width: 3 }
          }]}
          layout={{
            paper_bgcolor: 'transparent',
            plot_bgcolor: '#0A0E17',
            font: { color: '#EAF2FF', family: 'Inter, sans-serif' },
            xaxis: { title: 'Tiempo (t)', gridcolor: '#1A2333', zerolinecolor: '#00E5FF' },
            yaxis: { title: 'Posición x(t)', gridcolor: '#1A2333', zerolinecolor: '#00E5FF', range: [-1.5, 1.5] },
            margin: { l: 50, r: 20, t: 20, b: 50 },
            autosize: true,
            transition: { duration: 0 }
          }}
          useResizeHandler={true}
          style={{ width: '100%', height: '350px' }}
          config={{ responsive: true, displayModeBar: false }}
        />
      </div>
    </div>
  );
}
