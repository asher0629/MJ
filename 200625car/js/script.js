
$(function(){
    $('#SWP').click(function(){
        $('.SWP').fadeIn();
        $('.ABP').css('display','none').fadeOut();
        $('.ABT').css('display','none').fadeOut();
        $('.B4U').css('display','none').fadeOut();
        $('.SS4').css('display','none').fadeOut();
        $('.SWP_text').css('display','block');
        $('.ABP_text').css('display','none');
        $('.ABT_text').css('display','none');
        $('.B4U_text').css('display','none');
        $('.SS4_text').css('display','none');
    });
    $('#ABP').click(function(){
        $('.SWP').css('display','none').fadeOut();
        $('.ABP').fadeIn();
        $('.ABT').css('display','none').fadeOut();
        $('.B4U').css('display','none').fadeOut();
        $('.SS4').css('display','none').fadeOut();
        $('.SWP_text').css('display','none');
        $('.ABP_text').css('display','block');
        $('.ABT_text').css('display','none');
        $('.B4U_text').css('display','none');
        $('.SS4_text').css('display','none');
    });
    $('#ABT').click(function(){
        $('.SWP').css('display','none').fadeOut();
        $('.ABP').css('display','none').fadeOut();
        $('.ABT').fadeIn();
        $('.B4U').css('display','none').fadeOut();
        $('.SS4').css('display','none').fadeOut();
        $('.SWP_text').css('display','none');
        $('.ABP_text').css('display','none');
        $('.ABT_text').css('display','block');
        $('.B4U_text').css('display','none');
        $('.SS4_text').css('display','none');
    });
    $('#B4U').click(function(){
        $('.SWP').css('display','none').fadeOut();
        $('.ABP').css('display','none').fadeOut();
        $('.ABT').css('display','none').fadeOut();
        $('.B4U').fadeIn();
        $('.SS4').css('display','none').fadeOut();
        $('.SWP_text').css('display','none');
        $('.ABP_text').css('display','none');
        $('.ABT_text').css('display','none');
        $('.B4U_text').css('display','block');
        $('.SS4_text').css('display','none');
    });
    $('#SS4').click(function(){
        $('.SWP').css('display','none').fadeOut();
        $('.ABP').css('display','none').fadeOut();
        $('.ABT').css('display','none').fadeOut();
        $('.B4U').css('display','none').fadeOut();
        $('.SS4').fadeIn();
        $('.SWP_text').css('display','none');
        $('.ABP_text').css('display','none');
        $('.ABT_text').css('display','none');
        $('.B4U_text').css('display','none');
        $('.SS4_text').css('display','block');
    });
});

$(document).on('click', '[data-toggle="lightbox"]', function(event) {
    event.preventDefault();
    $(this).ekkoLightbox();
});
$(document).on('click', '[data-toggle="lightbox2"]', function(event) {
    event.preventDefault();
    $(this).ekkoLightbox();
});
$(document).ready(function(){
  $('[data-toggle="tooltip"]').tooltip();
});

$(function(){
    $('.btn:first').click(function(){
        $('.drive_wise').css('display','block');
        $('.convenience').css('display','none');
        $('.safety').css('display','none');
        $('.drive_wise').addClass("active");
        $('.convenience').removeClass('active');
        $('.safety').removeClass('active');
    });
    $('.btn:nth(1)').click(function(){
        $('.drive_wise').css('display','none');
        $('.convenience').css('display','block');
        $('.safety').css('display','none');
        $('.drive_wise').removeClass('active');
        $('.convenience').addClass('active');
        $('.safety').removeClass('active');
    });
    $('.btn:nth(2)').click(function(){
        $('.drive_wise').css('display','none');
        $('.convenience').css('display','none');
        $('.safety').css('display','block');
        $('.drive_wise').removeClass('active');
        $('.convenience').removeClass('active');
        $('.safety').addClass('active');
    });

});


$(function(){
    $('.vd-menu-txt01').click(function(){
        $('.play-line01>div').animate({width:'100%'},'fast').css('background','red');
        $('.vd-menu-txt01').css('color','#fff');
        $('.play-line02>div').animate({width:'0'},'fast');
        $('.vd-menu-txt02').css('color','#666');
        $('.video_01').animate({marginTop:'0',opacity:'1'},'3000').css('transition','1s');
    });
    $('.vd-menu-txt02').click(function(){
        $('.play-line01>div').animate({width:'0'},'fast');
        $('.vd-menu-txt01').css('color','#666');
        $('.play-line02>div').animate({width:'100%'},'fast').css('background','red');
        $('.vd-menu-txt02').css('color','#fff');
        $('.video_01').animate({marginTop:'100%',opacity:'0'},'3000').css('transition','1s');
    });
})

function fms(url){
	if(url){
		window.open(url);
	}
}


$(window).resize(function() { 
    var video = document.querySelector('video');
    if($(window).width() < 768){ 
      $(function(){
          video.removeAttribute('[data-autoplay]');
      });
    } 
    else{
    }
  });