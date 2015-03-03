(function($){
  var Accordion = function(el, multiple) {
    this.el = el || {};
    this.multiple = multiple || false;
    var links = this.el.find('.link');
        links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
  }
  
  Accordion.prototype.dropdown = function(e) {
    var $el = e.data.el;
        $this = $(this),
        $next = $this.next();

        $next.slideToggle();
        $this.parent().toggleClass('open');

        if (!e.data.multiple) {
          $el.find('.submenu').not($next).slideUp().parent().removeClass('open');
        };
    } 

  var accordion = new Accordion($('#accordion'), false);

  /* Checkout and Contact Page: This will show a modal window message */
  $("button.main-nav").click(function() {
    $(".mobile-nav").fadeIn(1000);
  });
        
  $("button.close").click(function() {
    $(".mobile-nav").fadeOut(1000);
  });

  $("button.main-nav").click(function() {
    $(".success-reserve").fadeIn(1000);
  });
  
  $("button.close-contact").click(function() {
    $(".success-reserve").fadeOut(1000);
  });
})(jQuery)