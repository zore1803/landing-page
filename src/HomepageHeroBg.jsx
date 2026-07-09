import React, { useMemo } from 'react';

const HomepageHeroBg = () => {
  const stripeAnimationCSS = useMemo(() => {
    const TOTAL_TIME = 9; 
    const FPS = 15;
    const frames = TOTAL_TIME * FPS;
    let css = '';
    
    // We have 14 stripes
    for (let i = 0; i < 14; i++) {
      const d = Math.min(i, 13 - i);
      const peaks = [
        0.5 + i * 0.15,               
        3.5 + (13 - i) * 0.15,        
        6.5 + d * 0.15                
      ];
      if (d < 6) {
        peaks.push(7.4 + (6 - d) * 0.15); 
      }

      let keyframes = `@keyframes homeSvgPulse${i} {\n`;
      
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
        // Instead of brightness filter which SVG doesn't support well natively, 
        // we just animate opacity to reveal the bright gradient.
        keyframes += `  ${percent}% { opacity: ${maxBright.toFixed(2)}; }\n`;
      }
      keyframes += `}\n`;
      css += keyframes;
      
      css += `.home-stripe-${i} { animation: homeSvgPulse${i} 9s infinite linear; }\n`;
    }
    
    return css;
  }, []);

  return (
    <>
      <style>{stripeAnimationCSS}</style>
      <svg className="homepage-hero-bg" width="100%" height="100%" viewBox="0 0 1393 578" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
        <g clipPath="url(#clip0_74_2032)">
          <rect y="-84" width="1404" height="662" rx="25" fill="white"/>
          <rect x="-15.3828" y="-179.506" width="1337.4" height="952.757" fill="#070815"/>
          <g filter="url(#filter0_f_74_2032)">
            <ellipse cx="1027.71" cy="263.344" rx="672.425" ry="569.512" fill="#C55418"/>
          </g>
          <g filter="url(#filter1_f_74_2032)">
            <ellipse cx="102.431" cy="473.827" rx="440.988" ry="473.585" fill="#8D3118"/>
          </g>
          <g filter="url(#filter2_f_74_2032)">
            <ellipse cx="355.29" cy="773.251" rx="535.519" ry="352.977" fill="#8D3118"/>
          </g>
          <g filter="url(#filter3_f_74_2032)">
            <ellipse cx="149.93" cy="-224.677" rx="516.426" ry="454.027" fill="#0B0722"/>
          </g>
          <g filter="url(#filter4_f_74_2032)">
            <ellipse cx="-19.5739" cy="-396.973" rx="516.426" ry="454.027" fill="#070815"/>
          </g>
          <g filter="url(#filter5_f_74_2032)">
            <circle cx="1161.36" cy="-0.223907" r="305.944" fill="#EE7A1D"/>
          </g>
          <g filter="url(#filter6_f_74_2032)">
            <ellipse cx="-33.0776" cy="689.431" rx="219.795" ry="269.156" fill="#EE7A1D"/>
          </g>
          <g filter="url(#filter7_f_74_2032)">
            <circle cx="736.671" cy="716.905" r="305.944" fill="#5A1A14"/>
          </g>
          <g filter="url(#filter8_f_74_2032)">
            <circle cx="1228.42" cy="695.484" r="305.944" fill="#5A1A14"/>
          </g>
          <g>
            <rect className="home-stripe-0" x="-18.1777" y="-179.506" width="96.0613" height="952.757" fill="url(#paint0_linear_74_2032)" style={{ mixBlendMode: 'overlay' }}/>
            <rect className="home-stripe-1" x="77.8828" y="-179.506" width="95.1286" height="952.757" fill="url(#paint2_linear_74_2032)" style={{ mixBlendMode: 'overlay' }}/>
            <rect className="home-stripe-2" x="173.014" y="-179.506" width="96.0613" height="952.757" fill="url(#paint4_linear_74_2032)" style={{ mixBlendMode: 'overlay' }}/>
            <rect className="home-stripe-3" x="269.074" y="-179.506" width="96.0613" height="952.757" fill="url(#paint5_linear_74_2032)" style={{ mixBlendMode: 'overlay' }}/>
            <rect className="home-stripe-4" x="364.203" y="-179.506" width="96.0613" height="952.757" fill="url(#paint8_linear_74_2032)" style={{ mixBlendMode: 'overlay' }}/>
            <rect className="home-stripe-5" x="460.264" y="-179.506" width="95.1286" height="952.757" fill="url(#paint1_linear_74_2032)" style={{ mixBlendMode: 'overlay' }}/>
            <rect className="home-stripe-6" x="555.393" y="-179.506" width="96.0613" height="952.757" fill="url(#paint3_linear_74_2032)" style={{ mixBlendMode: 'overlay' }}/>
            <rect className="home-stripe-7" x="651.453" y="-179.506" width="96.0613" height="952.757" fill="url(#paint6_linear_74_2032)" style={{ mixBlendMode: 'overlay' }}/>
            <rect className="home-stripe-8" x="747.516" y="-179.506" width="95.1286" height="952.757" fill="url(#paint7_linear_74_2032)" style={{ mixBlendMode: 'overlay' }}/>
            <rect className="home-stripe-9" x="842.643" y="-179.506" width="96.0613" height="952.757" fill="url(#paint9_linear_74_2032)" style={{ mixBlendMode: 'overlay' }}/>
            <rect className="home-stripe-10" x="938.705" y="-179.506" width="95.1286" height="952.757" fill="url(#paint10_linear_74_2032)" style={{ mixBlendMode: 'overlay' }}/>
            <rect className="home-stripe-11" x="1033.83" y="-179.506" width="96.0613" height="952.757" fill="url(#paint11_linear_74_2032)" style={{ mixBlendMode: 'overlay' }}/>
            <rect className="home-stripe-12" x="1129.89" y="-179.506" width="95.1286" height="952.757" fill="url(#paint12_linear_74_2032)" style={{ mixBlendMode: 'overlay' }}/>
            <rect className="home-stripe-13" x="1225.02" y="-179.506" width="96.0613" height="952.757" fill="url(#paint13_linear_74_2032)" style={{ mixBlendMode: 'overlay' }}/>
          </g>
        </g>
        <defs>
          <filter id="filter0_f_74_2032" x="5.28906" y="-656.168" width="2044.85" height="1839.02" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feGaussianBlur stdDeviation="175" result="effect1_foregroundBlur_74_2032"/>
          </filter>
          <filter id="filter1_f_74_2032" x="-688.557" y="-349.758" width="1581.98" height="1647.17" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feGaussianBlur stdDeviation="175" result="effect1_foregroundBlur_74_2032"/>
          </filter>
          <filter id="filter2_f_74_2032" x="-530.229" y="70.2744" width="1771.04" height="1405.95" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feGaussianBlur stdDeviation="175" result="effect1_foregroundBlur_74_2032"/>
          </filter>
          <filter id="filter3_f_74_2032" x="-866.496" y="-1178.7" width="2032.85" height="1908.05" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feGaussianBlur stdDeviation="250" result="effect1_foregroundBlur_74_2032"/>
          </filter>
          <filter id="filter4_f_74_2032" x="-1036" y="-1351" width="2032.85" height="1908.05" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feGaussianBlur stdDeviation="250" result="effect1_foregroundBlur_74_2032"/>
          </filter>
          <filter id="filter5_f_74_2032" x="505.416" y="-656.168" width="1311.89" height="1311.89" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feGaussianBlur stdDeviation="175" result="effect1_foregroundBlur_74_2032"/>
          </filter>
          <filter id="filter6_f_74_2032" x="-602.873" y="70.2744" width="1139.59" height="1238.31" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feGaussianBlur stdDeviation="175" result="effect1_foregroundBlur_74_2032"/>
          </filter>
          <filter id="filter7_f_74_2032" x="80.7266" y="60.9609" width="1311.89" height="1311.89" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feGaussianBlur stdDeviation="175" result="effect1_foregroundBlur_74_2032"/>
          </filter>
          <filter id="filter8_f_74_2032" x="572.473" y="39.54" width="1311.89" height="1311.89" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feGaussianBlur stdDeviation="175" result="effect1_foregroundBlur_74_2032"/>
          </filter>
          <linearGradient id="paint0_linear_74_2032" x1="-18.1777" y1="296.873" x2="77.8835" y2="296.873" gradientUnits="userSpaceOnUse">
            <stop stopColor="#D9D9D9" stopOpacity="0"/>
            <stop offset="0.95" stopColor="#060606" stopOpacity="0.77"/>
            <stop offset="1" stopColor="white"/>
          </linearGradient>
          <linearGradient id="paint1_linear_74_2032" x1="460.264" y1="296.873" x2="555.392" y2="296.873" gradientUnits="userSpaceOnUse">
            <stop stopColor="#D9D9D9" stopOpacity="0"/>
            <stop offset="0.95" stopColor="#060606" stopOpacity="0.77"/>
            <stop offset="1" stopColor="white"/>
          </linearGradient>
          <linearGradient id="paint2_linear_74_2032" x1="77.8828" y1="296.873" x2="173.011" y2="296.873" gradientUnits="userSpaceOnUse">
            <stop stopColor="#D9D9D9" stopOpacity="0"/>
            <stop offset="0.95" stopColor="#060606" stopOpacity="0.77"/>
            <stop offset="1" stopColor="white"/>
          </linearGradient>
          <linearGradient id="paint3_linear_74_2032" x1="555.393" y1="296.873" x2="651.454" y2="296.873" gradientUnits="userSpaceOnUse">
            <stop stopColor="#D9D9D9" stopOpacity="0"/>
            <stop offset="0.95" stopColor="#060606" stopOpacity="0.77"/>
            <stop offset="1" stopColor="white"/>
          </linearGradient>
          <linearGradient id="paint4_linear_74_2032" x1="173.014" y1="296.873" x2="269.075" y2="296.873" gradientUnits="userSpaceOnUse">
            <stop stopColor="#D9D9D9" stopOpacity="0"/>
            <stop offset="0.95" stopColor="#060606" stopOpacity="0.77"/>
            <stop offset="1" stopColor="white"/>
          </linearGradient>
          <linearGradient id="paint5_linear_74_2032" x1="269.074" y1="296.873" x2="365.135" y2="296.873" gradientUnits="userSpaceOnUse">
            <stop stopColor="#D9D9D9" stopOpacity="0"/>
            <stop offset="0.95" stopColor="#060606" stopOpacity="0.77"/>
            <stop offset="1" stopColor="white"/>
          </linearGradient>
          <linearGradient id="paint6_linear_74_2032" x1="651.453" y1="296.873" x2="747.514" y2="296.873" gradientUnits="userSpaceOnUse">
            <stop stopColor="#D9D9D9" stopOpacity="0"/>
            <stop offset="0.95" stopColor="#060606" stopOpacity="0.77"/>
            <stop offset="1" stopColor="white"/>
          </linearGradient>
          <linearGradient id="paint7_linear_74_2032" x1="747.516" y1="296.873" x2="842.644" y2="296.873" gradientUnits="userSpaceOnUse">
            <stop stopColor="#D9D9D9" stopOpacity="0"/>
            <stop offset="0.95" stopColor="#060606" stopOpacity="0.77"/>
            <stop offset="1" stopColor="white"/>
          </linearGradient>
          <linearGradient id="paint8_linear_74_2032" x1="364.203" y1="296.873" x2="460.264" y2="296.873" gradientUnits="userSpaceOnUse">
            <stop stopColor="#D9D9D9" stopOpacity="0"/>
            <stop offset="0.95" stopColor="#060606" stopOpacity="0.77"/>
            <stop offset="1" stopColor="white"/>
          </linearGradient>
          <linearGradient id="paint9_linear_74_2032" x1="842.643" y1="296.873" x2="938.704" y2="296.873" gradientUnits="userSpaceOnUse">
            <stop stopColor="#D9D9D9" stopOpacity="0"/>
            <stop offset="0.95" stopColor="#060606" stopOpacity="0.77"/>
            <stop offset="1" stopColor="white"/>
          </linearGradient>
          <linearGradient id="paint10_linear_74_2032" x1="938.705" y1="296.873" x2="1033.83" y2="296.873" gradientUnits="userSpaceOnUse">
            <stop stopColor="#D9D9D9" stopOpacity="0"/>
            <stop offset="0.95" stopColor="#060606" stopOpacity="0.77"/>
            <stop offset="1" stopColor="white"/>
          </linearGradient>
          <linearGradient id="paint11_linear_74_2032" x1="1033.83" y1="296.873" x2="1129.9" y2="296.873" gradientUnits="userSpaceOnUse">
            <stop stopColor="#D9D9D9" stopOpacity="0"/>
            <stop offset="0.95" stopColor="#060606" stopOpacity="0.77"/>
            <stop offset="1" stopColor="white"/>
          </linearGradient>
          <linearGradient id="paint12_linear_74_2032" x1="1129.89" y1="296.873" x2="1225.02" y2="296.873" gradientUnits="userSpaceOnUse">
            <stop stopColor="#D9D9D9" stopOpacity="0"/>
            <stop offset="0.95" stopColor="#060606" stopOpacity="0.77"/>
            <stop offset="1" stopColor="white"/>
          </linearGradient>
          <linearGradient id="paint13_linear_74_2032" x1="1225.02" y1="296.873" x2="1321.08" y2="296.873" gradientUnits="userSpaceOnUse">
            <stop stopColor="#D9D9D9" stopOpacity="0"/>
            <stop offset="0.95" stopColor="#060606" stopOpacity="0.77"/>
            <stop offset="1" stopColor="white"/>
          </linearGradient>
          <clipPath id="clip0_74_2032">
            <rect y="-84" width="1404" height="662" rx="25" fill="white"/>
          </clipPath>
        </defs>
      </svg>
    </>
  );
};

export default HomepageHeroBg;
