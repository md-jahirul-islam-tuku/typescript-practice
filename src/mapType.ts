const arrayOfNum: number[] = [1, 2, 3];
const arrayOfString: string[] = ["1", "2", "3"];

const arrayOfStringUseMap: string[] = arrayOfNum.map((num) => num.toString());

console.log(arrayOfStringUseMap);

//* Generics type map
type Area<T> = {
  [key in keyof T]: T[key]; // in use for map
};

const area: Area<{ height: string; width: boolean }> = {
  height: "50",
  width: false,
};

console.log(area);
