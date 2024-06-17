"use strict";

//convention: classes (blueprints) use Pascal-casing. First Letter of each word capitalized
class Employee {
  constructor(employeeId, firstName, lastName) {
    this.employeeId = employeeId;
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName() {
    return `${this.lastName}, ${this.firstName}`;
  }
}

// let employee = {
//   employeeId: 1,
//   firstName: "James",
//   lastName: "Spader",
// };

let employee = new Employee(1, "James", "Spader");
console.log(employee.getFullName());
let employee2 = new Employee(2, "Khaleel", "Coffee");
console.log(employee2.getFullName());

