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
