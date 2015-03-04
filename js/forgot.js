(function($){
	// console.log('it work');
  var receive = $('a.send-email1');

  receive.on('click', function() {
  	$('img#forgot-back').css({'display' : 'none'});
  	$('div.forgot-logo1').addClass('small-12 columns');

  	$('div.wrapper-forgot').css({'display' : 'none'});
    $('div.container-msg1').load('forgot-msg.html', 'div.modal-forgot');
  });
})(jQuery);