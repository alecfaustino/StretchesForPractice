const loopyLighthouse = (range, multiples, words) => {
  const firstWord = words[0];
  const secondWord = words[1];
  for (let i = range[0]; i <= range[1]; i++) {
    let outputString = i;
    const multipleOfFirst = i % multiples[0] === 0;
    const multipleOfSecond = i % multiples[1] === 0;
    if ( multipleOfFirst && multipleOfSecond) {
      outputString = `${firstWord}${secondWord}`
    } else if (multipleOfFirst) {
      outputString = firstWord;
    } else if (multipleOfSecond) {
      outputString = secondWord;
    } 
    console.log(outputString);
  };
};

loopyLighthouse([100, 200], [3, 4], ["Loopy", "Lighthouse"]);

