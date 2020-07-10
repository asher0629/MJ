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
    $(".menu, .menu_box a").click(function(){
        $(".menu_box").fadeToggle();
        $(this).find('.hamburger--line').toggleClass('hamburger--line__x');
    });  
});            
// 메뉴버튼 ↑↑↑↑↑
$(document).ready(function() {
	$('.popup-gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			titleSrc: function(item) {
				return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
			}
		}
	});
});

$(function(){
  $('.aboutBtn1-1').click(function(){
    $('.about1-txt p').css('height','30%');
    $('.aboutBtn1-1').css('display','none');
    $('.aboutBtn1-2').css('display','block');
  });
  $('.aboutBtn1-2').click(function(){
    $('.about1-txt p').css('height','0');
    $('.aboutBtn1-1').css('display','block');
    $('.aboutBtn1-2').css('display','none');
  });
  $('.aboutBtn2-1').click(function(){
    $('.about2-txt p').css('height','30%');
    $('.aboutBtn2-1').css('display','none');
    $('.aboutBtn2-2').css('display','block');
  });
  $('.aboutBtn2-2').click(function(){
    $('.about2-txt p').css('height','0');
    $('.aboutBtn2-1').css('display','block');
    $('.aboutBtn2-2').css('display','none');
  });
});

$(window).resize(function() { 
  if($(window).width() > 768) 
  { 
    $('.morebutton').css('display','none');
    $('.upbutton').css('display','none');
    $('.about1-txt>p').css('height','90%');
    $('.about2-txt>p').css('height','90%');
  } 
  else{
    $('.morebutton').css('display','block');
    $('.about1-txt>p').css('height','0');
    $('.about2-txt>p').css('height','0');
  }
});
