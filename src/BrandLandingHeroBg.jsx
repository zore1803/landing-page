import React, { useMemo } from 'react';

const BrandLandingHeroBg = () => {
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
    
    return css;
  }, []);

  return (
    <>
      <style>{stripeAnimationCSS}</style>
      <svg className="services-hero-bg-svg" width="100%" height="100%" viewBox="0 0 1404 1100" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
<g clipPath="url(#clip0_71_1074)">
<rect width="1404" height="1100" rx="25" fill="white"/>
<g filter="url(#filter0_f_71_1074)">
<path d="M802.5 713C387.458 713 51 376.542 51 -38.5C51 -453.542 387.458 -790 802.5 -790C1217.54 -790 1554 -453.542 1554 -38.4999C1554 376.542 1217.54 713 802.5 713Z" fill="url(#paint0_radial_71_1074)"/>
</g>
<g filter="url(#filter1_f_71_1074)">
<path d="M-41.3738 399.684C55.1017 303.209 211.626 303.316 308.233 399.923C404.84 496.53 404.947 653.054 308.471 749.53C211.996 846.005 55.4716 845.898 -41.1355 749.291C-137.743 652.684 -137.849 496.16 -41.3738 399.684Z" fill="url(#paint1_radial_71_1074)"/>
</g>
<rect className="svg-stripe svg-stripe-0" width="93.982" height="1100" fill="url(#paint2_linear_71_1074)" style={{ mixBlendMode: 'overlay' }}/>
<rect className="svg-stripe svg-stripe-1" x="93.9824" width="93.0696" height="1100" fill="url(#paint4_linear_71_1074)" style={{ mixBlendMode: 'overlay' }}/>
<rect className="svg-stripe svg-stripe-2" x="187.051" width="93.982" height="1100" fill="url(#paint6_linear_71_1074)" style={{ mixBlendMode: 'overlay' }}/>
<rect className="svg-stripe svg-stripe-3" x="281.033" width="93.982" height="1100" fill="url(#paint7_linear_71_1074)" style={{ mixBlendMode: 'overlay' }}/>
<rect className="svg-stripe svg-stripe-4" x="374.104" width="93.982" height="1100" fill="url(#paint10_linear_71_1074)" style={{ mixBlendMode: 'overlay' }}/>
<rect className="svg-stripe svg-stripe-5" x="468.086" width="93.0696" height="1100" fill="url(#paint3_linear_71_1074)" style={{ mixBlendMode: 'overlay' }}/>
<rect className="svg-stripe svg-stripe-6" x="561.154" width="93.982" height="1100" fill="url(#paint5_linear_71_1074)" style={{ mixBlendMode: 'overlay' }}/>
<rect className="svg-stripe svg-stripe-7" x="655.137" width="93.982" height="1100" fill="url(#paint8_linear_71_1074)" style={{ mixBlendMode: 'overlay' }}/>
<rect className="svg-stripe svg-stripe-8" x="749.119" width="93.0696" height="1100" fill="url(#paint9_linear_71_1074)" style={{ mixBlendMode: 'overlay' }}/>
<rect className="svg-stripe svg-stripe-9" x="842.188" width="93.982" height="1100" fill="url(#paint11_linear_71_1074)" style={{ mixBlendMode: 'overlay' }}/>
<rect className="svg-stripe svg-stripe-10" x="936.17" width="93.0696" height="1100" fill="url(#paint12_linear_71_1074)" style={{ mixBlendMode: 'overlay' }}/>
<rect className="svg-stripe svg-stripe-11" x="1029.24" width="93.982" height="1100" fill="url(#paint13_linear_71_1074)" style={{ mixBlendMode: 'overlay' }}/>
<rect className="svg-stripe svg-stripe-12" x="1123.22" width="93.0696" height="1100" fill="url(#paint14_linear_71_1074)" style={{ mixBlendMode: 'overlay' }}/>
<rect className="svg-stripe svg-stripe-13" x="1216.29" width="93.982" height="1100" fill="url(#paint15_linear_71_1074)" style={{ mixBlendMode: 'overlay' }}/>
<rect className="svg-stripe svg-stripe-14" x="1310.02" width="93.982" height="1100" fill="url(#paint16_linear_71_1074)" style={{ mixBlendMode: 'overlay' }}/>
</g>
<defs>
<filter id="filter0_f_71_1074" x="-49" y="-890" width="1703" height="1703" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="50" result="effect1_foregroundBlur_71_1074"/>
</filter>
<filter id="filter1_f_71_1074" x="-213.66" y="227.397" width="694.418" height="694.419" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="50" result="effect1_foregroundBlur_71_1074"/>
</filter>
<radialGradient id="paint0_radial_71_1074" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(1554 -38.4999) rotate(-180) scale(1503 1503)">
<stop stopColor="#F0EDE4"/>
<stop offset="0.677885" stopColor="#E47317"/>
<stop offset="0.870809" stopColor="#C55418"/>
<stop offset="1" stopColor="#8D3118"/>
</radialGradient>
<radialGradient id="paint1_radial_71_1074" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(-41.1355 749.291) rotate(-45) scale(494.082 494.756)">
<stop offset="0.322115" stopColor="#F0EDE4"/>
<stop offset="0.870809" stopColor="#4686B7"/>
<stop offset="1" stopColor="#4686B7"/>
</radialGradient>
<linearGradient id="paint2_linear_71_1074" x1="0" y1="550" x2="93.982" y2="550" gradientUnits="userSpaceOnUse">
<stop stopColor="#D9D9D9" stopOpacity="0"/>
<stop offset="0.95" stopColor="#060606" stopOpacity="0.77"/>
<stop offset="1" stopColor="white"/>
</linearGradient>
<linearGradient id="paint3_linear_71_1074" x1="468.086" y1="550" x2="561.156" y2="550" gradientUnits="userSpaceOnUse">
<stop stopColor="#D9D9D9" stopOpacity="0"/>
<stop offset="0.95" stopColor="#060606" stopOpacity="0.77"/>
<stop offset="1" stopColor="white"/>
</linearGradient>
<linearGradient id="paint4_linear_71_1074" x1="93.9824" y1="550" x2="187.052" y2="550" gradientUnits="userSpaceOnUse">
<stop stopColor="#D9D9D9" stopOpacity="0"/>
<stop offset="0.95" stopColor="#060606" stopOpacity="0.77"/>
<stop offset="1" stopColor="white"/>
</linearGradient>
<linearGradient id="paint5_linear_71_1074" x1="561.154" y1="550" x2="655.136" y2="550" gradientUnits="userSpaceOnUse">
<stop stopColor="#D9D9D9" stopOpacity="0"/>
<stop offset="0.95" stopColor="#060606" stopOpacity="0.77"/>
<stop offset="1" stopColor="white"/>
</linearGradient>
<linearGradient id="paint6_linear_71_1074" x1="187.051" y1="550" x2="281.033" y2="550" gradientUnits="userSpaceOnUse">
<stop stopColor="#D9D9D9" stopOpacity="0"/>
<stop offset="0.95" stopColor="#060606" stopOpacity="0.77"/>
<stop offset="1" stopColor="white"/>
</linearGradient>
<linearGradient id="paint7_linear_71_1074" x1="281.033" y1="550" x2="375.015" y2="550" gradientUnits="userSpaceOnUse">
<stop stopColor="#D9D9D9" stopOpacity="0"/>
<stop offset="0.95" stopColor="#060606" stopOpacity="0.77"/>
<stop offset="1" stopColor="white"/>
</linearGradient>
<linearGradient id="paint8_linear_71_1074" x1="655.137" y1="550" x2="749.119" y2="550" gradientUnits="userSpaceOnUse">
<stop stopColor="#D9D9D9" stopOpacity="0"/>
<stop offset="0.95" stopColor="#060606" stopOpacity="0.77"/>
<stop offset="1" stopColor="white"/>
</linearGradient>
<linearGradient id="paint9_linear_71_1074" x1="749.119" y1="550" x2="842.189" y2="550" gradientUnits="userSpaceOnUse">
<stop stopColor="#D9D9D9" stopOpacity="0"/>
<stop offset="0.95" stopColor="#060606" stopOpacity="0.77"/>
<stop offset="1" stopColor="white"/>
</linearGradient>
<linearGradient id="paint10_linear_71_1074" x1="374.104" y1="550" x2="468.086" y2="550" gradientUnits="userSpaceOnUse">
<stop stopColor="#D9D9D9" stopOpacity="0"/>
<stop offset="0.95" stopColor="#060606" stopOpacity="0.77"/>
<stop offset="1" stopColor="white"/>
</linearGradient>
<linearGradient id="paint11_linear_71_1074" x1="842.188" y1="550" x2="936.17" y2="550" gradientUnits="userSpaceOnUse">
<stop stopColor="#D9D9D9" stopOpacity="0"/>
<stop offset="0.95" stopColor="#060606" stopOpacity="0.77"/>
<stop offset="1" stopColor="white"/>
</linearGradient>
<linearGradient id="paint12_linear_71_1074" x1="936.17" y1="550" x2="1029.24" y2="550" gradientUnits="userSpaceOnUse">
<stop stopColor="#D9D9D9" stopOpacity="0"/>
<stop offset="0.95" stopColor="#060606" stopOpacity="0.77"/>
<stop offset="1" stopColor="white"/>
</linearGradient>
<linearGradient id="paint13_linear_71_1074" x1="1029.24" y1="550" x2="1123.22" y2="550" gradientUnits="userSpaceOnUse">
<stop stopColor="#D9D9D9" stopOpacity="0"/>
<stop offset="0.95" stopColor="#060606" stopOpacity="0.77"/>
<stop offset="1" stopColor="white"/>
</linearGradient>
<linearGradient id="paint14_linear_71_1074" x1="1123.22" y1="550" x2="1216.29" y2="550" gradientUnits="userSpaceOnUse">
<stop stopColor="#D9D9D9" stopOpacity="0"/>
<stop offset="0.95" stopColor="#060606" stopOpacity="0.77"/>
<stop offset="1" stopColor="white"/>
</linearGradient>
<linearGradient id="paint15_linear_71_1074" x1="1216.29" y1="550" x2="1310.28" y2="550" gradientUnits="userSpaceOnUse">
<stop stopColor="#D9D9D9" stopOpacity="0"/>
<stop offset="0.95" stopColor="#060606" stopOpacity="0.77"/>
<stop offset="1" stopColor="white"/>
</linearGradient>
<linearGradient id="paint16_linear_71_1074" x1="1310.02" y1="550" x2="1404" y2="550" gradientUnits="userSpaceOnUse">
<stop stopColor="#D9D9D9" stopOpacity="0"/>
<stop offset="0.95" stopColor="#060606" stopOpacity="0.77"/>
<stop offset="1" stopColor="white"/>
</linearGradient>
<clipPath id="clip0_71_1074">
<rect width="1404" height="1100" rx="25" fill="white"/>
</clipPath>
</defs>
</svg>
    </>
  );
};

export default BrandLandingHeroBg;
