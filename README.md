# Vigenère Cipher JS 🔐

This project provides simple JavaScript functions to **encrypt** and **decrypt** messages using the Vigenère cipher.

## Features ✨
- Encrypts text with a keyword (Vigenere)
- Decrypts text with the same keyword (`Vigenere_dechiffrer`)
- Handles only uppercase English letters; other characters are preserved
- Example usage included

## Usage 🚀

```javascript
// Encrypt
let encrypted = Vigenere("HELLO WORLD", "KEY"); // "RIJKN VNQKC"
document.write(encrypted);

// Decrypt
let decrypted = Vigenere_dechiffrer("RIJKN VNQKC", "KEY"); // "HELLO WORLD"
document.write(decrypted);
```

## How it works ⚙️
- Each letter in the message is shifted by the position of the corresponding letter in the key.
- Non-letter characters are not changed.

---

Made for learning "security concepts" and experimenting with classic ciphers! 

Enjooooooooooooooy !
