// scripts/build-guide-pdf.mjs
import { execFileSync } from 'node:child_process';
import { resolve } from 'node:path';

const html = resolve('brand/guide/brand-guide.html');
execFileSync('google-chrome', [
  '--headless=old',
  '--no-pdf-header-footer',
  '--print-to-pdf=brand/guide/brand-guide.pdf',
  `file://${html}`,
], { stdio: 'inherit' });
console.log('PDF generado: brand/guide/brand-guide.pdf');
