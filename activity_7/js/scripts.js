
const taskStatus = {
    active: 'active',
    completed: 'completed'
};


let tasks = [];


function Task(id, name, status) {
    this.id = id;
    this.name = name;
    this.status = status;
}


function addTaskElement(task) {
    const taskElement = document.createElement("li");
    taskElement.textContent = task.name;
    taskElement.id = task.id;

   
    taskElement.onclick = completeTask;

    if (task.status === taskStatus.active) {
        document.getElementById('active-list').appendChild(taskElement);
    } else if (task.status === taskStatus.completed) {
        document.getElementById('completed-list').appendChild(taskElement);
    }
}


function addTask(event) {
    const taskName = document.getElementById('input-task').value;
    
    if (taskName.trim() === "") {
        return;
    }

    const taskId = 'task-' + tasks.length;
    const task = new Task(taskId, taskName, taskStatus.active);

    tasks.push(task);


    document.getElementById('input-task').value = "";


    addTaskElement(task);
}


function completeTask(event) {
    const taskId = event.target.id;
    const taskIndex = tasks.findIndex(task => task.id === taskId);

    if (taskIndex !== -1) {
        const task = tasks[taskIndex];


        task.status = taskStatus.completed;

   
        document.getElementById('completed-list').appendChild(event.target);

     
        event.target.style.textDecoration = 'line-through';
    }
}


function init() {

    document.getElementById('add-task').onclick = addTask;
}

window.onload = init;
