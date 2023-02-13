const taskInput = document.getElementById("task-input");
const addTaskButton = document.getElementById("add-task-button");
const taskListUL = document.getElementById("task-list-ul");

addTaskButton.addEventListener("click", function() {
  const taskValue = taskInput.value;
  if (taskValue) {
    addTask(taskValue);
    taskInput.value = "";
  }
});

function addTask(task) {
  const taskLI = document.createElement("li");
  taskLI.innerHTML = task + " <button>x</button>";
  taskListUL.appendChild(taskLI);

  const deleteButton = taskLI.querySelector("button");
  deleteButton.addEventListener("click", function() {
    taskLI.remove();
  });
}
