// jp_apiBasic.js

(function($){
// jQuery start ========================================

  var h1 = $('h1');
  // h1.contents(); 내용의 요소를 파악하는 것
  var h1Con = h1.contents();
  var h1ConChild = h1Con.contents()[0];
  //console.log( h1ConChild );


  var dt = $('dt');
  var dtParent = dt.parent();
  //console.log(dtParent[0]);

  var dtCon = dt.contents();
  dt.html('<span></span>');
  dt.children('span').text( dtCon ); 
  // text(), html(), append(), contents(), Wrap()


// jQuery end ==========================================
})(jQuery);