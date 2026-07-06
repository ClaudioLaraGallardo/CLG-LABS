const https = require('https');
https.get('https://html.duckduckgo.com/html/?q=Sloop+John+B+acapella+Beach+Boys+site:youtube.com', { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    let matches = data.match(/v%3D([A-Za-z0-9_-]{11})/g) || [];
    console.log("Acapella found:", [...new Set(matches)]);
  });
});
https.get('https://html.duckduckgo.com/html/?q=Sloop+John+B+instrumental+Beach+Boys+site:youtube.com', { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    let matches = data.match(/v%3D([A-Za-z0-9_-]{11})/g) || [];
    console.log("Instrumental found:", [...new Set(matches)]);
  });
});
https.get('https://html.duckduckgo.com/html/?q=Sloop+John+B+live+1966+site:youtube.com', { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    let matches = data.match(/v%3D([A-Za-z0-9_-]{11})/g) || [];
    console.log("Live 1966 found:", [...new Set(matches)]);
  });
});
