import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const projectsDir = path.join(process.cwd(), 'src', 'assets', 'projects');

async function start() {
  const files = fs.readdirSync(projectsDir);
  
  for (const file of files) {
    if (file.endsWith('.png')) {
      const fullPath = path.join(projectsDir, file);
      const webpPath = fullPath.replace('.png', '.webp');
      
      console.log(`Processing high quality WebP for ${file}...`);
      
      try {
        await sharp(fullPath)
          .webp({ quality: 90, effort: 6 }) // Very high quality, no resizing!
          .toFile(webpPath);
          
        const pngStats = fs.statSync(fullPath);
        const webpStats = fs.statSync(webpPath);
        
        console.log(`Success! ${(pngStats.size / 1024 / 1024).toFixed(2)}MB -> ${(webpStats.size / 1024 / 1024).toFixed(2)}MB`);
        
        // Delete the original PNG file now that we have the HQ webp
        fs.unlinkSync(fullPath);
      } catch (e) {
        console.error(`Error processing ${file}:`, e);
      }
    }
  }
}

start();
