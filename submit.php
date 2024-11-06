<?php
$servername = "localhost";
$username = "if0_37570940"; // replace with your database username
$password = "stqWFfpCll"; // replace with your database password
$dbname = "fitness_tracker";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $user_name = $_POST['user_name'];
    $workout_type = $_POST['workout_type'];
    $duration = $_POST['duration'];
    $calories_burned = $_POST['calories_burned'];
    $date = $_POST['date'];

    $sql = "INSERT INTO workouts (user_name, workout_type, duration, calories_burned, date) 
            VALUES ('$user_name', '$workout_type', $duration, $calories_burned, '$date')";

    if ($conn->query($sql) === TRUE) {
        echo "New workout added successfully";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}

$conn->close();

// Redirect back to the index page
header("Location: index3.php");
exit;
?>
