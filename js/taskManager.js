
function createTaskHtml(name, description, assignedTo, dueDate, status, id){
    const html =
    ` <li class="list-group-item">ID#:<span>${id}</span>
    <div class="card" style="width: 18rem">
      <div class="card-body">
        <h3 class="card-title">${name}</h3>
        <h4 class="card-text">Assigned To: ${assignedTo}</h4>
        <p class="card-text1">${description}</p>
        <p class="card-text2">Due: ${dueDate}</p>
        <p class="card-text3">Status: ${status}</p>
      </div>
      <button type="done button" class="btn btn-primary done-button" >Mark As Done</button>
  </li>`

return html;
}


class TaskManager {
    constructor(tasks, currentId =0) {
        this.tasks = [];
        this.currentId = currentId;

    }
    addTask(name, description, assignedTo, dueDate, status) {
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

       return task;
    };



    render() {
        let tasksHtmlList = [];
        // this.currentTask;


         for (let i =0; i < TaskManager.length; i++) {
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

             let currentTask = this.addTask(name, description, assignedTo, dueDate, status);
            console.log(currentTask);
            // console.log(currentTask);
             let date = new Date(dueDate);
             let formattedDate = date;
            // let currentTask = this.addTask();
            let taskId = this.currentId;

;            // need to use task.id as parameter but that's not working? using this.currentId instead
             let taskHtml = createTaskHtml(name, description, assignedTo, formattedDate, status, taskId);
             tasksHtmlList.push(taskHtml);
        }


            //  for(let i = 0; i < tasksHtmlList.length; i++){
            //     document.getElementById("listTasks").innerHTML = tasksHtmlList.join('');
            //  }
         const tasksHtml = tasksHtmlList.join('\n')
         const tasksLists = document.querySelector('#tasksList');
         tasksList.innerHTML += tasksHtml;

    }

    getTaskbyId(taskId) {
        let foundTask;
                console.log('Looking for STATUS');
        for(let i = 0; i<= this.tasks.length; i++) {
            const task = this.tasks[i];
            // console.log(task);
        }

    };
}

