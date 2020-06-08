$(function(){
    $('.menu_1').mouseover(function(){
        $('.sub_menu_1').stop().slideDown();
        $('.sub_menu_1').css("display","block");
    });
    $('nav').mouseleave(function(){
        $('.sub_menu_1').stop().slideUp();
        $('.sub_menu_1').css("display","none");
    });
});
$(function(){
    $('.menu_2').mouseover(function(){
        $('.sub_menu_2').stop().slideDown();
        $('.sub_menu_2').css("display","block");
    });
    $('nav').mouseleave(function(){
        $(this).children('.sub_menu').stop().slideUp();
    });
});




start();
var imgs = $('#slide_box>a').length -1;
var now = 0;
function slide(){
    now = now == imgs ? 0 : now += 1;
    $('#slide_box>a').eq(now - 1).fadeOut('slow');
    $('#slide_box>a').eq(now).fadeIn('slow');
};
function start() {
    $('#slide_box>a').eq(0).siblings().fadeOut('slow');
    setInterval(function(){
        slide(); }, 3000);
      };
// $(".slide > li:gt(0)").hide();
// setInterval(function() { 
// $('.slide li:first')
//     .fadeOut(1000)
//     .next()
//     .fadeIn(1000)
//     .end()   
//     .appendTo('.slide');
// },  3000);