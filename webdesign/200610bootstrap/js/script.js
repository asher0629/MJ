$(function(){
    var nav= $('.navbar').offset();
    $(window).scroll(function(){
        if($(document).scrollTop()>nav.top){
            $('.navbar').addClass('fixed');
        }
        else{
            $('.navbar').removeClass('fixed');
        }
    });
});