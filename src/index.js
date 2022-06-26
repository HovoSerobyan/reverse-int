module.exports = function reverse (n) {
    num = n + '';
    let reversedText = num.split('').reverse().join('');
    let reversedNumber = parseInt(reversedText, 10);
    return reversedNumber;
}
