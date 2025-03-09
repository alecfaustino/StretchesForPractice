const titleCase = (str) => {
  // if it's empty string, don't check anything, just return it
  if(str === "") return "";
  // for the one case that inputs all capital letters, change it all to lowercase so it follows the same logic
  const lowerStrArr = str.toLowerCase().split(' ');
  for (let i = 0; i < lowerStrArr.length; i++) {
    // for the current word concatenate the first letter as uppercase and the rest of the word
    lowerStrArr[i] = lowerStrArr[i][0].toUpperCase() + lowerStrArr[i].slice(1);
  }
  // created an array with split, need to make it back to a string.
  return lowerStrArr.join(' ');
};

console.log(titleCase(""));