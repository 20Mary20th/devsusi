(function($){

  var win = $(window).width;
  var wrapper = $('div.wrapper-logo-splash');
  var logo1 = $('img#logo-gems');
  // var logos = $('img').length;
  // var ctr = -1;
  var show = 500;
  var hide = 1000;
  var showdelay = 2000;
  var interval = 3000;
      wrapper.css({
       'width' : win,
      });
  
  var set = {
      displaylogo : function() {
        setTimeout(function() {
        logo1.fadeIn(500).delay(showdelay).fadeOut(hide, function(){
          window.location = "login.html";
        });
        }, interval);
      }  
  }
   set.displaylogo();
})(jQuery)
