import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const filesToConvert = [
  'commongrounds-hq',
  'qodenext-hq'
];

async function convert() {
  console.log('Starting conversion of final HQ PNGs to HQ WebP...');
  
  for (const basename of filesToConvert) {
    const filePath = path.join(process.cwd(), 'src', 'assets', 'projects', `${basename}.png`);
    const webpPath = path.join(process.cwd(), 'src', 'assets', 'projects', `${basename}.webp`);
    
    try {
      await sharp(filePath)
        .webp({ quality: 90, effort: 6 }) // High quality WebP, no resizing!
        .toFile(webpPath);
        
      const pngStats = fs.statSync(filePath);
      const webpStats = fs.statSync(webpPath);
      
      console.log(`${basename}: ${(pngStats.size / 1024 / 1024).toFixed(2)}MB -> ${(webpStats.size / 1024 / 1024).toFixed(2)}MB`);
      
      // Clean up the massive PNG
      fs.unlinkSync(filePath);
    } catch (e) {
      console.error(`Error during conversion of ${basename}:`, e);
    }
  }
  console.log('Finished!');
}

convert();
