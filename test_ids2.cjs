const https = require('https');
['nSAoEf1Ib58', 'MKdfnyF6U0Y', 'HW5yLvoJMD4', 'gx5PVjsRamk', 'Bc9yPqHfOU0', '09dQmeB_NgU', 'OokKWHAyXFI'].forEach(id => {
  https.get('https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=' + id + '&format=json', (res) => {
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', () => {
      try {
        console.log(id, JSON.parse(data).title);
      } catch(e) { }
    });
  });
});
