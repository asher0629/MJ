// 스크롤 탑버튼
jQuery(document).ready(function () {
  $('.scroll').click(function (e) {
    e.preventDefault();
    $('html, body').animate({scrollTop: 0}, 200);
  });
});
$(window).scroll(  
    function(){  
        //스크롤의 위치가 상단에서 450보다 크면  
        if($(window).scrollTop() > 30){  
        /* if(window.pageYOffset >= $('원하는위치의엘리먼트').offset().top){ */  
            $('.navi').addClass("fix");  
            //위의 if문에 대한 조건 만족시 fix라는 class를 부여함  
        }else{  
            $('.navi').removeClass("fix");  
            //위의 if문에 대한 조건 아닌경우 fix라는 class를 삭제함  
        }  
    }  
); 
  $(function(){
    $(".menu").click(function(){
        $(".menu_box").fadeToggle();
        $(this).find('.hamburger--line').toggleClass('hamburger--line__x');
    });
});          
$(function(){
  $(".menu_box a").click(function(){
    $(".menu_box").stop().fadeToggle('fast');
  });
});
// 메뉴버튼 ↑↑↑↑↑

// 갤러리팝업↓↓↓↓↓
$(document).ready(function() {
  $('.gallery_1').magnificPopup({
    delegate: 'div',
    type:'image',
    modal:true});
});
