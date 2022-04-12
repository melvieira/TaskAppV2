
function createTaskHtml(name, description, assignedTo, dueDate, status){
    const html =
    ` <li class="list-group-item">
    <div class="card" style="width: 18rem">
      <div class="card-body">
        <h3 class="card-title">${name}</h3>
        <h4 class="card-text">Assigned To: ${assignedTo}</h4>
        <p class="card-text1">${description}</p>
        <p class="card-text2">Due: ${dueDate}</p>
        <p class="card-text3">Status: ${status}</p>
      </div>
  </li>`

return html;
}


class TaskManager {
    constructor(tasks, currentId =0) {
        this.tasks = [];
        this.currentId = currentId;

    }
    addTask(name, description, assignedTo, dueDate, status) {
        // currentId not incrementing
        const task = {
            // Increment the currentId property
            id: this.currentId += 1,
            name: name,
            description: description,
            assignedTo: assignedTo,
            dueDate: dueDate,
            status: status
        };
       this.tasks.push(task);
    };

    render() {
       let tasksHtmlList = [];
        for (let i =0; i < TaskManager.length; i++) {
            // for(let i of tasks){
            // for(let x in task) {

            const newTaskNameInput = document.querySelector('#newTaskNameInput');
            const newTaskDescription = document.querySelector('#newTaskDescription');
            const newTaskAssignedTo = document.querySelector('#newTaskAssignedTo');
            const newTaskDueDate = document.querySelector('#newTaskDueDate');
            const newTaskStatus = document.querySelector('#newTaskStatus');

            const name = newTaskNameInput.value;
            const description = newTaskDescription.value;
            const assignedTo = newTaskAssignedTo.value;
            const dueDate = newTaskDueDate.value;
            const status = newTaskStatus.value;

            let currentTasks = tasks;
            let date = new Date(dueDate);
            let formattedDate = date;

            let taskHtml = createTaskHtml(name, description, assignedTo, formattedDate, status);
            tasksHtmlList.push(taskHtml);

        };
        // const taskHtml = tasksHtmlList.join(tasks);
        const listTasks = document.querySelector('#listTasks');

        listTasks.innerHTML = tasksHtmlList.join(tasks);

    }
}

