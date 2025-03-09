const args = process.argv.slice(2);

//Convert a word to pig latin by taking its first letter, moving it to the end of the word, then adding "ay" after it all.

const pigLatin = (args) => {
  let pigLatinString = ""
  for(const word of args) {
    for (let i = 1; i < word.length; i++) { // loop through starting from second letter
      pigLatinString += word[i]; // add the current letter to the pigLatinString variable
    }
    pigLatinString += `${word[0]}ay ` // add the first letter to the end and -ay
  }
  return pigLatinString // return the current piglatinized string
}

console.log(pigLatin(args));