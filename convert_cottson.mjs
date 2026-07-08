import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const filePath = path.join(process.cwd(), 'src', 'assets', 'projects', 'cottson-clothing-hq.jpg');
const webpPath = path.join(process.cwd(), 'src', 'assets', 'projects', 'cottson-clothing-hq.webp');

async function convert() {
  console.log('Starting conversion of 17MB JPG to HQ WebP...');
  
  try {
    await sharp(filePath)
      .webp({ quality: 90, effort: 6 }) // High quality WebP, no resizing!
      .toFile(webpPath);
      
    const jpgStats = fs.statSync(filePath);
    const webpStats = fs.statSync(webpPath);
    
    console.log(`Success! ${(jpgStats.size / 1024 / 1024).toFixed(2)}MB -> ${(webpStats.size / 1024 / 1024).toFixed(2)}MB`);
    
    // Clean up the massive 17MB JPG
    fs.unlinkSync(filePath);
    console.log('Deleted the 17MB JPG file to save space.');
  } catch (e) {
    console.error('Error during conversion:', e);
  }
}

convert();
