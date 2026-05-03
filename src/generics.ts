type Generics<T> = Array<T>;

const friends: Generics<string> = ["A", "B", "C"];
const numbers: Generics<number> = [1, 2, 3, 4];
const booleans: Generics<boolean> = [true, false, true];

type User = {
  name: string;
  age: number;
};

const userList: Generics<User> = [
  {
    name: "Rahim",
    age: 1,
  },
  {
    name: "Karim",
    age: 2,
  },
];

const sqrFunc = (value: number) => {
  return value * value;
};

sqrFunc(2);

type Coordinates<X, Y> = [X, Y];

const coordinates1: Coordinates<number, number> = [20, 30];
const coordinates2: Coordinates<string, string> = ["20", "30"];
