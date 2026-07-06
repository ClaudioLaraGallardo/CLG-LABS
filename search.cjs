const https = require('https');
https.get('https://html.duckduckgo.com/html/?q=Sloop+John+B+site:youtube.com', { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    let matches = data.match(/v%3D([A-Za-z0-9_-]{11})/g) || [];
    let matches2 = data.match(/v=([A-Za-z0-9_-]{11})/g) || [];
    console.log("Found:", [...new Set([...matches, ...matches2])]);
  });
});
