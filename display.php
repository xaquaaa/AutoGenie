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

$sql = "SELECT * FROM workouts";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    echo "<table border='1'>
            <tr>
                <th>ID</th>
                <th>User Name</th>
                <th>Workout Type</th>
                <th>Duration (min)</th>
                <th>Calories Burned</th>
                <th>Date</th>
            </tr>";
    
    // Output data of each row
    while($row = $result->fetch_assoc()) {
        echo "<tr>
                <td>" . $row["id"] . "</td>
                <td>" . $row["user_name"] . "</td>
                <td>" . $row["workout_type"] . "</td>
                <td>" . $row["duration"] . "</td>
                <td>" . $row["calories_burned"] . "</td>
                <td>" . $row["date"] . "</td>
              </tr>";
    }
    echo "</table>";
} else {
    echo "0 results";
}

$conn->close();
?>
