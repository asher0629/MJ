$(function(){
    $('.main_1').hover(function(){
        $('.sub_1').stop().slideToggle();
    });
     $('.main_2').hover(function(){
        $('.sub_2').stop().slideToggle();
    });
     $('.main_3').hover(function(){
        $('.sub_3').stop().slideToggle();
    });
     $('.main_4').hover(function(){
        $('.sub_4').stop().slideToggle();
    });
});



// start();
// var imgs = $('.slide img').length -1;
// var now = 0;
// function slide(){
//     now = now == imgs ? 0 : now += 1;
//     $('.slide img').eq(now - 1).fadeOut('slow');
//     $('.slide img').eq(now).fadeIn('slow');
// };
// function start() {
//     $('.slide img').eq(0).siblings().fadeOut('slow');
//     setInterval(function(){
//         slide(); }, 3000);
//       };

$('.slide img:gt(0)').hide();
setInterval(function(){
    $('.slide img:first')
    .fadeOut('slow')
    .next()
    .fadeIn('.slow')
    .end()
    .appendTo('.slide')
},3000);