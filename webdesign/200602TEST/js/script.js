$(function(){
    $(".main_menu").mouseover(function(){
        $(".sub_menu ul").stop().slideDown();
        $(".sub_menu ul").css("display","block");
    });
    $(".menu").mouseleave(function(){
        $(".sub_menu ul").stop().slideUp();
    });
 });

 setInterval(function(){
     $(".img_slider").delay("2500");
     $(".img_slider").animate({marginTop: "-305px"}, "500");
     $(".img_slider").delay("2500");
     $(".img_slider").animate({marginTop: "-610px"}, "500");
     $(".img_slider").delay("2500");
     $(".img_slider").animate({marginTop: "0"}, "500");
 });