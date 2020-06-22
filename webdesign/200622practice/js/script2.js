//$(function(){
//        $('.main_1').hover(function(){
//        $('.sub_1')
//            .stop()
//            .fadeToggle()
//            .animate({width:'200px'},500)
//            .css('display','block');
//    });
//        $('.main_2').hover(function(){
//        $('.sub_2')
//            .stop()
//            .fadeToggle()
//            .animate({width:'200px'},500)
//            .css('display','block');
//    });
//        $('.main_3').hover(function(){
//        $('.sub_3')
//            .stop()
//            .fadeToggle()
//            .animate({width:'200px'},500)
//            .css('display','block');
//    });
//        $('.main_4').hover(function(){
//        $('.sub_4')
//            .stop()
//            .fadeToggle()
//            .animate({width:'200px'},500)
//            .css('display','block');
//    });
//});

$(function(){
    $('.main_nav>li').mouseenter(function(){ $(this).children('.sub_nav').animate({ width: "show"}, 100, "linear"); }); 
    $('.main_nav>li').mouseleave(function(){ $(this).children('.sub_nav').fadeOut('fast'); });

});

setInterval(function(){
    $('.slide')
        .delay('2500')
        .animate({marginLeft:'-760px'},'500')
        .delay('2500')
        .animate({marginLeft:'-1520px'},'500')
        .delay('2500')
        .animate({marginLeft:'0'},'500');
});