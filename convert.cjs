const fs = require('fs');
let svg = fs.readFileSync('studioBanner.svg', 'utf8');

// replace hyphens in svg attributes with camelCase
svg = svg.replace(/clip-path/g, 'clipPath');
svg = svg.replace(/fill-opacity/g, 'fillOpacity');
svg = svg.replace(/stroke-width/g, 'strokeWidth');
svg = svg.replace(/stroke-linecap/g, 'strokeLinecap');
svg = svg.replace(/stroke-linejoin/g, 'strokeLinejoin');
svg = svg.replace(/flood-opacity/g, 'floodOpacity');
svg = svg.replace(/color-interpolation-filters/g, 'colorInterpolationFilters');
svg = svg.replace(/style="mix-blend-mode:overlay"/g, "style={{ mixBlendMode: 'overlay' }}");

// make svg root responsive
svg = svg.replace('<svg width="1404" height="800" viewBox="0 0 1404 800" fill="none" xmlns="http://www.w3.org/2000/svg">', '<svg className="services-hero-bg-svg" width="100%" height="100%" viewBox="0 0 1404 800" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">');

// add stripe classes
let stripeCount = 0;
svg = svg.replace(/<rect.*?mixBlendMode/g, (match) => {
  const replacement = match.replace('<rect ', `<rect className="svg-stripe svg-stripe-${stripeCount}" `);
  stripeCount++;
  return replacement;
});

// add blob classes
svg = svg.replace('<g filter="url(#filter0_f_45_279)">', '<g filter="url(#filter0_f_45_279)" className="svg-blob svg-blob-orange">');
svg = svg.replace('<g filter="url(#filter1_f_45_279)">', '<g filter="url(#filter1_f_45_279)" className="svg-blob svg-blob-copper">');

const componentCode = `import React, { useMemo } from 'react';

const StudioHeroBg = () => {
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

      let keyframes = \`@keyframes svgComplexPulse\${i} {\\n\`;
      
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
      
      css += \`.svg-stripe-\${i} { animation: svgComplexPulse\${i} 9s infinite linear; }\\n\`;
    }
    
    css += \`
      @keyframes blobBreathe {
        0% { transform: scale(1) rotate(0deg); opacity: 0.8; }
        50% { transform: scale(1.05) rotate(2deg); opacity: 1; }
        100% { transform: scale(1) rotate(0deg); opacity: 0.8; }
      }
      .svg-blob { transform-origin: center; animation: blobBreathe 12s infinite ease-in-out; }
      .svg-blob-orange { animation-delay: -3s; }
      .svg-blob-copper { animation-delay: -6s; }
    \`;
    
    return css;
  }, []);

  return (
    <>
      <style>{stripeAnimationCSS}</style>
      ${svg.trim()}
    </>
  );
};

export default StudioHeroBg;
`;

fs.writeFileSync('src/StudioHeroBg.jsx', componentCode);
console.log('StudioHeroBg created successfully!');
