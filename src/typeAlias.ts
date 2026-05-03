// * type alias
// primitive type alias

type ID = number;
const id: ID = 123;

// object type alias
type User = {
  name: string;
  age: number;
};
const user: User = {
  name: "Jahirul",
  age: 35,
};

// union type alias
type Status = "success" | "error" | "loading";
const currentStatus: Status = "success";

// function type alias
type Add = (a: number, b: number) => number;
const sum: Add = (x, y) => x + y;

// tuple type alias
type UserTuple = [string, number];
const userTuple: UserTuple = ["Jahirul", 35];

// intersection type alias
type Admin = {
  role: string;
};
type Person = {
  name: string;
};
type AdminUser = Admin & Person;
const userInter: AdminUser = {
  name: "Jahirul",
  role: "Admin",
};

// Real world type alias
type Role = "Admin" | "User" | "Guest";
type UserReal = {
  id: number;
  name: string;
  role: Role;
};
const userReal: UserReal = {
  id: 321,
  name: "Jahirul",
  role: "Admin",
};
