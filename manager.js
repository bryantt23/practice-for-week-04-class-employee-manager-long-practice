const Employee = require('./employee');

class Manager extends Employee {
  constructor(name, title, salary, manager = null, employees = []) {
    super(name, title, salary, (manager = null));
    this.employees = employees;
  }
  addEmployee(employee) {
    this.employees.push(employee);
  }
  calculateBonus(multiplier) {
    const sum = this._totalSubSalary(this.employees) + this.salary;
    console.log(
      '🚀 ~ file: manager.js ~ line 17 ~ Manager ~ calculateBonus ~ sum',
      sum,
      multiplier
    );

    return Number(sum) * multiplier;
  }
  _totalSubSalary(employees) {
    if (!employees) return 0;
    let res = 0;
    for (const employee of employees) {
      if (employee.manager == null) {
        //is manager
        res += employee.salary + this._totalSubSalary(employee.employees);
      } else {
        res += employee.salary;
      }
    }
    return res;
  }
  /*
Inside of `_totalSubSalary()`, create a sum variable. Check to see if each
`employee` is an instance of `Manager`. If so, add their `salary` plus a
recursive call to their `_totalSubSalary()` to sum. If not, simply add
their `salary` to sum. 

The `calculateBonus` logic should look something like this:

```plaintext
bonus = (manager's salary + total salary of all employees under them)
 * multiplier
```
*/
}

module.exports = Manager;
