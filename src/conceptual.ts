const custom = (): void => {
  console.log("This is void function");
};

// custom();

interface IPersona {
  name: string;
  address: string;
}
// name, address constraints
function getName<T extends IPersona>(param: T) {
  return param?.name;
}

const dataUser = {
  name: "Jahirul",
  address: "Barishal",
  age: 34,
};
// console.log(getName(dataUser));

const Status = {
  PENDING: 22,
  SHIPPED: "SHIPPED",
};

type StatusCheck = (typeof Status)[keyof typeof Status];

const status: StatusCheck = 2222;
console.log(status);
