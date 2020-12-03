$ (document).ready(function(){
$('#button-menu').click(function(){

if( $('#button-menu').attr('class') == 'fa fa-bars'){
    $('#button-menu').removeClass('fa fa-bars').addClass('fa fa-close');
    $('.navigation .menu').css( {'left':'0px'});
    $('.navigation ').css( {'width':'100%','background':'rgba(0,0,0,.3)'});

}else{
$('#button-menu').removeClass('fa fa-close').addClass('fa fa-bars');
$('.navigation .menu').css( {'left':'-320px'});
$('.navigation .Submenu').css( {'left':'-320px'});
$('.navigation ').css( {'width':'0%','background':'rgba(0,0,0,.0)'});

}
});
$('.navigation .menu > .item-submenu a').click(function(){
var positionMenu = $(this).parent().attr('menu');
$ ('.item-submenu[menu='+positionMenu+'] .Submenu').css({'left':'0'});
}) ;
$('.navegacion .submenu li.goback').click(function(){
$(this).parent().css({'left':'-320px'});
});
}) ;