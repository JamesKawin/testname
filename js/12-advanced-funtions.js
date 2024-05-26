const buttonElement = document.querySelector(".js-button-number-one");

  const EventListener = () => {
    console.log('click');
  };

  buttonElement.addEventListener('click', EventListener);

  buttonElement.removeEventListener('click', EventListener);

  buttonElement.addEventListener('click', () => {
    console.log('click2');
  });





/*const oneLine = () => 1+2;
console.log(oneLine());
const oneLine2 {
  method: () => {

  },
    method () => {

  }

};

function hi() {
  console.log('hello');
}
hi();
const num = 2;
const function1 = function hi() {
  console.log('hello');
}

console.log(function1);
console.log(typeof function1);
function1();

const object1 = {
  num: 2,
  fun: function hi() {
    console.log('hi');
  }
}
object1.fun();

function display(ji) {
  console.log(ji);
}
display(1);

function(param) {
  param()
}

 array1 = ['a', 'b', 'c'];

array1.forEach((element) => console.log(element));

let numbers = [1, 2, 3, 4, 5];
numbers.forEach(triple);
numbers.forEach(display);

function double(element,index,array) {
  array[index] = element * 2;
}
function triple(element,index,array) {
  array[index] = element * 3;
}

function display(elements) {
  console.log(elements);
}

const online = (a, b) => {
  return (2+1)
  console.log(online());
};
*/
