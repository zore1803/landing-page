const fs = require('fs');

const svgContent = fs.readFileSync('src/assets/termsandconditionbanner.svg', 'utf8');

// Convert HTML-style attributes to React-style camelCase
let reactSvg = svgContent
  .replace(/clip-path/g, 'clipPath')
  .replace(/flood-opacity/g, 'floodOpacity')
  .replace(/color-interpolation-filters/g, 'colorInterpolationFilters')
  .replace(/style="mix-blend-mode:overlay"/g, "style={{ mixBlendMode: 'overlay' }}")
  .replace(/<svg /, '<svg className="services-hero-bg-svg" preserveAspectRatio="xMidYMid slice" ');

// Extract all <rect> elements that have the mix-blend-mode style
const rectRegex = /<rect x="([^"]+)" width="([^"]+)" height="([^"]+)" fill="([^"]+)" style={{ mixBlendMode: 'overlay' }}\/>/g;

let match;
let rects = [];
while ((match = rectRegex.exec(reactSvg)) !== null) {
  rects.push({
    full: match[0],
    x: parseFloat(match[1]),
    width: match[2],
    height: match[3],
    fill: match[4]
  });
}

// Sort rects by x coordinate
rects.sort((a, b) => a.x - b.x);

// Replace original rects in svg with placeholder
let tempSvg = reactSvg.replace(rectRegex, '<!--RECT-->');

// Inject modified rects back in order
rects.forEach((rect, index) => {
  const newRect = `<rect className="pb-stripe-${index}" x="${rect.x}" width="${rect.width}" height="${rect.height}" fill="${rect.fill}" style={{ mixBlendMode: 'overlay' }}/>`;
  tempSvg = tempSvg.replace('<!--RECT-->', newRect);
});

const componentTemplate = `import React, { useMemo } from 'react';

const TermsConditionsHeroBg = () => {
  const stripeAnimationCSS = useMemo(() => {
    const TOTAL_TIME = 9; 
    const FPS = 15;
    const frames = TOTAL_TIME * FPS;
    let css = '';
    
    for (let i = 0; i < 15; i++) {
      const d = Math.min(i, 14 - i);
      const peaks = [
        0.5 + i * 0.15,               
        3.5 + (14 - i) * 0.15,        
        6.5 + d * 0.15                
      ];
      if (d < 7) {
        peaks.push(7.4 + (7 - d) * 0.15); 
      }

      let keyframes = \`@keyframes pbComplexPulse\${i} {\\n\`;
      
      for (let frame = 0; frame <= frames; frame++) {
        const t = frame / FPS;
        let maxBright = 0.2;
        
        peaks.forEach(peak => {
          let bright = 0.2;
          if (t >= peak - 0.2 && t <= peak) {
            const progress = (t - (peak - 0.2)) / 0.2;
            bright = 0.2 + progress * 0.8;
          } else if (t > peak && t <= peak + 0.6) {
            const progress = (t - peak) / 0.6;
            bright = 1.0 - progress * 0.8;
          }
          if (bright > maxBright) maxBright = bright;
        });
        
        const percent = ((t / TOTAL_TIME) * 100).toFixed(1);
        keyframes += \`  \${percent}% { opacity: \${maxBright.toFixed(2)}; }\\n\`;
      }
      keyframes += \`}\\n\`;
      css += keyframes;
      
      css += \`.pb-stripe-\${i} { animation: pbComplexPulse\${i} 9s infinite linear; }\\n\`;
    }
    
    return css;
  }, []);

  return (
    <>
      <style>{stripeAnimationCSS}</style>
      ${tempSvg}
    </>
  );
};

export default TermsConditionsHeroBg;
`;

fs.writeFileSync('src/TermsConditionsHeroBg.jsx', componentTemplate, 'utf8');
console.log('TermsConditionsHeroBg.jsx created successfully.');
