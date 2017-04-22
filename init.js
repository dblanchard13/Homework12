CREATE DATABASE bamazon_db;
USE bamazon_db;
CREATE TABLE products (
id INTEGER(11) AUTO_INCREMENT NOT NULL, 
product_name VARCHAR(100) NOT NULL,
department_name VARCHAR(100) NOT NULL,
price DECIMAL(10,2)NOT NULL,
stock_quantity INTEGER(10)NOT NULL,
PRIMARY KEY(id)
);


INSERT INTO `bamazon_db`.`products` (`product_name`, `department_name`, `price`, `stock_quantity`) VALUES ('shoes', 'clothing', 150, 5);
INSERT INTO `bamazon_db`.`products` ( `product_name`, `department_name`, `price`, `stock_quantity`) VALUES ( 'iPhones', 'electronics', 650.00, 4);
INSERT INTO `bamazon_db`.`products` ( `product_name`, `department_name`, `price`, `stock_quantity`) VALUES ( 't-shirts', 'clothing', 10.00, 3);
INSERT INTO `bamazon_db`.`products` ( `product_name`, `department_name`, `price`, `stock_quantity`) VALUES ( 'harry potter', 'books', 30.00, 2);
INSERT INTO `bamazon_db`.`products` ( `product_name`, `department_name`, `price`, `stock_quantity`) VALUES ( 'avengers', 'toys', 20.00, 1);
INSERT INTO `bamazon_db`.`products` ( `product_name`, `department_name`, `price`, `stock_quantity`) VALUES ( 'pants', 'clothing', 20.00, 1);
INSERT INTO `bamazon_db`.`products` ( `product_name`, `department_name`, `price`, `stock_quantity`) VALUES ( 'star wars', 'toys', 20.00, 2);
INSERT INTO `bamazon_db`.`products` ( `product_name`, `department_name`, `price`, `stock_quantity`) VALUES ( 'bible', 'books', 15.00, 3);
INSERT INTO `bamazon_db`.`products` ( `product_name`, `department_name`, `price`, `stock_quantity`) VALUES ( 'DVD', 'media', 15.00, 4);
INSERT INTO `bamazon_db`.`products` ( `product_name`, `department_name`, `price`, `stock_quantity`) VALUES ( 'apples', 'produce', 5.00, 5);

SELECT*FROM bamazon_db.products;