const input = process.argv.slice(2); // creates an array with the args
const inputStr = input[0] || ""; // the || prevents error due to undefined
const obfuscate = (word) => {
  const lettersToChange = {
    a: "4",
    e: "3",
    o: "0",
    l: "1",
  }
  return word
  .split('') // creates an array of each individual letters
  .map((char) => lettersToChange[char] || char) // returns a new array w/ change
  .join(''); // joins the array back into a string

};

console.log(obfuscate(inputStr));