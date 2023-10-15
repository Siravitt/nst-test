// shuffling
const shuffling =(str) => {
  if (str.length < 2 ) {
    return [str]
  }

  let permutationsArray = [];

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (str.indexOf(char) != i) continue; // duplicate

    let remainingChars = str.slice(0, i) + str.slice(i + 1, str.length);

    for (let permutation of shuffling(remainingChars)) {
      permutationsArray.push(char + permutation);
    }
  }
  return permutationsArray
}

// find odd int
const findOddInt = (arr) => {
  const obj = {};
  for (let i of arr) {
    if (obj[i]) obj[i] += 1;
    else obj[i] = 1;
  }
  for (const [key, value] of Object.entries(obj)) {
    if (value % 2 !== 0) return [key, value]
  }
};

// count the smiley faces
const countSmiley = (faces) => {
  faces = faces.join("");
  faces = faces.match(/([:;][-~]?[D\)])/g);
  return faces?.length || 0;
};

module.exports = {
  shuffling,
  findOddInt,
  countSmiley,
}
