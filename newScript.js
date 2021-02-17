function addTask() {
   // value which we get from user input
   const val = document.getElementById('Add Task').value
   
   if(val.length < 1){
   return alert("Task field cannot be empty. Please fill in task.")
   }
   
   // get list where we want to add our tasks
   const list = document.getElementById('list')

   // <li></li> element creation
   const liElem = document.createElement('li');
   liElem.setAttribute("class", "todo-task")

   // label for checkbox
   const labelElem = document.createElement('label')
   labelElem.innerText = val
   
   const space4 = document.createTextNode(" ");
   
   const inputElem2 = document.createElement('input')
   inputElem2.type = 'text'
   inputElem2.style.display = "none"
   
   const space1 = document.createTextNode(" ");
   
   const editButton = document.createElement('button')
   //editButton.innerText = "Edit";
   editButton.onclick = editTask;
   editButton.id = "editButton"
   const editIcon = document.createElement('i')
   editIcon.setAttribute("class", "fas fa-eye-dropper")
   editButton.appendChild(editIcon)
   
   const space2 = document.createTextNode(" ");

   const deleteButton = document.createElement('button')
   // deleteButton.innerText = "Delete";
   deleteButton.onclick = deleteTask;
   deleteButton.id = "deleteButton"
   const icon = document.createElement('i')
   icon.setAttribute("class", "fas fa-trash")
   deleteButton.appendChild(icon)
   
   const space3 = document.createTextNode(" ");
   
   const completeButton = document.createElement('button')
   //completeButton.innerText = "Complete";
   completeButton.onclick = completeTask;
   completeButton.id = "completeButton"
   const completeIcon = document.createElement('i')
   completeIcon.setAttribute("class", "fas fa-check")
   completeButton.appendChild(completeIcon)
   
   const space5 = document.createTextNode(" ");
   
   const saveButton = document.createElement('button')
   //saveButton.innerText = "Save";
   saveButton.style.display = "none";
   saveButton.onclick = save;
   saveButton.id = "saveButton"
   const saveIcon = document.createElement('i')
   saveIcon.setAttribute("class", "fas fa-save")
   saveButton.appendChild(saveIcon)
   
   //const break1 = document.createElement('br')
   
   // append all elements
   // liElem.appendChild(inputElem) //
   liElem.appendChild(labelElem)
   liElem.appendChild(space4)
   liElem.appendChild(inputElem2)
   liElem.appendChild(space1)
   liElem.appendChild(editButton)
   liElem.appendChild(space2)
   liElem.appendChild(deleteButton)
   liElem.appendChild(space3)
   liElem.appendChild(completeButton)
   liElem.appendChild(space5)
   liElem.appendChild(saveButton)
   //liElem.appendChild(br)
   list.appendChild(liElem)
   
   
   document.getElementById('Add Task').value = ""
}

 
function deleteTask(event) {
	const li = event.target.parentElement.parentElement;
	li.remove();
	// console.log(event);
} 

function completeTask(event) {
	const completeBtn = event.currentTarget;
	const labelEl = completeBtn.parentElement.children[0]
	const editBtn = completeBtn.parentElement.children[2]
	const completeIcon = completeBtn.children[0];
	if (completeIcon.getAttribute("class") === "fas fa-undo") {
		labelEl.style.textDecoration = "none";
		editBtn.style.display = "inline";
		completeIcon.setAttribute("class", "fas fa-check");
	} else {
		labelEl.style.textDecoration = "line-through";
		editBtn.style.display = "none";
		console.log(completeBtn.children)
		completeIcon.setAttribute("class", "fas fa-undo")
	}
}

function editTask (event) {
	
   const labelElem = event.currentTarget.parentElement.children[0]
   const inputEl = event.currentTarget.parentElement.children[1]
   
   inputEl.value = labelElem.innerText
   inputEl.style.display = "inline";
   labelElem.style.display = "none";
   event.currentTarget.parentElement.children[5].style.display = "inline";
}

function save(event) {
    const labelElem = event.target.parentElement.parentElement.children[0]
	labelElem.style.display = "inline";
    const inputEl = event.target.parentElement.parentElement.children[1]
	labelElem.innerText = inputEl.value
	inputEl.style.display = "none";
	event.target.parentElement.parentElement.children[5].style.display = "none";
}