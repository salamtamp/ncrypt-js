# ncrypt-js

Simple encryption in NodeJS.

## Usage

```js
const ncrypt = require('ncrypt-js');

const key = 'unlocking secrets let find power';
const raw = 'this is plain text';
const encryptedText = ncrypt.EncryptAES(raw, Buffer.from(key));
const decryptedText = ncrypt.DecryptAES(encryptedText, Buffer.from(key));

console.log('raw:', raw);
console.log('encrypted:', encryptedText);
console.log('decrypted:', decryptedText);
```