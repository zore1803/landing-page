const fs = require('fs');
let jsx = fs.readFileSync('src/BrandServicePage.jsx', 'utf8');
jsx = jsx.replace(/BrandServicePage/g, 'WebServicePage')
         .replace(/copperBrandLogo/g, 'copperWebLogo')
         .replace(/CopperBrand\.svg/g, 'CopperWeb.svg')
         .replace(/Copper Brand/g, 'Copper Web')
         .replace(/activeService="brand"/g, 'activeService="web"')
         .replace(/brand-service-page/g, 'web-service-page')
         .replace(/\bbs-/g, 'ws-')
         .replace(/"bs-/g, '"ws-');

let css = fs.readFileSync('src/BrandServicePage.css', 'utf8');
css = css.replace(/brand-service-page/g, 'web-service-page')
         .replace(/\.bs-/g, '.ws-');

fs.writeFileSync('src/WebServicePage.jsx', jsx);
fs.writeFileSync('src/WebServicePage.css', css);
