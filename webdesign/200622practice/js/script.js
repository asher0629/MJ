$(function(){
    $('.main_menu>li').hover(function(){
        $(this).children().stop().slideDown();
    });
    $('.main_menu>li').mouseleave(function(){
        $('.sub_menu').stop().slideUp();
    });
});

// $('.slide').hide();
// $('.slide:first-child').show();

$(function(){
    $('.slide>li').hide();
    $('.slide>li:first-child').show();
    setInterval(function(){
        $('.slide>li:first')
        .fadeOut(1000)
        .next()
        .fadeIn(1000)
        .end()
        .appendTo('.slide');
    },3000)
});

$(function(){
    $('.팝업열기').click(function(){
        $('.modal').css('display',"block");
    });
    $('.팝업닫기').click(function(){
        $('.modal').css('display',"none");
    });
});