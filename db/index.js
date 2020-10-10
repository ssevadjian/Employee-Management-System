const connection = require("./connection");
//const util = require("util");
//const inquirer = require("inquirer");

class DB {
  constructor(connection) {
    this.connection = connection;
  }
  //Add departments, roles, employees

  //View departments, roles, employees
  viewEmployees() {
    console.log("Querying all employees..");
    return this.connection.query("SELECT * FROM employee", function (err, res) {
      if (err) throw err;
      console.table(res);
    });
    }
    viewDepartments() {
        console.log("Querying all departments..");
        return this.connection.query("SELECT * FROM department", function (err, res) {
            if (err) throw err;
            console.table(res);
        });
    }
    employeeByDepartment() {
        console.log("Querying employees by department");
        return this.connection.query("SELECT first_name, last_name FROM employee LEFT OUTER JOIN roles ON employee.role_id = roles.department_id", function (err, res) {
            if (err) throw err;
            console.table(res);
        })
    }
  
  //end of class curly brace  
  }


  // viewRoles() {
  //     return this.connection.query()
  // }

  // Update employee roles

module.exports = new DB(connection);

