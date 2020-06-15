$(function(){
    $('.main_nav').mouseover(function(){
        $('.sub_nav').stop().slideDown();
        $('.sub_nav').css("display","flex");
    });
    $('.menu').mouseleave(function(){
        $('.sub_nav').stop().slideUp();
        $('.sub_nav').css("display","none");
    });
});

setInterval(function(){
    $('.slide ul').delay("2500");
    $('.slide ul').animate({marginLeft:"-1200px"},"500");
    $('.slide ul').delay("2500");
    $('.slide ul').animate({marginLeft:"-2400px"},"500");
    $('.slide ul').delay("2500");
    $('.slide ul').animate({marginLeft:"0"},"500");
});

$(function(){
    $('#tab_1').click(function(){
        $('#tab_1').css("background","white");
        $('#tab_2').css("background","#c6d6f7");
        $('.board').css("display","flex");
        $('.gallery').css("display","none");
    });
    $('#tab_2').click(function(){
        $('#tab_1').css("background","#c6d6f7");
        $('#tab_2').css("background","white");
        $('.board').css("display","none");
        $('.gallery').css("display","flex");
    });
});

$(function(){
    $('.pop').click(function(){
        $('.popup').css("display","block");
    });
    $('.button').click(function(){
        $('.popup').css("display","none");
    });
});