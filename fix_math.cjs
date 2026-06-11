const fs = require('fs');

function fixMath(file) {
  let content = fs.readFileSync(file, 'utf8');
  content = content.replace(/math="([^"]+)"/g, (match, p1) => {
    let fixed = p1.replace(/\\/g, '\\\\');
    return `math={"${fixed}"}`;
  });
  fs.writeFileSync(file, content);
}

fixMath('src/pages/index.astro');
fixMath('src/components/MethodSteps.tsx');
console.log('Fixed math strings');
