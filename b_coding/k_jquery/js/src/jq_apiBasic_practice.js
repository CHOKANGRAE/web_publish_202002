//jq_apiBasic.practice.js

(function($){
// ----- 선언 -------------------------

var h1 = $('h1');
var h2 = $('h2');

var headBox = $('#headBox');
var gnbBox = $('#gnbBox');

var viewBox = $('#viewBox');

// ----- headBox ---------------------

headBox.prepend(h1);

//h2.attr({'class':'hidden});
h2.addClass('hidden');
//$('#viewBox').find('h2').removeClass('hidden');

var gnbUl = $('#gnbBox').find('ul');
var gnbLinText=[
  '네이버', '다음', '구글', 'xido', 'apple', 'samsung', '11st', 'gmarket', 'homplus', 'lotte mart'
];

var gnbLink = [
  'http://naver.com',
  'http://daum.net',
  'http://google.com',
];

for(var i = 0; i<10; i++){
  gnbUl.append(linkText);

};

console.log(gnbLinkMore[0].link);

var gnbLinkMore = [
  {'text':'네이버', 'link':'http://naver.com'}
];

// ----- viewBox ---------------------

 viewBox.prepend('<h2> 광고영역 </h2>');

 $('.view_btn').prepend('<button type="button">next_btn</button> <button type="button">pre_btn</button> ')


// ----- conBox -----------------------


 /*
var i, j;
var p = $('p')

var testW=$('.test_wrap');
for(i=1; i<=5; i++){
  testW.append('<p></p>');
  for(j=1; j<=i; j++){
    testW.find('p').eq(i).append('*')
    }

  }
  */
})(jQuery);