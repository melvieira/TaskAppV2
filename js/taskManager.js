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
        this.currentId = currentId;

    }
    addTask(newTaskNameInput, newTaskDescription, newTaskAssignedTo, newTaskDueDate, newTaskStatus) {
        // currentId not incrementing
        const task = {
            // Increment the currentId property
            id: this.currentId++,
            name: newTaskNameInput,
            description: newTaskDescription,
            assignedTo: newTaskAssignedTo,
            dueDate: newTaskDueDate,
            status: newTaskStatus
        };
        return this.tasks.push(task);
    }

    render(){
       let tasksHtmlList = [];
        for (let i =0; i < tasks.length; i++) {
            let currentTasks = tasks;
            let date = new Date.toString(newTaskDueDate)
            let formattedDate = date;
            let taskHtml = createTaskHtml(currentTasks, formattedDate);
            return tasksHtmlList.push(taskHtml);
        }
        const taskHtml = tasksHtmlList.join(tasks);
        const listTasks = document.querySelector('#listTasks');
       console.log(taskHtml);

        listTasks.innerHTML = taskHtml;

        // tasks.forEach(
        // tasksHtmlList.push(tasks)
        // )
        // let date = new Date.toString(newTaskDueDate)
        // let formattedDate = date;
        // let taskHtml = createTaskHtml(newTaskNameInput, newTaskDescription, newTaskAssignedTo, newTaskDueDate, formattedDate)
        // tasksHtmlList.push(taskHtml)
    }
}

