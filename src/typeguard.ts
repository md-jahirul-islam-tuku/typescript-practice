type Alphaneumeric = number | string;

const add = (num1: Alphaneumeric, num2: Alphaneumeric) => {
  if (typeof num1 === "number" && typeof num2 === "number") {
    return num1 + num2;
  } else {
    return num1.toString() + num2.toString();
  }
};

// console.log(add(2, "2"));
// console.log(add("2", "2"));
// console.log(add("2", 2));
// console.log(add(2, 2));

type NormalUser = {
  name: string;
};

type AdminUser = {
  name: string;
  role: "Admin";
};

const getUser = (user: NormalUser | AdminUser) => {
  if ("role" in user) {
    console.log(`Name: ${user.name} and role: ${user.role}`);
  } else {
    console.log(`${user.name}`);
  }
};

getUser({ name: "Normal", role: "Admin" });
