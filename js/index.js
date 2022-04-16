/*Things to fix
5. Extra: put a date limit (maybe one year?)
*/

// localStorage.clear();
tasks.load();
tasks.render();

function validFormFieldInput(){
	// trim to remove the whitespaces
	const nameValue = newTaskNameInput.value.trim();
	const descriptionValue = newTaskDescription.value.trim();
	const assignedToValue = newTaskAssignedTo.value.trim();
	const dueDateValue = new Date(newTaskDueDate.value.trim());

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

		if(dueDateValue <= (new Date())) {
			setErrorFor(newTaskDueDate, 'Due date cannot be in the past');
		}else if( dueDateValue == "Invalid Date") {
			setErrorFor(newTaskDueDate, 'Due date cannot be blank')
		} else{
			setSuccessFor(newTaskDueDate);
		}

		if((nameValue === '') || (descriptionValue === '') || (assignedToValue === '') || (dueDateValue == "Invalid Date")) {
			return false;
		}else{
			return true;
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

	// validFormFieldInput();

	let isFormValidation = validFormFieldInput();

	console.log(isFormValidation);
	if(isFormValidation) {
		tasks.addTask(name, description, assignedTo, dueDate, status);
		tasks.save();
		tasks.render();
		//clear inputs after submit button is pressed
		const inputs = document.querySelectorAll('#newTaskNameInput, #newTaskDescription, #newTaskAssignedTo, #newTaskDueDate');
		inputs.forEach(input => {
			input.value = '';
		});
	}


// let newTask = tasks;
// new TaskManager();

// tasks.addTask(name, description, assignedTo, dueDate, status);
// tasks.save();
// tasks.render();

// //clear inputs after submit button is pressed
// const inputs = document.querySelectorAll('#newTaskNameInput, #newTaskDescription, #newTaskAssignedTo, #newTaskDueDate');
// inputs.forEach(input => {
//     input.value = '';
// });

});

const tasksList = document.querySelector('#tasksList');

tasksList.addEventListener('click',function(event){
    const item = event.target;
    if(item.classList.contains('done-button')){
        // const parentTask = item.parentElement.parentElement;
		const parentTask = item.parentElement.parentElement;
        const taskId = parseInt(parentTask.id);
        const task = tasks.getTaskById(taskId);
        task.status = 'DONE';
		tasks.save();
        tasks.render();

    }

    if(item.classList.contains('delete-button')){
        const parentTask = item.parentElement.parentElement;
        const taskId = parseInt(parentTask.id);
        const task = tasks.getTaskById(taskId);
        tasks.deleteTask(taskId);
		tasks.save();
				// tasks.load();
        tasks.render();

    }
});





// function validFormFieldInput(data){
//     return data !== null && data !== ''
// };
