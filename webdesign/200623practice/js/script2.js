$(function(){
    $('.main_nav>li').mouseenter(function(){
        $(this).children().animate({width:'show'},200,'linear');
    });
    $('.main_nav>li').mouseleave(function(){
        $(this).children('.sub_nav').animate({width:'hide'},200,'linear');
    });
});

$(function(){
    setInterval(function(){
        $('.slide').delay('2500');
        $('.slide').animate({marginLeft:'-760px'},500);
        $('.slide').delay('2500');
        $('.slide').animate({marginLeft:'-1520px'},500);
        $('.slide').delay('2500');
        $('.slide').animate({marginLeft:'0'},500);
        
    });
});

$(function(){
    $('.팝업열기').click(function(){
        $('.modal').css('display','block');
    });
    $('.팝업닫기').click(function(){
        $('.modal').css('display','none');
    });
});