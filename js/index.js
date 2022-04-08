
const tasks = new TaskManager();

console.log(tasks);

// const newTask = {
//     id: this.currentId,
//     name: name,
//     description : description,
//     assignedTo : assigned,
//     date: date,
//     status: status
// }

// name, description, assignedTo, dueDate, status)
// const taskOne = new TaskManager("taskOne");
// taskOne.addTask('taskOne', 'Clean the fridge', 'Melanie', '4/12/2022', 'PENDING');
// console.log(taskOne);

// const taskTwo = new TaskManager("taskTwo");
// taskTwo.addTask('taskTwo', 'Do laundry', 'Geoffroy', '4/13/2022', 'PENDING');
// console.log(taskTwo);

//code from example for testing
const newTaskForm = document.querySelector('#newTaskForm');

newTaskForm.addEventListener('submit', (event) => {
    event.preventDefault();

const newTaskNameInput = document.querySelector('#newTaskNameInput');
const newTaskDescription = document.querySelector('#newTaskDescription');
const newTaskAssignedTo = document.querySelector('#newTaskAssignedTo');
const newTaskDueDate = document.querySelector('#newTaskDueDate');
const errorMessage = document.querySelector('#alertMessage');


    /*
        Validation code here
    */



    const name = newTaskNameInput.value;
    const description = newTaskDescription.value;
    const assignedTo = newTaskAssignedTo.value;
    const dueDate = newTaskDueDate.value;
    if(!validFormFieldInput(name)){
        error.Message.innerHTML = "Invalid name input";
        errorMessage.style.display = "block"
    }else{
        errorMessage.style.display = "none"
    }
let newTask = new TaskManager();
newTask.addTask(name, description, assignedTo, dueDate);
console.log(newTask);
});



function validFormFieldInput(data){
    return data !== null && data !== ''
};
