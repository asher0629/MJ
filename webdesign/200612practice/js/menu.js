    // setInterval(function(){
    //     $('.main_1').mouseover(function(){
    //         $('.sub_1').css("display","block");
    //         $('.sub_1').stop().animate({width:"150px",opacity:"1"});
    //     });
    //     $('.main_2').mouseover(function(){
    //         $('.sub_2').css("display","block");
    //         $('.sub_2').stop().animate({width:"150px",opacity:"1"});
    //     });
    //     $('.main_3').mouseover(function(){
    //         $('.sub_3').css("display","block");
    //         $('.sub_3').stop().animate({width:"150px",opacity:"1"});
    //     });
    //     $('.main_4').mouseover(function(){
    //         $('.sub_4').css("display","block");
    //         $('.sub_4').stop().animate({width:"150px",opacity:"1"});
    //     });
    //     $('.main_1').mouseleave(function(){
    //         $('.sub_1').css("display","none");
    //         $('.sub_1').stop().animate({width:"0",opacity:"0"},"normal");
    //     });
    //     $('.main_2').mouseleave(function(){
    //         $('.sub_2').css("display","none");
    //         $('.sub_2').stop().animate({width:"0",opacity:"0"},"normal");
    //     });
    //     $('.main_3').mouseleave(function(){
    //         $('.sub_3').css("display","none");
    //         $('.sub_3').stop().animate({width:"0",opacity:"0"},"normal");
    //     });
    //     $('.main_4').mouseleave(function(){
    //         $('.sub_4').css("display","none");
    //         $('.sub_4').stop().animate({width:"0",opacity:"0"},"normal");
    //     });
    // });
    // $(function(){
    //     $('.menu_box>ul>li').mouseover(function(){
    //         $(this).children('.submenu').stop().animate({width:"show"},300);
    //     });
    //     $('.menu_box>ul>li').mouseleave(function(){
    //         $(this).children('.submenu').stop().animate({width:"hide"},0);
    //     });
    // });
    // 메뉴 네비게이션
    $('.menu_box>ul>li').mouseenter(function(){
        $(this).children('.submenu').animate({
            width:"show"
        },100,"linear");
    });
    $('.menu_box>ul>li').mouseleave(function(){
        $(this).children('.submenu').fadeOut();
    })