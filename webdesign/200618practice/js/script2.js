$(function(){
    $('.main_nav').hover(function(){
        $('.sub_nav').stop().slideToggle();
        $('.menu_bg').stop().slideToggle();
    });
//    $('.main_nav').mouseleave(function(){
//        $('.sub_nav').stop().slideUp();
//        $('.menu_bg').stop().slideUp();
//    });
    
$('.slide img:gt(0)').hide();
setInterval(function(){
    $('.slide img:first')
    .fadeIn('slow')
    .next()
    .fadeOut('slow')
    .end()
    .appendTo('.slide');
},2000);
});

$(function(){
    $('.board_wrap a').click(function(){
        $('.popup').css("display","block");
    })
     $('.button').click(function(){
        $('.popup').css("display","none");
    })
})