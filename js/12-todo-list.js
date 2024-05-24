const todoList = [{name:'drink water',dueDate: '1111-11-11'}]

function renderTodoList() {
  let todoListHTML = ``;


  todoList.forEach((todoObject, index) => {
    const { name, dueDate } = todoObject;
    const html = `
     <div> ${name} </div>
     <div> ${dueDate} </div>
     <button class="todo-list-delete" onclick="todoList.splice(${index}, 1);  renderTodoList();">Delete</button>
   `;
    todoListHTML += html;
  });

  document.querySelector('.js-todo-list').innerHTML = todoListHTML;

}
  addTodo = function () {
    const inputElements = document.querySelector('.js-name-input');
    const name= inputElements.value;
    const dateInputElements = document.querySelector('.js-due-date-input');
    const dueDate = dateInputElements.value;

    todoList.push({ name, dueDate });

    inputElements.value = null;
    dateInputElements.value = null;
    renderTodoList();
  }
//
// renderTodoList();
// console.log(name);
