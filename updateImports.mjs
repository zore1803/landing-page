import fs from 'fs';
import path from 'path';

const filesToUpdate = [
  'src/StudioPage.jsx',
  'src/ServicesSection.jsx',
  'src/ServicesPage.jsx',
  'src/ProjectsSection.jsx',
  'src/ProjectsPage.jsx'
];

for (const relPath of filesToUpdate) {
  const filePath = path.join(process.cwd(), relPath);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Replace .png and .jpg imports with .webp
    const originalContent = content;
    content = content.replace(/\.png/g, '.webp');
    content = content.replace(/\.jpg/g, '.webp');
    
    if (originalContent !== content) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Updated ${relPath}`);
    }
  }
}
console.log("JSX files updated to point to .webp");
