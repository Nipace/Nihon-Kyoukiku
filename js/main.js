(function($) {
	

    $('.navbar-collapse a').click(function(){
        $(".navbar-collapse").collapse('hide');
    });
      $(".navbar-collapse a").on('click', function() {
        $(".navbar-collapse.collapse").removeClass('in');
      });
      $(window).scroll(function() {
        if ($(".navbar-dark").offset().top > 500) {
          $(".fixed-top").addClass("top-nav-collapse");
          $(".navbar-collapse").addClass("drop-nav-collapse");
        }
            else {
          $(".fixed-top").removeClass("top-nav-collapse");
          $(".navbar-collapse").removeClass("drop-nav-collapse");
        }
      });
    
    
     
    
    })(jQuery);