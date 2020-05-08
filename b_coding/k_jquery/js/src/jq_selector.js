//jq_selector.js

//jquery 선택자
/**
 * 
 * js의 선택자는 매우 복잡하게 만들어져 있기에 처음 접하기엔 거리감이 있어,
 * css 선택자와 유사한 형태로 만들어져 있기에 접근하기 쉬운 라이브러리
 * css 선택자에 $('') 형태만 감싸주면 동일하게 선택됌
 */

 /*
 $('h1').css({'width':'500px', 'height':'100px', 'background-color':'#01f'});
 $('h1 a').css({'display':'block','width':'400px','background-color':'#fa0'});
 $('h1 > a').css({'color':'#fff', 'text-align':'center', 'margin':'auto'});
 $('a[href="#"]').css({'padding':'0.5rem', 'text-shadow':'0.2rem 0.2rem 0.2rem #000'});
*/


 /** jquery 선택자
  * 
  *  type선택자 // tag를 직접 선택  
  *  :  $('html, body') , $('h1,h2,h3,h4,h5,h6')
  *  자식선택자  
  *  :  $('ul > li'), $('ul').childeren('li')  
  *  자손선택자  
  *  :  $('ul li'), $('ul').find('li')
  *  형제선택자
  *  인접형제               :  $('dt + dd'), $('dt').next('dd') 
  *  동생인 형제들          :  $('dt ~ dd'), $('dt').nextAll('dd')
  *  이전형제               : $('dd').prev('dt')
  *  형에 해당하는 형제들    : $('dd').prevAll('dt')
  *  자신을 제외한 형제 모두 : $('dt').siblings('dd')
  *  ---------------------------
	* nth 선택자(css에 일부 존재)
	  ------> $('li:nth-child(3)')    , $('li:nth(2)') 
	  ------> $('li:nth-of-type(3)')  , $('li:nth(2)') 
		------> $('li').eq(2) 
		------> $('li').odd() , $('li').even()
	* 속성선택자
		------> $('a[href="#"]')
		
		========================================================================
	* 해당위치를 파악하는 기능
		$('li').eq(0)     : li의 요소의 순번을 직접 지정
		$('.n').index()   : .n 의 순번을 확인하는 기능
	* 이벤트가 발생되는(주체가되는) 요소
		$(this)   
  */
  /*
  (function($){
      $('h1').css({'color':'#8b00ff'})

      $('ul > li').css({'color':'#fa0'})
      $('dd').prev('dt').css({'color':'#0af'}) // 이전형제인 dt

      $('dt').next('dd').css({'background-color':'#333'})
      $('dd').next('dd').css({'color':'#777'})
      $('dt+dd').css({'font-weight':'bold'})
      $('dd:nth-child(3)').css({'font-size':'1.2rem'})
      $('dt').siblings('dd').css({'font-style':'italic'}) // dt를 제외한 형제 모두

      $('div').parent('#box').css({'width':'200px','height':'300px','background-color':'#333'})
      $('.box_area').css({'width':'100px','height':'100px','background-color':'#fff','margin':'auto'})
  })(jQuery);
*/


// ============================================================================

(function($){

  $('.three').prev('li').css({'border':'1px solid #35f'});
  $('.three').prevAll('li').css({'background-color':'#ccc'});
  $('.three').next('li').css({'border':'1px solid #f35'});
  $('.three').nextAll('li').css({'background-color':'#aca'});

  $('.four').parentsUntil('body').css
                                      ({'padding':'2rem',
                                        'background-color':'#333',
                                        'borderRadius':'3rem',
                                        'border':'2px solid #fff'});

  var fourI = $('.four').parent().index();

  $('li').eq(fourI + 1).children('span').css({'textShadow':'0.2rem 0.2rem 0.2rem #fff'});
                                        
})(jQuery);

