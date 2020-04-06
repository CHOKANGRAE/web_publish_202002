// js_03.js

// const, let, var

var a, b, c;

a = 10;
b = '10';

// console.log(typeof(b)); = 해당 형식이 어떤지 나타냄

//c = a + 10 // 10 + 10
//console.log(c);

//c = 'x' + 'i';
//console.log(c);  // 이어서 써라

//c = 10 + 'i' + 10;
//console.log(c); // 숫자 문자 를 더하면 숫자가 강제로 문자화되어 연달아 나열된다.

//c = 1 + '1000'; //11000
//console.log(c, typeof(c));

c = a +b;
//console.log(c);

c = parseInt(c) +10; //parseInt() = ()안 내용을 정수로 변환시킴
//console.log(c);

c = c +10;
//console.log(c);

c = 1 + 'a' + c; 
//console.log(c); // a1030

c = parseInt(c);
//console.log(c); // nan(not a number / a는 숫자화 시킬 수  없음 / 앞자리의 숫자는 나타남)


// 숫자 + 숫자 = 숫자
// 문자 + 숫자 = 문자로 변환이 되면서 나열로 바뀜
// 문자 + 문자 = 나열
// parseInt() = 앞에서부터 순서대로 정수로 변환, 중간에 문자가 오면 이전 숫자까지만 처리
//              첫 글자가 문자이면 NAN(숫자가아님) 도출
// 문자의 연산은 나열을 뜻하는 + 만 사용, 나머지 /, *, - 는 없다.

// =====================================================================================

// +(더하기), -(빼기), *(곱셈), /(나눗셈), %(나머지값)

var d, e, f, g

d = 10 + 100 ;
console.log(d); // 110

d = 10 - 5;
console.log(d); // 5

d = 10*2;
console.log(d); // 20

d = 10 / 3;
console.log(Math.round(d));  

// Math.abs()       절대값
// Math.round()     반올림
// Math.ceil()      버린다
// Math.floor()     올린다
// Math.PI()        원주율
// Math.random()    0 ~ 1
// Math.sign()      값이 양수/음수 구분
// Math.max([a,b,c,d,e ...])  []내부 값 중 가장 큰 수
// Math.min([a,b,c,d,e ...])  []내부 값 중 가장 작은 수


//parseInt()    강제로 정수화
//parsefloot()  강제로 숫자화(소수점 존재)

// ======================================================================================

d = 10 % 3 ; // 10을 3으로 나눈 상태에서 정수로 나누고 남은 나머지 값을 확인
//console.log(d);  // 1

// 홀수 / 짝수
// 요일

e = 7 % 2; 

//(e==1) ? console.log('홀수값') : console.log('짝수값')
// a == b : a 와 b가 서로 비교해서 참(true) / 거짓(false)를 도출
// (조건비교) ? 조건이 참인경우 : 조건이 거짓인 경우;
//if(e==1){ console.log('홀수값'); } else{ console.log('짝수값');}

// ========================================================================================

e = 10;
// console.log(e);

e = e + 5 ;
// console.log(e); // 15

e = e + 20 ;
// console.log(e); // 35

e += 10; // 자기 자신에게 10을 추가로 더한다
// console.log(e); // 45

e += 300;
// console.log(e); // 345

e -= 100;
// console.log(e); // 245

e *= 10;
// console.log(e); //2450

e /= 100;
// console.log(e); // 24.5

e = Math.round(e);
// console.log(e);

e %=4;
// console.log(e);

// ========================================================================================


f = 7;
console.log(f);

f = f + 1;
console.log(f);

f += 1;
console.log(f);

f++;
console.log(f);

f++;
console.log(f);

++f;
console.log(f); // 12


console.log(++f); // 13
console.log(++f); // 14
console.log(++f); // 15
console.log(++f); // 16
console.log(++f); // 17
console.log(f); // 17

// 증감연산자 : ++, -- 처리하여 1씩 증가/감소 하게 되는 연산자 