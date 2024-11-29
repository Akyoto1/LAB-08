<<<<<<< HEAD
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
=======
let student = {
  name: "Jessica",
  age: 25,
  enrolled: true,
  courses: [
    "Fundamentals of JavaScript",
    "Database Concepts & Design",
    "Operating Systems",
  ],
  greet: function () {
    console.log("Hello, my name is " + this.name);
  },
};
>>>>>>> 811dac7c8beaa9db220b255bded27eb8ad89846c

let grades = [80, 85, 90];
let [first, second] = grades;

console.log(first);
console.log(second);

let originalStudent = {
  name: "Jessica",
  age: 25,
  enrolled: true,
  courses: [
    "Fundamentals of JavaScript",
    "Database Concepts & Design",
    "Operating Systems",
  ],
};

let student = { originalStudent };
let clonedStudent = { ...originalStudent, graduationYear: 2027 };

console.log(clonedStudent);
let studentCourses = [
  "Fundamentals of JavaScript",
  "Database Concepts & Design",
  "Operating Systems",
];
let newCourses = [
  "Algorithms and Problem Solving",
  
  "Technical Reading and Writing Skills",
];

let combinedCourses = [...studentCourses, ...newCourses];
console.log(combinedCourses);
