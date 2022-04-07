class TaskManager {

    constructor(tasks,currentId = 0) {
        this.tasks = [];
        this.currentId = currentId;
    }
    addTask(name, description, assignedTo, dueDate, status, currentId) {
        // currentId not incrementing
        this.currentId++;
        this.tasks.push(this.tasks, description, assignedTo, dueDate, status);
        console.log(this.currentId)
        return this.currentId;
    }

}

