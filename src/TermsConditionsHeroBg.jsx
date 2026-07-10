import React, { useMemo } from 'react';

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
    
    return css;
  }, []);

  return (
    <>
      <style>{stripeAnimationCSS}</style>
      <svg className="services-hero-bg-svg" preserveAspectRatio="xMidYMid slice" width="1404" height="898" viewBox="0 0 1404 898" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clipPath="url(#clip0_95_3)">
<rect width="1404" height="898" rx="25" fill="white"/>
<g filter="url(#filter0_f_95_3)">
<path d="M1324 -91C1324 147.035 1063.65 340 742.5 340C421.346 340 161 147.035 161 -91C161 -329.035 421.346 -522 742.5 -522C1063.65 -522 1324 -329.035 1324 -91Z" fill="#EE7A1D"/>
</g>
<rect className="pb-stripe-0" x="5" width="93.9596" height="900" fill="url(#paint0_linear_95_3)" style={{ mixBlendMode: 'overlay' }}/>
<rect className="pb-stripe-1" x="98.9609" width="93.0474" height="900" fill="url(#paint2_linear_95_3)" style={{ mixBlendMode: 'overlay' }}/>
<rect className="pb-stripe-2" x="192.008" width="93.9596" height="900" fill="url(#paint4_linear_95_3)" style={{ mixBlendMode: 'overlay' }}/>
<rect className="pb-stripe-3" x="285.965" width="93.9596" height="900" fill="url(#paint5_linear_95_3)" style={{ mixBlendMode: 'overlay' }}/>
<rect className="pb-stripe-4" x="379.016" width="93.9596" height="900" fill="url(#paint8_linear_95_3)" style={{ mixBlendMode: 'overlay' }}/>
<rect className="pb-stripe-5" x="472.973" width="93.0474" height="900" fill="url(#paint1_linear_95_3)" style={{ mixBlendMode: 'overlay' }}/>
<rect className="pb-stripe-6" x="566.023" width="93.9596" height="900" fill="url(#paint3_linear_95_3)" style={{ mixBlendMode: 'overlay' }}/>
<rect className="pb-stripe-7" x="659.98" width="93.9596" height="900" fill="url(#paint6_linear_95_3)" style={{ mixBlendMode: 'overlay' }}/>
<rect className="pb-stripe-8" x="753.941" width="93.0474" height="900" fill="url(#paint7_linear_95_3)" style={{ mixBlendMode: 'overlay' }}/>
<rect className="pb-stripe-9" x="846.984" width="93.9596" height="900" fill="url(#paint9_linear_95_3)" style={{ mixBlendMode: 'overlay' }}/>
<rect className="pb-stripe-10" x="940.945" width="93.0474" height="900" fill="url(#paint10_linear_95_3)" style={{ mixBlendMode: 'overlay' }}/>
<rect className="pb-stripe-11" x="1034" width="93.9596" height="900" fill="url(#paint11_linear_95_3)" style={{ mixBlendMode: 'overlay' }}/>
<rect className="pb-stripe-12" x="1127.95" width="93.0474" height="900" fill="url(#paint12_linear_95_3)" style={{ mixBlendMode: 'overlay' }}/>
<rect className="pb-stripe-13" x="1221" width="93.9596" height="900" fill="url(#paint13_linear_95_3)" style={{ mixBlendMode: 'overlay' }}/>
<rect className="pb-stripe-14" x="1314.7" width="93.9596" height="900" fill="url(#paint14_linear_95_3)" style={{ mixBlendMode: 'overlay' }}/>
</g>
<defs>
<filter id="filter0_f_95_3" x="-139" y="-822" width="1763" height="1462" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="150" result="effect1_foregroundBlur_95_3"/>
</filter>
<linearGradient id="paint0_linear_95_3" x1="5" y1="450" x2="98.9596" y2="450" gradientUnits="userSpaceOnUse">
<stop stop-color="#D9D9D9" stop-opacity="0"/>
<stop offset="0.95" stop-color="#060606" stop-opacity="0.77"/>
<stop offset="1" stop-color="white"/>
</linearGradient>
<linearGradient id="paint1_linear_95_3" x1="472.973" y1="450" x2="566.02" y2="450" gradientUnits="userSpaceOnUse">
<stop stop-color="#D9D9D9" stop-opacity="0"/>
<stop offset="0.95" stop-color="#060606" stop-opacity="0.77"/>
<stop offset="1" stop-color="white"/>
</linearGradient>
<linearGradient id="paint2_linear_95_3" x1="98.9609" y1="450" x2="192.008" y2="450" gradientUnits="userSpaceOnUse">
<stop stop-color="#D9D9D9" stop-opacity="0"/>
<stop offset="0.95" stop-color="#060606" stop-opacity="0.77"/>
<stop offset="1" stop-color="white"/>
</linearGradient>
<linearGradient id="paint3_linear_95_3" x1="566.023" y1="450" x2="659.983" y2="450" gradientUnits="userSpaceOnUse">
<stop stop-color="#D9D9D9" stop-opacity="0"/>
<stop offset="0.95" stop-color="#060606" stop-opacity="0.77"/>
<stop offset="1" stop-color="white"/>
</linearGradient>
<linearGradient id="paint4_linear_95_3" x1="192.008" y1="450" x2="285.967" y2="450" gradientUnits="userSpaceOnUse">
<stop stop-color="#D9D9D9" stop-opacity="0"/>
<stop offset="0.95" stop-color="#060606" stop-opacity="0.77"/>
<stop offset="1" stop-color="white"/>
</linearGradient>
<linearGradient id="paint5_linear_95_3" x1="285.965" y1="450" x2="379.924" y2="450" gradientUnits="userSpaceOnUse">
<stop stop-color="#D9D9D9" stop-opacity="0"/>
<stop offset="0.95" stop-color="#060606" stop-opacity="0.77"/>
<stop offset="1" stop-color="white"/>
</linearGradient>
<linearGradient id="paint6_linear_95_3" x1="659.98" y1="450" x2="753.94" y2="450" gradientUnits="userSpaceOnUse">
<stop stop-color="#D9D9D9" stop-opacity="0"/>
<stop offset="0.95" stop-color="#060606" stop-opacity="0.77"/>
<stop offset="1" stop-color="white"/>
</linearGradient>
<linearGradient id="paint7_linear_95_3" x1="753.941" y1="450" x2="846.989" y2="450" gradientUnits="userSpaceOnUse">
<stop stop-color="#D9D9D9" stop-opacity="0"/>
<stop offset="0.95" stop-color="#060606" stop-opacity="0.77"/>
<stop offset="1" stop-color="white"/>
</linearGradient>
<linearGradient id="paint8_linear_95_3" x1="379.016" y1="450" x2="472.975" y2="450" gradientUnits="userSpaceOnUse">
<stop stop-color="#D9D9D9" stop-opacity="0"/>
<stop offset="0.95" stop-color="#060606" stop-opacity="0.77"/>
<stop offset="1" stop-color="white"/>
</linearGradient>
<linearGradient id="paint9_linear_95_3" x1="846.984" y1="450" x2="940.944" y2="450" gradientUnits="userSpaceOnUse">
<stop stop-color="#D9D9D9" stop-opacity="0"/>
<stop offset="0.95" stop-color="#060606" stop-opacity="0.77"/>
<stop offset="1" stop-color="white"/>
</linearGradient>
<linearGradient id="paint10_linear_95_3" x1="940.945" y1="450" x2="1033.99" y2="450" gradientUnits="userSpaceOnUse">
<stop stop-color="#D9D9D9" stop-opacity="0"/>
<stop offset="0.95" stop-color="#060606" stop-opacity="0.77"/>
<stop offset="1" stop-color="white"/>
</linearGradient>
<linearGradient id="paint11_linear_95_3" x1="1034" y1="450" x2="1127.96" y2="450" gradientUnits="userSpaceOnUse">
<stop stop-color="#D9D9D9" stop-opacity="0"/>
<stop offset="0.95" stop-color="#060606" stop-opacity="0.77"/>
<stop offset="1" stop-color="white"/>
</linearGradient>
<linearGradient id="paint12_linear_95_3" x1="1127.95" y1="450" x2="1221" y2="450" gradientUnits="userSpaceOnUse">
<stop stop-color="#D9D9D9" stop-opacity="0"/>
<stop offset="0.95" stop-color="#060606" stop-opacity="0.77"/>
<stop offset="1" stop-color="white"/>
</linearGradient>
<linearGradient id="paint13_linear_95_3" x1="1221" y1="450" x2="1314.96" y2="450" gradientUnits="userSpaceOnUse">
<stop stop-color="#D9D9D9" stop-opacity="0"/>
<stop offset="0.95" stop-color="#060606" stop-opacity="0.77"/>
<stop offset="1" stop-color="white"/>
</linearGradient>
<linearGradient id="paint14_linear_95_3" x1="1314.7" y1="450" x2="1408.66" y2="450" gradientUnits="userSpaceOnUse">
<stop stop-color="#D9D9D9" stop-opacity="0"/>
<stop offset="0.95" stop-color="#060606" stop-opacity="0.77"/>
<stop offset="1" stop-color="white"/>
</linearGradient>
<clipPath id="clip0_95_3">
<rect width="1404" height="898" rx="25" fill="white"/>
</clipPath>
</defs>
</svg>

    </>
  );
};

export default TermsConditionsHeroBg;
