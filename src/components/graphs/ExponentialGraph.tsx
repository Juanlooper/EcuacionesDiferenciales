import React, { useState } from 'react';
import Plot from 'react-plotly.js';

export default function ExponentialGraph() {
  const [showR1, setShowR1] = useState(true);
  const [showR2, setShowR2] = useState(true);
  const [scale, setScale] = useState(1);

  const xValues = [];
  const y1Values = [];
  const y2Values = [];

  for (let x = -2; x <= 2; x += 0.1) {
    xValues.push(x);
    y1Values.push(Math.exp(2 * x) * scale);
    y2Values.push(Math.exp(3 * x) * scale);
  }

  return (
    <div className="bg-scientific-card p-4 rounded-xl border border-scientific-math/20 glow-soft">
      <div className="mb-4 flex gap-4 items-center flex-wrap">
        <label className="flex items-center gap-2 text-scientific-text-muted text-sm cursor-pointer">
          <input type="checkbox" checked={showR1} onChange={() => setShowR1(!showR1)} className="accent-scientific-math" />
          <span>Mostrar y = e^(2x)</span>
        </label>
        <label className="flex items-center gap-2 text-scientific-text-muted text-sm cursor-pointer">
          <input type="checkbox" checked={showR2} onChange={() => setShowR2(!showR2)} className="accent-scientific-example" />
          <span>Mostrar y = e^(3x)</span>
        </label>
        <div className="flex items-center gap-2 text-scientific-text-muted text-sm ml-auto">
          <span>Escala:</span>
          <input type="range" min="0.1" max="5" step="0.1" value={scale} onChange={(e) => setScale(parseFloat(e.target.value))} className="accent-scientific-math" />
          <span className="w-8 text-right">{scale.toFixed(1)}</span>
        </div>
      </div>
      
      <div className="w-full overflow-hidden rounded-lg">
        <Plot
          data={[
            ...(showR1 ? [{
              x: xValues,
              y: y1Values,
              type: 'scatter',
              mode: 'lines',
              name: 'y = e^(2x)',
              line: { color: '#00E5FF', width: 3 }
            }] : []),
            ...(showR2 ? [{
              x: xValues,
              y: y2Values,
              type: 'scatter',
              mode: 'lines',
              name: 'y = e^(3x)',
              line: { color: '#A78BFA', width: 3 }
            }] : [])
          ]}
          layout={{
            paper_bgcolor: 'transparent',
            plot_bgcolor: '#0A0E17',
            font: { color: '#EAF2FF', family: 'Inter, sans-serif' },
            xaxis: { title: 'x', gridcolor: '#1A2333', zerolinecolor: '#00E5FF' },
            yaxis: { title: 'y', gridcolor: '#1A2333', zerolinecolor: '#00E5FF' },
            margin: { l: 50, r: 20, t: 20, b: 50 },
            autosize: true,
            showlegend: true,
            legend: { x: 0, y: 1, bgcolor: 'rgba(10, 14, 23, 0.8)' },
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
