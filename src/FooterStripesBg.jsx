import React, { useMemo } from 'react';

/*
 * Footer background — the Terms & Conditions hero effect, mirrored vertically.
 * In T&C the orange blob bulges downward from the top; here everything is
 * flipped (matrix 1 0 0 -1 0 898) so the orange blob bulges UPWARD from the
 * bottom, with the same animated "folded metal" shimmer stripes on top.
 *
 * All ids/classes are suffixed `_ft` / `fb-` because the footer renders on the
 * same pages as TermsConditionsHeroBg and their SVG defs must not collide.
 */
const FooterStripesBg = () => {
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
        6.5 + d * 0.15,
      ];
      if (d < 7) {
        peaks.push(7.4 + (7 - d) * 0.15);
      }

      let keyframes = `@keyframes fbComplexPulse${i} {\n`;

      for (let frame = 0; frame <= frames; frame++) {
        const t = frame / FPS;
        let maxBright = 0.2;

        peaks.forEach((peak) => {
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

      css += `.fb-stripe-${i} { animation: fbComplexPulse${i} 9s infinite linear; }\n`;
    }

    return css;
  }, []);

  return (
    <>
      <style>{stripeAnimationCSS}</style>
      <svg className="footer-stripes-svg" preserveAspectRatio="xMidYMax slice" width="1404" height="898" viewBox="0 0 1404 898" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_ft)">
          {/* Mirror everything vertically so the blob points up from the bottom */}
          <g transform="matrix(1 0 0 -1 0 898)">
            <rect width="1404" height="898" fill="#F0EDE4" />
            {/* Deeper copper blob for warmth/depth (sits lower). Widened
                horizontally (scaleX 1.42 about the centre) so the arch base
                reaches the corners while keeping the header's triangular form. */}
            <g filter="url(#filter1_f_ft)">
              <path d="M1324 -91C1324 147.035 1063.65 340 742.5 340C421.346 340 161 147.035 161 -91C161 -329.035 421.346 -522 742.5 -522C1063.65 -522 1324 -329.035 1324 -91Z" fill="#C55418" transform="matrix(1.42 0 0 1 -311.85 90)" />
            </g>
            {/* Primary orange blob */}
            <g filter="url(#filter0_f_ft)">
              <path d="M1324 -91C1324 147.035 1063.65 340 742.5 340C421.346 340 161 147.035 161 -91C161 -329.035 421.346 -522 742.5 -522C1063.65 -522 1324 -329.035 1324 -91Z" fill="#EE7A1D" transform="matrix(1.42 0 0 1 -311.85 0)" />
            </g>
            <rect className="fb-stripe-0" x="5" width="93.9596" height="900" fill="url(#fpaint0)" style={{ mixBlendMode: 'overlay' }} />
            <rect className="fb-stripe-1" x="98.9609" width="93.0474" height="900" fill="url(#fpaint2)" style={{ mixBlendMode: 'overlay' }} />
            <rect className="fb-stripe-2" x="192.008" width="93.9596" height="900" fill="url(#fpaint4)" style={{ mixBlendMode: 'overlay' }} />
            <rect className="fb-stripe-3" x="285.965" width="93.9596" height="900" fill="url(#fpaint5)" style={{ mixBlendMode: 'overlay' }} />
            <rect className="fb-stripe-4" x="379.016" width="93.9596" height="900" fill="url(#fpaint8)" style={{ mixBlendMode: 'overlay' }} />
            <rect className="fb-stripe-5" x="472.973" width="93.0474" height="900" fill="url(#fpaint1)" style={{ mixBlendMode: 'overlay' }} />
            <rect className="fb-stripe-6" x="566.023" width="93.9596" height="900" fill="url(#fpaint3)" style={{ mixBlendMode: 'overlay' }} />
            <rect className="fb-stripe-7" x="659.98" width="93.9596" height="900" fill="url(#fpaint6)" style={{ mixBlendMode: 'overlay' }} />
            <rect className="fb-stripe-8" x="753.941" width="93.0474" height="900" fill="url(#fpaint7)" style={{ mixBlendMode: 'overlay' }} />
            <rect className="fb-stripe-9" x="846.984" width="93.9596" height="900" fill="url(#fpaint9)" style={{ mixBlendMode: 'overlay' }} />
            <rect className="fb-stripe-10" x="940.945" width="93.0474" height="900" fill="url(#fpaint10)" style={{ mixBlendMode: 'overlay' }} />
            <rect className="fb-stripe-11" x="1034" width="93.9596" height="900" fill="url(#fpaint11)" style={{ mixBlendMode: 'overlay' }} />
            <rect className="fb-stripe-12" x="1127.95" width="93.0474" height="900" fill="url(#fpaint12)" style={{ mixBlendMode: 'overlay' }} />
            <rect className="fb-stripe-13" x="1221" width="93.9596" height="900" fill="url(#fpaint13)" style={{ mixBlendMode: 'overlay' }} />
            <rect className="fb-stripe-14" x="1314.7" width="93.9596" height="900" fill="url(#fpaint14)" style={{ mixBlendMode: 'overlay' }} />
          </g>
        </g>
        <defs>
          <filter id="filter0_f_ft" x="-139" y="-822" width="1763" height="1462" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="150" result="effect1_foregroundBlur_ft" />
          </filter>
          <filter id="filter1_f_ft" x="-139" y="-732" width="1763" height="1462" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="130" result="effect1_foregroundBlur_ft2" />
          </filter>
          {[
            ['fpaint0', 5, 98.9596], ['fpaint1', 472.973, 566.02], ['fpaint2', 98.9609, 192.008],
            ['fpaint3', 566.023, 659.983], ['fpaint4', 192.008, 285.967], ['fpaint5', 285.965, 379.924],
            ['fpaint6', 659.98, 753.94], ['fpaint7', 753.941, 846.989], ['fpaint8', 379.016, 472.975],
            ['fpaint9', 846.984, 940.944], ['fpaint10', 940.945, 1033.99], ['fpaint11', 1034, 1127.96],
            ['fpaint12', 1127.95, 1221], ['fpaint13', 1221, 1314.96], ['fpaint14', 1314.7, 1408.66],
          ].map(([id, x1, x2]) => (
            <linearGradient key={id} id={id} x1={x1} y1="450" x2={x2} y2="450" gradientUnits="userSpaceOnUse">
              <stop stopColor="#D9D9D9" stopOpacity="0" />
              <stop offset="0.95" stopColor="#060606" stopOpacity="0.77" />
              <stop offset="1" stopColor="white" />
            </linearGradient>
          ))}
          <clipPath id="clip0_ft">
            <rect width="1404" height="898" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </>
  );
};

export default FooterStripesBg;
