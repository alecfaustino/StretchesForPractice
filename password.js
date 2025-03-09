const input = process.argv.slice(2); // creates an array with the args
const inputStr = input[0];
const obfuscate = (word) => {
  const lettersToChange = {
    a: "4",
    e: "3",
    o: "0",
    l: "1",
  }
  let obfuscated = ""
  for(const char of word) {
    obfuscated += lettersToChange[char] || char;
  }
  return obfuscated;
};
console.log(obfuscate(inputStr));