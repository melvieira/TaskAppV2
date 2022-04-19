
function createTaskHtml(name, description, assignedTo, dueDate, status, id){
    let html;
    if((status == "to-do") || (status == "in-progress") || (status == "review")){
    html =
    `<li id=${id} class="list-group-item">
        <div class="card" style="width: 20em">
        <div class="card-body">
        ID#:<span>${id}</span>
            <h3 class="card-title">${name}</h3>
            <hr>
            <h5 class="card-text">Assigned To: ${assignedTo}</h4>
            <p class="card-text1">Description: ${description}</p>
            <p class="card-text2">Due: ${dueDate}</p>
            <p class="card-text3" style="font-weight: bold">Status: ${status}</p>
        </div>
        <button type="done button" class="btn btn-primary done-button" >Mark As Done</button>
        <button class="delete-button btn btn-danger ml-1" type="button">Delete Task</button>
        </div>
    </li>`
    }else{
        html =
        `<li id=${id} class="list-group-item">
            <div class="card" style="width: 20em">
            <div class="card-body">
            ID#:<span>${id}</span>
                <h3 class="card-title">${name}</h3>
                <hr>
                <h5 class="card-text">Assigned To: ${assignedTo}</h4>
                <p class="card-text1">Description: ${description}</p>
                <p class="card-text2">Due: ${dueDate}</p>
                <p class="card-text3" style="color: green; font-weight:bold;s">Status: ${status}</p>
            </div>
            <button type="done button" class="btn btn-primary done-button invisible" >Mark As Done</button>
            <button class="delete-button btn btn-danger ml-1" type="button">Delete Task</button>
            </div>
        </li>`
    }

return html;
}


class TaskManager {
    constructor(tasks, currentId =0) {
        this.tasks = [];
        this.currentId = currentId;

    }
    addTask(name, description, assignedTo, dueDate, status) {
        this.currentId++;
        let currentTaskId;
        const task = {
            // Increment the currentId property
            id: this.currentId,
            name: name,
            description: description,
            assignedTo: assignedTo,
            dueDate: dueDate,
            status: status
        };

       this.tasks.push(task);
       return task;
    }

    render(){
        let tasksHtmlList = [];
        for(let i = 0; i < this.tasks.length; i++){
            let currentTask = this.tasks[i];
            let currentDate = new Date(currentTask.dueDate);
            let formattedDate = currentDate.toString();
            let taskHtml = createTaskHtml(currentTask.name, currentTask.description,currentTask.assignedTo,formattedDate,currentTask.status,currentTask.id);

            tasksHtmlList.push(taskHtml)

        }

        const tasksHtml = tasksHtmlList.join('\n')
        const tasksList = document.getElementById('tasksList');

        tasksList.innerHTML = tasksHtml;
    }

    getTaskById(taskId){
        let foundTask;
        for (let i = 0; i < this.tasks.length; i++){
            let task = this.tasks[i];
            if(taskId === task.id){
                foundTask = task;
            }
        }

        return foundTask;
    }

    save(){
       let tasksJson = JSON.stringify(this.tasks);
       localStorage.setItem('tasks', tasksJson);
       let currentId = JSON.stringify(this.currentId);
       localStorage.setItem('currentId', currentId);
    }

    load(){
            let taskJson = localStorage.getItem('tasks');
            // console.log(taskJson);
            this.tasks = JSON.parse(taskJson) || [];
            // console.log(this.tasks);
            let currentId = localStorage.getItem('currentId');
            this.currentId = JSON.parse(currentId);
            // console.log(this.currentId);
    }

    deleteTask(taskId){
        let newTasks = [];
        for (let i =0; i < this.tasks.length; i++){
            let task = this.tasks[i];
            if(taskId !== task.id){
            newTasks.push(task);
            }
        }
        this.tasks = newTasks;
    }
}

let tasks = new TaskManager();
