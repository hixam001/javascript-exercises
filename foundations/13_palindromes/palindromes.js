const palindromes = function (string) {
    const char1='abcdefghijklmnopqrstuvwxyz0123456789';

    const string1=string.toLowerCase().split('').filter((character) => char1.includes(character)).join('');

    const reversed=string1.split('').reverse().join('');

    return string1===reversed;
};

// Do not edit below this line
module.exports = palindromes;
