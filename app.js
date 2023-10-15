let form = document.querySelector('#form');
let formInput = document.querySelector('#form-input')
let todoList = document.querySelector('#todo-list')
var todoData
if(localStorage.getItem('todo')){
    todoData = JSON.parse(localStorage.getItem('todo'))
}else{
    localStorage.setItem('todo', JSON.stringify([]))
    todoData = JSON.parse(localStorage.getItem('todo'))
}

console.log(todoData)

for(i = 0; i<todoData.length; i++){
    let task = document.createElement('li');
    task.setAttribute('data-content', todoData[i])
    let taskText = document.createElement('span');
    let btn = document.createElement('button');
    taskText.innerText = todoData[i];
    btn.innerText = 'Completed';
    task.append(taskText, btn)
    todoList.prepend(task)
}

todoList.addEventListener('click', function(e){
   
    if(e.target.tagName ==='BUTTON'){
        e.target.parentElement.remove();
        let targetIndex = e.target.parentElement.getAttribute('data-content')
        let index = todoData.indexOf(targetIndex)
        todoData.splice(index,1)
    
        localStorage.setItem('todo',JSON.stringify(todoData))
       
        
    }
})

form.addEventListener('submit', function(e){
    e.preventDefault();
    console.log(todoList)
    let taskName = e.target.task.value;
    let newTask = document.createElement('li')
    let newText = document.createElement('span')
    let btn = document.createElement('button')
    btn.innerText = 'Complete'
    newText.innerText = taskName

    newTask.append(newText, btn)
    todoList.prepend(newTask)
    todoData.push(taskName)
    localStorage.setItem('todo',JSON.stringify(todoData))
    formInput.setAttribute('placeholder', 'Name of task')
})

