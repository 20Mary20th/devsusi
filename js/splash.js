(function($){

  var win = $(window).width;
  var wrapper = $('div.wrapper-logo-splash');
  var logo1 = $('img#logo-gems');
  var logo2 = $('img#logo-susi');
  var logos = $('img').length;
  var ctr = -1;
  var show = 500;
  var hide = 1500;
  var showdelay = 2500;
  var interval = 5300;
      wrapper.css({
       'width' : win,
      });
  
  var timeout = setInterval(function() {
  	   ctr += 1;
  	   if (ctr != logos) {
         $('img').eq(ctr).fadeIn(show).delay(showdelay).fadeOut(hide);
     }
  	   else {
  	   	clearTimeout(timeout);
  	   	window.location.replace("login.html");
  	   } 
     }, interval); 
})(jQuery)
