// let student = {
//   name: "Jessica",
//   age: 25,
//   enrolled: true,
//   courses: [
//     "Fundamentals of JavaScript",
//     "Database Concepts & Design",
//     "Operating Systems",
//   ],
//   greet: function () {
//     console.log("Hello, my name is " + this.name);
//   },
// };

console.log(student.name),
  console.log(student.age),
  console.log(student.enrolled),
  console.log(student.courses);
student.greet();

let obj = {
  name: "Sonia",
  age: 33,
};
let jsonString = JSON.stringify(obj);
console.log(jsonString);

let jsonString = '{"name":"Terry","age":19}';
let jsonObj = JSON.parse(jsonString);
console.log(jsonObj.name);
console.log(jsonObj.age);

let student = {
  name: "Jessica",
  age: 25,
  enrolled: true,
  courses: [
    "Fundamentals of JavaScript",
    "Database Concepts & Design",
    "Operating Systems",
  ],
};

let { name, courses } = student;
console.log(student.name);
console.log(student.courses);
