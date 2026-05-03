//* nullable type

const getUser = (input: string | null) => {
  if (input) {
    console.log(`From DB: ${input}`);
  } else {
    console.log("From DB: All User");
  }
};
//! getUser(null);

//* unknown type

const discountCalculator = (input: unknown) => {
  if (typeof input === "number") {
    const discountPrice = input * 0.1;
    console.log(discountPrice);
  } else if (typeof input === "string") {
    const [discountPrice] = input.split(" ");
    console.log(Number(discountPrice) * 0.1);
  } else {
    console.log("Wrong Input");
  }
};
// discountCalculator(100);
// discountCalculator("100 Tk");
// discountCalculator(null);

// * never type

const throwError = (msg: string): never => {
  throw new Error(msg);
};
throwError("Error......");
