
function handleCostKeyDown(event) {
  if (event.key === 'Enter') {
    calculateTotal();
  }
}

function calculateTotal() {
  const inputElement = document.querySelector(".js-cost-input");
  let cost = Number(inputElement.value);
  if (cost < 40) {
    cost = cost + 10;
  }

  document.querySelector('.js-total-cost').innerHTML = `$${cost}`
}

function subscribe() {
  const buttonElement = document.querySelector('.js-sub-button');

  if (buttonElement.innerText === 'subscribe') {
    buttonElement.innerHTML = 'subscribed';
    buttonElement.classList.add('is-subscribed');
  } else {
    buttonElement.innerHTML = 'subscribe'
    buttonElement.classList.remove('is-subscribed');
  }
}
