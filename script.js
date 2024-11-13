document.getElementById('addTaskBtn').addEventListener('click', addTask);
document.getElementById('clearCompletedBtn').addEventListener('click', clearCompleted);

function addTask() {
  const taskInput = document.getElementById('taskInput');
  const taskText = taskInput.value.trim();
  
  if (taskText === '') return; // Ignore empty tasks
  
  const taskList = document.getElementById('taskList');
  const li = document.createElement('li');
  
  li.innerHTML = `${taskText} <button onclick="markCompleted(this)">Done</button>`;
  taskList.appendChild(li);
  
  taskInput.value = ''; // Clear input field
}

function markCompleted(button) {
  const li = button.parentElement;
  li.classList.toggle('completed');
}

function clearCompleted() {
  const taskList = document.getElementById('taskList');
  const completedTasks = taskList.querySelectorAll('.completed');
  
  completedTasks.forEach(task => task.remove());
}
