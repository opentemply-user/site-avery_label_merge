import https from 'https';

const req = https.request('https://docs.google.com/forms/u/0/d/e/1FAIpQLSf5VjFuwULFnLpetMMFnpCDMRVqZj-xaMsRe_Pbw3LD16bqRg/formResponse', { method: 'POST' }, (res) => {
  console.log('Status:', res.statusCode);
  res.on('data', (d) => process.stdout.write(d));
});
req.end();
