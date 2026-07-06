const https = require('https');
['nSAoEf1Ib58', 'MKdfnyF6U0Y', 'HW5yLvoJMD4', 'gx5PVjsRamk', 'Bc9yPqHfOU0'].forEach(id => {
  https.get('https://www.youtube.com/watch?v=' + id, (res) => {
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', () => {
      let m = data.match(/<title>(.*?)<\/title>/);
      console.log(id, m ? m[1] : 'not found');
    });
  });
});
