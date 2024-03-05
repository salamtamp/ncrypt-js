const crypto = require('crypto');

const fixedIV = crypto.randomBytes(16);

function PKCS7Padding(data, blockSize) {
  const padding = blockSize - (data.length % blockSize);
  const padText = Buffer.alloc(padding, padding);
  return Buffer.concat([data, padText]);
}

function PKCS7UnPadding(data) {
  if (data.length === 0) {
    throw new Error('Invalid padding');
  }
  const padding = data[data.length - 1];
  if (padding > data.length) {
    throw new Error('Invalid padding');
  }
  return data.slice(0, data.length - padding);
}

function EncryptAES(text, key) {
  const cipher = crypto.createCipheriv('aes-256-cbc', key, fixedIV);
  let encrypted = cipher.update(PKCS7Padding(Buffer.from(text), 16));
  encrypted = Buffer.concat([encrypted, cipher.final()]);
  return encrypted.toString('base64');
}

function DecryptAES(ciphertext, key) {
  const decipher = crypto.createDecipheriv('aes-256-cbc', key, fixedIV);
  const encryptedText = Buffer.from(ciphertext, 'base64');
  let decrypted = decipher.update(encryptedText);
  decrypted = Buffer.concat([decrypted, decipher.final()]);
  return PKCS7UnPadding(decrypted).toString();
}

module.exports = {
  EncryptAES,
  DecryptAES,
};
