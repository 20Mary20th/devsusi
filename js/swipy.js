(function($){
  $('div.cont-slides1').on('swipeleft', '[data-role="content"]', function(event){
    console.log('swipe!');
  });
})(jQuery)