// familylink.js

(function($){

  var dd = $('dd');
  dd.hide();

  var select = $('#linkpage');
  select.on('change', function(){
    var val = $(this).val();
    console.log(val);
  });

  // - - - -- - - - - - -- - -
  var t2 = $('.type_02');
  var t2Dt = t2.find('dt');

  t2Dt.on('click', function(e){
    t2.find('dd').show();
  });

  // - - - -- - - - - - -- - - 마 이게 대한민국 법규다 짜샤
  var t3 = $('.type_03');
  var t3Dt = t3.find('dt');
  var t3Dd = t3.find('dd');

  var go = $('.page_go').find('a');

  t3Dt.on('click', function(e){
    e.preventDefault();
    t3.find('dd').stop().slideToggle(100);
  });

  t3Dd.find('button').on('click', function(e){
    e.preventDefault();
    var dataHref = $(this).attr('data-href');

    go.attr({'href':dataHref, 'target':'_blank'});
    go.focus();    
  });

})(jQuery);