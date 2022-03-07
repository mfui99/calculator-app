'use strict';

let wkFirst = "1";
let wkTotal = "0";
let wkInput = "";
let wkCalc = "+";
let wkBefore = "1";


const ecalcLog = document.getElementById("calcLog");
const eResult = document.getElementById("result");
const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const num3 = document.getElementById("num3");
const num4 = document.getElementById("num4");
const num5 = document.getElementById("num5");
const num6 = document.getElementById("num6");
const num7 = document.getElementById("num7");
const num8 = document.getElementById("num8");
const num9 = document.getElementById("num9");
const num0 = document.getElementById("num0");
const eAdd = document.getElementById("add");
const eSub = document.getElementById("sub");
const eMult = document.getElementById("mult");
const eDiv = document.getElementById("div");
const eEqual = document.getElementById("equal");
const eCancel = document.getElementById("cancel");


num1.addEventListener("click", function (){edit(1)});
num2.addEventListener("click", function (){edit(2)});
num3.addEventListener("click", function (){edit(3)});
num4.addEventListener("click", function (){edit(4)});
num5.addEventListener("click", function (){edit(5)});
num6.addEventListener("click", function (){edit(6)});
num7.addEventListener("click", function (){edit(7)});
num8.addEventListener("click", function (){edit(8)});
num9.addEventListener("click", function (){edit(9)});
num0.addEventListener("click", function (){edit(0)});


eAdd.addEventListener("click", function (){update("+")});
eSub.addEventListener("click", function (){update("-")});
eMult.addEventListener("click", function (){update("*")});
eDiv.addEventListener("click", function (){update("/")});


eEqual.addEventListener("click", dspResult);
eCancel.addEventListener("click", clear);


function edit(wkInput) {
  if (wkBefore === "0") {
    eResult.innerHTML = Number((eResult.innerHTML) + wkInput);
  }
  else {
    eResult.innerHTML = wkInput;
  }
  wkFirst = "0";
  wkBefore = "0";
}

function update(calcType) {
  if (wkBefore === "0") {
    ecalcLog.innerHTML = ecalcLog.innerHTML + Number(eResult.innerHTML) + calcType;
    calculator();
  }
  else {
    if (wkFirst === "1") {
      ecalcLog.innerHTML = "0" + calcType;
    }
    else {
      let wkLogLastWord = ecalcLog.innerHTML.slice(-1);
      if (["+","-","*","/"].includes(wkLogLastWord)) {
        ecalcLog.innerHTML = ecalcLog.innerHTML.slice(0, -1) + calcType;
      }
      else{
        ecalcLog.innerHTML = ecalcLog.innerHTML + calcType;
      }
    }
  }
  wkCalc = calcType;
  wkBefore = "1";
}

function dspResult(){
  if(wkFirst === "0" && wkBefore === "0"){
    ecalcLog.innerHTML =  ecalcLog.innerHTML + Number(eResult.innerHTML);
    calculator();
    wkCalc = "=";
    wkBefore = "1";
  }
}

function clear(){
  eResult.innerHTML = "0";
  ecalcLog.innerHTML = "";
  wkFirst = "1";
  wkTotal = 0;
  wkCalc = "+";
  wkBefore = "1";
}

function calculator(){
  switch (wkCalc){
    case "+":
      wkTotal = Number(wkTotal) + Number(eResult.innerHTML);
      break;
    case "-":
      wkTotal = Number(wkTotal) - Number(eResult.innerHTML);
      break;
    case "*":
      wkTotal = Number(wkTotal) * Number(eResult.innerHTML);
      break;
    case "/":
      wkTotal = Number(wkTotal) / Number(eResult.innerHTML);
      break;
  }
  eResult.innerHTML = wkTotal;
}

