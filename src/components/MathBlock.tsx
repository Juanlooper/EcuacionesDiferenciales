import React from 'react';
import { MathJax, MathJaxContext } from 'better-react-mathjax';

interface MathBlockProps {
  math: string;
  block?: boolean;
  className?: string;
}

const config = {
  loader: { load: ['[tex]/html'] },
  tex: {
    packages: { '[+]': ['html'] },
    inlineMath: [['$', '$'], ['\\(', '\\)']],
    displayMath: [['$$', '$$'], ['\\[', '\\]']]
  }
};

export const MathBlock: React.FC<MathBlockProps> = ({ math, block = false, className = '' }) => {
  return (
    <MathJaxContext config={config}>
      <span className={`inline-block ${className} ${block ? 'w-full text-center my-4 py-4 px-6 border border-scientific-math/30 bg-scientific-bg/50 rounded-xl glow-soft' : ''}`}>
        <MathJax inline={!block}>
          {block ? `\\[${math}\\]` : `\\(${math}\\)`}
        </MathJax>
      </span>
    </MathJaxContext>
  );
};
