import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const blueprintPath = 'C:\\Users\\yoru\\.gemini\\antigravity\\brain\\2849d713-9ba4-40ea-9177-cb0259c316b5\\media__1782306031132.png';
const generatedBgPath = 'C:\\Users\\yoru\\.gemini\\antigravity\\brain\\2849d713-9ba4-40ea-9177-cb0259c316b5\\hero_bg_1782308866339.png';
const outputDir = path.join(process.cwd(), 'public', 'images');

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const regions = [
  { name: 'profile.png', extract: { left: 8, top: 78, width: 144, height: 147 }, format: 'png' },
  { name: 'about-featured.jpg', extract: { left: 98, top: 254, width: 258, height: 146 }, format: 'jpeg' },
  { name: 'project-1.jpg', extract: { left: 98, top: 635, width: 126, height: 71 }, format: 'jpeg' },
  { name: 'project-2.jpg', extract: { left: 231, top: 635, width: 126, height: 71 }, format: 'jpeg' },
  { name: 'project-3.jpg', extract: { left: 98, top: 735, width: 126, height: 71 }, format: 'jpeg' },
  { name: 'project-4.jpg', extract: { left: 231, top: 735, width: 126, height: 71 }, format: 'jpeg' }
];

async function main() {
  try {
    // 1. Copy generated background image
    if (fs.existsSync(generatedBgPath)) {
      const bgOutputPath = path.join(outputDir, 'hero-bg.png');
      fs.copyFileSync(generatedBgPath, bgOutputPath);
      console.log('Copied hero-bg.png successfully.');
    } else {
      console.warn('Generated background image not found at path:', generatedBgPath);
    }

    // 2. Crop sections from the blueprint
    for (const region of regions) {
      const outputPath = path.join(outputDir, region.name);
      let transformer = sharp(blueprintPath).extract(region.extract);
      
      if (region.format === 'png') {
        transformer = transformer.png();
      } else {
        transformer = transformer.jpeg({ quality: 95 });
      }

      await transformer.toFile(outputPath);
      console.log(`Saved: ${region.name} (${region.extract.width}x${region.extract.height})`);
    }
    console.log('All assets cropped and copied successfully in public/images/.');
  } catch (err) {
    console.error('Error in asset processing:', err);
  }
}

main();
