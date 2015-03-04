(function($){
  var win = $(window).width();
  var geting = $('div#ingredients-container');
  var imgslides = $('div.img-slides1');
  var len = $('div.img-slides1').length;
  var position = 0;
  var positionlimit = win * $('div.img-slides1').length;

  geting.css({
   'width' : positionlimit, 
   'position' : 'relative'
  });

  imgslides.css({
    'width' : win,
  });

  geting.on('swipeleft', function(event) {    
    if (position != (positionlimit - win)) { 
        position += win; 
      $(this).animate({
        'right' : position
      });
    }
  });

  geting.on('swiperight', function(event) {
    if ( position != 0 ) {
        position -= win;
        $(this).animate({
          'right' : position
        });
    }
  });

  //Note: ALWAYS USE POSITION WHEN ANIMATE -- KIM

  $('.img-ing1').on('dragstart', function(e){
    e.preventDefault();
  });

})(jQuery);