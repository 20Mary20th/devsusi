(function($){

  var logo1 = $('img#logo-gems');
  var logo2 = $('img#logo-susi');
  var logos = $('img').length;
  var ctr = -1;
  var show = 500;
  var hide = 500;
  var showdelay = 3000;
  var interval = 5000;
      // logo1.css({'display': 'none'});

  var timeout = setInterval(function() {
  	   ctr += 1;
  	   if (ctr != logos) {
         $('img').eq(ctr).fadeIn(show).delay(showdelay);
  	   } else {
  	   	clearInterval(timeout);
  	   	window.location = "login.html";
  	   }
  	   $('img').fadeOut(hide);
     }, interval);

})(jQuery)
