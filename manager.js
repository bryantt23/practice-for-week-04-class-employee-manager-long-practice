const Employee = require('./employee');

class Manager extends Employee {
  constructor(name, salary, title, manager = null) {
    super(name, salary, title, manager);
    this.employees = [];
  }
  addEmployee(employee) {
    this.employees.push(employee);
  }
  calculateBonus(multiplier) {
    return (this.salary + this._totalSubSalary()) * multiplier;
  }
  https://raw.githubusercontent.com/dchung007/wk4-practice/main/wk4d2-employee-manager-syntax/manager.js
  _totalSubSalary() {
    let res = 0;
    for (const emp of this.employees) {
      if (emp instanceof Manager) {
        res += emp._totalSubSalary() + emp.salary;
      } else {
        res += emp.salary;
      }
    }
    return res;
  }
}

module.exports = Manager;
