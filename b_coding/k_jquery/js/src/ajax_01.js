// ajax_01.js

(function($){

  //  ajax 기능 이해하기 1
  /*
  $.ajax({ // 유틸리티 메소드
    url:'../data/ajaxTest.json',
    dataType:'json',
    async:false,
    success:function(data){
      d = data;
      return d;
    }
  }); 
  console.log(d);

  $('#wrap').append(d[0])
  */






  //$.getJSON();



  //$.load();
  var wrap = $('#wrap');
  
  wrap.append('<div class="headBox_wrap"></div>')
  wrap.append('<div class="footBox_wrap"></div>')

  var headWrap = wrap.find('.headBox_wrap');
  var footWrap = wrap.find('.footBox_wrap');

  headWrap.load('../page/common/headBox.html');
  footWrap.load('../page/common/footBox.html');

  setTimeout(function(){
    var headBox = $('#headBox');
    console.log(headBox);
  }, 1000);

})(jQuery);