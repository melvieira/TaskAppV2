
const tasks = new TaskManager();

console.log(tasks);

// name, description, assignedTo, dueDate, status)
const taskOne = new TaskManager("taskOne");

taskOne.addTask('taskOne', 'Clean the fridge', 'Melanie', '4/12/2022', 'PENDING');
console.log(taskOne);

const taskTwo = new TaskManager("taskTwo");
taskTwo.addTask('taskTwo', 'Do laundry', 'Geoffroy', '4/13/2022', 'PENDING');
console.log(taskTwo);