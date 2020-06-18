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
// var imgs = $('.slide div').length -1;
// var now = 0;
// function slide(){
//     now = now == imgs ? 0 : now += 1;
//     $('.slide div').eq(now - 1).fadeOut('slow');
//     $('.slide div').eq(now).fadeIn('slow');
// };
// function start() {
//     $('.slide div').eq(0).siblings().fadeOut('slow');
//     setInterval(function(){
//         slide(); }, 3000);
//       };
setInterval(function(){
    $('.slide_3').delay('1200').fadeOut('slow');
    $('.slide_2').delay('3600').fadeOut('slow');
    $('.slide_1').delay('6000');
    $('.slide_3').delay('6000').fadeIn('slow');
    $('.slide_2').delay('5999').fadeIn('slow');
});
$(function(){
    $('#tab_1').click(function(){
        $('.board').css('display','flex');
        $('.gallery').css('display','none');
        $('.#tab_1').css('background','white');
        $('.#tab_2').css('background','skyblue');
    });
    $('#tab_2').click(function(){
        $('.board').css('display','none');
        $('.gallery').css('display','block');
        $('.#tab_1').css('background','skyblue');
        $('.#tab_2').css('background','white');
    });
});
$(function(){
    $('.board a').click(function(){
        $('.popup').css('display','block');
    });
    $('.button').click(function(){
        $('.popup').css('display','none');
    });
});