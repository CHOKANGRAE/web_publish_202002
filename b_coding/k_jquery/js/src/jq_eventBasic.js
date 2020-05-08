// jq_eventBasic.js

var css = $('.css');
var ani = $('.animate');

//선택자.메소드();
css.css({
  'width':'50rem', 'backgroundColor':'#145', 'color':'#fff',
  'transition':'all 1000ms ease-in'});

ani.animate({
  'width':'50rem', 'backgroundColor':'#541', 'color':'#fff'}, 1000, 'easeInSine', 
  function(){
    ani.animate({'width':'10rem', 'backgroundColor':'#111'}, 700, 
    function(){
      css.animate({'width':'10rem', 'height':'20rem', 'backgroundColor':'#fa0'});
      ani.animate({'width':'10rem', 'height':'20rem', 'backgroundColor':'#333'})
    })
  });
  // js에서는 ms단위를 붙이지 않음, easeIn을 사용하려면 https://easings.net/ 에서 용어 찾아보기
  // js에서 시간의 흐름을 가지고 있는 기능은 callback 함수의 기능을 가질 수 있다.


  // --------------------------------------------------------------------------------------

  /**
   * 이벤트 : 
   *      마우스를 올렸을 경우, 마우스를 벗어났을경우, 클릭, 마우스를 움직일경우, 드래그
   *      키보드 키를 누르는 경우
   *      브라우저 스크롤바 움직이는 경우
   *      브라우저의 화면 크기가 변경되는 경우
   * 원소유 :
   *      a 요소 - 클릭 시 이동처리되는 형태
   *      button 요소 - 클릭 시 자료를 전송/취소 ...  
   */

   var evt_01 = $('.evt_01');
   var evt_02 = $('.evt_02');

   // 선택자.on([이벤트기능], function(){});

   evt_01.on('dblclick', function(){
     evt_01.animate({'width':'30rem', 'backgroundColor':'#fa7', 'fontSize':'2rem'}, 1000);
   })

   evt_02.on('focus', function(){
    evt_02.css({'backgroundColor':'#fc0'});
  })

  evt_02.on('blur', function(){
    evt_02.css({'backgroundColor':'#fff'});
  })

  evt_02.on('keyup', function(event){
    //console.log(event.key, event.keyCode);
    // evt_01.append();
    var key=event.keyCode;

    evt_01.text(event.key + ' : ' + key);

    switch(key){
      case 38:
        evt_02.css({'backgroundColor':'#35f'});
      break;
      case 39:
        evt_02.css({'backgroundColor':'#f53'});
      break;
      case 4:
        evt_02.css({'backgroundColor':'#f07'});
      break;
      default:
        evt_02.css({'backgroundColor':'#ffa'});
    }
  })

