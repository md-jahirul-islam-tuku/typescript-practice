const arrayWithGeneric = <T>(value: T) => {
  return [value];
};

// const result1 = arrayWithGeneric<number>(2);
const arrNum = arrayWithGeneric(2); //* type inference

const arrStr = arrayWithGeneric("Jahirul"); //* type inference

const arrObj = arrayWithGeneric({ id: 1, name: "Jahirul" }); //* type inference

const arrTupleGeneric = <X, Y>(param1: X, param2: Y) => [param1, param2];

const arr1 = arrTupleGeneric("Jahirul", 33);
//! console.log(arr1);

const joinCourse = <T>(student: T) => {
  return {
    course: "Next Level",
    ...student,
  };
};

const student1 = {
  id: 123,
  name: "Saad",
  hasLaptop: true,
};

const student2 = {
  id: 321,
  name: "Saan",
  hasDesktop: true,
};

const result2 = joinCourse(student1);
//! console.log(result2);

const result3 = joinCourse(student2);
//! console.log(result3);
