/*Things to fix
5. Extra: put a date limit (maybe one year?)
*/
// const tasks = new TaskManager(0);

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


// validFormFieldInput();

// let newTask = tasks;
// new TaskManager();
tasks.addTask(name, description, assignedTo, dueDate, status);
tasks.render();


// console.log(TaskManager);




const tasksList = document.querySelector('#tasksList');

// tasksList.addEventListener('click', (event) => {
// 	if(event.target.classList.contains('done-button')) {
// 		const parentTask = event.target.parentElement.parentElement;
// 		console.log(parentTask);

// 		// const taskId = Number(parentTask.dataset.taskId);
// 		const taskId = 1;

// 		// trying to see if I can access the name value of a task
// 		// console.log(tasks.id);

// 		const task = tasks.getTaskById(1);
// 		console.log(task);
// 		console.log(task.status);
// 		// console.log(tasks);
// 		task.status = 'DONE';
// 		console.log(task.status);
// 		console.log(task);

// 		// tasks.render();

// 	}
// });

// 	console.log('Pressed Mark as Done Button');
// });

tasksList.addEventListener('click',function(event){
    const item = event.target;
    if(item.classList.contains('done-button')){
        // const parentTask = item.parentElement.parentElement;
		const parentTask = item.parentElement.parentElement;
		console.log(parentTask);
        const taskId = parseInt(parentTask.id);
		console.log(taskId);
        const task = tasks.getTaskById(taskId);
        task.status = 'DONE';
		console.log(task.status);
        // taskManager.save();
        // // task9completed
        // // taskManager.load();
        tasks.render();

        // const btn = document.querySelector('.done-button');
        // if()
    }

    if(item.classList.contains('delete-button')){
        const parentTask = item.parentElement.parentElement;
        const taskId = parseInt(parentTask.id);
        const task = taskManager.getTaskById(taskId);
        taskManager.deleteTask(taskId);
        taskManager.save();
        taskManager.render();

    }
});

//clear inputs after submit button is pressed
const inputs = document.querySelectorAll('#newTaskNameInput, #newTaskDescription, #newTaskAssignedTo, #newTaskDueDate');
inputs.forEach(input => {
    input.value = '';
});

});



// function validFormFieldInput(data){
//     return data !== null && data !== ''
// };
