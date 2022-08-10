class Employee {
  constructor(name, salary, title, manager = null) {
    this.name = name;
    this.title = title;
    this.salary = salary;
    this.manager = manager;
    if (manager !== null) {
      manager.addEmployee(this);
    }
  }
  calculateBonus(multiplier) {
    return this.salary * multiplier;
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

module.exports = Employee;
