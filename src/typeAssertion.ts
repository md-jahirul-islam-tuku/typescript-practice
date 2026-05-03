// assertion type

const kgToGram = (input: string | number): string | number | undefined => {
  if (typeof input === "number") {
    return input * 1000;
  } else if (typeof input === "string") {
    const [value] = input.split(" ");
    return `${Number(value) * 1000}`;
  }
};

const result1 = kgToGram(2) as number;
//! console.log(result1);
const result2 = kgToGram("2 kg") as string;
//! console.log(result2);

//* assertion of syntax
let value: unknown = "Hello";
let strLength = (value as string).length;

//* assertion of angle bracket
let value1: unknown = "Hello";
// let strLength1 = (<string>value1).length;

//! console.log(strLength, strLength1);

// const input = document.getElementById("name");
// (input as HTMLInputElement).value = "Jahirul";

let merit: unknown = "Typescript";
if (typeof merit === "string") {
  console.log(merit.toUpperCase()); //👉 এটা best practice
}

