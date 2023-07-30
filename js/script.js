new VenoBox({
    selector: '.my-video-links',
});
// sticky navbar 
$(window).scroll(function(){
    var scrolling = $(this).scrollTop();
    
    if(scrolling > 200){
        $('.navbar').addClass('my_stick_bg');
    }
    else {
         $('.navbar').removeClass('my_stick_bg');
    }
    }); 
    // portfolio part 
    
    var containerEl = document.querySelector('.mix');

    var mixer = mixitup(containerEl);
    // back to top 
    $(window).on('scroll', function(event) {
        if($(this).scrollTop() > 600){
            $('.back_to_top').fadeIn(200)
        } else{
            $('.back_to_top').fadeOut(200)
        }
    });
    //==== Animate the scroll to top
    $('.back_to_top').on('click', function(event) {
        event.preventDefault();
    
        $('html, body').animate({
            scrollTop: 0,
        }, 1000);
    });
