$(function(){
    $('#section1 .more-view-btn').click(function(){
        $('.fp-tableCell').css('display','flex');
        $('#about').css('position','absolute').css('right','0').css('z-index','1');
        $('#about').animate({width:'100%'},1300);
        $('#section1 .center-round-wrap').css('z-index','2').css('left','3.5%').animate({width:'480px'},'fast');
        $('.more-view-btn').css('display','none');      
    });
});
