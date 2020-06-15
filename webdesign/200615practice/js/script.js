$(function(){
    $('#test').click(function(){
        alert('경고창');
    });
});

setInterval(function(){
    $('.slide_box').delay("2500");
    $('.slide_box').animate({marginTop:"-300px"},500);

    $('.slide_box').delay("2500");
    $('.slide_box').animate({marginTop:"-600px"},500);

    $('.slide_box').delay("2500");
    $('.slide_box').animate({marginTop:"0"},500);
});

// $(function(){
//     setInterval(function(){
//         alert("2초마다 반복해주세요!");
//     },2000);
// });