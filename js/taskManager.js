// const newTask = {
//     id: this.currentId,
//     name: name,
//     description : description,
//     assignedTo : assigned,
//     date: date,
//     status: status
// }

function createTaskHtml(newTaskNameInput, newTaskDescription, newTaskAssignedTo, newTaskDueDate, newTaskStatus){
    const html =
    ` <li class="list-group-item">
    <div class="card" style="width: 18rem">
      <div class="card-body">
        <h3 class="card-title">${newTaskNameInput}</h3>
        <h4 class="card-text">Assigned To: ${newTaskAssignedTo}</h4>
        <p class="card-text1">${newTaskDescription}</p>
        <p class="card-text2">Due: ${newTaskDueDate}</p>
        <p class="card-text3">${newTaskStatus}</p>
      </div>
  </li>`
  return html;
}


class TaskManager {
    constructor(tasks, currentId =0) {
        this.tasks = [];
        this.currentId = currentId++;

    }
    addTask(newTaskNameInput, newTaskDescription, newTaskAssignedTo, newTaskDueDate, status) {
        // currentId not incrementing
        this.currentId++;
        return this.tasks.push(newTaskNameInput, newTaskDescription, newTaskAssignedTo, newTaskDueDate, status, this.currentId);
    }
}

