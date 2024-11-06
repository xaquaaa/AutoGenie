<?php
$servername = "localhost"; // Change if your server is different
$username = "if0_37570940"; // replace with your database username
$password = "stqWFfpCll"; // Replace with your database password

// Create connection
$conn = new mysqli($servername, $username, $password);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Create database
$sql = "CREATE DATABASE IF NOT EXISTS fitness_tracker";
if ($conn->query($sql) === TRUE) {
    echo "Database created successfully<br>";
} else {
    echo "Error creating database: " . $conn->error . "<br>";
}

// Select the database
$conn->select_db("fitness_tracker");

// SQL to create table
$sql = "CREATE TABLE IF NOT EXISTS workouts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_name VARCHAR(50) NOT NULL,
    workout_type VARCHAR(50) NOT NULL,
    duration INT NOT NULL, -- duration in minutes
    calories_burned INT NOT NULL,
    date DATE NOT NULL
)";

if ($conn->query($sql) === TRUE) {
    echo "Table created successfully<br>";
} else {
    echo "Error creating table: " . $conn->error . "<br>";
}

// Close connection
$conn->close();
?>
