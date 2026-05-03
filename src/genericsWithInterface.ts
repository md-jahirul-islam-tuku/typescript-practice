interface Developer<T, X = null> {
  name: string;
  salary: number;
  device: {
    brand: string;
    model: string;
    releaseYear: string;
  };
  smartWatch: T;
  bike?: X;
}

type bike = string;

interface withoutBrandWatch {
  heartBeatRate: number;
  stopWatch: boolean;
}

interface brandWatch {
  heartBeatRate: number;
  callSupport: boolean;
  calculator: boolean;
  AIFeature: boolean;
}

const poorDeveloper: Developer<withoutBrandWatch> = {
  name: "Karim",
  salary: 400,
  device: {
    brand: "lenevo",
    model: "A32",
    releaseYear: "2015",
  },
  smartWatch: {
    heartBeatRate: 200,
    stopWatch: true,
  },
};

const richDeveloper: Developer<brandWatch, bike> = {
  name: "Rahim",
  salary: 900,
  device: {
    brand: "Huawei",
    model: "MateBookD16",
    releaseYear: "2022",
  },
  smartWatch: {
    heartBeatRate: 230,
    callSupport: true,
    calculator: true,
    AIFeature: true,
  },
  bike: "Yamaha",
};

//! console.log(richDeveloper);

//* default value of function parameter y: number = 0
const add = (x: number, y: number = 0) => x + y;
console.log(add(5, 5));
