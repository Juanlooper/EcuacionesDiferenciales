import React, { useState } from 'react';
import Plot from 'react-plotly.js';

export default function RootsComparisonGraph() {
  const [rootType, setRootType] = useState('distinct');

  const xValues = [];
  const yValues = [];

  for (let x = 0; x <= 5; x += 0.05) {
    xValues.push(x);
    if (rootType === 'distinct') {
      // y = C1 e^(2x) + C2 e^(-x), C1=1, C2=2
      yValues.push(Math.exp(0.5 * x) + 2 * Math.exp(-x));
    } else if (rootType === 'repeated') {
      // y = (C1 + C2 x) e^(rx), C1=1, C2=1, r=-0.5
      yValues.push((1 + x) * Math.exp(-0.5 * x));
    } else if (rootType === 'complex') {
      // y = e^(alpha x) (C1 cos(beta x) + C2 sin(beta x)), alpha=-0.5, beta=3
      yValues.push(Math.exp(-0.5 * x) * Math.cos(3 * x));
    }
  }

  return (
    <div className="bg-scientific-card p-4 rounded-xl border border-scientific-math/20 glow-soft">
      <div className="mb-4 flex gap-4 items-center flex-wrap">
        <label className="text-scientific-text-muted text-sm flex items-center gap-2">
          <span>Tipo de Raíces:</span>
          <select 
            value={rootType} 
            onChange={(e) => setRootType(e.target.value)}
            className="bg-scientific-bg border border-scientific-math/30 text-white rounded px-2 py-1 outline-none focus:border-scientific-math"
          >
            <option value="distinct">Reales Distintas (y = C₁e²ˣ + C₂e⁻ˣ)</option>
            <option value="repeated">Reales Repetidas (y = (C₁ + C₂x)e⁻⁰·⁵ˣ)</option>
            <option value="complex">Complejas Conjugadas (y = e⁻⁰·⁵ˣ cos(3x))</option>
          </select>
        </label>
      </div>
      
      <div className="w-full overflow-hidden rounded-lg">
        <Plot
          data={[{
            x: xValues,
            y: yValues,
            type: 'scatter',
            mode: 'lines',
            name: 'Solución y(x)',
            line: { 
              color: rootType === 'distinct' ? '#00E5FF' : rootType === 'repeated' ? '#A78BFA' : '#00FFB3', 
              width: 3 
            }
          }]}
          layout={{
            paper_bgcolor: 'transparent',
            plot_bgcolor: '#0A0E17',
            font: { color: '#EAF2FF', family: 'Inter, sans-serif' },
            xaxis: { title: 'x', gridcolor: '#1A2333', zerolinecolor: '#00E5FF' },
            yaxis: { title: 'y', gridcolor: '#1A2333', zerolinecolor: '#00E5FF' },
            margin: { l: 50, r: 20, t: 20, b: 50 },
            autosize: true,
            transition: { duration: 0 }
          }}
          useResizeHandler={true}
          style={{ width: '100%', height: '400px' }}
          config={{ responsive: true, displayModeBar: false }}
        />
      </div>
    </div>
  );
}
