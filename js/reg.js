(function($){
  $('a.reg-create').on('click', function() {
    $('div.modal-reg').load('reg-msg.html', 'div.modal-reg');
  });
})(jQuery)