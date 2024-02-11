const mysql = require('mysql2');
const inquirer = require('inquirer');

const choiceList = [
  'View all employees',
  'Add employee',
  'Update employee role',
  'View all roles',
  'Add role',
  'View all departments',
  'Add department'
]

const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'employee_db'
  },
  console.log('Connected to the employee_db database.')
);

function init() {
  inquirer
    .prompt([
      {
        type: 'list',
        message: 'What would you like to do?',
        name: 'choice',
        choices: [
          choiceList[0],
          choiceList[1],
          choiceList[2],
          choiceList[3],
          choiceList[4],
          choiceList[5],
          choiceList[6]
        ]
      }
  ])
}

init()