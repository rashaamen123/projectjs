
var cresult = document.querySelector("#result");
var number = NaN; 
var op = NaN;
var data = '';
function button(btn_click_text) {
  if(btn_click_text>=0 && btn_click_text<=9){
    data = data+String(btn_click_text);
  }else if(btn_click_text == ''){
    if(data.includes('')){
      return;

    }else{
      data = data+'';
    }
  }else{
    if(data == ''){
      cresult.value = cresult.value.substring(0, cresult.value.length-1)
    }else if(isNaN(number)){
      number = parseInt(data);
    }else{
      number = calculate(number,op,parseInt(data));
    }
    data = '';
    op = btn_click_text;
  }
  cresult.value += btn_click_text;
}

function equal(){
  number = calculate(number,op,parseInt(data));
  cresult.value = number
}
function calculate(num1,opareror,num2) {
    var newvalue = '';
    if (opareror === "+") {
      newvalue = num1 + num2;
    } else if (opareror === "-") {
      newvalue = num1 - num2;
    } else if (opareror === "*") {
      newvalue = num1 * num2;
    } else if (opareror === "/") {
      newvalue = num1 / num2;
    } else if (opareror === "%") {
      newvalue = num1 % num2;
    } 
    return newvalue ;
}
function Clear() {
  number=NaN;
  op =NaN;
  data='';
  cresult.value = " ";
}

function del() {
  if(data !=''){
    cresult.value = cresult.value.substring(0,cresult.value.length-1);
    data=data.substring(0,data.length-1)
      cresult.value = cresult.value.slice(0, -1);
  }
}

// currency converter JS
let shekilInput = document.querySelector('.sheikl-input');
let dollarInput = document.querySelector('.dollar-input');
let euroInput = document.querySelector('.euro-input');

let usd = 3.42;
let euro = 3.59;

// convert shekil to dollar && euro
function dollarEuroCurrency(){
    dollarInput.value = ((shekilInput.value / usd)).toFixed(2);
    euroInput.value = ((shekilInput.value / euro)).toFixed(2);
};

// convert dollar && euro to shekil
function shekilCurrency() {
    shekilInput.value = '';
    euroInput.value = '';
    shekilInput.value = (dollarInput.value * usd).toFixed(2);
};

function shekillCurrency() {
    shekilInput.value = '';
    dollarInput.value = '';
    shekilInput.value = (euroInput.value * euro).toFixed(2);
};
    
shekilInput.onkeyup = dollarEuroCurrency ;
dollarInput.onkeyup=shekilCurrency;
euroInput.onkeyup=shekillCurrency;
///////////////
document.getElementById("btn").addEventListener("click", () => {
  const height = document.getElementById("height").value;
  const weight = document.getElementById("weight").value;
  const result = document.getElementById("output");
  let height_status = false;
  let weight_status = false;

  if (height === "" || height <= 0) {
    document.getElementById("hnum").innerHTML =
      "Please provide a valid height";
    document.getElementById("hnum").style.color = "red";
  } else {
    document.getElementById("hnum").innerHTML = "";
    height_status = true;
  }

  if (weight === "" || weight <= 0) {
    document.getElementById("wnum").innerHTML =
      "Please provide a valid weight";
    document.getElementById("wnum").style.color = "red";
  } else {
    document.getElementById("wnum").innerHTML = "";
    weight_status = true;
  }

  if (height_status && weight_status) {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);

    if (bmi < 18.6) {
      result.innerHTML = "Under weight : " + bmi;
    } else if (bmi >= 18.6 && bmi < 24.9) {
      result.innerHTML = "Normal : " + bmi;
    } else {
      result.innerHTML = "Over weight : " + bmi;
    }
  }
});





