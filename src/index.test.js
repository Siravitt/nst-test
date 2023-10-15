const { countSmiley, findOddInt } = require("./index");

const testSmileyCase = [
  {
    input: [":)", ";(", ";}", ":-D"],
    output: 2,
  },
  {
    input: [";D", ":-(", ":-)", ";~)"],
    output: 3,
  },
  {
    input: [";]", ":[", ";*", ":$", ";-D"],
    output: 1,
  },
];

const testFindOddInt = [
  {
    input: [7],
    output: ['7', 1],
  },
  {
    input: [0],
    output: ['0', 1],
  },
  {
    input: [1, 1, 2],
    output: ['2', 1],
  },
  {
    input: [0, 1, 0, 1, 0],
    output: ['0', 3],
  },
  {
    input: [1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1],
    output: ['4', 1],
  },
];

describe("test countSmiley function", () => {
  testSmileyCase.forEach((testCase) => {
    test(
      JSON.stringify(testCase.input) + " should return " + testCase.output,
      () => {
        expect(countSmiley(testCase.input)).toBe(testCase.output);
      }
    );
  });
});

describe("test findOddInt function", () => {
  testFindOddInt.forEach((testCase) => {
    test(
      JSON.stringify(testCase.input) +
        " should return " +
        testCase.output[0] +
        ", because it occurs " +
        testCase.output[1] +
        " time (which is odd)",
      () => {
        expect(findOddInt(testCase.input)).toEqual(expect.arrayContaining(testCase.output));
      }
    );
  });
});
