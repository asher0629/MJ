$(function(){
    $('.main_menu').mouseover(function(){
        $('.sub_menu').stop().slideDown();
        $('.sub_menu').css("display","flex");
    });
    $('.menu').mouseleave(function(){
        $(this).children('.sub_menu').stop().slideUp();
    });
});
setInterval(function(){
    $('.slide ul').delay("2500");
    $('.slide ul').animate({marginTop:"-300px"},"500");
    $('.slide ul').delay("2500");
    $('.slide ul').animate({marginTop:"-600px"},"500");
    $('.slide ul').delay("2500");
    $('.slide ul').animate({marginTop:"0"},"500");
});

$(function(){
    $('#tab_2').click(function(){
        $('.tab_2').css("display","block");
        $('.tab_1').css("display","none");
        $("#tab_2").css("background","white");
        $("#tab_1").css("background","none");
    });
    $('#tab_1').click(function(){
        $('.tab_1').css("display","block");
        $('.tab_2').css("display","none");
        $("#tab_1").css("background","white");
        $("#tab_2").css("background","none");
    });
});

$(function(){
    $('.text').click(function(){
        $('.popup').css("display","block");
    });
    $('.popup_button input').click(function(){
        $('.popup').css("display","none");
    });
});