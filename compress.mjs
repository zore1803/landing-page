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
    } else if (file.match(/\.(png|jpe?g)$/i)) {
      const stats = fs.statSync(fullPath);
      const parsedPath = path.parse(fullPath);
      const webpPath = path.join(directory, `${parsedPath.name}.webp`);
      
      console.log(`Converting ${fullPath} to WebP...`);
      await sharp(fullPath)
        .webp({ quality: 80, effort: 4 })
        .toFile(webpPath);
        
      console.log(`Converted: ${file} (${(stats.size / 1024 / 1024).toFixed(2)} MB) -> ${(fs.statSync(webpPath).size / 1024 / 1024).toFixed(2)} MB`);
      
      // Delete original image to save space and avoid confusion
      fs.unlinkSync(fullPath);
    }
  }
}

async function start() {
  try {
    await processDirectory(assetsDir);
    console.log("All nested images compressed and original files cleaned up successfully!");
  } catch (error) {
    console.error("Error processing images:", error);
  }
}

start();
