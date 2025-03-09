const input = process.argv.slice(2); // creates an array with the args
const inputStr = input[0];
const obfuscate = (word) => {
  let obfuscated = ""
  for(const char of word) {
    if (char === 'a') {
      obfuscated += 4
    } else if (char === 'e') {
      obfuscated += 3
    } else if (char === 'o') {
      obfuscated += 0
    } else if (char === 'l') {
      obfuscated += 1
    } else {
      obfuscated += char;
    }
  }
  return obfuscated;
};
console.log(obfuscate(inputStr));