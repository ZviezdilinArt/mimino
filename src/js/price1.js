function multiply() {
  var num1, num2, result;
  num1 = document.getElementById('nights-quantity').value;

  num2 = 1000;

  result = num1 * num2;

  //out
  document.getElementById('outprice').innerHTML = result;
}

function room3() {
  var num1, num2, result;
  num1 = document.getElementById('nights-quantity-3').value;

  num2 = 1500;

  result = num1 * num2;

  //out
  document.getElementById('outprice3').innerHTML = result;
}

function price() {
  var num1, num2, result;
  num1 = document.getElementById('nights-quantity-2').value;

  num2 = 750;

  result = num1 * num2;

  //out
  document.getElementById('outprice2').innerHTML = result;
}
