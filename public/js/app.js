// input fields
let acc = document.querySelector('#acc');
let sold = document.querySelector('#sold');
let bought = document.querySelector('#bought');
let fees = document.querySelector('#fee');
let share = document.querySelector('#shares');
// buttons 
const btn = document.querySelector('#btn');
const resetBtn = document.querySelector('#reset');
// display after submission
let i = document.querySelector('#item');
let sell = document.querySelector('#sell');
let buy = document.querySelector('#buy');
let gains = document.querySelector('#gains');
let loss = document.querySelector('#loss');

// functions 
const calculation = () => {
  let s = Number(sold.value);
  let b = Number(bought.value);
  let fee = Number(fees.value);
  let sh = Number(share.value);
  let a = Number(acc.value);

  // let re = (s - b) / b;
  // let actual = (s - b) - fee;

  let sB = (sh * b) + fee;
  buy.innerHTML = "Bought at: $" + sB.toFixed(2) + " @ " + sh + " x " + b;

  let sS = sh * s;
  sell.innerHTML = "Sold at: $" + sS.toFixed(2) + " @ " + sh + " x " + s;

  let total = (sS - sB) + a;
  return "Account balance is: $" + total.toFixed(2);
}

const resetFields = () => {
  // reset input fields
  acc.value = '';
  sold.value = '';
  bought.value = '';
  fees.value = '';
  share.value = '';
};

// event listeners
btn.addEventListener('click', function (e) {
  e.preventDefault();
  // logic 
  // if the sold price is higher than the bought price 
  // then show the message "You gained {this much money}"
  const total = (Number(sold.value) * Number(share.value)) - (Number(bought.value) * Number(share.value));
  if (Number(sold.value) > Number(bought.value)) {
    gains.innerHTML = `You gained: $${total.toFixed(2)}`
  } else {
    loss.innerHTML = `You lost: $${total.toFixed(2)}`
  }
  i.innerHTML = calculation();
  resetFields();
});
// another event listener to reset fields
reset.addEventListener('click', () => {
  resetFields();
  // reset display values
  i.innerHTML = '';
  sell.innerHTML = '';
  buy.innerHTML = '';
  gains.innerHTML = '';
  loss.innerHTML = '';
});