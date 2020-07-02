(function($){
  // 선택자
    var slideBanner = $('.slide_banner');
    var btn         = $('.btn').find('button');
    var slideUl     = slideBanner.children('ul');
    var slideLi     = slideUl.find('li');
    
  // ---------------------------------------
  // 순서 변경, .active삭제 및 재설정
  slideLi.removeClass('active');
  slideLi.eq(-1).prependTo(slideUl);
  slideLi     = slideUl.find('li');
  slideLi.eq(1).addClass('active');
  
  // ---------------------------------------
  // 정면에 보이는 배너순서 찾기(.active 찾기)
  var hasActive;
  var q;
  var WhereActive = function(){
    for(var i=0; i<slideLi.length; i++){
      hasActive = slideLi.eq(i).hasClass('active');
      if(hasActive){
        q = i;
        break;
      }
    }
    return q;
  };

  WhereActive();
  
  // --------------------------------------
  // 버튼 클릭시 내용 변경1
  var btnTrue = true;
  
  btn.on('click', function(e){
    e.preventDefault();
      
    var nBtn = $(this)[0] === $('.next')[0];

    WhereActive();
  
    // 정면에 보이는 배너순서 찾기(.active 찾기)
    
    slideLi.removeClass('active'); 
  
    if( nBtn && btnTrue){ 
    //next 버튼 클릭시
      // 다음버튼 중복기능 방지
      btnTrue = false;
      // 각 내용 위치이동
      slideLi.eq(q-1).css({
        transform:'translate3D(100%, 0, 0) scale(0.8) rotateY(-45deg)',
        transition:'all 500ms linear'
      });	

      slideLi.eq(q).css({
        transform:'translate3D(-100%, 0, 0) scale(0.8) rotateY(45deg)',zIndex:-1,
        transition:'all 500ms linear'
      });
      
      slideLi.eq(q).addClass('up');

      slideLi.eq(q+1).css({
        transform:'translate3D(0, 0, 0) scale(1) rotateY(0)',	zIndex:100,
        transition:'all 500ms linear'
      });

      setTimeout(function(){

        slideLi.eq(0).appendTo(slideUl);		
        slideLi     = slideUl.find('li');
        slideLi.eq(1).addClass('active');
        slideLi.removeClass('up');
        btnTrue = true;
      }, 500);
  
    }else if(btnTrue){
      // prev 버튼 클릭
        // 버튼 중복기능 방지
        btnTrue = false;
        // 각 내용 위치이동
        slideLi.eq(q-1).css({
          transform:'translate3D(0, 0, 0) scale(1) rotateY(0)',	zIndex:100,
          transition:'all 500ms linear'
        });	

        slideLi.eq(q).css({
          transform:'translate3D(100%, 0, 0) scale(0.8) rotateY(-45deg)',zIndex:-1,
          transition:'all 500ms linear'
        });

        slideLi.eq(q).addClass('up');

        slideLi.eq(q+1).css({
          transform:'translate3D(-100%, 0, 0) scale(0.8) rotateY(45deg)',
          transition:'all 500ms linear'
        });
        
        setTimeout(function(){

          slideLi.eq(-1).prependTo(slideUl);		
          slideLi     = slideUl.find('li');
          slideLi.eq(1).addClass('active');
          slideLi.removeClass('up');
          btnTrue = true;
        }, 500);
    }
    
  
  });
  // ==============================================
  // 카드에 마우스 올렸을 때 움직임 처리
  slideLi.eq(q).on('mousemove', function(e){

    // 마우스 위치 파악
    var mouseX = e.originalEvent.offsetX;
    var cardHalfWidth = $(this).outerWidth()/2;

    if(mouseX <= cardHalfWidth){
      $(this).css({transform:'rotateY(-7deg)', transition:'all 300ms ease'});
    }else{
      $(this).css({transform:'rotateY(7deg)', transition:'all 300ms ease'});
    }


  });
  
  
  
  
  
  })(jQuery);