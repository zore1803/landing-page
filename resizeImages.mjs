import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const assetsDir = path.join(process.cwd(), 'src', 'assets');

async function processDirectory(directory) {
  const files = fs.readdirSync(directory);
  for (const file of files) {
    const fullPath = path.join(directory, file);
    if (fs.statSync(fullPath).isDirectory()) {
      await processDirectory(fullPath);
    } else if (file.match(/\.webp$/i)) {
      const stats = fs.statSync(fullPath);
      
      // Skip very small files
      if (stats.size < 50 * 1024) continue;
      
      const tempPath = fullPath + '.tmp.webp';
      
      try {
        console.log(`Resizing ${fullPath}...`);
        await sharp(fullPath)
          .resize({ width: 1200, withoutEnlargement: true }) // Downscale to 1200px max width
          .webp({ quality: 75, effort: 6 })
          .toFile(tempPath);
          
        fs.unlinkSync(fullPath);
        fs.renameSync(tempPath, fullPath);
        
        console.log(`Resized: ${file} (${(stats.size / 1024).toFixed(2)} KB) -> ${(fs.statSync(fullPath).size / 1024).toFixed(2)} KB`);
      } catch (e) {
        console.log(`Error resizing ${file}:`, e);
      }
    }
  }
}

async function start() {
  try {
    await processDirectory(assetsDir);
    console.log("All WebP images resized and optimized successfully!");
  } catch (error) {
    console.error("Error processing images:", error);
  }
}

start();
