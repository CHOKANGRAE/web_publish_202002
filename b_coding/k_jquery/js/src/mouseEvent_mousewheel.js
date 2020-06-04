
(function($){

var colorArr = ['#fa0', '#acf', '#cfa', '#5df', '#fac'];
var n = 0;

var mw = $('.mw');
mw.css({overflow:'hidden'});

var mwUl = mw.find('ul');
var mwLi = mwUl.find('li');

for(var i = 0; i<mwLi.length; i++){
  mwLi.eq(i).css({backgroundColor:colorArr[i]});
}

var ok = true;

mw.on('mousewheel DOMMouseScroll', function(e){
  if(ok){
    ok=false;
    var evt = e.originalEvent;
    var mouseResult;
    if(evt.wheelDelta){
      mouseResult = evt.wheelDelta;
    }else{
      mouseResult = evt.detail * 40;
    }
  }
  //console.log(mouseResult);

  if(mouseResult < 0 && n > 0){
    n -= 1;
  }else if(mouseResult > 0 && n < colorArr.length){
    n +=1 ;
  }

  console.log(n);
  
  mwUl.stop().animate({marginLeft: n * -100 + '%'},200,'easeInQuad', function(){
    ok=true;
  });


  //mw.stop().animate({backgroundColor:colorArr[n]},300 , function(){
  // ok=true;
  //});

});

})(jQuery);