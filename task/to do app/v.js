var tasks = [];
var meetings = [];

function addTask() {
  var taskInput = document.getElementById("task-input");
  var dateInput = document.getElementById("date-input");
  var task = {
    taskName: taskInput.value,
    taskDate: new Date(dateInput.value)
  };
  if (task.taskName === "") {
    alert("Please enter a task name");
    return;
  }
  if (task.taskDate.toString() === "Invalid Date") {
    alert("Please enter a valid date and time");
    return;
  }
  if (task.taskDate.getTime() < Date.now()) {
    alert("Please enter a future date and time");
    return;
  }
  tasks.push(task);
  renderTasks();
  taskInput.value = "";
  dateInput.value = "";
}

function renderTasks() {
  var taskList = document.getElementById("task-list");
  taskList.innerHTML = "";
  for (var i = 0; i < tasks.length; i++) {
    var task = tasks[i];
    var li = document.createElement("li");
    var taskText = document.createElement("span");
    taskText.textContent = task.taskName;
    var taskDate = document.createElement("span");
    taskDate.textContent = task.taskDate.toLocaleString();
    var deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.onclick = (function(index) {
      return function() {
        tasks.splice(index, 1);
        renderTasks();
      }
    })(i);
    li.appendChild(taskText);
    li.appendChild(taskDate);
    li.appendChild(deleteButton);
    taskList.appendChild(li);
  }
}

function addMeeting() {
  var meetingInput = document.getElementById("task-input");
  var dateInput = document.getElementById("date-input");
  var meeting = {
    meetingName: meetingInput.value,
    meetingDate: new Date(dateInput.value)
  };
  if (meeting.meetingName === "") {
    alert("Please enter a meeting name");
    return;
  }
  if (meeting.meetingDate.toString() === "Invalid Date") {
    alert("Please enter a valid date and time");
    return;
  }
  if (meeting.meetingDate.getTime() < Date.now()) {
    alert("Please enter a future date and time");
    return;
  }
  meetings.push
