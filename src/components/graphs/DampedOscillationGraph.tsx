import React, { useState } from 'react';
import Plot from 'react-plotly.js';

export default function DampedOscillationGraph() {
  const [m, setM] = useState(1);
  const [c, setC] = useState(1);
  const [k, setK] = useState(10);

  const tValues = [];
  const xValues = [];

  // Equation: mx'' + cx' + kx = 0
  // Roots of mr^2 + cr + k = 0
  const discriminant = c * c - 4 * m * k;

  for (let t = 0; t <= 10; t += 0.05) {
    tValues.push(t);
    if (discriminant > 0) {
      // Sobreamortiguado
      const r1 = (-c + Math.sqrt(discriminant)) / (2 * m);
      const r2 = (-c - Math.sqrt(discriminant)) / (2 * m);
      // Let C1 = 1, C2 = 1
      xValues.push(Math.exp(r1 * t) + Math.exp(r2 * t));
    } else if (discriminant === 0) {
      // Críticamente amortiguado
      const r = -c / (2 * m);
      // Let C1 = 1, C2 = 1
      xValues.push((1 + t) * Math.exp(r * t));
    } else {
      // Subamortiguado
      const alpha = -c / (2 * m);
      const beta = Math.sqrt(-discriminant) / (2 * m);
      // Let C1 = 1, C2 = 0
      xValues.push(Math.exp(alpha * t) * Math.cos(beta * t));
    }
  }

  let typeText = "Subamortiguado";
  let typeColor = "text-scientific-math";
  if (discriminant > 0) {
    typeText = "Sobreamortiguado";
    typeColor = "text-scientific-error";
  } else if (discriminant === 0) {
    typeText = "Críticamente amortiguado";
    typeColor = "text-scientific-warning";
  }

  return (
    <div className="bg-scientific-card p-4 rounded-xl border border-scientific-math/20 glow-soft">
      <div className="mb-4 flex gap-4 items-center flex-wrap">
        <label className="flex flex-col gap-1 text-scientific-text-muted text-xs">
          <span>Masa (m): {m}</span>
          <input type="range" min="1" max="5" step="0.5" value={m} onChange={(e) => setM(parseFloat(e.target.value))} className="accent-scientific-example w-20" />
        </label>
        <label className="flex flex-col gap-1 text-scientific-text-muted text-xs">
          <span>Amort. (c): {c}</span>
          <input type="range" min="0" max="15" step="0.5" value={c} onChange={(e) => setC(parseFloat(e.target.value))} className="accent-scientific-warning w-20" />
        </label>
        <label className="flex flex-col gap-1 text-scientific-text-muted text-xs">
          <span>Resorte (k): {k}</span>
          <input type="range" min="1" max="20" step="1" value={k} onChange={(e) => setK(parseFloat(e.target.value))} className="accent-scientific-math w-20" />
        </label>
        <div className={`ml-auto font-mono text-sm border px-3 py-1 rounded bg-opacity-10 ${typeColor.replace('text', 'border')} ${typeColor.replace('text', 'bg')} ${typeColor}`}>
          Estado: {typeText}
        </div>
      </div>
      
      <div className="w-full overflow-hidden rounded-lg">
        <Plot
          data={[{
            x: tValues,
            y: xValues,
            type: 'scatter',
            mode: 'lines',
            name: 'x(t)',
            line: { color: discriminant > 0 ? '#FF5C8A' : discriminant === 0 ? '#FFD166' : '#00E5FF', width: 3 }
          }]}
          layout={{
            paper_bgcolor: 'transparent',
            plot_bgcolor: '#0A0E17',
            font: { color: '#EAF2FF', family: 'Inter, sans-serif' },
            xaxis: { title: 'Tiempo (t)', gridcolor: '#1A2333', zerolinecolor: '#00E5FF' },
            yaxis: { title: 'Posición x(t)', gridcolor: '#1A2333', zerolinecolor: '#00E5FF' },
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
