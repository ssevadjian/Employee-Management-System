const mysql = require("mysql");
const consoleTable = require("console.table");
const db = require("./db");
const inquirer = require("inquirer");

startViewing();
//Select what you would like to do
async function startViewing() {
  console.log(`I'm viewing!`);
  inquirer
    .prompt([
      {
        name: "action",
        type: "rawlist",
        choices: [
          "View All Employees",
          "View All Employees by Department",
          "View All Employees by Role",
          "View All Employees by Manager",
          "Add Employee",
          "Remove Employee",
          "Update Employee Role",
          "Update Employee Manager",
        ],
        message: "What would you like to do?",
      },
    ])
    .then((answer) => {
      console.log("this is ", answer);
      console.log("this was my choice:", answer.action);
      if (answer.action === "View All Employees") {
        console.log("view all employees");
        allEmployeesView();
        return;
      }
      if (answer.action === "View All Employees by Department") {
        console.log("view employees by department");
        allByDepartmentsView();
        whichDepartment();
        return;
      }
    });
}
// Select which employees to view by department
async function whichDepartment() {
          inquirer.prompt([
              {
                  name: "dep",
                  type: "list",
                  choices: [
                      "Support",
                      "Sales",
                      "Engineering",
                      "Finance",
                      "Legal"
                  ],
                  message: "Select department:"
              }
          ]).then((answer) => {
              if (answer.dep === "Support") {
                    console.log("Support employees");
                    allEmployeesByDep();
                  }
                  else {
                      console.log("we don't have any employees in that department");
                  }
          });
        }

async function allEmployeesView() {
  const employees = await db.viewEmployees();
  console.table(employees);
}

async function allByDepartmentsView() {
  const employeeDepartments = await db.viewDepartments();
  console.table(employeeDepartments);
}

async function allEmployeesByDep() {
    const employeesDep = await db.employeeByDepartment();
    console.table(employeesDep);
}

//   {
//       name: "startingBid",
//       type: "input",
//       message: "What would you like the starting bid to be?",
//       validate: function(value) {
//           if(isNaN(value) === false) {
//               return true;
//           }
//           return false;
//       }
//   }
//   ]).then(({itemName, startingBid}) => {
//       const query = "INSERT INTO  SET ?;";

//       connection.query(query, {itemName, startingBid, highestBid: startingBid}, err => {
//           if(err) throw err;
//           start()
//       });
//   });
// };

// const OUTPUT_DIR = path.resolve(__dirname, "output");
// const outputPath = path.join(OUTPUT_DIR, "team.html");

// const myTeam = [];

// // Write code to use inquirer to gather information about the development team members,
// // and to create objects for each team member (using the correct classes as blueprints!)
// function app() {
//   createManager();
// }

// function buildTeam() {
//     console.log(myTeam);
//   if (!fs.existsSync(OUTPUT_DIR)) {
//     fs.mkdirSync(OUTPUT_DIR);
//   }
//   fs.writeFileSync(outputPath, render(myTeam), "utf-8");
// }

// const addEmployee = () => {
//   inquirer
//     .prompt([
//       {
//         type: "list",
//         message: "What is the employee's job title?",
//         name: "title",
//         choices: [
//           "Engineer",
//           "Intern",
//           "I don't want to add any other team members",
//         ],
//       },
//     ])
//     .then((a) => {
//       let employee = new Employee(a.title);
//       if (a.title === "Engineer") {
//         newEngineer();
//       }
//       if (a.title === "Intern") {
//         newIntern();
//       } else {
//         buildTeam();
//         return;
//       }
//       myTeam.push(employee);
//     });
// };

// const newEngineer = () => {
//   inquirer
//     .prompt([
//       {
//         type: "input",
//         message: "Enter first name of employee:",
//         name: "name",
//       },
//       {
//         type: "input",
//         message: "Enter the employee ID:",
//         name: "id",
//       },
//       {
//         type: "input",
//         message: "What is the employee's email address?",
//         name: "email",
//       },
//       {
//         type: "input",
//         message: "What is the employee's GitHub username?",
//         name: "gitUser",
//       },
//     ])
//     .then((a) => {
//       let engineer = new Engineer(a.name, a.id, a.email, a.gitUser);
//       myTeam.push(engineer);
//       addEmployee();
//     });
// };

// const createManager = () => {
//   inquirer
//     .prompt([
//       {
//         type: "input",
//         message: "Enter first name of manager:",
//         name: "name",
//       },
//       {
//         type: "input",
//         message: "Enter the manager's employee ID:",
//         name: "id",
//       },
//       {
//         type: "input",
//         message: "What is the manager's email address?",
//         name: "email",
//       },
//       {
//         type: "input",
//         message: "What is the manager's contact number?",
//         name: "phone",
//       },
//     ])
//     .then((a) => {
//       let manager = new Manager(a.name, a.id, a.email, a.phone);
//       myTeam.push(manager);
//       addEmployee();
//     });
// };

// const newIntern = () => {
//   inquirer
//     .prompt([
//       {
//         type: "input",
//         message: "Enter first name of intern:",
//         name: "name",
//       },
//       {
//         type: "input",
//         message: "Enter the internee's ID:",
//         name: "id",
//       },
//       {
//         type: "input",
//         message: "What is the intern's email address?",
//         name: "email",
//       },
//       {
//         type: "input",
//         message: "What school did the intern attend?",
//         name: "school",
//       },
//     ])
//     .then((a) => {
//       let intern = new Intern(a.name, a.id, a.email, a.school);
//       myTeam.push(intern);
//       addEmployee();
//     });
// };

// app();
