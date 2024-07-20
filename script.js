document.addEventListener('DOMContentLoaded', function(){
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    function addTask(){
        const taskText = taskInput.value.trim();
        
        if (isEmpty(taskInput)){
            alert('Enter a new task');
        } else {
            const listItem = document.createElement('li');

            listItem.textContent = taskText;
        }

        const newButton = document.createElement('button');
        newButton.textContent = 'Remove';
        newButton.setAttribute('class', 'remove-btn');

        newButton.onclick = function(){
            listItem = '';
        }
    }

    
});