const fs = require('fs');
const path = require('path');

const srcDir = 'C:\\Users\\tpiyu\\.gemini\\antigravity-ide\\brain\\2f8e05bd-c82c-432f-9184-ccb344ab2a81';
const destDir = 'c:\\Users\\tpiyu\\kavita\\kavita\\public\\images';

const filesToCopy = [
  { src: 'couples_therapy_1782883562459.png', dest: 'couples_therapy_ai.png' },
  { src: 'inner_child_1782883581036.png', dest: 'inner_child_healing_ai.png' },
  { src: 'trauma_healing_1782883591767.png', dest: 'trauma_healing_ai.png' },
  { src: 'womens_health_1782883602777.png', dest: 'womens_health_ai.png' },
  { src: 'young_adult_1782883613770.png', dest: 'young_adult_therapy_ai.png' },
  { src: 'family_therapy_1782883625475.png', dest: 'family_therapy_ai.png' }
];

filesToCopy.forEach(file => {
  const srcPath = path.join(srcDir, file.src);
  const destPath = path.join(destDir, file.dest);
  try {
    fs.copyFileSync(srcPath, destPath);
    console.log(`Copied ${file.src} to ${file.dest}`);
  } catch (e) {
    console.error(`Error copying ${file.src}:`, e);
  }
});
