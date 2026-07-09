const fs = require('fs');

let svg = fs.readFileSync('src/assets/copperbrandlandingpage.svg', 'utf8');

// Convert SVG to React component
svg = svg.replace(/clip-path/g, 'clipPath');
svg = svg.replace(/fill-opacity/g, 'fillOpacity');
svg = svg.replace(/stop-color/g, 'stopColor');
svg = svg.replace(/stop-opacity/g, 'stopOpacity');
svg = svg.replace(/color-interpolation-filters/g, 'colorInterpolationFilters');
svg = svg.replace(/mix-blend-mode:overlay/g, 'mixBlendMode: "overlay"');
svg = svg.replace(/style="([^"]*)"/g, (match, p1) => {
  return `style={{ ${p1} }}`;
});

// Update SVG tag
svg = svg.replace(/<svg[^>]*>/, '<svg className="services-hero-bg-svg" width="100%" height="100%" viewBox="0 0 1404 1100" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">');

const componentCode = `import React from 'react';

const BrandLandingHeroBg = () => {
  return (
    ${svg}
  );
};

export default BrandLandingHeroBg;
`;

fs.writeFileSync('src/BrandLandingHeroBg.jsx', componentCode);
