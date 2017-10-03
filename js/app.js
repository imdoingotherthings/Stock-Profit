let sold = document.querySelector('#sold');
let bought = document.querySelector('#bought');
let btn = document.querySelector('#btn');
let i = document.querySelector('#item');
let fees = document.querySelector('#fee');
let share = document.querySelector('#shares');
let acc = document.querySelector('#acc');
let buy = document.querySelector('#buy');
let sell = document.querySelector('#sell');

function calculation () {
  let s = Number(sold.value);
  let b = Number(bought.value);
  let fee = Number(fees.value);
  let sh = Number(share.value);
  let a = Number(acc.value);

  // let re = (s - b) / b;
  // let actual = (s - b) - fee;

  let sB = (sh * b) + fee;
  buy.innerHTML = "Bought at: $" + sB.toFixed(2) + " --- " + sh + " x " + b;

  let sS = sh * s;
  sell.innerHTML = "Sold at: $" + sS.toFixed(2) + " --- " + sh + " x " + s;

  let total = (sS - sB) + a;
  return "Account balance is: $" + total.toFixed(2);
}

btn.addEventListener('click', function (e) {
 e.preventDefault();
 i.innerHTML = calculation();
});
