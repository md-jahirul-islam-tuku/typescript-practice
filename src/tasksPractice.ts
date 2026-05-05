//* Task 1

type CartItem = {
  name: string;
  price: number;
  quantity?: number;
};

const calculateTotal = (item: CartItem) => {
  const { price, quantity = 1 } = item;
  return price * quantity;
};

const item1 = {
  name: "Mouse",
  price: 15,
  quantity: 3,
};
const item2 = {
  name: "Keyboard",
  price: 10,
  quantity: 2,
};

//TODO= console.log(calculateTotal(item1));

//* Task 2
/*
type Person = { name: string; age: number };
type JobDetails = { role: string; salary: number };

type Employee = Person & JobDetails;

const person1: Person = { name: "Saad", age: 14 };
const employee1: JobDetails = { role: "frontend developer", salary: 70000 };

const getProfile = (employee: Employee) => {
  return `Name: ${employee.name}, Role: ${employee.role}`;
};

console.log(getProfile({ ...person1, ...employee1 }));
*/

type Person = { name: string; age: number };
type JobDetails = { role: string; salary: number };

function merge<T, U>(a: T, b: U) {
  return { ...a, ...b };
}

const getProfile = ({ name, role }: Person & JobDetails) => {
  return `Name: ${name}, Role: ${role}`;
};

const person1 = { name: "Saad", age: 14 };
const employee1 = { role: "frontend developer", salary: 70000 };

const employee = merge(person1, employee1);

//TODO= console.log(getProfile(employee));

//* Task 3

type UserResponse = {
  info?: {
    address?: {
      zipCode?: string;
    };
  };
};

const userResponse: UserResponse = {
  info: {
    address: {
      zipCode: "8222",
    },
  },
};

const zip = userResponse?.info?.address?.zipCode ?? "00000";

//TODO= console.log(zip);

//* Task 4

let secretValue: unknown = "Typescript is awesome";

const upperValue = (secretValue as string).toUpperCase();

//TODO= console.log(upperValue);

//* Task 5

const textLength = <T extends { length: number }>(input: T) => {
  return input.length;
};

const value = "Typescript is awesome";

const textInput = {
  value,
  length: value.length,
};

//TODO= console.log(textLength(textInput));

//* Task 6

const product = { id: 101, name: "Keyboard", price: 50 };

const getProductProp = <T, K extends keyof T>(obj: T, key: K) => {
  return obj[key];
};

//TODO= console.log(getProductProp(product, "price"));

//* Task 7

const Colors = {
  Primary: "RED",
  Secondary: "BLUE",
} as const;

type ValidColor = (typeof Colors)[keyof typeof Colors];

const setColor = (C: ValidColor) => {
  if (C === Colors.Primary) {
    return Colors.Primary;
  } else {
    return Colors.Secondary;
  }
};

//TODO= console.log(setColor(Colors.Primary));

//* Task 8

interface MyDocument {
  title: string;
  content: string;
  author: string;
}

type Draft<T> = {
  readonly [P in keyof T]?: T[P]; // in use for map
};

const myDraft: Draft<MyDocument> = {
  title: "Typescript",
  content: "Typescript is awesome",
};
//TODO= console.log(myDraft);

//* Task 9

type DataType<T> = T extends any[] ? "Large" : "Small";

type Test1 = DataType<string[]>;
type Test2 = DataType<number>;

//* Task 10

interface UserAccount {
  id: number;
  username: string;
  password: string;
}

type PreviewUserAccount = Omit<UserAccount, "password">;

const account: PreviewUserAccount = {
  id: 122,
  username: "Jahirul",
};

//TODO= console.log(account);
