let todoList;
todoList = [
  { name: 'hi', dueDate: '11-11-2024' },
  { name: 'hello', dueDate: '11-11-2024' }
];

renderTodoList()

function renderTodoList () {
  let todoListHTML = ``;

  for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
    const { name, dueDate } = todoObject;
    const html = `
     <div> ${name} </div>
     <div> ${dueDate} </div>
     <button class="todo-list-delete" onclick="todoList.splice(${i}, 1); renderTodoList();">Delete</button>
   `;

    todoListHTML += html;
  }
      document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}

function addTodo(todo) {
  const inputElements = document.querySelector('.js-name-input');
  const name = inputElements.value;
  const dateInputElements = document.querySelector('.js-due-date-input');
  const dueDate = dateInputElements.value;

  todoList.push({ name, dueDate });

  inputElements.value = null;
  dateInputElements.value = null;

  renderTodoList();

}


