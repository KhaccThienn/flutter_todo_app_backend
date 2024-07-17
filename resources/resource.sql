CREATE DATABASE IF NOT EXISTS db_todo_app

USE db_todo_app;

CREATE TABLE IF NOT EXISTS tbl_user(
    id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(255) NOT NULL,
    display_name VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    avatar VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS tbl_todo(
    id INT PRIMARY KEY AUTO_INCREMENT,
    todoText VARCHAR(255) NOT NULL,
    isDone TINYINT DEFAULT 1,
    user_id INT,
    FOREIGN KEY (user_id) REFERENCES tb_user(id),
    created_date TIMESTAMP NOT NULL,
    end_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO tb_user(username, display_name, password, avatar) VALUES 
('user1', 'Remi No Love 1', '12345678', "http://localhost:8000/users/user1.jpg"),
('user2', 'Remi No Love 2', '12345678', "http://localhost:8000/users/user2.png"),
('user3', 'Remi No Love 3', '12345678', "http://localhost:8000/users/user3.jpg")

INSERT INTO tbl_todo (`todoText`, `isDone`, created_date, end_date, user_id) VALUES
("Morning Exercise", 1, "2024-07-16 05:00:00", "2024-07-16 06:00:00",1),
("Buy Groceries", 1, "2024-07-16 08:00:00", "2024-07-16 10:00:00", 1),
("Morning Exercise", 0, "2024-07-17 05:00:00", "2024-07-17 06:00:00", 1),
("Go To School", 0, "2024-07-17 09:30:00", "2024-07-17 12:30:00", 1),
("Morning Exercise", 0, "2024-07-18 05:00:00", "2024-07-18 06:00:00",2),
("Go To School", 0, "2024-07-18 09:30:00", "2024-07-18 12:30:00", 2)