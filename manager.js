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
    return this._totalSubSalary(this) * multiplier;
  }
  _totalSubSalary(employee) {
    //base case
    if (!employee.employees) {
      console.log(employee.salary);
      return employee.salary;
    }

    let res = employee.salary;
    for (const emp of employee.employees) {
      res += this._totalSubSalary(emp);
    }
    return res;
  }
}

module.exports = Manager;
