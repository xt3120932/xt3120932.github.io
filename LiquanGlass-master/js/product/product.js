(function($){
  "use strict"


var nav_offset_top = $('header').height() + 50; 
  /*-------------------------------------------------------------------------------
  Navbar 
-------------------------------------------------------------------------------*/

//* Navbar Fixed  
  function navbarFixed(){
      if ( $('.header_area').length ){ 
          $(window).scroll(function() {
              var scroll = $(window).scrollTop();   
              if (scroll >= nav_offset_top ) {
                  $(".header_area").addClass("navbar_fixed");
              } else {
                  $(".header_area").removeClass("navbar_fixed");
              }
          });
      };
  };
  navbarFixed();




})(jQuery)

$(document).ready(function(){  
  // $(window).resize(function(){
  //   location.reload()
  // });
    //Section Product Category
    $("a[href='#products-list']").click(function(){
      $("html,body").animate({
        scrollTop:$("#products-list").offset().top
      }, 1000);
      return false;
  });
    var a=$(".product-list")
    $(a).slick({
        infinite: true,
        slidesToShow: 3,
        swipeToSlide:true,
        dots: true,
        autoplay: true,
        autoplaySpeed: 5000,
        variableWidth:true,
        centerMode:true,   
        prevArrow:` <button class='prev'><svg width="1.5em" height="1.5em" viewBox="0 0 16 16" class="bi bi-chevron-left" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
                    </svg></button>`,
        nextArrow:` <button class='next'><svg width="1.5em" height="1.5em" viewBox="0 0 16 16" class="bi bi-chevron-right" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                    </svg></button>`
    });
    $(".product-list").on("mouseenter", function () {
      $(this).find($(".prev")).attr("style","display:inline-block;")
      $(this).find($(".next")).attr("style","display:inline-block;")
    });
    $(".product-list").on("mouseleave", function () {
      $(this).find($(".prev")).attr("style","display:none;")
      $(this).find($(".next")).attr("style","display:none;")
    });
    var b=$(".about-card") 
    $(b).on("mouseenter", function () {
      $(this).find($("svg")).removeClass('bg-pink');
      $(this).find($("svg")).addClass('bg-gray');  
    });
    $(b).on("mouseleave", function () {
      $(this).find($("svg")).removeClass('bg-gray');
      $(this).find($("svg")).addClass('bg-pink');
    });
    var c=$(".product-card-box")
    $(c).on("mouseenter", function () {
      $(this).find($(".product-card")).addClass('card-filp');
    });
    $(c).on("mouseleave", function () {
      $(this).find($(".product-card")).removeClass('card-filp');
    });
    
    $("#about-company").on("click", function () {
      $(this).attr("href","concept.html");;
      window.open( $(this).attr("href"));
    }); 
    $("#wholesale-products").on("click", function () {
      $(this).attr("href","concept.html");;//連結到????
      window.open( $(this).attr("href"));
    });
    $("#teamowrk").on("click", function () {
      $(this).attr("href","concept.html");;//連結到客戶服務
      window.open( $(this).attr("href"));
    });
    $("#play-video-box").on("click", function () {
      $("#video-position").attr("style","display:flex;");;//連結到客戶服務
      document.documentElement.style.overflowY = 'hidden'; 
    });
    $("#close-iframe").on("click", function () {
      $("#video-position").attr("style","display:none;");;//連結到客戶服務
      document.documentElement.style.overflowY = 'scroll'; 
    });
});
