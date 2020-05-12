//function.js

// function(){    }

/*
var Fn = function (rel) {
  console.log((rel / 100 * 2.8 ) + rel) ;
}

Fn(4000);
Fn(9200);
Fn(300);
Fn(14580);
*/

/*
  * 기명함수(함수선언식) : 이름이 존재하는 함수
  -> fuction FnName() {}

  * 익명함수 : 이름이 존재하지 않는 함수
  -> function () {}
  -> 추가로 형태를 갖는다 // 함수표현식, 즉시실행함수
  ---------------------------------------------------
  -> 함수표현식 : 변수명에 함수를 담는 기능  var MyFn = function () { } 
  -> 즉시실행함수 : 익명함수를 재호출하지 않고, 생성하자마자 바로 실행되도록 처리 ( function( ){ } ) ( );
  ---------------------------------------------------
  
  함수내부에는 수행결과를 확인할 수 있도록 값을 돌려주는 기능이 필요하다.
  값을 반환 또는 돌려주는 기능을 return이라고 하며,
  return 이후에는 아무런 동작을 하지 않는다!!

*/

// (n) 매개변수/인수
// 아래 n 은 인자

// --------------------------------
console.log(Fn1(8000));

function Fn1(n) {
  return(n * 10);
}

console.log(Fn1(10));

var rel1=Fn1(5);
console.log(rel1);

// -------------------------------
// 표현식의 형태는 함수 이전에 호출시 동작하지 않는다.
// console.log('--', Fn2(5) ) ;
var Fn2 = function(n){
  return n / 2;
}

var rel2 = Fn2(50);
console.log(rel2);

(function(n){
  var rel3 = n;
  console.log(rel3);
})(555);