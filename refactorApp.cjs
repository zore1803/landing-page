const fs = require('fs');

let content = fs.readFileSync('src/App.jsx', 'utf8');

// 1. Add Navbar import
content = content.replace(
  "import ProjectsPage from './ProjectsPage';",
  "import ProjectsPage from './ProjectsPage';\nimport Navbar from './Navbar';"
);

// 2. Remove hash checking
content = content.replace(
  /\/\/ Check URL hash on mount and on hashchange to correctly open the Studio page[\s\S]*?}, \[\]\);/,
  ""
);

// 3. Remove state variables and showStudioPage effect
content = content.replace(
  /const \[isMobileMenuOpen, setIsMobileMenuOpen\] = useState\(false\);[\s\S]*?}, \[showStudioPage\]\);/,
  "  // Jump to top instantly on mount\n  useEffect(() => {\n    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });\n  }, []);"
);

// 4. Replace inline Navbar and showStudioPage ternary open
content = content.replace(
  /\{\/\* Mobile Menu Overlay \*\/\}[\s\S]*?\{!showStudioPage \? \(\s*<>/,
  "<Navbar activeSection=\"home\" />"
);

// 5. Replace showStudioPage ternary close
content = content.replace(
  /<\/>\s*\) : \(\s*<StudioPage \/>\s*\)/,
  ""
);

// 6. Add StudioRoute component
const studioRouteCode = `
function StudioRoute() {
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

function App() {`;

content = content.replace("function App() {", studioRouteCode);

// 7. Add /studio to routes
content = content.replace(
  '<Route path="/" element={<Home />} />',
  '<Route path="/" element={<Home />} />\n      <Route path="/studio" element={<StudioRoute />} />'
);

fs.writeFileSync('src/App.jsx', content);
console.log("App.jsx refactored successfully.");
