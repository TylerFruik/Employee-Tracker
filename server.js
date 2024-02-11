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

  .then((answer) => {
    if (answer.choice ===choiceList[0]) {
      db.query('SELECT * FROM employee', (err, rows => {
        if (err) {
          console.error('Error executing the query: ' + err.stack);
          return;
        }
        console.table(rows);
        init()
      }));
    } else if (answer.choice === choiceList[1]) {
        inquirer
          .prompt([
            {
              type: 'input',
              message: 'What is the employee\'s first name?',
              name: 'firstName',
            },
            {
              type: 'input',
              message: 'What is the employee\'s last name?',
              name: 'lastName',
            },
            {
              type: 'list',
              message: 'What is the employee\'s role ID?',
              name: 'roleId',
              choices: [1,2,3,4,5,6,7,8]
            },
            {
              type: 'list',
              message: 'Who is the employee\'s manager?',
              name: 'managerId',
              choices: [1,3,5,7]
            }
          ])
          .then(data => {
            db.query('INSERT INTO employee (first_name, last_name, roles_id, manager_id) VALUES (?, ?, ?, ?)', [data.firstName, data.lastName, data.roleId, data.managerId], (err, rows) => {
              if (err) {
                console.error('Error executing the query: ' + err.stack);
                return;
              }
              console.log('Employee successfully added');
              init();
            });
          });
    } else if (answer.choice === choiceList[2]) {
        inquirer
          .prompt([
            {
              type: 'list',
              message: 'Select the employee to update:',
              name: 'employeeName',
              choices: ['John Doe', 'Mike Chan', 'Ashley Rodriguez', 'Kevin Tupik', 'Kunal Singh', 'Malia Brown', 'Sarah Lourd', 'Tom Allen']
            },
            {
              type: 'list',
              message: 'Select the new role for the employee:',
              name: 'roleId',
              choices: [1,2,3,4,5,6,7,8]
            }
          ])
          .then(data => {
            const [firstName, lastName] = data.employeeName.split(' ');
            const updateQuery = 'UPDATE employee SET roles_id = ? WHERE first_name = ? AND last_name = ?';
            const updateParams = [data.roleId, firstName, lastName];

            db.query(updateQuery, updateParams, (err, result) => {
              if (err) {
                console.error('Error executing the update query:', err);
                return;
              }
              console.log('Employee role successfully updated');
              init();
            });
          });
    } else if (answer.choice === choiceList[3]) {
      db.query('SELECT * FROM roles', (err, rows) => {
        if (err) {
          console.error('Error executing the query: ' + err.stack);
          return;
        }
        console.table(rows);
        init()
      });
    } else if (answer.choice === choiceList[4]) {
      inquirer
        .prompt([
          {
            type: 'input',
            message: 'What is the role name?',
            name: 'roleName',
          },
          {
            type: 'input',
            message: 'What is the role salary?',
            name: 'salary',
          },
          {
            type: 'list',
            message: 'What department ID does the role belong to?',
            name: 'datdId',
            choices: [1,2,3,4]
          }
        ])
        .then(data => {
          db.query('INSERT INTO roles (title, salary, department_id) VALUES (?, ?, ?)', [data.roleName, data.salary, data.deptId], (err, rows) => {
            if (err) {
              console.error('Error executing the query: ' + err.stack);
              return;
            }
            console.log('Role successfully added');
            init();
          });
        });
    } else if (answer.choice === choiceList[5]) {
      db.query('SELECT * FROM department', (err, rows) => {
        if (err) {
          console.error('Error executing the query: ' + err.stack);
          return;
        }
        console.table(rows);
        init();
      });
    } else if (answer.choice === choiceList[6]) {
      inquirer
        .prompt([
          {
            type: 'input',
            message: 'What is the department name?',
            name: 'departmentName',
          }
        ])
        .then(data => {
          db.query('INSERT INTO department (department_name) VALUES (?)', [data.departmentName], (err, rows) => {
            if (err) {
              console.error('Error executing the query: ' + err.stack);
              return;
            }
            console.log('Department successfully added');
            init();
          });
        });
    }
  });
}

db.connect(err => {
  if (err) throw err;
  init();
});