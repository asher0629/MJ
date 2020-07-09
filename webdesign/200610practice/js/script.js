$(function(){
    $('.mainNav').mouseover(function(){
        $('.subNav').stop().slideDown();
        $('.subNav').css("display","flex");
    });
    $('nav').mouseleave(function(){
        $('.subNav').stop().slideUp();
    });
});

setInterval(function(){
    $('.slider ul').delay('2500');
    $('.slider ul').animate({marginLeft:"-1200px"},'500');
    $('.slider ul').delay('2500');
    $('.slider ul').animate({marginLeft:"-2400px"},'500');
    $('.slider ul').delay('2500');
    $('.slider ul').animate({marginLeft:"0"},'500');
});
$(function(){
    $('#tab_1').click(function(){
        $('.tab_1').css("display","block");
        $('#tab_1').css("background","white");
        $('#tab_1').css("color","forestgreen");
        $('.tab_2').css("display","none");
        $('#tab_2').css("background","none");
        $('#tab_2').css("color","white");
    });
    $('#tab_2').click(function(){
        $('.tab_2').css("display","flex");
        $('#tab_2').css("color","forestgreen");
        $('#tab_2').css("background","white");
        $('.tab_1').css("display","none");
        $('#tab_1').css("background","none");
        $('#tab_1').css("color","white");
    });
});
$(function(){
    $('#popup').click(function(){
        $('.popup').css("display","block");
    });
    $('.popup_body input').click(function(){
        $('.popup').css('display',"none");
    });
});