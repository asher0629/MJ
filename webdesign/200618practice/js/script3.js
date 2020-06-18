$(function(){
    $('.main_nav').hover(function(){
        $('.sub_nav').stop().slideToggle();
    })
})
setInterval(function(){
    $('.slide').delay('2500');
    $('.slide').animate({marginLeft:'-1200px'},500);
    $('.slide').delay('2500');
    $('.slide').animate({marginLeft:'-2400px'},500);
    $('.slide').delay('2500');
    $('.slide').animate({marginLeft:'0'},500);
});

$(function(){
    $('.tab_title>li:first').click(function(){
        $('.board').css("display","flex");
        $(this).css("background","darkcyan");
        $('.gallery').css('display',"none");
        $('.tab_title>li:last').css("background","cadetblue");
    });
        $('.tab_title>li:last').click(function(){
        $('.board').css("display","none");
        $(this).css("background","darkcyan");
        $('.gallery').css('display',"block");
        $('.tab_title>li:first').css("background","cadetblue");
    });
});

$(function(){
    $('.board a').click(function(){
        $('.popup').css('display','block');
    });
    $('.popup input').click(function(){
        $('.popup').css('display','none');
    });
});