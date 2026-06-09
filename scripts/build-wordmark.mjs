// scripts/build-wordmark.mjs
// Genera el wordmark Listto outlineado: palabra "listto" en Nunito ExtraBold
// (convertida a paths con opentype.js) + un check coral de acento sobre las "tt".
import opentype from 'opentype.js';
import { writeFileSync } from 'node:fs';

const FONT_PATH = 'brand/_fonts/Nunito-ExtraBold.ttf';
const FS = 200;            // tamaño de fuente (px) = alto de referencia
const PAD = 40;            // padding del viewBox
const STROKE = 26;         // grosor del trazo del check
const BASELINE = PAD + FS; // y de la baseline

const INK = '#2B2622';
const CORAL = '#FF6B4A';
const AMBER = '#FFB23E';
const WHITE = '#FFFFFF';
const CREAM = '#FFF7F0';

const font = await opentype.load(FONT_PATH);

const word = 'listto';
const wW = font.getAdvanceWidth(word, FS);
const wordPath = font.getPath(word, PAD, BASELINE, FS).toPathData(2);

// Rango horizontal de las dos "t": desde el fin de "lis" hasta el inicio de la "o".
const xT1 = PAD + font.getAdvanceWidth('lis', FS);
const xT2end = PAD + font.getAdvanceWidth('listto', FS) - font.getAdvanceWidth('o', FS);
const cw = xT2end - xT1;

// Check de acento, flotando sobre las tt.
const accTop = PAD + FS * 0.02;    // extremo derecho (más alto)
const accBaseY = PAD + FS * 0.30;  // valle
const sX = xT1, vX = xT1 + cw * 0.42, eX = xT1 + cw;
const checkD = `M${sX.toFixed(1)} ${(accBaseY - FS * 0.12).toFixed(1)} L${vX.toFixed(1)} ${accBaseY.toFixed(1)} L${eX.toFixed(1)} ${accTop.toFixed(1)}`;

const totalW = PAD + wW + PAD;
const totalH = BASELINE + PAD;

function svg({ letterFill, checkColor, bg }) {
  const bgRect = bg ? `\n  <rect width="${totalW.toFixed(1)}" height="${totalH.toFixed(1)}" fill="${bg}"/>` : '';
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${totalW.toFixed(1)} ${totalH.toFixed(1)}" width="${totalW.toFixed(0)}" height="${totalH.toFixed(0)}" role="img" aria-label="Listto">${bgRect}
  <path d="${wordPath}" fill="${letterFill}"/>
  <path d="${checkD}" fill="none" stroke="${checkColor}" stroke-width="${STROKE}" stroke-linecap="round" stroke-linejoin="round"/>
</svg>\n`;
}

writeFileSync('brand/logo/listto-wordmark.svg',       svg({ letterFill: INK,   checkColor: CORAL, bg: null }));
writeFileSync('brand/logo/listto-wordmark-coral.svg', svg({ letterFill: WHITE, checkColor: WHITE, bg: CORAL }));
writeFileSync('brand/logo/listto-wordmark-ink.svg',   svg({ letterFill: CREAM, checkColor: AMBER, bg: INK }));
console.log('wordmark SVGs (variante D) escritos:', totalW.toFixed(0), 'x', totalH.toFixed(0));
