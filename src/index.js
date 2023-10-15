// shuffling
const shuffling =(str) => {

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
