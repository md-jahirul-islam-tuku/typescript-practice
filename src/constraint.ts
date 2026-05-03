const joinCourse = <T extends { id: number; name: string }>(student: T) => {
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

const student3 = {
  id: 456,
  name: "Jaria",
  hasPen: true,
};

const result = joinCourse(student3);
console.log(result);

//* 👉 Constraint = “Generic-এর rule set”
//* invalid operation prevent করতে

function fetchData<T extends { id: number }>(data: T) {
  return data.id;
}
//* 👉 ensure করছে data-তে id থাকবে
