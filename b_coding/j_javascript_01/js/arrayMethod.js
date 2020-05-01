
/*
  * array 메소드

  - 변수.length                  // 갯수파악
  - 변수.push(['value'])         // 배열상 뒤에 첨부
  - 변수.pop()                   // 배열상 마지막 요소 제거
  - 변수.unshift(['value'])      // 배열상 앞에 첨부
  - 변수.shift()                 // 배열상 맨 앞 요소 제거
  - 변수.indexOf(['value'])      // 값이 몇 번째 위치했는지 파악 (0이 첫 번째)
  - 변수.splice(순서위치, 갯수)   // 위치로부터 갯수만큼 제거
  - 변수.slice                   // 별도의 변수에 사본을 만드는 것
                                 ** 배열의 범위를 지정하여, 해당영역만큼 별도로 복제하여 사용


  - 변수.concat([배열])          // 배열요소 합치기
  - 변수.sort()                  // 배열요소내의 이름을 순차정렬
  - 변수.reverse()               // 배열요소를 순서 뒤집기
*/
var array_01 = ['html', 'css', 'javascript'];

array_01.push('sass');
array_01.push('ejs');
array_01.push('typescript');

//console.log(array_01.length); 

array_01.pop();
//console.log(array_01);

array_01.unshift('bash');
array_01.unshift('editor');
// console.log(array_01);

array_01.shift();
array_01.shift();

//console.log(array_01);

var i = array_01.indexOf('sass'); 
//console.log(i); 

array_01.splice(i,2);
////console.log(array_01);

var ar_02 = array_01.slice();
//console.log('ar_02:', ar_02);

array_01.push('elm');
//console.log(array_01);
//console.log(ar_02);

var a = [1,2,3,4];
var b = a;
//console.log(a  ,  b);

var c = a.slice();  // 원본을 따로 만듬(카피본)

a.pop();
a.unshift('123');

//console.log(a  ,  b,   c);
// a='5678';
// console.log(a  ,  b);


var a = [1,2,3,4,5,6,7,8,9,10];
var b = a.slice(3, 5);
//console.log(b);

// ==============================================================
//split(' ') 문장을 배열로 바꿈, 

var program1 = ['photoshop', 'illustrator'];
var program2 = ['html', 'css', 'javascript'];
var myEdu = program1.concat(program2);
//console.log(myEdu);

myEdu.sort(); 
myEdu.reverse();
//console.log(myEdu);

var bodyEl = document.getElementsByTagName('body')[0];
var createP = document.createElement('p');
bodyEl.appendChild(createP);
var p1 = document.getElementsByTagName('p')[0];
p1.setAttribute('class', 'par');
var classNamePar = document.getElementsByClassName('par')[0];

classNamePar.textContent = myEdu;

var t = '웹 언어를 잘 파악해서 익혀 보세요.';
console.log(t);
var tArr = t.split(' ');
// console.log(tArr);

var arrToStr = myEdu.join(' : ');
console.log(myEdu);
console.log(arrToStr);