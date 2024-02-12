# Module 12 | SQL | Employee Tracker

## Finished Product

### [🔗Project Link](https://github.com/TylerFruik/Employee-Tracker) 
DESCRIPTION

This project was developed using the following skills: 
JS, NodeJS, NPM, SQL

All code is neatly commented for clarity's sake.

All code written manually by Tyler Fruik.

### The following is a video of the final product:
https://www.youtube.com/watch?v=3R5Zy9nHzHc

### How to run the program:
**my password for SQL is adminpassword meaning you may need to change this in the code to match your password**
1) Copy the repository
2) Run 'npm install' in the console
3) Run 'mysql -u root -p' in the console
4) Enter your password
5) Run 'source db/schema.sql'
6) Run 'source db/seeds.sql'
7) Quit out of mysql
8) Run 'node server.js'

## Assignment Information

### User Story
```
AS A business owner
I WANT to be able to view and manage the departments, roles, and employees in my company
SO THAT I can organize and plan my business
```

### Acceptance Criteria
```
GIVEN a command-line application that accepts user input
WHEN I start the application
THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
WHEN I choose to view all departments
THEN I am presented with a formatted table showing department names and department ids
WHEN I choose to view all roles
THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
WHEN I choose to view all employees
THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
WHEN I choose to add a department
THEN I am prompted to enter the name of the department and that department is added to the database
WHEN I choose to add a role
THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
WHEN I choose to add an employee
THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
WHEN I choose to update an employee role
THEN I am prompted to select an employee to update and their new role and this information is updated in the database
```
