/*Things to fix
1. Status dropdown working but, picked option not showing up in task li -Geoff. DONE by accident? - Mel
2. Need to increment the task ID - Geoff
    New tasks are not being stored in "tasks" array;
3. Task 5 step 2/3. Render not showing up on page - Mel DONE
4. Task 6 step 3. Need to fix error to print on page
*/


const tasks = new TaskManager();

console.log(tasks);

// name, description, assignedTo, dueDate, status)
// const taskOne = new TaskManager("taskOne");
// taskOne.addTask('taskOne', 'Clean the fridge', 'Melanie', '4/12/2022', 'PENDING');
// console.log(taskOne);

// const taskTwo = new TaskManager("taskTwo");
// taskTwo.addTask('taskTwo', 'Do laundry', 'Geoffroy', '4/13/2022', 'PENDING');
// console.log(taskTwo);

// create taskList to hold all tasks
let taskList =[];

//code from example for testing
const newTaskForm = document.querySelector('#newTaskForm');

newTaskForm.addEventListener('submit', (event) => {
    event.preventDefault();

const newTaskNameInput = document.querySelector('#newTaskNameInput');
const newTaskDescription = document.querySelector('#newTaskDescription');
const newTaskAssignedTo = document.querySelector('#newTaskAssignedTo');
const newTaskDueDate = document.querySelector('#newTaskDueDate');
const newTaskStatus = document.querySelector('#newTaskStatus');
const errorMessage = document.querySelector('#alertMessage');

const name = newTaskNameInput.value;
const description = newTaskDescription.value;
const assignedTo = newTaskAssignedTo.value;
const dueDate = newTaskDueDate.value;
const status = newTaskStatus.value;
    /*
        Validation code here
    */
function validFormFieldInput(){
    if(!name || !description || !assignedTo || !dueDate) {
        // error.Message.innerHTML = "Invalid name input"
        alert("Please enter the required info");
        return;
    }
}


// function validFormFieldInput(){
//     if(!name || !description || !assignedTo || !dueDate){
//         errorMessage.innerHTML = "Please enter valid input"
//         errorMessage.style.display = "block"
//         errorMessage.style.color = "red";
//     }
// }

validFormFieldInput();

let newTask = new TaskManager();
newTask.addTask(name, description, assignedTo, dueDate, status);
// createTaskHtml(name, description, assignedTo, dueDate, status);
newTask.render();

taskList.push(newTask);
console.log(taskList);

// let taskHtml = createTaskHtml(name, description, assignedTo, dueDate, status );
// console.log(taskHtml);


//clear inputs after submit button is pressed
const inputs = document.querySelectorAll('#newTaskNameInput, #newTaskDescription, #newTaskAssignedTo, #newTaskDueDate');
inputs.forEach(input => {
    input.value = '';
})

});




// function validFormFieldInput(data){
//     return data !== null && data !== ''
// };
