$(function(){
    $('.main_1').hover(function(){
        $('.sub_1').stop().slideToggle();
    });
    $('.main_2').hover(function(){
        $('.sub_2').stop().slideToggle();
    });
    $('.main_3').hover(function(){
        $('.sub_3').stop().slideToggle();
    });
    $('.main_4').hover(function(){
        $('.sub_4').stop().slideToggle();
    });
    
});
//    $('.slide>li:gt(0)').hide();
//setInterval(function(){
//    $('.slide>li:first')
//    .fadeOut('slow')
//    .next()
//    .fadeIn('slow')
//    .end()
//    .appendTo('.slide')
//},2000)

// setInterval(function(){
//         $('.slide_3').delay('1000').fadeOut('slow');
//         $('.slide_3').delay('3000').fadeIn('slow');
// });
// setInterval(function(){
//         $('.slide_2').delay('2000').fadeOut('slow');
//         $('.slide_2').delay('3000').fadeIn();
// });
// $(function(){
//     var interval = 3000;  // 간격은 3초
//     // slideshow라는 클래스가 부여된 요소 각각에 대해서 처리하기
//     $('.slide').each(function(){
//         // img요소들을 둘러싸고 있는 div요소를 취득
//         var container = $(this);
//         // 페이드 전환 1회분의 함수
//         function switchImg(){
//             // img요소를 전부 취득
//             var imgs = container.find('img');
//             //앞에서부터 img요소 2개를 얻는다.
//             var first = imgs.eq(0);// 선두의 img요소
//             var second = imgs.eq(1);// 2번째의 img요소

//             // 처음의 img요소를 페이드아웃시켜, 가장 뒤로 이동
//             first.fadeOut(2000).appendTo(container);
//             // 2번째의 img요소를 페이드인 시킨다.
//             second.fadeIn(2000);
//         }
//         // 3초 마다 switchImg를 실행
//         setInterval(switchImg, interval);
//     });
// });