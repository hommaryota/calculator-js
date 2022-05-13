'use strict';


let myTotal = 0; // 現在の合計値
let myInput = ''; // 現在入力している値
let myCalc = "+"; // 合計と入力値の演算子
let myFlg = 1; // １回前に入力したもの 0:数字 1:演算子
let myWork;

// 数字を入力した場合
const myValue=(myDate)=> {
  myFlg = 0; // 1つ前に入力したものは数字だと宣言している
  myInput += myDate; // 現在入力している値に渡ってきた値をプラスしている
  document.myForm.myLine.value = myInput // 表示画面の値を更新
}

 // 演算子を入力した場合
const myCalculate = (myDate) => {
  if (myFlg == 0) { // 1回前に数字を入力していた場合
    myFlg = 1; // 演算子を入力したと判断させる
    myWork = myTotal + myCalc + myInput; //
    myTotal = eval(myWork);
    myInput = '';
    document.myForm.myLine.value = myTotal;
  }
  if (myDate == '=') {
    myFlg = 1;
    myCalc = '';
  } else if (myDate == '%') {
    myFlg = 1;
    myTotal = myTotal / 100;
    document.myForm.myLine.value = myTotal;
  } else if (myDate == '+/-') {
    myFlg = 1;
    myTotal = myTotal * -1;
    document.myForm.myLine.value = myTotal;
  } else {
    myFlg = 1;
    myCalc = myDate;
  }
}

const myC = () => {
  myTotal = 0;
  myCalc = '+';
  myInput = '';
  document.myForm.myLine.value = myTotal;
}
