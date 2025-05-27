import sharp from 'sharp';
import { promises as fs } from 'fs';
import path from 'path';

async function optimizeImage(inputPath, outputPath, options = {}) {
  try {
    const image = sharp(inputPath);
    const metadata = await image.metadata();
    
    // Default options for optimization
    const defaultOptions = {
      width: metadata.width,
      quality: 80,
      format: metadata.format
    };
    
    const finalOptions = { ...defaultOptions, ...options };
    
    // Resize and optimize
    await image
      .resize(finalOptions.width)
      [finalOptions.format]({ quality: finalOptions.quality })
      .toFile(outputPath);
      
    console.log(`Optimized: ${path.basename(inputPath)}`);
  } catch (error) {
    console.error(`Error optimizing ${inputPath}:`, error);
  }
}

async function main() {
  const publicDir = './public';
  
  // Optimize hero image
  await optimizeImage(
    path.join(publicDir, 'Prince V.jpg'),
    path.join(publicDir, 'Prince V.optimized.jpg'),
    { width: 1920, quality: 80, format: 'jpeg' }
  );
  
  // Optimize profile image
  await optimizeImage(
    path.join(publicDir, 'me.png'),
    path.join(publicDir, 'me.optimized.webp'),
    { width: 800, quality: 80, format: 'webp' }
  );
}

main().catch(console.error); 