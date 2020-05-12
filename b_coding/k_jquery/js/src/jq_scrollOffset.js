// jq_scrollOffset.js

(function($){
// == jquery start ===============
// -------------------------------------------------------

// scrollTop( ) : 화면내의 스크롤이 이동한 값을 표기하는 형태 // 이동값 확인
// scrollTop : animate() 메소드내에도 기능을 사용할 수 있다. // 해당 스크롤로 이동
  /*
  $(document).on('scroll',function(e){
    var myScroll = $(this).scrollTop(  );
    console.log(myScroll);

    if(myScroll > 100){
      $('#headBox').css({'position':'fixed', 'top':0});
    }else{
      $('#headBox').removeAttr('style');
    }
  });
  */
  var headBox = $('#headBox');
  var hT = headBox.offset().top;

  $(document).on('scroll',function(){   // 브라우저(document)가 스크롤('scroll')이 되면

    var docST = $(document).scrollTop(); // 스크롤 위치 파악

    if(docST > hT){ // headbox top 100px
      headBox.css({'position':'fixed', 'top':'0'});
    }else{
      headBox.removeAttr('style');
    }


  }) 

  var bodyH = $('body').height();
  //console.log(bodyH);
  $('#viewBox').height(bodyH);

// -------------------------------------------------------

// offset() : 브라우저 상단에서부터 원하는 개체(선택자)가 얼만큼 떨어져 있는지 확인하는 기능
// offset().top | offset().left

  
  $(document).on('scroll',function(){
    var doScroll = $(this).scrollTop();
    var doOffset = $('#headBox').offset().top;

    console.log( doScroll, doOffset );

    $('#headBox').offset({top:doScroll, left:doScroll});
  });
  

// scrollTop 응용 --------------------------------------------------

  var viewBox = $('#viewBox');
  var viewBoxH2 = viewBox.children('h2');
  var viewVideo = viewBox.find('.video');
  var titleBg = $('.title_bg');

  var conBgP = $('.con_img').css('backgroundPositionY');
  var parseCon = parseInt(conBgP);
  console.log(parseCon);

  //var h2Top = viewBoxH2.offset().top;
  //console.log(h2Top);

  $(document).on('scroll',function(){
    var doScroll = $(document).scrollTop();
    
    viewBoxH2.css({'marginTop':doScroll/2 + 'px'});
    viewVideo.css({'marginTop':doScroll*1.2 + 'px'});

    var ot= -doScroll/3;
    titleBg.css({'marginTop':ot * 0.7 + 'px'});
    titleBg.children('h2').css({'marginTop': ot * 0.6 + 'px'});

    $('.con_img').css({'backgroundPositonY' :parseCon - (ot/15) + '%'})
  });







// == jquery end =================
})(jQuery);