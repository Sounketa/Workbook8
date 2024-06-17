"use strict"

class Employee {
    constructor(id, firstName, lastName, jobTitle, payRate) {
    this.employeeId = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.jobTitle = jobTitle;
    this.payRate = payRate;
    }
   }
   
   let employee1 = new Employee(
    1, "Ian", "Auston", "Graphic Artist", 42.50);
   console.log(`Employee ${employee1.firstName} created`);