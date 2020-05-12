// jq_display_test2.js


(function($){

  
  var accMenu = $('.accordian'); 
  var accSt01 = $('.accordian > dl');
  var accSt01_dt = accSt01.find('dt');
  var accSt01_dd = accSt01.find('dd');

  // console.log(accSt01_dt.length, accSt01_dd.length);

  // dt(accSt01_dt)를 클릭시(버튼을 클릭하는 것으로 설정/focus 처리)
  accSt01_dt.find('button').on('click', function(e){
    e.preventDefault();

    // 이미 열려있는 dd는 접히고,(단, 선택된 순서뒤의 내용이라면 열려있고)
    var dtPar = $(this).parent('dt');
    var thisPar = dtPar.next('dd');

    var thisView =  thisPar.css('display') === 'none';
  
    if( thisView ){
      accSt01_dd.stop().slideUp();
      thisPar.stop().slideDown();
      dtPar.addClass('action');
      dtPar.siblings('dt').removeClass('action');

    }else{
      accSt01_dd.stop().slideUp();
      accSt01_dt.removeClass('action');
    }
  
    // 선택된 dt 바로 뒤에있는 dd('accSt01_dd')를 나타나게(slideDown) 해라
    $(this).parent('dt').next('dd').stop().slideDown();

    $(this).next();

  // 문제점 정리
  // 1. slide 처리시 toggle이 중복현상
  // 2. focus 처리시 색상처리
  // 3. 변수정리

})

// ==========================================================================

  var moreBtn = $('.test_style').find('dt').children('button');
  var thisDt = $(this).parent('dt');
  var dtNextView = thisDt.next('dd').css('display') === 'none'

  moreBtn.on('click',function(e){
  e.preventDefault();

  if(dtNextView){
    $('.test_style').find('dd').hide();
    thisDt.next('dd').fadeIn();

    thisDt.siblings('dt').removeClass('action');
    thisDt.addClass('action');
  };
  
});



// ===========================================================================


  $('.campus').find('dt').children('button').on('click',function(e){
    e.preventDefault();

    $('.campus dd').slideDown();

  });


})(jQuery);