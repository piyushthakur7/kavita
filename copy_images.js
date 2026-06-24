const fs = require('fs');
try {
  fs.copyFileSync(String.raw`C:\Users\tpiyu\.gemini\antigravity-ide\brain\cb6049ba-def1-48ff-90aa-b25594cd346b\online_counselling_1782290556718.png`, String.raw`c:\Users\tpiyu\kavita\kavita\public\images\online_counselling_ai.png`);
  fs.copyFileSync(String.raw`C:\Users\tpiyu\.gemini\antigravity-ide\brain\cb6049ba-def1-48ff-90aa-b25594cd346b\group_therapy_1782290570330.png`, String.raw`c:\Users\tpiyu\kavita\kavita\public\images\group_therapy_ai.png`);
  fs.copyFileSync(String.raw`C:\Users\tpiyu\.gemini\antigravity-ide\brain\cb6049ba-def1-48ff-90aa-b25594cd346b\corporate_wellness_1782290601808.png`, String.raw`c:\Users\tpiyu\kavita\kavita\public\images\corporate_wellness_ai.png`);
  console.log("Images copied successfully.");
} catch(e) {
  console.error("Error copying images:", e);
}
