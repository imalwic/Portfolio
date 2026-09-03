const { Jimp } = require('jimp');
const fs = require('fs');

const density = 'Ñ@#W$9876543210?!abc;:+=-,._                    ';

async function run() {
  const image = await Jimp.read('public/profile.jpeg');
  image.resize({ w: 80, h: 40 });
  image.greyscale();

  let asciiImage = '';
  for (let y = 0; y < image.bitmap.height; y++) {
    for (let x = 0; x < image.bitmap.width; x++) {
      const color = image.getPixelColor(x, y);
      const r = (color >> 24) & 255;
      const g = (color >> 16) & 255;
      const b = (color >> 8) & 255;
      const avg = (r + g + b) / 3;
      
      const charIndex = Math.floor(avg / 255 * (density.length - 1));
      asciiImage += density[charIndex] + ' ';
    }
    asciiImage += '\\n';
  }

  // Use JSON.stringify to safely export the string
  const jsContent = `export const ASCII_ART = ${JSON.stringify(asciiImage)};\n`;
  fs.writeFileSync('src/components/asciiArt.ts', jsContent);
  console.log('ASCII art generated successfully!');
}

run().catch(console.error);
