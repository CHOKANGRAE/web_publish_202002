// jq_apiBasic_02.js

// $(function(){});
// $.ready(function(){});


(function($){
// jQuery start ================================================================

/**
 * html(html 내용을 확인, 코드의 내부를 삭제 및 변경) text(글자내용을 확인, 코드내부의 글자를 삭제 및 변경)
 * wrap(감싸는 영역을 생성, 그 자체의 내용을 확인), contents(내용 요소를 확인 : 코드+글자포함)
 * append, appendTo, prepend, prepenTo // append 는 앞에 담겠다. prepend는 뒤에 담겠다.
 * before, after(선택자 형제로 전/후 추가요소를 담는 기능)
 * attr(속성값을 확인, 지정속성을 변경하는 기능), val(form요소 내부의 value 값을 확인 및 변경)
 * remove(선택요소자체를 삭제), empty(선택요소 내부를 삭제)
 * clone(선택요소를 복제, true를 함께 사용하면 내용요소의 기능포함 복제)
 * addClass, removeClass(class 이름값을 추가 및 삭제)
 * hasClass(선택요소에 해당클래스 이름의 유무)
 * is(선택요소에 class를 제외한 속성의 유무를 판단)
 */

 // ------------선언------------------------------------

 var h1 = $('h1');
 var h2 = $('h2');
 var headBox = $('#headBox');
 var gnbBox = $('#gnbBox');
 var gnbList = $('#gnbBox li');

 var viewBox = $('#viewBox');
 var conBox = $('#conBox');
 var footBox = $('#footBox');

 // -----append, prepend 설명 ---------------------------

 headBox.prepend(h1); // headBox 내부 앞에 h1을 담겠다.
 //h1.perpendTo(headBox); // h1을 headBox 내부 앞에 담겠다.


 // -----div박스안에 다른요소를 넣는 법--------------------

 gnbBox.prepend('<div class="gnb_btn"><button type="button">메뉴</button></div>'); 

 // -----list 안에 a태그를 넣는 법------------------------

 var gnbLen = gnbList.length;

 var i = 0;
 var gnbListText;
 for(; i<gnbLen; i++){
  gnbListText = gnbList.eq(i).text();
  gnbList.eq(i).html('<a href="#">' + gnbListText + '</a>');
 }

 var gnbLinkArr = [
   'http://naver.com',
   'http://daum.net',
   'http://google.com',
   'http://xidoweb.com'
  ];

 j = 0;
 var liLink = gnbList.eq(j).children('a');
 console.log( liLink.attr('href') );

 for(; j < gnbLen; j++){
   liLink = gnbList.eq(j).children('a');
   // 속성 = attr
   liLink.attr({'href':gnbLinkArr[j], 'target':'blank', 'title':gnbLinkArr[j]});
 };
 
 // -------h2 넣어보기------------------------------------
  viewBox.prepend('<h2 class="hidden"> 광고영역 </h2>');
  conBox.prepend('<h2 class="hidden"> 본문내용 </h2>');
  footBox.prepend('<h2 class="hidden"> 회사정보 </h2>');

 // -------h2 넣어보기------------------------------------
  var conArea = conBox.find('.con_area');


 // -----박스 안에 글자를 넣는 법(html,text)---------------

 //$('.wrap').html('글자를 입력해 보겠다');

// jQuery end ==========================================================================
})(jQuery);

