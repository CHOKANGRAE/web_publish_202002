//join.js

(function($){

  // 변수 설정 ---------------------------
  var mobileArea = $('#mobileArea');
  var contry = 
  [ '대한민국 +82',
    '홍콩 +852',
    '터키 +90',
    '일본 +81',
    '영국 +44',
    '핀란드 +358',
    '그리스 +30',
    '프랑스 +33',
    '노르웨이 +47',
    '몰디브 +960'
  ];
  var contryText = '<option value=""></option>';

  contry.sort();

  // 기능 설정 ---------------------------
  var i = 0;
  var valueResult;

  for(; i < contry.length; i++){
    mobileArea.append(contryText);

    valueResult = contry[i].split('+')[1]; 
    // contry[i] : contry i번째의 변수를
    // split('+') : 통째로 배열로 만들어 +를 기준으로 앞 뒤로 쪼갠다
    // [0] : 앞<대한민국> , [1] : 뒤<82> 
    mobileArea.find('option').eq(i).attr({ value : valueResult });

    mobileArea.find('option').eq(i).text(contry[i]);
  }

  var date = new Date();
  console.log(date);

})(jQuery);