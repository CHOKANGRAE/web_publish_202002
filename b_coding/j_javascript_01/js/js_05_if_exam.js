// js_05_if_exam.js

function Mes () {return prompt("수업을 듣고 있는 요일을 입력하세요.(1글자)") };

var messageBox = Mes();

// console.log( messageBox );



var mLen = messageBox.length;
console.log(mLen);


if( mLen !== 1 ) { 
  alert('다시 입력하세요'); Mes(); // 아무것도 안 썼을 때 alert
  messageBox = prompt("수업을 듣고 있는 요일을 입력하세요.(1글자)");}
  else {
  switch(messageBox) {
    case '월' : console.log("그지같은 날"); break;
    case '화' : console.log("그지같은 날2"); break;
    case '수' : console.log("그지같은 날3"); break;
    case '목' : console.log("그지같은 날4"); break;
    case '금' : console.log("내일 주말임 ㅎㅎ"); break;

    default : console.log("주말임ㅎㅋㅎㅋ");

  }
}

// 과제 : 재귀함수란 ?