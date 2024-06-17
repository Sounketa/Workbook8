"use strict";

let students = ["Jason", "Denzel", "Adeyemi", "Nedret", "Erik"];
//arrow function that compares a, b and sorts the array in place
students.sort((a, b) => (a > b ? -1 : 1));
console.log(students);