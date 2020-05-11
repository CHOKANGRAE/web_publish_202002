// jq_display.js

(function($){

  // ----- jquery 작동 확인 ---------------------- 
  var dpBox = $('.display_box');
  var btn = $('.btn').children('button');
  //console.log( btn.length );

  //btn.eq(14).css({'backgroundColor' : '#fcc'});

  dpBox.css({'display':'none'});
  // ----- jquery display -----------------------

  // preventDefault() : 선택자 내부 요소에 링크/버튼 등의 요소가 존재하면,
  //                    각자 요소에 따른 기능을 수행하게 된다. 이때 이러한 기능을
  //                    사전에 동작하지 못하게 하기위해 쓰이는 메소드

  // display:block
  btn.eq(0).on('click' ,function(e){
    e.preventDefault();

    dpBox.css({'display':'block'});
  });

  // display:none
  btn.eq(1).on('click' ,function(e){
    e.preventDefault();

    dpBox.css({'display':'none'});
  });

  // display:my-toggle
  btn.eq(2).on('click' ,function(e){
    e.preventDefault();
    var dpV= dpBox.css('display');
    
    if(dpV === 'block'){
      dpBox.css({'display':'none'});
    }else{
      dpBox.css({'display':'block'});
    }
  });

  // =================================

  // show
  btn.eq(3).on('click' ,function(e){
    e.preventDefault();

    dpBox.show(1000);
  });

  // hide
  btn.eq(4).on('click' ,function(e){
    e.preventDefault();

    dpBox.hide(2000);
  });

  // toggle
  btn.eq(5).on('click' ,function(e){
    dpBox.toggle(500);
  });

  // =================================
  // fadeIn
  btn.eq(6).on('click' ,function(e){
    e.preventDefault();

    dpBox.stop().fadeIn(1000);
  });

  // fadeOut
  btn.eq(7).on('click' ,function(e){
    e.preventDefault();

    dpBox.stop().fadeOut(2000);
  });

  // fadeToggle
  btn.eq(8).on('click' ,function(e){
    e.preventDefault();

    dpBox.stop().fadeToggle(500);
  });

  // =================================
  // slideDown
  btn.eq(9).on('click' ,function(e){
    e.preventDefault();

    dpBox.slideDown(700);
  });

  // slideUP
  btn.eq(10).on('click' ,function(e){
    e.preventDefault();

    dpBox.slideUp(500);
  });

  // slideToggle
  btn.eq(11).on('click' ,function(e){
    e.preventDefault();

    dpBox.slideToggle(1000);
  });

  // =================================
  // addClass
  btn.eq(12).on('click' ,function(e){
    e.preventDefault();

    dpBox.addClass('action');
  });

  // removeClass
  btn.eq(13).on('click' ,function(e){
    e.preventDefault();

    dpBox.removeClass('active');
  });

  // classToggle
  btn.eq(14).on('click',function(e){
    e.preventDefault();
    /*var dpA = dpBox.attr('class');
    var dps = dpA.split(' ');
    console.log(dps);
    if(dps[1]=='action'){}*/
    
    // var dpAc = dpBox.hasClass('action');
    // if(dpAc === false){dpBox.addClass('action');}
    // else{dpBox.removeClass('action');}
    // (dpAc === false) ? dpBox.addClass('action') : dpBox.removeClass('action');
    // (!dpAc) ? dpBox.addClass('action') : dpBox.removeClass('action');

    dpBox.toggleClass('action');

  });


  var examBox = $('.exam_box');

  /*
  examBox.hover(function(e){
    e.preventDefault();
    examBox.fadeIn({'backgroundColor':'#333', 'color':'#fff'}, 2000);
  });
  */


  examBox.hover(function(e){
    e.preventDefault();

    examBox.fadeIn({'backgroundColor':'#333','color':'fff'}, 1000);
  
  });
 
 

  


})(jQuery);