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

console.log(getProfile(employee));
