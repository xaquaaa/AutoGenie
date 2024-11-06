<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Fitness Tracker</title>
    <link rel="stylesheet" href="style3.css">
</head>
<body>
    <h1>Fitness Tracker</h1>
    <form id="workoutForm" method="POST" action="submit.php">
        <label for="user_name">User Name:</label>
        <input type="text" id="user_name" name="user_name" required>

        <label for="workout_type">Workout Type:</label>
        <input type="text" id="workout_type" name="workout_type" required>

        <label for="duration">Duration (minutes):</label>
        <input type="number" id="duration" name="duration" required>

        <label for="calories_burned">Calories Burned:</label>
        <input type="number" id="calories_burned" name="calories_burned" required>

        <label for="date">Date:</label>
        <input type="date" id="date" name="date" required>

        <input type="submit" value="Add Workout">
    </form>

    <h2>Workout Log</h2>
    <div id="workoutLog">
        <?php include 'display.php'; ?>
    </div>

    <script src="script.js"></script>
</body>
</html>
