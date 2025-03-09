const args = process.argv.slice(2);
const reverseString = (args) => {
  let reversed = "";
  for(const arg of args) { // loop through the args
    for (let j = arg.length - 1; j >= 0; j--) { // loop through each word from the back
      reversed += arg[j]; // concat the current letter to the reversed variable
    }
    console.log(reversed); // print out the current reversed string
    reversed = ""; // reset the reversed variable
  }
  return
}

reverseString(args);