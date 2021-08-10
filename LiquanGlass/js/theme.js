;(function($){
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



function gallery_isotope(){
    if ( $('.gallery_f_inner').length ){
        // Activate isotope in container
        $(".gallery_f_inner").imagesLoaded( function() {
            $(".gallery_f_inner").isotope({
                layoutMode: 'fitRows',
                animationOptions: {
                    duration: 750,
                    easing: 'linear'
                }
            }); 
        });
        
        // Add isotope click function
        $(".gallery_filter li").on('click',function(){
            $(".gallery_filter li").removeClass("active");
            $(this).addClass("active");

            var selector = $(this).attr("data-filter");
            $(".gallery_f_inner").isotope({
                filter: selector,
                animationOptions: {
                    duration: 450,
                    easing: "linear",
                    queue: false,
                }
            });
            return false;
        });
    }
}
gallery_isotope();

$('.imageGallery1 .light').simpleLightbox();
	
