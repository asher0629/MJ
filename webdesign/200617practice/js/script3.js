$(function(){
    $('.menu').hover(function(){
        $('.sub_nav').stop().slideToggle();
        $('.menu_bg').stop().slideToggle();
    });
});
setInterval(function(){
    $('.slide').delay('2500');
    $('.slide').animate({marginLeft:"-1200px"},'500');
     $('.slide').delay('2500');
    $('.slide').animate({marginLeft:"-2400px"},'500');
     $('.slide').delay('2500');
    $('.slide').animate({marginLeft:"0"},'500');
});

$(function(){
    $('.board a').click(function(){
        $('.modal_popup').css("display","block");
    });
     $('.modal_popup input').click(function(){
        $('.modal_popup').css("display","none");
    });
});