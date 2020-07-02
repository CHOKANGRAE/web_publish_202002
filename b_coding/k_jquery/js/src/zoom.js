// zoom.js

(function($){

  var url        = '../img/gallery/';
  var galleryImg = [
    {"big"     : ['gall_01.jpg', 'gall_02.jpg', 'gall_03.jpg', 'gall_04.jpg']},
    {"thum"    : ['gall_01.jpg', 'gall_02.jpg', 'gall_03.jpg', 'gall_04.jpg']},
    {"thumAlt" : ['gall_01설명', 'gall_02설명', 'gall_03설명', 'gall_04설명']}
  ];

  var product = $('.product');
  var big     = product.find('.big');
  var thum    = product.find('.thum');
  var zoom    = product.find('.zoom');
  var zoom2   = product.find('.zoom2');

  thum.append('<ul></ul>');

  var thumUl = thum.find('ul');
  var i = 0;
  var thumLength = galleryImg[1].thum.length;

  for(; i<thumLength; i++){
    thumUl.append('<li><a href="#"><span> 이미지 </span></li>');
    thumUl.find('li').eq(i).children('a').css({backgroundImage:'url(' + url + 'thum/' + galleryImg[1].thum[i] + ')'})
  };
  
  big.css({backgroundImage:'url(' + url + 'big/' + galleryImg[0].big[ 0 ] + ')'});
  
  var thumLi = thumUl.find('li');
  var index = 0;

  thumLi.eq( index ).children('a').focus();
  thumLi.children('a').on('click', function(e){
    e.preventDefault();
    index = $(this).parent('li').index();

    big.css({backgroundImage:'url(' + url + 'big/' + galleryImg[0].big[ index ] + ')'});

  });

  var baseWidth = big.innerWidth();
  var baseHeight = big.innerHeight();

  // big에 마우스 올릴 시
  big.on('mousemove', function(e){
    // 좌표위치
    var evtLocationX = e.originalEvent.offsetX;
    var evtLocationY = e.originalEvent.offsetY;

    // 좌표위치 체크
    var xPer = parseInt(evtLocationX / baseWidth * 100);
    var yPer = parseInt(evtLocationY / baseHeight * 100);
    //console.log(xPer, yPer);

    zoom.fadeIn(500);
    zoom.css({backgroundImage:'url(' + url + 'big/' + galleryImg[0].big[ index ] + ')',
              backgroundPosition: xPer + '%' + '  ' + yPer + '%'});

    // --------------------------------------------------------------------------------
    var evtPageX = e.originalEvent.pageX;
    var evtPageY = e.originalEvent.pageY;

    zoom2.css({top:evtPageY+20, left:evtPageX+20});
    zoom2.stop().show();
    zoom2.css({backgroundImage:'url(' + url + 'big/' + galleryImg[0].big[ index ] + ')',
               backgroundPosition: xPer + '%' + '  ' + yPer + '%'});
  });

  // big에 마우스 내릴 시
  big.on('mouseleave', function(){
    zoom.stop().fadeOut(500);
    zoom2.stop().hide();
  });

  
})(jQuery);