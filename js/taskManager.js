// const newTask = {
//     id: this.currentId,
//     name: name,
//     description : description,
//     assignedTo : assigned,
//     date: date,
//     status: status
// }

class TaskManager {
    constructor(tasks,currentId = 0) {
        this.tasks = [];
        this.currentId = currentId;

    }
    addTask(newTaskNameInput, newTaskDescription, newTaskAssignedTo, newTaskDueDate, status, currentId) {
        // currentId not incrementing
        this.currentId ++;
        return this.tasks.push(newTaskNameInput, newTaskDescription, newTaskAssignedTo, newTaskDueDate, status, this.currentId);
    }
}

