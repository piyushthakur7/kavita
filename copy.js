const fs = require('fs');
const path = require('path');

const src1 = String.raw`C:\Users\tpiyu\.gemini\antigravity-ide\brain\9292d97b-0d3d-4ded-8745-d22c3a1dffdd\online_counselling_1782279797345.png`;
const dst1 = path.join(__dirname, 'public', 'images', 'online_counselling_ai.png');

const src2 = String.raw`C:\Users\tpiyu\.gemini\antigravity-ide\brain\9292d97b-0d3d-4ded-8745-d22c3a1dffdd\group_therapy_1782279810822.png`;
const dst2 = path.join(__dirname, 'public', 'images', 'group_therapy_ai.png');

const src3 = String.raw`C:\Users\tpiyu\.gemini\antigravity-ide\brain\9292d97b-0d3d-4ded-8745-d22c3a1dffdd\corporate_wellness_1782279828051.png`;
const dst3 = path.join(__dirname, 'public', 'images', 'corporate_wellness_ai.png');

try {
  fs.copyFileSync(src1, dst1);
  console.log("Copied 1");
  fs.copyFileSync(src2, dst2);
  console.log("Copied 2");
  fs.copyFileSync(src3, dst3);
  console.log("Copied 3");
} catch(e) {
  console.error("Error copying:", e);
}
