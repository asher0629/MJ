$(function(){
    $('.main_nav').mouseover(function(){
        $('.menu_bg').stop().slideDown();
        $('.sub_nav').stop().slideDown();
    });
    $(function(){
        $('.menu').mouseleave(function(){
            $('.sub_nav').stop().slideUp();
            $('.menu_bg').stop().slideUp();
        });
    });
});
// menu

setInterval(function(){
    $('.slide').delay("2500");
    $('.slide').animate({marginTop:"-300px"},"500");
    $('.slide').delay("2500");
    $('.slide').animate({marginTop:"-600px"},"500");
    $('.slide').delay("2500");
    $('.slide').animate({marginTop:"0px"},"500");
});