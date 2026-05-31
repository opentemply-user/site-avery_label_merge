import https from 'https';

const req = https.request('https://docs.google.com/forms/u/0/d/e/1FAIpQLSf5VjFuwULFnLpetMMFnpCDMRVqZj-xaMsRe_Pbw3LD16bqRg/formResponse', { 
  method: 'OPTIONS',
  headers: {
    'Origin': 'http://localhost:3000',
    'Access-Control-Request-Method': 'POST'
  }
}, (res) => {
  console.log('OPTIONS Status:', res.statusCode);
});
req.end();
