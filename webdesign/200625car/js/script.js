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
$(function(){
    $('.interior-btn').click(function(){
        $('.interior').css('display','block');
        $('.section03-gallery').animate({marginLeft:"-100%"},1000);
        $('.interior').fadeIn();
    });
    $('.exterior-btn').click(function(){
        $('.section03-gallery').animate({marginLeft:"0"},1000);
        $('.interior').css('display','none');
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


$(document).ready(function() {
    $('#fullpage').fullpage({
        'verticalCentered': false,
        'css3': true,
        'navigation': true,
        'navigationPosition': 'right',
        'navigationTooltips': ['fullPage.js', 'Powerful', 'Amazing', 'Simple'],

        'afterLoad': function(anchorLink, index){
            if(index == 2){
                $('#section0, #iphone2, #iphone4').addClass('active');
            }
        },

        'onLeave': function(index, nextIndex, direction){
            if (index == 3 && direction == 'down'){
                $('.section').eq(index -1).removeClass('moveDown').addClass('moveUp');
            }
            else if(index == 3 && direction == 'up'){
                $('.section').eq(index -1).removeClass('moveUp').addClass('moveDown');
            }

            $('#staticImg').toggleClass('active', (index == 2 && direction == 'down' ) || (index == 4 && direction == 'up'));
            $('#staticImg').toggleClass('moveDown', nextIndex == 4);
            $('#staticImg').toggleClass('moveUp', index == 4 && direction == 'up');
        }
    });
}); 