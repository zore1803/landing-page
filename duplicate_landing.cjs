const fs = require('fs');

let jsx = fs.readFileSync('src/BrandLandingPage.jsx', 'utf8');
jsx = jsx.replace(/BrandLandingPage/g, 'WebLandingPage')
         .replace(/activeService="brand"/g, 'activeService="web"')
         .replace(/brand-landing-page/g, 'web-landing-page');

let css = fs.readFileSync('src/BrandLandingPage.css', 'utf8');
css = css.replace(/brand-landing-page/g, 'web-landing-page');

fs.writeFileSync('src/WebLandingPage.jsx', jsx);
fs.writeFileSync('src/WebLandingPage.css', css);

let app = fs.readFileSync('src/App.jsx', 'utf8');
if (!app.includes('WebLandingPage')) {
  app = app.replace("import BrandLandingPage from './BrandLandingPage';", "import BrandLandingPage from './BrandLandingPage';\nimport WebLandingPage from './WebLandingPage';");
  app = app.replace('<Route path="/copper-brand" element={<BrandLandingPage />} />', '<Route path="/copper-brand" element={<BrandLandingPage />} />\n        <Route path="/copper-web-landing" element={<WebLandingPage />} />');
  fs.writeFileSync('src/App.jsx', app);
}

console.log("Done");
