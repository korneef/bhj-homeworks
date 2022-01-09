let taskForm = document.getElementById('tasks__form');

taskForm.addEventListener('submit', addTask);

function addTask() {
    event.preventDefault();
    let taskInput = document.getElementById('task__input');
    let taskList = document.getElementById('tasks__list');
    let taskElement = `<div class="task"><div class="task__title">${taskInput.value}</div><a href="#" class="task__remove">&times;</a></div>`;
    
    if (taskInput.value.trim() != '') {
        taskList.insertAdjacentHTML('beforeend', taskElement);
        let taskRemoveBtns = taskList.querySelectorAll('.task__remove');
        taskRemoveBtns[taskRemoveBtns.length - 1].addEventListener('click', removeTask);
    };

    taskInput.value = '';
}

function removeTask() {
    this.parentElement.remove();
}