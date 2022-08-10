const Employee = require('./employee');

class Manager extends Employee {
  constructor(name, title, salary, manager = null, employees = []) {
    super();
    this.name = name;
    this.title = title;
    this.salary = salary;
    this.manager = manager;
    this.employees = employees;
  }
  addEmployee(employee) {
    this.employees.push(employee);
  }
}

module.exports = Manager;
