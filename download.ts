import fs from 'fs';
import https from 'https';
import path from 'path';

const url = 'https://www.payperprint.in/cdn/shop/files/MinimalistSimpleWhiteThankYouCircleSticker.png?v=1755108312&width=713';
const dest = path.join(process.cwd(), 'public/sample_labels/round_thank_you.png');

fs.mkdirSync(path.dirname(dest), { recursive: true });

https.get(url, (res) => {
  if (res.statusCode !== 200) {
    console.error(`Status Code: ${res.statusCode}`);
    return;
  }
  const file = fs.createWriteStream(dest);
  res.pipe(file);
  file.on('finish', () => {
    file.close();
    console.log('Downloaded successfully');
  });
}).on('error', (err) => {
  console.error('Error: ', err.message);
});
