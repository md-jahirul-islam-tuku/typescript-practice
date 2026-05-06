// Problem 1:

const filterEvenNumbers = (numbers: number[]): number[] =>
  numbers.filter((number) => number % 2 === 0);

filterEvenNumbers([1, 2, 3, 4, 5, 6]);

// Problem 2:

const reverseString = (str: string): string => [...str].reverse().join("");

reverseString("typescript");
