// js_05_if.js

// 삼항 연산자
// (비교) ? 참수행 : 거짓수행 ;
var num = 10;
var moreN;

(num < moreN) ? console.log('변수 num이 더 작음') : console.log('num이 더 큼');
// 단수 분기
// if(비교) { 참 수행 } else { 거짓 수행 }
// if(비교) { 참 수행 } else if {앞의 참 이외의 상황에서 다시 비교} else { 거짓 수행 }

/*
if(true) {console.log('num이 더 작음')} else {console.log('num이 더 큼')};
*/


var t = typeof(moreN); //

if(t === 'number'){console.log('moreN은 숫자');} else if(t === 'string'){console.log('moreN은 문자');} else {console.log('moreN은 아무것도 아니다');}

// 다수 분기
// switch(조건){case 조건부합1 : 기능수행; case 조건부합2 : 기능수행; case 조건부합3 : 기능수행; default : 수행;}

switch(moreN) {
  case 1: console.log('1이야');
  case 2: console.log('2야');
  case 3: console.log('3이야');
  default: console.log('아모것도아니다');

}