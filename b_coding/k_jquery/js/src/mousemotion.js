// mousemotion.js

(function($){

  // ===== 변수 설정  =============================
  var mouseXYCheck = $('.mouse_xy');
  var mX = $('.m_x').find('span');
  var mY = $('.m_y').find('span');
  var x = 0;
  var y = 0;

  var mouseObject = $('.mouse_object');
  var mouseXYCheckW = mouseXYCheck.outerWidth() / 2;
  var mouseXYCheckH = mouseXYCheck.outerHeight() / 2;
  
  var mouseObjectP = mouseObject.find('p');

  // ===== 기능 설정 ==============================
  // clientX, clientY : 브라우저 페이지 기준 - 스크롤 X
  // pageX, pageY     : 브라우저 페이지 기준 - 스크롤 O
  // offsetX, offsetY : 이벤트 대상 객체
  // screenX, screenY : 모니터 스크린 기준

  mouseXYCheck.on('mousemove', function(e){
    e.preventDefault();
    // console.log(e.clientX, e.clientY);
    // console.log(e.pageX, e.pageY);

    // console.log(e.offsetX, e.offsetY);
    // console.log(e.screenX, e.screenY);

    // console.log('------------------');

    x = ( e.pageX - mouseXYCheckW ) / 20 ;
    y = ( e.pageY - mouseXYCheckH ) / 10 ;

    mouseObject.css({
      transform:'translate(' + x + '%,' + y + '%' + ')'
                 //rotateX(' + y*5 + 'deg) rotateY(' + x*10 + 'deg)'
    });
    

    mX.text(x);    
    mY.text(y); 
    
  });

  mouseObject.on('mouseover', function(e){
    e.preventDefault();

    x = ( e.offsetX - mouseXYCheckW ) / 10 + 'px';
    y = ( e.offsetY - mouseXYCheckH ) / 5 + 'px';

    mouseObject.css({backgroundColor:'#333', transform:'translate(0)'});
    mouseObjectP.css({transform:'translate(' + x + ',' + y + ')'});

  });

  mouseObject.on('mouseleave', function(e){
    e.preventDefault();

    mouseObject.css({backgroundColor:'#ffc0cb'});
    mouseObjectP.css({transform:'translate(0)'});
  });


})(jQuery);