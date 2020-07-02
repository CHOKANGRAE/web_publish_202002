// moreView.js

(function($){

  var content = $('.content');
  var moreBtn = $('.more').find('button');

  var sampleCode = '<div class="person">\
                    <div class="img">\
                      <img src="../img/picture.jpeg" alt="">\
                    </div>\
                    <dl>\
                      <dt>name</dt>\
                      <dd class="peopleName"></dd>\
                      <dt>email</dt>\
                      <dd class="peopleEmail"></dd>\
                    </dl>\
                    </div>';

  //content.append(sampleCode);

  $.ajax({
    url:"../data/people.json",
  }).done(function(data){
    console.log(data);
    var i = 0;
    
    for(; i<10; i++){
      content.append(sampleCode);
      person = $('.person');
      person.eq(i).find('.peopleName').text( data[i].name);
      person.eq(i).find('.peopleEmail').text( data[i].email);
    }

    moreBtn.on('click', function(e){
      e.preventDefault();

      for(; i< 10; i++){
        content.append(sampleCode);
        person = $('.person');
        person.eq(i).find('.peopleName').text( data[i].name);
        person.eq(i).find('.peopleEmail').text( data[i].email);
      }

    })
  });


})(jQuery);