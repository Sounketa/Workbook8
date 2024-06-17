"use strict";

class Employee {
  constructor(id, firstName, lastName, jobTitle, payRate) {
    this.employeeId = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.jobTitle = jobTitle;
    this.payRate = payRate;
  }

  getFullName() {
    return this.firstName + " " + this.lastName;
  }

  getIntro() {
    let intro =
      "Hi! I'm " + this.getFullName() + " and I am a " + this.jobTitle;
    return intro;
  }
}

let employee1 = new Employee(1, "Ian", "Auston", "Graphic Artist", 42.5);
console.log(`Employee ${employee1.firstName}`);
console.log(`Job title is ${employee1.jobTitle}`);
console.log(`Job title is $${employee1.payRate}`);
console.log(employee1.getIntro());
