class Person {
  name: string;
  age: number;
  address: string;

  constructor(name: string, age: number, address: string) {
    this.name = name;
    this.age = age;
    this.address = address;
  }

  getSleep(hourOfSleep: number) {
    console.log(`${this.name} ${hourOfSleep} ghonta ghumay`);
  }
}

class Student extends Person {
  roll: number;
  constructor(name: string, age: number, address: string, roll: number) {
    super(name, age, address);
    this.roll = roll;
  }
}

const student1 = new Student("Mr. Fakibaaz", 14, "Dhaka", 5);

// student1.getSleep(12);

class Teacher extends Person {
  designation: string;
  constructor(name: string, age: number, address: string, designation: string) {
    super(name, age, address);
    this.designation = designation;
  }

  getClass(classHours: number) {
    console.log(
      `${this.name} ${this.designation} ${classHours} ghonta class ney`,
    );
  }
}

const teacher1 = new Teacher(
  "Mr. Perfect",
  45,
  "Chattogram",
  "English Teacher",
);

teacher1.getClass(6);
