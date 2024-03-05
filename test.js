'use strict';

const ncrypt = require('./');

describe('ncrypt(', () => {
  describe('EncryptAES and DecryptAES', () => {
    it('should encrypt and decrypt normal string without errors', () => {
      const key = 'unlocking secrets let find power';
      const raw = 'this is plain text';
      const encryptedText = ncrypt.EncryptAES(raw, Buffer.from(key));
      const decryptedText = ncrypt.DecryptAES(encryptedText, Buffer.from(key));
      expect(decryptedText).toEqual(raw);
    });

    it('should encrypt and decrypt empty string without errors', () => {
      const key = 'unlocking secrets let find power';
      const raw = '';
      const encryptedText = ncrypt.EncryptAES(raw, Buffer.from(key));
      const decryptedText = ncrypt.DecryptAES(encryptedText, Buffer.from(key));
      expect(decryptedText).toEqual(raw);
    });

    it('should encrypt and decrypt random string without errors', () => {
      const key = 'unlocking secrets let find power';
      const raw =
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in";
      const encryptedText = ncrypt.EncryptAES(raw, Buffer.from(key));
      const decryptedText = ncrypt.DecryptAES(encryptedText, Buffer.from(key));
      expect(decryptedText).toEqual(raw);
    });

    it('should generate same encrypted text with the same key', () => {
      const key = 'unlocking secrets let find power';
      const raw =
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in";
      const encryptedText1 = ncrypt.EncryptAES(raw, Buffer.from(key));
      const encryptedText2 = ncrypt.EncryptAES(raw, Buffer.from(key));
      expect(encryptedText1).toEqual(encryptedText2);
    });
  });
});
