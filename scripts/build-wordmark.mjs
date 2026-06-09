import opentype from 'opentype.js';
import { writeFileSync } from 'node:fs';

const FONT_PATH = 'brand/_fonts/Nunito-ExtraBold.ttf';
const FS = 200;              // tamaño de fuente (px) = alto de referencia
const PAD = 40;              // padding del viewBox
const GAP = 18;              // separación letra<->check
const CHK_W = 150;           // ancho que ocupa el check (~ las dos "t")
const CHK_STROKE = 34;       // grosor del trazo del check
const BASELINE = PAD + FS;   // y de la baseline

const INK = '#2B2622';
const CORAL = '#FF6B4A';
const AMBER = '#FFB23E';
const WHITE = '#FFFFFF';
const CREAM = '#FFF7F0';

const font = await opentype.load(FONT_PATH);

const lisW = font.getAdvanceWidth('lis', FS);
const lisPath = font.getPath('lis', PAD, BASELINE, FS).toPathData(2);

const oX = PAD + lisW + GAP + CHK_W + GAP;
const oPath = font.getPath('o', oX, BASELINE, FS).toPathData(2);
const oW = font.getAdvanceWidth('o', FS);

const chkX = PAD + lisW + GAP;
const top = BASELINE - FS * 0.78;
const valleyX = chkX + CHK_W * 0.42;
const valleyY = BASELINE - FS * 0.10;
const startX = chkX + CHK_W * 0.02;
const startY = BASELINE - FS * 0.45;
const endX = chkX + CHK_W * 0.98;
const checkD = `M${startX.toFixed(1)} ${startY.toFixed(1)} L${valleyX.toFixed(1)} ${valleyY.toFixed(1)} L${endX.toFixed(1)} ${top.toFixed(1)}`;

const totalW = oX + oW + PAD;
const totalH = BASELINE + PAD;

function svg({ letterFill, checkColor, bg }) {
  const bgRect = bg ? `\n  <rect width="${totalW.toFixed(1)}" height="${totalH.toFixed(1)}" fill="${bg}"/>` : '';
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${totalW.toFixed(1)} ${totalH.toFixed(1)}" width="${totalW.toFixed(0)}" height="${totalH.toFixed(0)}" role="img" aria-label="Listto">${bgRect}
  <path d="${lisPath}" fill="${letterFill}"/>
  <path d="${oPath}" fill="${letterFill}"/>
  <path d="${checkD}" fill="none" stroke="${checkColor}" stroke-width="${CHK_STROKE}" stroke-linecap="round" stroke-linejoin="round"/>
</svg>\n`;
}

writeFileSync('brand/logo/listto-wordmark.svg',       svg({ letterFill: INK,   checkColor: CORAL, bg: null }));
writeFileSync('brand/logo/listto-wordmark-coral.svg', svg({ letterFill: WHITE, checkColor: WHITE, bg: CORAL }));
writeFileSync('brand/logo/listto-wordmark-ink.svg',   svg({ letterFill: CREAM, checkColor: AMBER, bg: INK }));
console.log('wordmark SVGs escritos:', totalW.toFixed(0), 'x', totalH.toFixed(0));
