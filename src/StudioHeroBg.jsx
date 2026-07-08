import React, { useMemo } from 'react';

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

      let keyframes = `@keyframes svgComplexPulse${i} {\n`;
      
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
        keyframes += `  ${percent}% { opacity: ${maxBright.toFixed(2)}; }\n`;
      }
      keyframes += `}\n`;
      css += keyframes;
      
      css += `.svg-stripe-${i} { animation: svgComplexPulse${i} 9s infinite linear; }\n`;
    }
    
    css += `
      @keyframes blobBreathe {
        0% { transform: scale(1) rotate(0deg); opacity: 0.8; }
        50% { transform: scale(1.05) rotate(2deg); opacity: 1; }
        100% { transform: scale(1) rotate(0deg); opacity: 0.8; }
      }
      .svg-blob { transform-origin: center; animation: blobBreathe 12s infinite ease-in-out; }
      .svg-blob-orange { animation-delay: -3s; }
      .svg-blob-copper { animation-delay: -6s; }
    `;
    
    return css;
  }, []);

  return (
    <>
      <style>{stripeAnimationCSS}</style>
      <svg className="services-hero-bg-svg" width="100%" height="100%" viewBox="0 0 1404 800" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
<g clipPath="url(#clip0_45_279)">
<rect width="1404" height="800" rx="25" fill="white"/>
<g filter="url(#filter0_f_45_279)" className="svg-blob svg-blob-orange">
<path d="M1342.78 -35.1739C1485.9 212.706 1400.97 529.668 1153.09 672.782C905.206 815.895 588.243 730.965 445.13 483.086C302.016 235.206 386.946 -81.7566 634.826 -224.87C882.706 -367.983 1199.67 -283.054 1342.78 -35.1739Z" fill="url(#paint0_radial_45_279)"/>
</g>
<g filter="url(#filter1_f_45_279)" className="svg-blob svg-blob-copper">
<path d="M-35.4111 474.641C-160.553 257.889 -86.2881 -19.2696 130.463 -144.411C347.215 -269.553 624.374 -195.288 749.516 21.4634C874.657 238.215 800.393 515.374 583.641 640.516C366.89 765.657 89.7304 691.393 -35.4111 474.641Z" fill="url(#paint1_radial_45_279)"/>
</g>
<rect className="svg-stripe svg-stripe-0" x="-16" width="96.0613" height="800" fill="url(#paint2_linear_45_279)" style={{ mixBlendMode: 'overlay' }}/>
<rect className="svg-stripe svg-stripe-1" x="80.0615" width="95.1286" height="800" fill="url(#paint4_linear_45_279)" style={{ mixBlendMode: 'overlay' }}/>
<rect className="svg-stripe svg-stripe-2" x="175.19" width="96.0613" height="800" fill="url(#paint6_linear_45_279)" style={{ mixBlendMode: 'overlay' }}/>
<rect className="svg-stripe svg-stripe-3" x="271.251" width="96.0613" height="800" fill="url(#paint7_linear_45_279)" style={{ mixBlendMode: 'overlay' }}/>
<rect className="svg-stripe svg-stripe-4" x="366.38" width="96.0613" height="800" fill="url(#paint10_linear_45_279)" style={{ mixBlendMode: 'overlay' }}/>
<rect className="svg-stripe svg-stripe-5" x="462.441" width="95.1286" height="800" fill="url(#paint3_linear_45_279)" style={{ mixBlendMode: 'overlay' }}/>
<rect className="svg-stripe svg-stripe-6" x="557.569" width="96.0613" height="800" fill="url(#paint5_linear_45_279)" style={{ mixBlendMode: 'overlay' }}/>
<rect className="svg-stripe svg-stripe-7" x="653.631" width="96.0613" height="800" fill="url(#paint8_linear_45_279)" style={{ mixBlendMode: 'overlay' }}/>
<rect className="svg-stripe svg-stripe-8" x="749.692" width="95.1286" height="800" fill="url(#paint9_linear_45_279)" style={{ mixBlendMode: 'overlay' }}/>
<rect className="svg-stripe svg-stripe-9" x="844.82" width="96.0613" height="800" fill="url(#paint11_linear_45_279)" style={{ mixBlendMode: 'overlay' }}/>
<rect className="svg-stripe svg-stripe-10" x="940.882" width="95.1286" height="800" fill="url(#paint12_linear_45_279)" style={{ mixBlendMode: 'overlay' }}/>
<rect className="svg-stripe svg-stripe-11" x="1036.01" width="96.0613" height="800" fill="url(#paint13_linear_45_279)" style={{ mixBlendMode: 'overlay' }}/>
<rect className="svg-stripe svg-stripe-12" x="1132.07" width="95.1286" height="800" fill="url(#paint14_linear_45_279)" style={{ mixBlendMode: 'overlay' }}/>
<rect className="svg-stripe svg-stripe-13" x="1227.2" width="96.0613" height="800" fill="url(#paint15_linear_45_279)" style={{ mixBlendMode: 'overlay' }}/>
<rect className="svg-stripe svg-stripe-14" x="1323" width="96.0613" height="800" fill="url(#paint16_linear_45_279)" style={{ mixBlendMode: 'overlay' }}/>
</g>
<defs>
<filter id="filter0_f_45_279" x="275.609" y="-394.39" width="1236.69" height="1236.69" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="12.5" result="effect1_foregroundBlur_45_279"/>
</filter>
<filter id="filter1_f_45_279" x="-196.201" y="-305.201" width="1106.51" height="1106.51" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="12.5" result="effect1_foregroundBlur_45_279"/>
</filter>
<radialGradient id="paint0_radial_45_279" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(634.826 -224.87) rotate(60) scale(1036.52)">
<stop offset="0.206731" stopColor="#F0EDE4" stopOpacity="0"/>
<stop offset="0.706731" stopColor="#E47317" stopOpacity="0.5"/>
<stop offset="1" stopColor="#E47317"/>
</radialGradient>
<radialGradient id="paint1_radial_45_279" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(583.641 640.516) rotate(-120) scale(906.355)">
<stop offset="0.206731" stopColor="#F0EDE4" stopOpacity="0"/>
<stop offset="0.706731" stopColor="#E47317" stopOpacity="0.5"/>
<stop offset="1" stopColor="#E47317"/>
</radialGradient>
<linearGradient id="paint2_linear_45_279" x1="-16" y1="400" x2="80.0613" y2="400" gradientUnits="userSpaceOnUse">
<stop stopColor="#D9D9D9" stopOpacity="0"/>
<stop offset="0.95" stopColor="#060606" stopOpacity="0.77"/>
<stop offset="1" stopColor="white"/>
</linearGradient>
<linearGradient id="paint3_linear_45_279" x1="462.441" y1="400" x2="557.57" y2="400" gradientUnits="userSpaceOnUse">
<stop stopColor="#D9D9D9" stopOpacity="0"/>
<stop offset="0.95" stopColor="#060606" stopOpacity="0.77"/>
<stop offset="1" stopColor="white"/>
</linearGradient>
<linearGradient id="paint4_linear_45_279" x1="80.0615" y1="400" x2="175.19" y2="400" gradientUnits="userSpaceOnUse">
<stop stopColor="#D9D9D9" stopOpacity="0"/>
<stop offset="0.95" stopColor="#060606" stopOpacity="0.77"/>
<stop offset="1" stopColor="white"/>
</linearGradient>
<linearGradient id="paint5_linear_45_279" x1="557.569" y1="400" x2="653.631" y2="400" gradientUnits="userSpaceOnUse">
<stop stopColor="#D9D9D9" stopOpacity="0"/>
<stop offset="0.95" stopColor="#060606" stopOpacity="0.77"/>
<stop offset="1" stopColor="white"/>
</linearGradient>
<linearGradient id="paint6_linear_45_279" x1="175.19" y1="400" x2="271.252" y2="400" gradientUnits="userSpaceOnUse">
<stop stopColor="#D9D9D9" stopOpacity="0"/>
<stop offset="0.95" stopColor="#060606" stopOpacity="0.77"/>
<stop offset="1" stopColor="white"/>
</linearGradient>
<linearGradient id="paint7_linear_45_279" x1="271.251" y1="400" x2="367.312" y2="400" gradientUnits="userSpaceOnUse">
<stop stopColor="#D9D9D9" stopOpacity="0"/>
<stop offset="0.95" stopColor="#060606" stopOpacity="0.77"/>
<stop offset="1" stopColor="white"/>
</linearGradient>
<linearGradient id="paint8_linear_45_279" x1="653.631" y1="400" x2="749.692" y2="400" gradientUnits="userSpaceOnUse">
<stop stopColor="#D9D9D9" stopOpacity="0"/>
<stop offset="0.95" stopColor="#060606" stopOpacity="0.77"/>
<stop offset="1" stopColor="white"/>
</linearGradient>
<linearGradient id="paint9_linear_45_279" x1="749.692" y1="400" x2="844.821" y2="400" gradientUnits="userSpaceOnUse">
<stop stopColor="#D9D9D9" stopOpacity="0"/>
<stop offset="0.95" stopColor="#060606" stopOpacity="0.77"/>
<stop offset="1" stopColor="white"/>
</linearGradient>
<linearGradient id="paint10_linear_45_279" x1="366.38" y1="400" x2="462.441" y2="400" gradientUnits="userSpaceOnUse">
<stop stopColor="#D9D9D9" stopOpacity="0"/>
<stop offset="0.95" stopColor="#060606" stopOpacity="0.77"/>
<stop offset="1" stopColor="white"/>
</linearGradient>
<linearGradient id="paint11_linear_45_279" x1="844.82" y1="400" x2="940.882" y2="400" gradientUnits="userSpaceOnUse">
<stop stopColor="#D9D9D9" stopOpacity="0"/>
<stop offset="0.95" stopColor="#060606" stopOpacity="0.77"/>
<stop offset="1" stopColor="white"/>
</linearGradient>
<linearGradient id="paint12_linear_45_279" x1="940.882" y1="400" x2="1036.01" y2="400" gradientUnits="userSpaceOnUse">
<stop stopColor="#D9D9D9" stopOpacity="0"/>
<stop offset="0.95" stopColor="#060606" stopOpacity="0.77"/>
<stop offset="1" stopColor="white"/>
</linearGradient>
<linearGradient id="paint13_linear_45_279" x1="1036.01" y1="400" x2="1132.07" y2="400" gradientUnits="userSpaceOnUse">
<stop stopColor="#D9D9D9" stopOpacity="0"/>
<stop offset="0.95" stopColor="#060606" stopOpacity="0.77"/>
<stop offset="1" stopColor="white"/>
</linearGradient>
<linearGradient id="paint14_linear_45_279" x1="1132.07" y1="400" x2="1227.2" y2="400" gradientUnits="userSpaceOnUse">
<stop stopColor="#D9D9D9" stopOpacity="0"/>
<stop offset="0.95" stopColor="#060606" stopOpacity="0.77"/>
<stop offset="1" stopColor="white"/>
</linearGradient>
<linearGradient id="paint15_linear_45_279" x1="1227.2" y1="400" x2="1323.26" y2="400" gradientUnits="userSpaceOnUse">
<stop stopColor="#D9D9D9" stopOpacity="0"/>
<stop offset="0.95" stopColor="#060606" stopOpacity="0.77"/>
<stop offset="1" stopColor="white"/>
</linearGradient>
<linearGradient id="paint16_linear_45_279" x1="1323" y1="400" x2="1419.06" y2="400" gradientUnits="userSpaceOnUse">
<stop stopColor="#D9D9D9" stopOpacity="0"/>
<stop offset="0.95" stopColor="#060606" stopOpacity="0.77"/>
<stop offset="1" stopColor="white"/>
</linearGradient>
<clipPath id="clip0_45_279">
<rect width="1404" height="800" rx="25" fill="white"/>
</clipPath>
</defs>
</svg>
    </>
  );
};

export default StudioHeroBg;
