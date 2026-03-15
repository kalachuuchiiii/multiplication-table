export const tableNames = [
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
  "ten",
  "eleven",
  "twelve",
] as const;

export type TableNames = (typeof tableNames)[number];

export type Table = {
  name: string;
  index: number;
  rows: {
    question: string;
    answer: number;
  }[];
  next?: TableNames;
  guide?: string;          // ← NEW: memorization hint / technique
};

export const tables: Record<TableNames, Table> = {
  one: {
    name: "first",
    index: 0,
    guide: "Anything ×1 stays the same. Just repeat the number!",
    rows: [
      { question: "1 × 1", answer: 1 },
      { question: "1 × 2", answer: 2 },
      { question: "1 × 3", answer: 3 },
      { question: "1 × 4", answer: 4 },
      { question: "1 × 5", answer: 5 },
      { question: "1 × 6", answer: 6 },
      { question: "1 × 7", answer: 7 },
      { question: "1 × 8", answer: 8 },
      { question: "1 × 9", answer: 9 },
      { question: "1 × 10", answer: 10 },
      { question: "1 × 11", answer: 11 },
      { question: "1 × 12", answer: 12 },
    ],
  },

  two: {
    name: "second",
    index: 1,
    guide: "Just double the number (add it to itself). Even numbers only.",
    rows: [
      { question: "2 × 1", answer: 2 },
      { question: "2 × 2", answer: 4 },
      { question: "2 × 3", answer: 6 },
      { question: "2 × 4", answer: 8 },
      { question: "2 × 5", answer: 10 },
      { question: "2 × 6", answer: 12 },
      { question: "2 × 7", answer: 14 },
      { question: "2 × 8", answer: 16 },
      { question: "2 × 9", answer: 18 },
      { question: "2 × 10", answer: 20 },
      { question: "2 × 11", answer: 22 },
      { question: "2 × 12", answer: 24 },
    ],
  },

  three: {
    name: "third",
    index: 2,
    guide: "Double the number, then add the number once more (×2 + ×1). Sum of digits is multiple of 3.",
    rows: [
      { question: "3 × 1", answer: 3 },
      { question: "3 × 2", answer: 6 },
      { question: "3 × 3", answer: 9 },
      { question: "3 × 4", answer: 12 },
      { question: "3 × 5", answer: 15 },
      { question: "3 × 6", answer: 18 },
      { question: "3 × 7", answer: 21 },
      { question: "3 × 8", answer: 24 },
      { question: "3 × 9", answer: 27 },
      { question: "3 × 10", answer: 30 },
      { question: "3 × 11", answer: 33 },
      { question: "3 × 12", answer: 36 },
    ],
  },

  four: {
    name: "fourth",
    index: 3,
    guide: "Double twice (×2 → ×2 again). Or ×2 the ×2 fact.",
    rows: [
      { question: "4 × 1", answer: 4 },
      { question: "4 × 2", answer: 8 },
      { question: "4 × 3", answer: 12 },
      { question: "4 × 4", answer: 16 },
      { question: "4 × 5", answer: 20 },
      { question: "4 × 6", answer: 24 },
      { question: "4 × 7", answer: 28 },
      { question: "4 × 8", answer: 32 },
      { question: "4 × 9", answer: 36 },
      { question: "4 × 10", answer: 40 },
      { question: "4 × 11", answer: 44 },
      { question: "4 × 12", answer: 48 },
    ],
  },

  five: {
    name: "fifth",
    index: 4,
    guide: "Multiply by 10 then halve (or recognize it always ends in 0 or 5).",
    rows: [
      { question: "5 × 1", answer: 5 },
      { question: "5 × 2", answer: 10 },
      { question: "5 × 3", answer: 15 },
      { question: "5 × 4", answer: 20 },
      { question: "5 × 5", answer: 25 },
      { question: "5 × 6", answer: 30 },
      { question: "5 × 7", answer: 35 },
      { question: "5 × 8", answer: 40 },
      { question: "5 × 9", answer: 45 },
      { question: "5 × 10", answer: 50 },
      { question: "5 × 11", answer: 55 },
      { question: "5 × 12", answer: 60 },
    ],
  },

  six: {
    name: "sixth",
    index: 5,
    guide: "Use ×5 fact + add the number once more (or ×10 – ×4). Even answers.",
    rows: [
      { question: "6 × 1", answer: 6 },
      { question: "6 × 2", answer: 12 },
      { question: "6 × 3", answer: 18 },
      { question: "6 × 4", answer: 24 },
      { question: "6 × 5", answer: 30 },
      { question: "6 × 6", answer: 36 },
      { question: "6 × 7", answer: 42 },
      { question: "6 × 8", answer: 48 },
      { question: "6 × 9", answer: 54 },
      { question: "6 × 10", answer: 60 },
      { question: "6 × 11", answer: 66 },
      { question: "6 × 12", answer: 72 },
    ],
  },

  seven: {
    name: "seventh",
    index: 6,
    guide: "Hardest table — use rhymes: 56=7×8, 63=7×9, 42=7×6. Or build from ×6 / ×8.",
    rows: [
      { question: "7 × 1", answer: 7 },
      { question: "7 × 2", answer: 14 },
      { question: "7 × 3", answer: 21 },
      { question: "7 × 4", answer: 28 },
      { question: "7 × 5", answer: 35 },
      { question: "7 × 6", answer: 42 },
      { question: "7 × 7", answer: 49 },
      { question: "7 × 8", answer: 56 },
      { question: "7 × 9", answer: 63 },
      { question: "7 × 10", answer: 70 },
      { question: "7 × 11", answer: 77 },
      { question: "7 × 12", answer: 84 },
    ],
  },

  eight: {
    name: "eighth",
    index: 7,
    guide: "Double three times (×2 → ×4 → ×8) or use ×10 – ×2 shortcut for some.",
    rows: [
      { question: "8 × 1", answer: 8 },
      { question: "8 × 2", answer: 16 },
      { question: "8 × 3", answer: 24 },
      { question: "8 × 4", answer: 32 },
      { question: "8 × 5", answer: 40 },
      { question: "8 × 6", answer: 48 },
      { question: "8 × 7", answer: 56 },
      { question: "8 × 8", answer: 64 },
      { question: "8 × 9", answer: 72 },
      { question: "8 × 10", answer: 80 },
      { question: "8 × 11", answer: 88 },
      { question: "8 × 12", answer: 96 },
    ],
  },

  nine: {
    name: "ninth",
    index: 8,
    guide: "Finger trick: fold the finger for the number → left fingers = tens digit, right = ones. Or 10×n – n.",
    rows: [
      { question: "9 × 1", answer: 9 },
      { question: "9 × 2", answer: 18 },
      { question: "9 × 3", answer: 27 },
      { question: "9 × 4", answer: 36 },
      { question: "9 × 5", answer: 45 },
      { question: "9 × 6", answer: 54 },
      { question: "9 × 7", answer: 63 },
      { question: "9 × 8", answer: 72 },
      { question: "9 × 9", answer: 81 },
      { question: "9 × 10", answer: 90 },
      { question: "9 × 11", answer: 99 },
      { question: "9 × 12", answer: 108 },
    ],
  },

  ten: {
    name: "tenth",
    index: 9,
    guide: "Easiest — just add a zero to the end (×10).",
    rows: [
      { question: "10 × 1", answer: 10 },
      { question: "10 × 2", answer: 20 },
      { question: "10 × 3", answer: 30 },
      { question: "10 × 4", answer: 40 },
      { question: "10 × 5", answer: 50 },
      { question: "10 × 6", answer: 60 },
      { question: "10 × 7", answer: 70 },
      { question: "10 × 8", answer: 80 },
      { question: "10 × 9", answer: 90 },
      { question: "10 × 10", answer: 100 },
      { question: "10 × 11", answer: 110 },
      { question: "10 × 12", answer: 120 },
    ],
  },

  eleven: {
    name: "eleventh",
    index: 10,
    guide: "For 2–9: repeat the digit (22, 33, ..., 99). For 10–12: special pattern (add digits in middle).",
    rows: [
      { question: "11 × 1", answer: 11 },
      { question: "11 × 2", answer: 22 },
      { question: "11 × 3", answer: 33 },
      { question: "11 × 4", answer: 44 },
      { question: "11 × 5", answer: 55 },
      { question: "11 × 6", answer: 66 },
      { question: "11 × 7", answer: 77 },
      { question: "11 × 8", answer: 88 },
      { question: "11 × 9", answer: 99 },
      { question: "11 × 10", answer: 110 },
      { question: "11 × 11", answer: 121 },
      { question: "11 × 12", answer: 132 },
    ],
  },

  twelve: {
    name: "twelfth",
    index: 11,
    guide: "×10 + ×2 (add a zero then double the number and add). Or ×6 twice.",
    rows: [
      { question: "12 × 1", answer: 12 },
      { question: "12 × 2", answer: 24 },
      { question: "12 × 3", answer: 36 },
      { question: "12 × 4", answer: 48 },
      { question: "12 × 5", answer: 60 },
      { question: "12 × 6", answer: 72 },
      { question: "12 × 7", answer: 84 },
      { question: "12 × 8", answer: 96 },
      { question: "12 × 9", answer: 108 },
      { question: "12 × 10", answer: 120 },
      { question: "12 × 11", answer: 132 },
      { question: "12 × 12", answer: 144 },
    ],
  },
};

tables.one.next     = "two";
tables.two.next     = "three";
tables.three.next   = "four";
tables.four.next    = "five";
tables.five.next    = "six";
tables.six.next     = "seven";
tables.seven.next   = "eight";
tables.eight.next   = "nine";
tables.nine.next    = "ten";
tables.ten.next     = "eleven";
tables.eleven.next  = "twelve";

export default tables;