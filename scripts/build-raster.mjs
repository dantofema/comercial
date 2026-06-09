// scripts/build-raster.mjs
import sharp from 'sharp';
import pngToIco from 'png-to-ico';
import { writeFileSync } from 'node:fs';

const SRC = 'brand/logo/listto-icon.svg';

const targets = [
  ['brand/favicon/favicon-16.png', 16],
  ['brand/favicon/favicon-32.png', 32],
  ['brand/favicon/favicon-48.png', 48],
  ['brand/favicon/apple-touch-icon.png', 180],
  ['brand/favicon/icon-192.png', 192],
  ['brand/favicon/icon-512.png', 512],
  ['brand/social/profile-512.png', 512],
];

for (const [out, size] of targets) {
  await sharp(SRC, { density: 384 }).resize(size, size).png().toFile(out);
  console.log('ok', out, size);
}

const ico = await pngToIco([
  'brand/favicon/favicon-16.png',
  'brand/favicon/favicon-32.png',
  'brand/favicon/favicon-48.png',
]);
writeFileSync('brand/favicon/favicon.ico', ico);
console.log('ok brand/favicon/favicon.ico');
