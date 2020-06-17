$(function(){
    $('.main_nav').hover(function(){
        $('.sub_nav').stop().slideToggle();
    });
});

setInterval(function(){
    $('.slide').delay(2500);
    $('.slide').animate({marginTop:"-300px"},"500");
    $('.slide').delay(2500);
    $('.slide').animate({marginTop:"-600px"},"500");
    $('.slide').delay(2500);
    $('.slide').animate({marginTop:"0px"},"500");
});

$(function(){
    $('#tab_1').click(function(){
    $('.board').css("display","flex");
    $('#tab_1').css("background","saddlebrown");
    $('.gallery').css("display","none");
    $('#tab_2').css("background","darksalmon");
});
    $('#tab_2').click(function(){
    $('.gallery').css("display","flex");
    $('#tab_2').css("background","saddlebrown");
    $('.board').css("display","none");
    $('#tab_1').css("background","darksalmon");
});
});

$(function(){
    $('.board').click(function(){
        $('.popup').css("display","block");
    });
    $('.popup input').click(function(){
        $('.popup').css("display","none");
    });
});