const fs = require('fs');
try {
  fs.copyFileSync(String.raw`C:\Users\tpiyu\.gemini\antigravity-ide\brain\cb6049ba-def1-48ff-90aa-b25594cd346b\online_counselling_1782290556718.png`, String.raw`c:\Users\tpiyu\kavita\kavita\public\images\online_counselling_ai.png`);
  fs.copyFileSync(String.raw`C:\Users\tpiyu\.gemini\antigravity-ide\brain\cb6049ba-def1-48ff-90aa-b25594cd346b\group_therapy_1782290570330.png`, String.raw`c:\Users\tpiyu\kavita\kavita\public\images\group_therapy_ai.png`);
  fs.copyFileSync(String.raw`C:\Users\tpiyu\.gemini\antigravity-ide\brain\cb6049ba-def1-48ff-90aa-b25594cd346b\corporate_wellness_1782290601808.png`, String.raw`c:\Users\tpiyu\kavita\kavita\public\images\corporate_wellness_ai.png`);

  fs.copyFileSync(String.raw`C:\Users\tpiyu\.gemini\antigravity-ide\brain\cb6049ba-def1-48ff-90aa-b25594cd346b\couples_therapy_1782293943023.png`, String.raw`c:\Users\tpiyu\kavita\kavita\public\images\couples_therapy_ai.png`);
  fs.copyFileSync(String.raw`C:\Users\tpiyu\.gemini\antigravity-ide\brain\cb6049ba-def1-48ff-90aa-b25594cd346b\inner_child_healing_1782293955414.png`, String.raw`c:\Users\tpiyu\kavita\kavita\public\images\inner_child_healing_ai.png`);
  fs.copyFileSync(String.raw`C:\Users\tpiyu\.gemini\antigravity-ide\brain\cb6049ba-def1-48ff-90aa-b25594cd346b\trauma_healing_1782293967933.png`, String.raw`c:\Users\tpiyu\kavita\kavita\public\images\trauma_healing_ai.png`);
  fs.copyFileSync(String.raw`C:\Users\tpiyu\.gemini\antigravity-ide\brain\cb6049ba-def1-48ff-90aa-b25594cd346b\womens_health_1782293977615.png`, String.raw`c:\Users\tpiyu\kavita\kavita\public\images\womens_health_ai.png`);
  fs.copyFileSync(String.raw`C:\Users\tpiyu\.gemini\antigravity-ide\brain\cb6049ba-def1-48ff-90aa-b25594cd346b\young_adult_therapy_1782293993750.png`, String.raw`c:\Users\tpiyu\kavita\kavita\public\images\young_adult_therapy_ai.png`);
  fs.copyFileSync(String.raw`C:\Users\tpiyu\.gemini\antigravity-ide\brain\cb6049ba-def1-48ff-90aa-b25594cd346b\family_therapy_1782294008659.png`, String.raw`c:\Users\tpiyu\kavita\kavita\public\images\family_therapy_ai.png`);

  console.log("Images copied successfully.");
} catch(e) {
  console.error("Error copying images:", e);
}
