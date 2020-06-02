
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
// 갤러리..↓↓↓↓↓↓
$(function(){
    $(".gallery_btn").click(function(){
        $(".menu").css("display","none");
        $("body").css("overflow","hidden");
        $("#section05").css("display","none");
    });
    $(".close").click(function(){
        $(".menu").css("display","block");
        $("body").css("overflow","unset");
        $("#section05").css("display","block");
    });
    $(".close2").click(function(){
      $(".menu").css("display","block");
      $("body").css("overflow","unset");
      $("#section05").css("display","block");
  });
});
// Gallery modal popup Start!*****
// Gallery1
  // Open the Modal
  function openModal1() {
    document.getElementById("myModal1").style.display = "block";
  }
  
  // Close the Modal
  function closeModal() {
    document.getElementById("myModal1").style.display = "none";
  }
  
  var slideIndex = 1;
  showSlides(slideIndex);
  
  // Next/previous controls
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  // Thumbnail image controls
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides1");
    var dots = document.getElementsByClassName("demo1");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
  }

// gallery modal popup End


// Gallery2
function openModal2() {
  document.getElementById("myModal2").style.display = "block";
}

function closeModal2() {
  document.getElementById("myModal2").style.display = "none";
}


var slideIndex2 = 1;
showSlides2(slideIndex2);

function plusSlides2(a) {
  showSlides2(slideIndex2 += a);
}
function currentSlide2(a) {
  showSlides2(slideIndex2 = a);
}

function showSlides2(a){
  var v;
  var slide = document.getElementsByClassName("myslides2");
  if (a > slide.length) {slideIndex2 = 1}
  if (a < 1) {slideIndex2 = slide.length}
  for (v = 0; v < slide.length; v++) {
    slide[v].style.display = "none";
  }
  slide[slideIndex2-1].style.display = "block";
}
// Gallery3

function openModal3() {
  document.getElementById("myModal3").style.display = "block";
}

function closeModal3() {
  document.getElementById("myModal3").style.display = "none";
}

var slideIndex3 = 1;
showSlides3(slideIndex3);

function plusSlides2(b) {
  showSlides3(slideIndex3 += b);
}
function currentSlide2(b) {
  showSlides3(slideIndex3 = b);
}

function showSlides3(b){
  var l;
  var slide3 = document.getElementsByClassName("myslides3");
  if (b > slide3.length) {slideIndex3 = 1}
  if (b < 1) {slideIndex2 = slide3.length}
  for (l = 0; l < slide3.length; l++) {
    slide[l].style.display = "none";
  }
  slide3[slideIndex3-1].style.display = "block";
}
