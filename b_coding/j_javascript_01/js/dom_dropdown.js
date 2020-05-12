/* dom_dropdown.js */

var domDropDown = document.getElementsByTagName('drop_menu');
var domDt = document.getElementsByTagName('dt');
var domDd = document.getElementsByTagName('dd');
console.log(domDt. length);

//domDt[0].setAttribute('tabindex', '0');
//domDt[1].setAttribute('tabindex', '0');
//domDt[2].setAttribute('tabindex', '0');
//domDt[3].setAttribute('tabindex', '0');

var i = 0;
for(; i<domDt.length; i++){
    domDt[i].setAttribute('tabindex', '0');
}

domDropDown.addEventListener('mouseenter',function(){
    domDd[0].style.display='block';}
);

domDropDown.addEventListener('mouseleave',function(){
    domDd[0].style.display='none';}
);
