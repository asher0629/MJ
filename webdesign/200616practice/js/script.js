$(function(){
    $('.main_1').mouseover(function(){
        $('.sub_1').stop().slideDown();
    });
     $('.main_2').mouseover(function(){
        $('.sub_2').stop().slideDown();
    });
     $('.main_3').mouseover(function(){
        $('.sub_3').stop().slideDown();
    });
     $('.main_4').mouseover(function(){
        $('.sub_4').stop().slideDown();
    });
        $('.main_1').mouseleave(function(){
        $('.sub_1').stop().slideUp();
    });
     $('.main_2').mouseleave(function(){
        $('.sub_2').stop().slideUp();
    });
     $('.main_3').mouseleave(function(){
        $('.sub_3').stop().slideUp();
    });
     $('.main_4').mouseleave(function(){
        $('.sub_4').stop().slideUp();
    });
});
$('.slide img:gt(0)').hide();
 setInterval(function(){
     $('.slide img:first')
     .fadeOut('slow')
     .next()
     .fadeIn('slow')
     .end()
     .appendTo('.slide')
 }, 2000);

$(function(){
    $('.tab_1').click(function(){
        $('.board').css("display","flex");
        $('.tab_1').css("background","white");
        $('.tab_1').css("color","skyblue");
        $('.board_gallery').css("display","none");
        $('.tab_2').css("background","skyblue");
        $('.tab_2').css("color","white");
    });
        $('.tab_2').click(function(){
        $('.board_gallery').css("display","flex");
        $('.tab_2').css("background","white");
        $('.tab_2').css("color","skyblue");
        $('.board').css("display","none");
        $('.tab_1').css("background","skyblue");
        $('.tab_1').css("color","white");
    });
});

$(function(){
    $('.board a').click(function(){
        $('.popup').css("display","block");
    });
     $('.popup input').click(function(){
        $('.popup').css("display","none");
    });
});








// $('.slide_box3 > img:gt(0)').hide();
//
//        setInterval(function() { 
//        $('.slide_box3 > img:first')
//            .fadeOut('slow')
//            .next()
//            .fadeIn('slow')
//            .end()
//            .appendTo('.slide_box3');
//        },  2000);
//
