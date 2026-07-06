const https = require('https');
const queries = ['Sloop+John+B+A-cappella+site:youtube.com', 'Sloop+John+B+Instrumental+Beach+Boys+site:youtube.com', 'Sloop+John+B+Live+1966+site:youtube.com'];
queries.forEach(q => {
  https.get('https://html.duckduckgo.com/html/?q=' + q, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', () => {
      let matches = data.match(/v%3D([A-Za-z0-9_-]{11})/g) || [];
      console.log(q, [...new Set(matches)]);
    });
  });
});
