function Vigenere(text_claire, key) {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    text_claire = text_claire.toUpperCase();
    key = key.toUpperCase();
    let result = '';

    for (let i = 0; i < text_claire.length; i++) {
        const char = text_claire[i];
        const keyChar = key[i]
        if (alphabet.includes(char)) {
            const P_claire = alphabet.indexOf(char);
            const P_key = alphabet.indexOf(keyChar);
            let C = (P_claire + P_key);

            if (C >= 26) {
                C -= 26;
            }
            result += alphabet[C];
        } else {
            result += char;
        }
    }
    return result;
}

console.log(Vigenere("HELLO WORLD", "KEY")); // Example usage

//déchiffrer
function Vigenere_dechiffrer(text_chiffré, key) {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    text_chiffré = text_chiffré.toUpperCase();
    key = key.toUpperCase();
    let result = '';

    for (let i = 0; i < text_chiffré.length; i++) {
        const char = text_chiffré[i];
        const keyChar = key[i];
        if (alphabet.includes(char)) {
            const C = alphabet.indexOf(char);
            const P_key = alphabet.indexOf(keyChar);
            let P_claire = (C - P_key);

            if (P_claire < 0) {
                P_claire += 26;
            }
            result += alphabet[P_claire];
        } else {
            result += char;
        }
    }
    return result;
}

console.log(Vigenere_dechiffrer("RIJKN VNQKC", "KEY"));
