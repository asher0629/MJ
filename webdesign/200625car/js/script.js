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