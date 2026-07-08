import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const filePath = path.join(process.cwd(), 'src', 'assets', 'projects', 'datacircles-hq.png');
const webpPath = path.join(process.cwd(), 'src', 'assets', 'projects', 'datacircles-hq.webp');

async function convert() {
  console.log('Starting conversion of 13MB PNG to HQ WebP...');
  
  try {
    await sharp(filePath)
      .webp({ quality: 90, effort: 6 }) // High quality WebP, no resizing!
      .toFile(webpPath);
      
    const pngStats = fs.statSync(filePath);
    const webpStats = fs.statSync(webpPath);
    
    console.log(`Success! ${(pngStats.size / 1024 / 1024).toFixed(2)}MB -> ${(webpStats.size / 1024 / 1024).toFixed(2)}MB`);
    
    // Clean up the massive PNG
    fs.unlinkSync(filePath);
    console.log('Deleted the original PNG file to save space.');
  } catch (e) {
    console.error('Error during conversion:', e);
  }
}

convert();
