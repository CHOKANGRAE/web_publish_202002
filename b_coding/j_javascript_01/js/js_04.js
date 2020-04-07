// js_04.js

/** ===============================================================
  * javascript 자료형
    기본형 : 숫자, 문자(' '), 논리형(참(true), 거짓(false))
    특수형 : undefined(미정), null(초기화)
    복합형 : 객체(배열, 객체), 함수
================================================================ */

// typeof() 

var n = 7;
var r, t2;
var t = typeof(n);

// console.log(n + '은' + t '이다.');

n = 'text';
t = typeof(n);
//console.log(t);

n = 1 === 10;    // <=, >=, ==
t = typeof(n);
//console.log(t);  // boolean(논리형)

n = null;
t = typeof(n);
t2 = typeof(r);
// console.log(t, t2); // object(객체형)

var check = n == r;
// console.log(check);

// = 기호가 
//   1개일 경우 : 대입하다
//   2개일 경우 : 비교(단순 값만 비교) // 숫자 1 == 문자 1 : true
//   3개일 경우 : 형타입(typeof)을 비교 // 숫자 1 === 문자 1 : false

// null은 값을 강제 삭제시키는 형태이며, 형타입은 객체(object) 형식
// undefined는 애초에 값을 넣은 적이 없으므로, 형타입은 미정의(undefined) 형식

// =============================================================================

// 배열(array-list)/단순 목록을 나열하는 형태 : [] 
// 객체(objcet-dictionary) : {} 
// 함수(function) : function(){}

var arr = [1,2,10,5,100,70,'banana', 'apple', 'peach', 'pengsu'];
//t = typeof(arr);
//console.log(t); /object

var fruit = ['banana','apple','peach'];
//console.log(fruit[2]); // peach
//console.log(arr[2]);


// css : li-nth:child(1) // 첫 번째
// 다른 프로그램 언어 : 첫 번째는 0
// =============================================================================

var obj = {
            "apple" : "red"     ,
            "banana" : "yellow" ,
            "peach" : "pink"    ,
            "grape" : "green"
  };      // proto : value

//t=typeof(obj);
//console.log(t);

//console.log(obj);

// =============================================================================

// var Fn = function(){} // 함수 표현식
// function Fn1(){}      // 함수 선언식

function F1(i, d){
  return i * d * 8590;
}

console.log(F1(8, 5)); // 이게 함수다 이 말 이야 아베 마리아 / 들어가는 아이가 인수 받아주는 아이가 인자

//t=typeof(F1);
//console.log(t);

// =============================================================================
// 함수 : 기능을 수행하게 만드는 묶음
// 객체 : 속성명:값 형식의 배열
// 배열 : 값만 배열 
// boolean : true / false 을 비교하여 판단
// 문자 : ' ', " " 묶여서 글자로 인지되는 형태
// 숫자 : 소수, 음수, 양수, 정수 ...
// null : 이미 사용한 변수/배열/객체의 내용을 비우는 것
// undefined : 사용하기 전 선언은 되어져 있으나 값이 비어있는 것