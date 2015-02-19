(function($){
  var win = $(window).width();
  var getprofile = $('div.wrapper-profile');
  var position = 0;
  var positionlimit = win * $('div.owners-profile').length; // 768 * 3 = 2304
  var hidenext = $('input#owner-next');
  var hideprev = $('input#owner-previous');
  hideprev.addClass('button-hides');
  
  $('div.wrapper-profile').css({
   'width' : positionlimit // 2304
  });

  $('div.owners-profile').css({
    'width' : win // 768
  });

  $('input#owner-next').click(function(){

    if (position != (positionlimit - win)) { // 0 != 2304 (positionlimit) - 768 (win) 
        position += win; // 1536
        $('div.wrapper-profile').animate({
        'right' : position
      });
    }

    hideprev.removeClass('button-hides');
  });

  $('input#owner-previous').click(function(){
   
   if ( position != 0 ) {
        position -= win;
        $('div.wrapper-profile').animate({
        'right' : position
      });
    }

    else {}

   if (position == 0 ) {
    hideprev.addClass('button-hides');
   }

   else {}
  });

})(jQuery);