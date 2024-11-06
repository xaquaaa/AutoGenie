// Function to add a task
function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();
    if (taskText === "") return;

    const taskItem = document.createElement("li");
    taskItem.textContent = taskText;

    // Create a Done button
    const doneButton = document.createElement("button");
    doneButton.textContent = "Done";
    doneButton.classList.add("done-btn");
    doneButton.onclick = function () {
        moveToDone(taskItem);
    };

    // Create a Delete button
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("delete-btn");
    deleteButton.onclick = function () {
        taskItem.remove();
    };

    taskItem.appendChild(doneButton);
    taskItem.appendChild(deleteButton);

    document.getElementById("todoList").appendChild(taskItem);
    taskInput.value = "";
}

// Function to move a task to the Done List
function moveToDone(taskItem) {
    const doneList = document.getElementById("doneList");

    // Remove the "Done" button from the completed task
    const doneButton = taskItem.querySelector(".done-btn");
    if (doneButton) doneButton.remove();

    // Add the task to the Done List and apply styling
    taskItem.classList.add("completed");
    doneList.appendChild(taskItem);
}

