const connection = require("./connection");
const util = require("util");

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
  // viewRoles() {
  //     return this.connection.query()
  // }
  // viewDepartments() {
  //     SELECT * FROM department;
  // }

  // Update employee roles
}

//const db = new DB(connection);

module.exports = new DB(connection);
//module.exports 
