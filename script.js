document.addEventListener('DOMContentLoaded', function(){
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    function addTask(){
        const taskText = taskInput.value.trim();
        
        if (taskInput === ""){
            alert('Enter a new task');
        }

        const listItem = document.createElement('li');
        listItem.textContent = taskText;

        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove";
        removeButton.classList.add('remove-btn');

        removeButton.onclick = function(){
            taskList.removeChild(listItem);
        }

        listItem.append(removeButton);
        taskList.appendChild(listItem);
        taskInput.value = "";
    }

    addButton.addEventListener('click', addTask);

    taskInput.addEventListener('keypress', function(event){
        if(event.key === 'Enter'){
            addTask();
        }
    });    
});