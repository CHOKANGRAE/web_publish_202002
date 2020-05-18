// slid_banner_03.js

var miniProduct        = $('#miniProduct');

var miniBtn            = miniProduct.find('button');
var miniBtnNext        = miniProduct.find('.next');
var miniBtnPrev        = miniProduct.find('.prev');
var timed              = 500;

// ----------------------------------------------
var productUl = miniProduct.find('.product');
var cloneLi   = productUl.children('li').eq(-1).clone(true);
    productUl.prepend(cloneLi);

var productLi = productUl.children('li');
var proLiLen  = productLi.length;
//console.log(proLiLen);

// productUl.width(proLiLen * 100 + '%');
 productUl.css({width:proLiLen * 100 + '%', marginLeft: -100 + '%', position: 'relative'});
 productLi.width(100 / proLiLen + '%');

 var n = 0;
 var check = true;
 
// ** indicator기능 추가(indicator_color) 
// 광고 갯수만큼(복제처리제외) indicator 처리
 var miniProIndiBtnArea = miniProduct.find('.indicator');
 miniProIndiBtnArea.after('<div class="indi_color hidden_wrap"><ul></ul></div>');
 var miniProIndiUl = $('.indi_color').children('ul');
 var i=0;
 for(; i< proLiLen - 1 ; i++){
	  miniProIndiUl.append('<li><a href="#"><span>광고 ' + (i + 1) + ' 설명</span></a></li>');
 }
// -----------------------------------------------------------------------------

var miniProIndiLi = miniProIndiUl.find('li').children('a');
miniProIndiUl.find('li').eq(0).addClass('action');

miniProIndiLi.on('click', function(e){
	e.preventDefault();
	var thisParent = $(this).parent();
	    n = thisParent.index();

	thisParent.addClass('action');
	thisParent.siblings().removeClass('action');

	productUl.stop().animate({left: -n * 100 + '%'}, timed);
});

// -------------------------------------

var prSpan = productLi.find('span');
// 버튼 기능 합치기
miniBtn.on('click', function(e){
	e.preventDefault();
	var thisBtn = $(this)[0];
	prSpan.animate({bottom:-100 + '%'});
	if(thisBtn === miniBtnNext[0] && check){// next 버튼 클릭시
		check = false;
		n += 1;
		productUl.stop().animate({left: -n * 100 + '%'}, timed, function(){
			if(n >= proLiLen - 2){	n = -1;	 }
			prSpan.animate({bottom:0});
			productUl.css({left: -n * 100 + '%'});
			check = true;
		 });
	}else if(check) { // prev 버튼 클릭
		check = false;
		n -= 1;
		productUl.stop().animate.fadeIn(800)({left: -n * 100 + '%'}, timed, function(){
			if(n <= -1){	n = proLiLen - 2;	 }
			prSpan.animate({bottom:0});
			productUl.css({left: -n * 100 + '%'});
			check = true;
		 });
	}
	miniProIndiUl.find('li').eq(n).addClass('action');
	miniProIndiUl.find('li').eq(n).siblings('li').removeClass('action');
});

var mvImg;
var MvSlideGo = function(){
	mvImg = setInterval(function(){
		miniBtnNext.trigger('click');
		console.log('!');
	}, timed*5);
};

MvSlideGo();
var ClearFn = function(){	clearInterval( mvImg ) };
var GoFn    =  function(){	MvSlideGo()};
 miniProduct.on({'mouseenter' :ClearFn , 'mouseleave':GoFn });



 // 좌우버튼 클릭시 - indicator처리
 // setInterval 처리시 - indicator처리

 // fade처리 숫자바뀌는거

 $('.slideshow').each(function(){
	// img요소들을 둘러싸고 있는 div요소를 취득
	var container = $(this);
	// 페이드 전환 1회분의 함수
	function switchImg(){
			// img요소를 전부 취득
			var imgs = productLi.find('img');
			//앞에서부터 img요소 2개를 얻는다.
			var first = imgs.eq(0);
			var second = imgs.eq(1);

			
			first.fadeOut(2000).appendTo(container);
			
			second.fadeIn(2000);
	}
	
	setInterval(switchImg, timed);
});

    
