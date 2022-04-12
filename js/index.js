/*Things to fix
2. task list not building on page. Array is incrementing but html task list not updating
4. clear box appearing around form fields after first submission.
5. Extra: put a date limit (maybe one year?)
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
const newTaskForm = document.querySelector('#form');

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

const form = document.getElementById("form");

function validFormFieldInput(){
// trim to remove the whitespaces
const nameValue = newTaskNameInput.value.trim();
const descriptionValue = newTaskDescription.value.trim();
const assignedToValue = newTaskAssignedTo.value.trim();
const dueDateValue = new Date(newTaskDueDate.value.trim());
console.log(dueDateValue);


	if(nameValue === '') {
		setErrorFor(newTaskNameInput, 'Task name cannot be blank');
	} else {
		setSuccessFor(newTaskNameInput);
	}

	if(descriptionValue === '') {
		setErrorFor(newTaskDescription, 'Description cannot be blank');
	} else {
		setSuccessFor(newTaskDescription);
	}

	if(assignedToValue === '') {
		setErrorFor(newTaskAssignedTo, 'Assigned to cannot be blank');
	} else {
		setSuccessFor(newTaskAssignedTo);
	}


    // if(dueDateValue <= (new Date()) || dueDateValue == "Invalid Date") {
	// 	setErrorFor(newTaskDueDate, 'Due date cannot be in the past or blank');
	// }else {
	// 	setSuccessFor(newTaskDueDate);
	// }

    if(dueDateValue <= (new Date())) {
		setErrorFor(newTaskDueDate, 'Due date cannot be in the past');
	}else if( dueDateValue == "Invalid Date") {
        setErrorFor(newTaskDueDate, 'Due date cannot be blank')
    } else{
		setSuccessFor(newTaskDueDate);
	}

}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success'
}


validFormFieldInput();

let newTask = tasks;
new TaskManager();
newTask.addTask(name, description, assignedTo, dueDate, status);
// createTaskHtml(name, description, assignedTo, dueDate, status);
newTask.render();

// tasks.push(newTask);
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
