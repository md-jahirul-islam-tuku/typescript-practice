// non-primitive type is reference type
//* array type
const capitalLetters: string[] = ["A", "B", "C"];
capitalLetters.push("C");
//! console.log(capitalLetters);

//* tuple
const userTuku: [string, number, boolean] = ["Tuku", 35, true];
userTuku[0] = "Jahirul";
userTuku[1] = 37;
userTuku[2] = false;
//! console.log(userTuku);

//* object type
const user1: {
  organizationName: "Programming Hero"; //literal types
  firstName: string;
  middleName?: string;
  lastName: string;
} = {
  organizationName: "Programming Hero",
  firstName: "Jahirul",
  lastName: "Tuku",
};
// user1.organizationName='Programming Hero Fire'  (it's impossible because literal types)

const user2: {
  readonly organizationName: string; //access modifier
  firstName: string;
  middleName?: string;
  lastName: string;
} = {
  organizationName: "Programming Hero",
  firstName: "Jahirul",
  lastName: "Tuku",
};
// user2.organizationName='Programming Hero Fire'  (it's impossible because readonly is access modifier)

//* arrow function, normal function

function addNormal(num1: number, num2: number): number {
  return num1 + num2;
}
// console.log(add(2, '3'));

const addArrow = (num1: number, num2: number): number => num1 + num2;
//! console.log(addArrow(5, 6));

//* object => function => method

const poorUser = {
  name: "Jahirul",
  balance: 0,
  addBalance(value: number): number {
    //*
    return this.balance + value; //? method
  }, //*
};
//! console.log(poorUser.addBalance(10));

//* callback function

const arr: number[] = [1, 2, 3];

const sqrArr = arr.map((num: number): number => num * num);
//! console.log(sqrArr);

// spread operator
//* spread operator for Array

const friends: string[] = ["Arif", "Kishor", "Polok"];
const schoolFriends: string[] = ["Rafiq", "Rajib", "Masum"];
const collegeFriends: string[] = ["Tapon", "Munna", "Salahuddin"];

friends.push(...schoolFriends, ...collegeFriends);

//! console.log(friends);

//* spread operator for object

const user = { name: "Tuku", age: 35, home: "Barishal" };
const otherInfo = { thana: "Uzirpur", union: "Barakotha" };
const extraInfo = { village: "Malikanda" };

const userInfo = { ...user, ...otherInfo, ...extraInfo };

//! console.log({ ...user, ...otherInfo, ...extraInfo });
//! console.log(userInfo);

//* rest operator

const sendInvitation = (...friends: string[]) => {
  friends.forEach((friend: string) =>
    console.log(`Send invitation to ${friend}`),
  );
};
//! sendInvitation("Rafiq", "Sohel", "Rajib", "Jewel");

//* Destructuring

const userDetails = {
  name: "Jahirul",
  age: 35,
  college: {
    collegeName: "BUI",
    roll: 2,
    address: "Barakotha",
  },
  gender: "male",
};
const {
  name,
  age,
  college: { collegeName, roll: myRoll, address }, //? roll: myRoll (this call name alias)
} = userDetails;
//! console.log(name, age, collegeName, myRoll, address);

const myFriends = ["Rahim", "Karim", "Mahim"];
const [friend1, myBestFriend, friend2] = myFriends;
const [, bestFriend] = myFriends;

//! console.log(bestFriend);
