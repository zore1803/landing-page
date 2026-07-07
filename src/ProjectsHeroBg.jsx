import React, { useMemo } from 'react';

const ProjectsHeroBg = () => {
  const stripeAnimationCSS = useMemo(() => {
    const TOTAL_TIME = 9; 
    const FPS = 15;
    const frames = TOTAL_TIME * FPS;
    let css = '';
    
    for (let i = 0; i < 15; i++) { // SVG has 15 stripes
      const d = Math.min(i, 14 - i);
      const peaks = [
        0.5 + i * 0.15,               
        3.5 + (14 - i) * 0.15,        
        6.5 + d * 0.15                
      ];
      if (d < 7) {
        peaks.push(7.4 + (7 - d) * 0.15); 
      }

      let keyframes = `@keyframes pbComplexPulse${i} {\n`;
      
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
      
      css += `.pb-stripe-${i} { animation: pbComplexPulse${i} 9s infinite linear; }\n`;
    }
    
    // Add slow breathing animation for the colored blobs
    css += `
      @keyframes pbBlobBreathe {
        0% { transform: scale(1) rotate(0deg); opacity: 0.8; }
        50% { transform: scale(1.05) rotate(2deg); opacity: 1; }
        100% { transform: scale(1) rotate(0deg); opacity: 0.8; }
      }
      .pb-blob { transform-origin: center; animation: pbBlobBreathe 12s infinite ease-in-out; }
      .pb-blob-1 { animation-delay: -3s; }
      .pb-blob-2 { animation-delay: -7s; }
    `;
    
    return css;
  }, []);

  return (
    <>
      <style>{stripeAnimationCSS}</style>
      <svg className="services-hero-bg-svg" width="100%" height="100%" viewBox="0 0 1404 900" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
        <g clipPath="url(#clip0_587_24223)">
          <rect width="1404" height="900" rx="25" fill="white"/>
          
          <g className="pb-blob pb-blob-1" filter="url(#filter0_f_587_24223)">
            <path d="M967.5 679C697.157 679 478 459.843 478 189.5C478 -80.8434 697.157 -300 967.5 -300C1237.84 -300 1457 -80.8434 1457 189.5C1457 459.843 1237.84 679 967.5 679Z" fill="url(#paint0_radial_587_24223)"/>
          </g>
          
          <g className="pb-blob pb-blob-2" filter="url(#filter1_f_587_24223)">
            <path d="M279.5 55C463.135 55 612 204.089 612 388C612 571.911 463.135 721 279.5 721C95.8653 721 -53 571.911 -53 388C-53 204.089 95.8653 55 279.5 55Z" fill="url(#paint1_radial_587_24223)"/>
          </g>

          <rect className="pb-stripe-0" x="-3.05176e-05" width="93.982" height="900" fill="url(#paint2_linear_587_24223)" style={{ mixBlendMode: 'overlay' }}/>
          <rect className="pb-stripe-1" x="93.9824" width="93.0696" height="900" fill="url(#paint4_linear_587_24223)" style={{ mixBlendMode: 'overlay' }}/>
          <rect className="pb-stripe-2" x="187.052" width="93.982" height="900" fill="url(#paint6_linear_587_24223)" style={{ mixBlendMode: 'overlay' }}/>
          <rect className="pb-stripe-3" x="281.033" width="93.982" height="900" fill="url(#paint7_linear_587_24223)" style={{ mixBlendMode: 'overlay' }}/>
          <rect className="pb-stripe-4" x="374.103" width="93.982" height="900" fill="url(#paint10_linear_587_24223)" style={{ mixBlendMode: 'overlay' }}/>
          <rect className="pb-stripe-5" x="468.086" width="93.0696" height="900" fill="url(#paint3_linear_587_24223)" style={{ mixBlendMode: 'overlay' }}/>
          <rect className="pb-stripe-6" x="561.156" width="93.982" height="900" fill="url(#paint5_linear_587_24223)" style={{ mixBlendMode: 'overlay' }}/>
          <rect className="pb-stripe-7" x="655.136" width="93.982" height="900" fill="url(#paint8_linear_587_24223)" style={{ mixBlendMode: 'overlay' }}/>
          <rect className="pb-stripe-8" x="749.119" width="93.0696" height="900" fill="url(#paint9_linear_587_24223)" style={{ mixBlendMode: 'overlay' }}/>
          <rect className="pb-stripe-9" x="842.188" width="93.982" height="900" fill="url(#paint11_linear_587_24223)" style={{ mixBlendMode: 'overlay' }}/>
          <rect className="pb-stripe-10" x="936.169" width="93.0696" height="900" fill="url(#paint12_linear_587_24223)" style={{ mixBlendMode: 'overlay' }}/>
          <rect className="pb-stripe-11" x="1029.24" width="93.982" height="900" fill="url(#paint13_linear_587_24223)" style={{ mixBlendMode: 'overlay' }}/>
          <rect className="pb-stripe-12" x="1123.22" width="93.0696" height="900" fill="url(#paint14_linear_587_24223)" style={{ mixBlendMode: 'overlay' }}/>
          <rect className="pb-stripe-13" x="1216.29" width="93.982" height="900" fill="url(#paint15_linear_587_24223)" style={{ mixBlendMode: 'overlay' }}/>
          <rect className="pb-stripe-14" x="1310.02" width="93.982" height="900" fill="url(#paint16_linear_587_24223)" style={{ mixBlendMode: 'overlay' }}/>
        </g>
        <defs>
          <filter id="filter0_f_587_24223" x="378" y="-400" width="1179" height="1179" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feGaussianBlur stdDeviation="50" result="effect1_foregroundBlur_587_24223"/>
          </filter>
          <filter id="filter1_f_587_24223" x="-153" y="-45" width="865" height="866" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feGaussianBlur stdDeviation="50" result="effect1_foregroundBlur_587_24223"/>
          </filter>
          <radialGradient id="paint0_radial_587_24223" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(1457 189.5) rotate(-180) scale(979 979)">
            <stop stopColor="#F0EDE4"/>
            <stop offset="0.677885" stopColor="#E47317"/>
            <stop offset="0.870809" stopColor="#C55418"/>
            <stop offset="1" stopColor="#8D3118"/>
          </radialGradient>
          <radialGradient id="paint1_radial_587_24223" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(-53 388) scale(665 666)">
            <stop offset="0.322115" stopColor="#F0EDE4"/>
            <stop offset="0.870809" stopColor="#4686B7"/>
            <stop offset="1" stopColor="#4686B7"/>
          </radialGradient>
          <linearGradient id="paint2_linear_587_24223" x1="-3.05176e-05" y1="450" x2="93.982" y2="450" gradientUnits="userSpaceOnUse">
            <stop stopColor="#D9D9D9" stopOpacity="0"/>
            <stop offset="0.95" stopColor="#060606" stopOpacity="0.77"/>
            <stop offset="1" stopColor="white"/>
          </linearGradient>
          <linearGradient id="paint3_linear_587_24223" x1="468.086" y1="450" x2="561.155" y2="450" gradientUnits="userSpaceOnUse">
            <stop stopColor="#D9D9D9" stopOpacity="0"/>
            <stop offset="0.95" stopColor="#060606" stopOpacity="0.77"/>
            <stop offset="1" stopColor="white"/>
          </linearGradient>
          <linearGradient id="paint4_linear_587_24223" x1="93.9824" y1="450" x2="187.052" y2="450" gradientUnits="userSpaceOnUse">
            <stop stopColor="#D9D9D9" stopOpacity="0"/>
            <stop offset="0.95" stopColor="#060606" stopOpacity="0.77"/>
            <stop offset="1" stopColor="white"/>
          </linearGradient>
          <linearGradient id="paint5_linear_587_24223" x1="561.156" y1="450" x2="655.138" y2="450" gradientUnits="userSpaceOnUse">
            <stop stopColor="#D9D9D9" stopOpacity="0"/>
            <stop offset="0.95" stopColor="#060606" stopOpacity="0.77"/>
            <stop offset="1" stopColor="white"/>
          </linearGradient>
          <linearGradient id="paint6_linear_587_24223" x1="187.052" y1="450" x2="281.034" y2="450" gradientUnits="userSpaceOnUse">
            <stop stopColor="#D9D9D9" stopOpacity="0"/>
            <stop offset="0.95" stopColor="#060606" stopOpacity="0.77"/>
            <stop offset="1" stopColor="white"/>
          </linearGradient>
          <linearGradient id="paint7_linear_587_24223" x1="281.033" y1="450" x2="375.015" y2="450" gradientUnits="userSpaceOnUse">
            <stop stopColor="#D9D9D9" stopOpacity="0"/>
            <stop offset="0.95" stopColor="#060606" stopOpacity="0.77"/>
            <stop offset="1" stopColor="white"/>
          </linearGradient>
          <linearGradient id="paint8_linear_587_24223" x1="655.136" y1="450" x2="749.118" y2="450" gradientUnits="userSpaceOnUse">
            <stop stopColor="#D9D9D9" stopOpacity="0"/>
            <stop offset="0.95" stopColor="#060606" stopOpacity="0.77"/>
            <stop offset="1" stopColor="white"/>
          </linearGradient>
          <linearGradient id="paint9_linear_587_24223" x1="749.119" y1="450" x2="842.189" y2="450" gradientUnits="userSpaceOnUse">
            <stop stopColor="#D9D9D9" stopOpacity="0"/>
            <stop offset="0.95" stopColor="#060606" stopOpacity="0.77"/>
            <stop offset="1" stopColor="white"/>
          </linearGradient>
          <linearGradient id="paint10_linear_587_24223" x1="374.103" y1="450" x2="468.085" y2="450" gradientUnits="userSpaceOnUse">
            <stop stopColor="#D9D9D9" stopOpacity="0"/>
            <stop offset="0.95" stopColor="#060606" stopOpacity="0.77"/>
            <stop offset="1" stopColor="white"/>
          </linearGradient>
          <linearGradient id="paint11_linear_587_24223" x1="842.188" y1="450" x2="936.17" y2="450" gradientUnits="userSpaceOnUse">
            <stop stopColor="#D9D9D9" stopOpacity="0"/>
            <stop offset="0.95" stopColor="#060606" stopOpacity="0.77"/>
            <stop offset="1" stopColor="white"/>
          </linearGradient>
          <linearGradient id="paint12_linear_587_24223" x1="936.169" y1="450" x2="1029.24" y2="450" gradientUnits="userSpaceOnUse">
            <stop stopColor="#D9D9D9" stopOpacity="0"/>
            <stop offset="0.95" stopColor="#060606" stopOpacity="0.77"/>
            <stop offset="1" stopColor="white"/>
          </linearGradient>
          <linearGradient id="paint13_linear_587_24223" x1="1029.24" y1="450" x2="1123.22" y2="450" gradientUnits="userSpaceOnUse">
            <stop stopColor="#D9D9D9" stopOpacity="0"/>
            <stop offset="0.95" stopColor="#060606" stopOpacity="0.77"/>
            <stop offset="1" stopColor="white"/>
          </linearGradient>
          <linearGradient id="paint14_linear_587_24223" x1="1123.22" y1="450" x2="1216.29" y2="450" gradientUnits="userSpaceOnUse">
            <stop stopColor="#D9D9D9" stopOpacity="0"/>
            <stop offset="0.95" stopColor="#060606" stopOpacity="0.77"/>
            <stop offset="1" stopColor="white"/>
          </linearGradient>
          <linearGradient id="paint15_linear_587_24223" x1="1216.29" y1="450" x2="1310.27" y2="450" gradientUnits="userSpaceOnUse">
            <stop stopColor="#D9D9D9" stopOpacity="0"/>
            <stop offset="0.95" stopColor="#060606" stopOpacity="0.77"/>
            <stop offset="1" stopColor="white"/>
          </linearGradient>
          <linearGradient id="paint16_linear_587_24223" x1="1310.02" y1="450" x2="1404" y2="450" gradientUnits="userSpaceOnUse">
            <stop stopColor="#D9D9D9" stopOpacity="0"/>
            <stop offset="0.95" stopColor="#060606" stopOpacity="0.77"/>
            <stop offset="1" stopColor="white"/>
          </linearGradient>
          <clipPath id="clip0_587_24223">
            <rect width="1404" height="900" rx="25" fill="white"/>
          </clipPath>
        </defs>
      </svg>
    </>
  );
};

export default ProjectsHeroBg;
