// parallax.js

(function($){

  // 변수 설정
  var win = $(window);
  var winW = win.innerWidth();
  var winH = win.innerHeight();

  var introBox = $('#introBox');
  var introDiv = introBox.children('div');

  // 기능 (모바일 리사이즈 640 이하)

  win.on('resize', function(){
    winW = win.innerWidth();
    //( winW < 640 ) ? introBox.children('div').remove() : location.reload();
    if(winW < 640){
      introBox.children('div').remove();
    }else{
      location.reload();
    }
  });

  // 기능 (img 태그 변수)
  var divImg = $('.img');
  var imgArr = [];
  var i = 0;

  for(; i<divImg.length; i++){
    imgArr[i] = divImg.eq(i).offset().top;
  }

  // ==============================================================
  // --------- 윈도우 스크롤 시 기능 -----------------------------------
  // ============================================================== 

  win.on('scroll',function(e){
    e.preventDefault();

    var winTop = win.scrollTop();
    var winTop2 = winTop + winH;

    // ==== 상단 introBox 영역 =========================

    introDiv.eq(0).css({backgroundPositionY:winTop/9*8});
    introDiv.eq(1).css({backgroundPositionY:winTop/9*7});
    introDiv.eq(2).css({backgroundPositionY:winTop/9*6});
    introDiv.eq(3).css({backgroundPositionY:winTop/9*5});
    introDiv.eq(4).css({backgroundPositionY:winTop/9*4});
    introDiv.eq(5).css({backgroundPositionY:winTop/9*3});
    introDiv.eq(6).css({backgroundPositionY:winTop/9*2});
    introDiv.eq(7).css({backgroundPositionY:winTop/9*1});
    introDiv.eq(8).css({backgroundPositionY:winTop/9*0});

    // ======== contentBox 영역 =======================
    if(winTop2 > imgArr[0] && winTop2 <= imgArr[1]){
      divImg.eq(0).css({backgroundPositionY: -(imgArr[0] - winTop2)/20 + '%' });
      divImg.eq(0).next('p').css({top:-(imgArr[0] - winTop2)/5});
    }

    if(winTop2 > imgArr[1] && winTop2 <= imgArr[2]){
      divImg.eq(1).css({backgroundPositionY: -(imgArr[1] - winTop2)/20 + '%' });
      divImg.eq(1).next('p').css({left:-(imgArr[1] - winTop2)/5});
    }

    if(winTop2 > imgArr[2] && winTop2 <= imgArr[3]){
      divImg.eq(2).css({backgroundPositionY: -(imgArr[2] - winTop2)/20 + '%' });
      divImg.eq(2).next('p').css({right:-(imgArr[2] - winTop2)/5});
    }

    if(winTop2 > imgArr[3]){
      divImg.eq(3).css({backgroundPositionY: -(imgArr[3] - winTop2)/20 + '%' });
      divImg.eq(3).next('p').css({top:-(imgArr[3] - winTop2)/5});
    }



  });


})(jQuery);