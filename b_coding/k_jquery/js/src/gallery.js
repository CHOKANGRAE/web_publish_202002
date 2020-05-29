  
(function($){

  var part = $('.part');

	// gallery 페이지 만들기
	// 1. html문서에서 큰 이미지의 경로/파일을 직접 입력해서 가져오게 하기
	
	var part01 = $('.part_01');
	var bigRec = part01.find('.big_rec');
	var part01Li = part01.find('li');
	var part01LiLink = part01Li.children('a');
	var bigSource = '../../img/gallery/big/';
	
	part01LiLink.on('click', function(e){
		e.preventDefault();
		// var thisImg = $(this).css('backgroundImage');
		var thisImg = $(this).parent('li').attr('data-bg');
		// console.log(thisImg);
		bigRec.css({backgroundImage:'url('+ bigSource + thisImg +')'});
  });
  
	// =====================================================
  // 2. js를 통해 경로를 입력해서 처리하게 만들기

    var thumList = [
      'gall_01.jpg',
      'gall_02.jpg',
      'gall_03.jpg',
      'gall_04.jpg',
      'gall_05.jpg'
    ];

    var bigList = [
      'gall_01.jpg',
      'gall_02.jpg',
      'gall_03.jpg',
      'gall_04.jpg',
      'gall_05.jpg'
    ];

    var thumUrl = '../img/gallery/thum/';
    var bigUrl = '../img/gallery/big/';

    var galleryList = {
      thumUrl : thumUrl,
      thumList : thumList,
      bigUrl : bigUrl,
      bigList : bigList
    };

    var part02 = $('.part_02');
    var partRec = part02.find('.big_rec');
    var thumImg = part02.find('.thum_img').children('ul');
    
    var i = 0;
    for(; i<thumList.length; i++){
      thumImg.append('<li><a href="#"><span></span></a></li>');
      thumImg.find('li').eq(i).children('a')
      .css({backgroundImage:'url(' + thumUrl + galleryList.thumList[i] + ')'});
    };

    var p2thumLi = thumImg.find('li');
    var p2thumLiLink = p2thumLi.find('a');

    p2thumLiLink.on('click',function(e){
      e.preventDefault();
      var itindex = $(this).parent('li').index(); //순서파악
      partRec.css({backgroundImage:'url('+bigUrl + galleryList.bigList[itindex]+')'});
    });

    p2thumLi.eq(0).find('a').trigger('click'); // 먼저 사진을 넣어놓는것

    // =====================================================
    // 3. 갤러리를 응용하여, popup창(모달 윈도우) 만들기

    var part03 = $('.part_03');
    var bigModal = part03.find('.big_modal');
    var bigImg = bigModal.find('.big_img');
    var bigModalBtn = bigModal.find('button');

    var thumImg2 = part03.find('.thum_img2').children('ul');

    var i = 0;
    for(; i<thumList.length; i++){
      thumImg2.append('<li><a href="#"><span></span></a></li>');
      thumImg2.find('li').eq(i).children('a')
      .css({backgroundImage:'url(' + thumUrl + galleryList.thumList[i] + ')'});
    };

    var p3thumLi = thumImg2.find('li');
    var p3thumLiLink = p3thumLi.children('a');

    p03Link.on('click', function(e){
      e.preventDefault();
      var itIndex = $(this).parent().index();
      n = itIndex;
  
      bigImg.css({
        backgroundImage:'url('+bigUrl+galleryList.bigList[itIndex]+')',
        backgroundSize:'cover', backgroundPosition:'50% 50%',
        backgroundRepeat:'no-repeat'
      });
      bigModal.fadeIn(function(){
        $(window).on('keyup', function(evt){
          var keyCode = evt.keyCode;
          // console.log(keyCode);
          // 왼쪽 37, 오른쪽 39, 빠져나가기 27
          if(keyCode == 37) {
            n -= 1;
            if( n < 0 ){ n = galleryList.thumList.length -1; }
            bigImg.css({backgroundImage:'url('+bigUrl+galleryList.bigList[n]+')'});
                    
          }else if(keyCode == 39){
            n += 1;
            if( n > galleryList.thumList.length -1 ){ n = 0; }
            bigImg.css({backgroundImage:'url('+bigUrl+galleryList.bigList[n]+')'});
                    
          }else if(keyCode == 27){
            bigModal.fadeOut(400, function(){
              p03Link.eq(0).focus();
            });
          }
        });	
      });
    });

    bigModalBtn.on('click',function(e){
      e.preventDefault();
      bigModal.fadeOut(400);
    })

	
})(jQuery);