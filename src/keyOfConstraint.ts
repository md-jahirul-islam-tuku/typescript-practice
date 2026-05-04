// keyof: type operator

type RichPeoplesVehicle = {
  car: string;
  bike: string;
  cng: string;
};

type MyVehicle1 = "bike" | "car" | "cng";
type MyVehicle2 = keyof RichPeoplesVehicle;

const myVehicle: MyVehicle2 = "bike";

type User = {
  id: number;
  name: string;
  address: {
    city: string;
  };
};

const user: User = {
  id: 222,
  name: "Jahirul",
  address: {
    city: "Medina",
  },
};

const userId1 = user.id;
const userId2 = user["id"];
const userName = user["name"];
const userAddress = user["address"];
const userCity = userAddress["city"];
const userCity1 = userAddress.city;

//! console.log({ userId1, userId2, userCity, userCity1 });

const getPropertyFromObj = <X, Y extends keyof X>(obj: X, key: Y) => {
  return obj[key];
};

// const result1 = getPropertyFromObj(user, "emni");
// console.log(result1);

const product = {
  brand: "hp",
};

const student = {
  id: 123,
  class: "Ten",
};

const result2 = getPropertyFromObj(product, "brand");

//! console.log(result2);

const result3 = getPropertyFromObj(student, "id");
const result4 = getPropertyFromObj(student, "class");

//! console.log(result3, result4);
