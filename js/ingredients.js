(function($){
  
  var win = $(window).width();
  var geting = $('div#ingredients-container');
  var imgslides = $('div.img-slides1');
  var position = 0;
  var positionlimit = win * $('div.img-slides1').length; // 768 * 3 = 2304


  $('div.overall-ingredients-cont').css({
    'width' : win,
    'overflow' : 'hidden'
  });
  
  geting.css({
   'width' : positionlimit, // 2304
   'float' : 'left'
  });

  $('div.img-slides1').css({
    'width' : win // 768
  });

  console.log('Window:' + win);
  console.log(geting);
  console.log('Images' + imgslides);
})(jQuery);