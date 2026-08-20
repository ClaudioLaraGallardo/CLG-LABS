const fs = require('fs');
let code = fs.readFileSync('src/components/HeroGallery.tsx', 'utf8');
code = code.replace("query: '?url'", "query: '?url'"); // do nothing
fs.writeFileSync('src/components/HeroGallery.tsx', code);
