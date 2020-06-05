$(function(){
    $('.main_menu').mouseover(function(){
        $(".sub_menu").stop().slideDown();
        $(".sub_menu").css("display","flex");
    });
    $('nav').mouseleave(function(){
        $(this).children(".sub_menu").stop().slideUp();
    });
});

setInterval(function(){
    // setInterval(); 함수 반복 실행
    $(".slide").delay("2500");
    $(".slide").animate({marginLeft: "-1200px"}, "500");
    $(".slide").delay("2500");
    $(".slide").animate({marginLeft: "-2400px"},"500");
    $(".slide").delay("2500");
    $(".slide").animate({marginLeft: "0"},"500");
});