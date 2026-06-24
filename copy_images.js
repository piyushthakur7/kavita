const fs = require('fs');
try {
  fs.copyFileSync(String.raw`C:\Users\tpiyu\.gemini\antigravity-ide\brain\9292d97b-0d3d-4ded-8745-d22c3a1dffdd\online_counselling_1782279797345.png`, String.raw`c:\Users\tpiyu\kavita\kavita\public\images\online_counselling_ai.png`);
  fs.copyFileSync(String.raw`C:\Users\tpiyu\.gemini\antigravity-ide\brain\9292d97b-0d3d-4ded-8745-d22c3a1dffdd\group_therapy_1782279810822.png`, String.raw`c:\Users\tpiyu\kavita\kavita\public\images\group_therapy_ai.png`);
  fs.copyFileSync(String.raw`C:\Users\tpiyu\.gemini\antigravity-ide\brain\9292d97b-0d3d-4ded-8745-d22c3a1dffdd\corporate_wellness_1782279828051.png`, String.raw`c:\Users\tpiyu\kavita\kavita\public\images\corporate_wellness_ai.png`);
  console.log("Images copied successfully.");
} catch(e) {
  console.error("Error copying images:", e);
}
