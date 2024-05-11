const todoList = [];

function addTodo(todo){
  const inputElements = document.querySelector('.js-name-input');
  const name = inputElements.value;
  console.log(name)
  todoList.push(name);
  console.log(todoList);
  inputElements.value = '';
}


