class Person {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  getSleep(numOfHours: number) {
    console.log(`${this.name} dainik ${numOfHours} ghonta ghumay`);
  }
}

class Student extends Person {
  constructor(name: string) {
    super(name);
  }
  doStudy(numOfHours: number) {
    console.log(`${this.name} dainik ${numOfHours} ghonta study kore`);
  }
}
class Teacher extends Person {
  constructor(name: string) {
    super(name);
  }
  takeClass(numOfHours: number) {
    console.log(`${this.name} dainik ${numOfHours} ghonta class ney `);
  }
}

//* custom typeGuard
const isStudent = (user: Person) => {
  return user instanceof Student; //* instanceof typeGuard
};

const isTeacher = (user: Person) => {
  return user instanceof Teacher;
};

const getUserInfo = (user: Person) => {
  if (isStudent(user)) {
    user.doStudy(10);
  } else if (isTeacher(user)) {
    user.takeClass(5);
  } else {
    user.getSleep(8);
  }
};

const student1 = new Student("Mr. Student");
const teacher1 = new Teacher("Mr. Teacher");

getUserInfo(student1);
getUserInfo(teacher1);
