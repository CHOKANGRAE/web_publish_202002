// accordian.js

(function($){
  // jquery start ===========================

  // 변수 설정
  var menu = $('.content'); 
  var menuDl = menu.children('dl');
  var menuDt = menuDl.find('dt');
  var menuDtBtn = menuDt.find('button');
  var menuDd = menuDl.find('dd');
  var icon = $('.icon');

 

  
  // 기능 설정
  menuDtBtn.on('click', function(e){
    e.preventDefault();

    //menuDd.slideDown(1000);

    var dtPar = $(this).parent('dt');
    var ddPar = dtPar.next('dd');
    var angle = 0;

    var view = $(this).next('dd').css('display');
    

    if(view ==='none'){
      menuDd.stop().slideUp();   
      ddPar.stop().slideDown();
      dtPar.addClass('action');
      $(this).siblings('dt').removeClass('action');
      angle += 180;
      icon.rotate(angle);
    }else{
      menuDd.stop().slideUp();
      menuDt.removeClass('action'); 
    }

    $(this).parent('dt').next('dd').stop().slideDown();

    $(this).next();

  });
  
  // jquery end ===========================
  })(jQuery);