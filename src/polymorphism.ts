class Person {
  getSleep() {
    console.log("I am a Normal Happy Person.I sleep for 8 hours");
  }
}

class Student {
  getSleep() {
    console.log("I am a student. I sleep  7 hours");
  }
}

class NextLevelDeveloper {
  getSleep() {
    console.log("I am a Next Level developer . I sleep for 6 hours");
  }
}

const getSleepingHours = (param: Person) => {
  param.getSleep();
};

const person1 = new Person();
const person2 = new Student();
const person3 = new NextLevelDeveloper();

// getSleepingHours(person3);

class Shape {
  getArea(): number {
    return 0;
  }
}

class Circle extends Shape {
  radius: number;
  constructor(radius: number) {
    super();
    this.radius = radius;
  }
  getArea(): number {
    return Math.PI * this.radius * this.radius;
  }
}

class Rectangular extends Shape {
  height: number;
  width: number;
  constructor(height: number, width: number) {
    super();
    this.height = height;
    this.width = width;
  }
  getArea(): number {
    return this.height * this.width;
  }
}

const getArea = (param: Shape) => {
  console.log(param.getArea());
};

const result1 = new Shape();
const result2 = new Circle(1);
const result3 = new Rectangular(10, 20);

getArea(result1);
getArea(result2);
getArea(result3);
