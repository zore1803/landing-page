const fs = require('fs');
let code = fs.readFileSync('src/App.jsx', 'utf8');

// 1. Add Navbar import
code = code.replace(
  "import ProjectsPage from './ProjectsPage';",
  "import ProjectsPage from './ProjectsPage';\nimport Navbar from './Navbar';"
);

// 2. Remove handleHash
code = code.replace(
  /\/\/ Check URL hash on mount and on hashchange to correctly open the Studio page[\s\S]*?\}, \[\]\);/m,
  "// Jump to top instantly on mount\n  useEffect(() => {\n    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });\n  }, []);"
);

// 3. Remove inline navbar and showStudioPage ternary
let idx1 = code.indexOf('const [isMobileMenuOpen');
let idx2 = code.indexOf('<div className="landing-container" id="home">');
if (idx1 !== -1 && idx2 !== -1) {
  code = code.substring(0, idx1) + 
         "return (\n    <>\n      <Navbar activeSection=\"home\" />\n      " + 
         code.substring(idx2);
}

// 4. Remove closing ternary
let idx3 = code.indexOf('</>\n      ) : (\n        <StudioPage />\n      )}');
if (idx3 !== -1) {
  code = code.substring(0, idx3) + code.substring(idx3 + '</>\n      ) : (\n        <StudioPage />\n      )}'.length);
}

// 5. Add StudioRoute and routes
code = code.replace(
  "function App() {",
  `function StudioRoute() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

  return (
    <>
      <Navbar activeSection="about" />
      <StudioPage />
      <Footer />
    </>
  );
}

function App() {`
);

code = code.replace(
  '<Route path="/" element={<Home />} />',
  '<Route path="/" element={<Home />} />\n      <Route path="/studio" element={<StudioRoute />} />'
);

fs.writeFileSync('src/App.jsx', code);
console.log("App.jsx fixed successfully.");
