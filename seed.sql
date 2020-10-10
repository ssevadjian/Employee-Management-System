USE ems_DB;

INSERT INTO department (name)
VALUES ("Support"),
("Sales"),
("Engineering"),
("Finance"),
("Legal");

INSERT INTO roles (title, salary, department_id)
VALUES ("Support Manager", 130000, 1),
("Technical Account Manager", 110000, 1),
("Account Executive", 90000, 2),
("Software Engineer", 130000, 3),
("Accountant", 78000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Stephanie", "Sevadjian", 1, 3),
("Margaret", "Robb", 2, 1),
("Ashley", "Rodriguez", 3, null),
("Kevin", "Tupik", 4, 3),
("Malia", "Brown", 5, null),
("Sarah", "Lourd", 2, null);