// intro_01.js

(function($){

  var mouseMv = $('.move_mouse');
  var imgArea = $('.move_image');
  var mouseMvWidth = mouseMv.outerWidth();
  var imgLen = 105; // 사용 이미지 갯수

  var i = 0;
  for(; i < imgLen; i++){
    imgArea.append('<img src="../img/video/intro_'+ (i + 1) + '.png ' +'" alt="배경 인트로 이미지 처리">');
  }

  var imgObj = imgArea.find('img');

// 001 - 마우스를 움직였을경우(좌 / 우)
/*
  mouseMv.on('mousemove', function(e){

    // 마우스 좌표 확인하는 기능 
    /**
     * offsetX|Y  : 선택영역 기준
     * pageX|Y    : 브라우저 기준 (도큐먼트 페이지)
     * clientX|Y  : 브라우저 기준 (브라우저 자체)
     * screenX|Y  : 모니터 좌표 기준


    //console.log( e.originalEvent.offsetX );
    // % 재는 방법 : 값 / 기준 * 100 
    //             마우스위치 / mouseMvWidth * 105
    
    var mvRel = e.originalEvent.offsetX;
    var myRel = parseInt(mvRel / mouseMvWidth * imgLen) + 1;  // parseInt : 정수화

    //console.log(myRel);

    //$('.move_image').css({left:myRel / 3 + 'px'});

    imgObj.eq(myRel).stop().show();
    imgObj.eq(myRel).siblings().stop().hide();
  });
*/

// 002 - 스크롤 내렸을 경우
  $(window).on('scroll', function(e){
    var offsetTop = $(this).scrollTop();
    var myScroll = parseInt ( offsetTop / ($('#wrap').outerHeight( )/2) * imgLen);

    //console.log(myScroll);

    if(myScroll < imgLen){
      imgObj.eq(myScroll).stop().show();
      imgObj.eq(myScroll).siblings().stop().hide();
    }else{
      imgArea.css({top:(-myScroll + imgLen) + 'rem'});
    }

  });


})(jQuery);