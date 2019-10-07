const Calculator = require("./Calculator");
const bootcampData = require("./bootcampData");

let square = {
  width: 12,
  height: "12"
};

const findArea = shape => {
  if (parseInt(shape.width) > 0 && parseInt(shape.height) > 0) {
    return Calculator.multiply(shape.width, shape.height);
  } else {
    return;
  }
};

// console.log(findArea(square));

const makeStudentNamesArray = data => {
  const arr = [];
  for (const item of data) {
      console.log(item.email)
    arr.push(item.email);
  }
  return arr;
};

const makeStudentNamesArrayAdvanced = data => data.map(item => item.fullName);

console.log(makeStudentNamesArray(bootcampData));
console.log(makeStudentNamesArrayAdvanced(bootcampData));

const nonMarriedStudents = bootcampData.filter(
  student => student.isMarrired === false
);
console.log(nonMarriedStudents);

const averageAge = students => {
  let sum = 0;
  for (const student of students) {
    sum = sum + student.age;
  }
  return Math.round(sum / students.length);
};

const averageAgeReduce = bootcampData.reduce(
  (total, student) => Calculator.add(total, student.age / bootcampData.length),
  0
);

console.log(averageAge(bootcampData));
console.log(averageAgeReduce);
