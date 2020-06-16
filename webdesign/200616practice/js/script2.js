$(function(){
    $('.main_1').hover(function(){
        $('.sub_1').fadeToggle();
    });
    $('.main_2').hover(function(){
        $('.sub_2').fadeToggle();
    });
    $('.main_3').hover(function(){
        $('.sub_3').fadeToggle();
    });
    $('.main_4').hover(function(){
        $('.sub_4').fadeToggle();
    });
    
});

setInterval(function(){
    $('.slide').delay("2500");
    $('.slide').animate({marginLeft:"-760px"},"500");
    $('.slide').delay("2500");
    $('.slide').animate({marginLeft:"-1520px"},"500");
    $('.slide').delay("2500");
    $('.slide').animate({marginLeft:"0"},"500");
});