const { shuffling, countSmiley, findOddInt } = require("./index");

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
  {
    input: [],
    output: 0
  }
];

const testFindOddInt = [
  {
    input: [7],
    output: ["7", 1],
  },
  {
    input: [0],
    output: ["0", 1],
  },
  {
    input: [1, 1, 2],
    output: ["2", 1],
  },
  {
    input: [0, 1, 0, 1, 0],
    output: ["0", 3],
  },
  {
    input: [1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1],
    output: ["4", 1],
  },
];

const testShuffling = [
  {
    input: "a",
    output: ["a"],
  },
  {
    input: "ab",
    output: ["ab", "ba"],
  },
  {
    input: "abc",
    output: ["abc", "acb", "bac", "bca", "cab", "cba"],
  },
  {
    input: "aabb",
    output: ["aabb", "abab", "abba", "baab", "baba", "bbaa"],
  },
];

// Test shuffling
describe("test shuffling function", () => {
  testShuffling.forEach((testCase) => {
    test(
      "With input" +
        testCase.input +
        ":\n" +
        " should return " +
        JSON.stringify(testCase.output),
      () => {
        expect(shuffling(testCase.input)).toEqual(
          expect.arrayContaining(testCase.output)
        );
      }
    );
  });
});

// Test count smiley face
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

// Test find odd int
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
        expect(findOddInt(testCase.input)).toEqual(
          expect.arrayContaining(testCase.output)
        );
      }
    );
  });
});
