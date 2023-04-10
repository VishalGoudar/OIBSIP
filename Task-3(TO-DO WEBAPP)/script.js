const inputTask = document.getElementById("todo-input");
const addTaskButton = document.getElementById("add-task");
const todolist = document.getElementById("todo-list");

function addTask() {
  if (inputTask.value !== "") {
    const newTask = document.createElement("li");
    newTask.innerText = inputTask.value;
    newTask.addEventListener("click", toggleDone);
    const deleteButton = document.createElement("span");
    deleteButton.innerText = "x";
    deleteButton.classList.add("clear-btn");
    deleteButton.addEventListener("click", deleteTask);
    newTask.appendChild(deleteButton);
    taskList.appendChild(newTask);
    inputTask.value = "";
  }
}

function toggleDone() {
  this.classList.toggle("done");
}

function deleteTask() {
  this.parentNode.remove();
}

addTaskButton.addEventListener("click", addTask);
inputTask.addEventListener("keydown", function (e) {
  if (e.code === "Enter") {
    addTask();
  }
});
