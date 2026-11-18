const fs = require('fs');
let code = fs.readFileSync('js/components/graphics.js', 'utf8');
code = code.replace(/export const GRAPHICS =/, 'const GRAPHICS =');
code += '\nconsole.log("English SVG output length:", GRAPHICS.englishBookIcon(96).length);\nconsole.log("Tamil SVG output length:", GRAPHICS.tamilSubjectIcon(96).length);\n';
eval(code);
