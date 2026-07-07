const fs = require('fs');
const content = fs.readFileSync('src/assets/servicessvg/Group 1000006064.svg', 'utf8');
const matches = [...content.matchAll(/href="data:image\/([^;]+);base64,([^"]+)"/g)];
matches.forEach((m, i) => {
  fs.writeFileSync(`src/assets/servicessvg/card_img_${i}.${m[1]}`, Buffer.from(m[2], 'base64'));
});
console.log('Extracted ' + matches.length + ' images');
