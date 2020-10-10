const connection = require('./connection');
const util = require('util');

class DB {
    constructor(connection) {
        this.connection = connection
    }
    //Add departments, roles, employees
    

    //View departments, roles, employees
    viewEmployees() {
        return this.connection.query(
            'SELECT first_name, last_name FROM employee;'
            )
    }
    // viewRoles() {
    //     return this.connection.query()
    // }
    // viewDepartments() {
    //     SELECT * FROM department;
    // }

    // Update employee roles
};


  module.exports = new DB(connection);