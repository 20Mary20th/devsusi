(function(){

  var setjs = {
    
    menuBar: function() {
      $(".menu-toggle-btn").click(function() {
        $(this).toggleClass("open");
        $(".mobile-nav").fadeIn(1000);
         if ($(this).hasClass('open')){
          $(".mobile-nav").fadeIn(1000);
        }
         else {
          $(".mobile-nav").fadeOut(1000);
        }
      });
    },

    aboutNav : function() {
      $(".content").hide();
      $(".content:first, .wrapper-banner:first").show(); 

      $("ul.selection li").click(function() {
        var target = $(this).index(); 
        $(".wrapper-banner").hide();
        $(".wrapper-banner").eq(target).show();
        $("ul.selection li").removeClass("active");
        $(this).addClass("active");
        $(".content").hide();

        var activeTab = $(this).attr("rel"); 
        $("#"+activeTab).fadeIn(); 
      });
    },

    // viewGMap : function() {
    //  var mapCanvas =  document.getElementById('map-canvas');
    //  var map = new google.maps.Map(mapCanvas);

    //  var mapOptions = {
    //    center: new google.maps.LatLng(14.5401828, 121.0415443,14),
    //    zoom: 8,
    //    mapTypeId: google.maps.MapTypeId.ROADMAP
    //  }
    //  var map = new google.maps.Map(mapCanvas, mapOptions);
    // },

    cartCompute : function() {
      var price = 0 ;
      var del = $(".price-delivery").data('delivery');
        $(".product-container").each(function() {
          quantity = $(this).find(".quantity").attr('value');
          price  +=  ($(this).find(".price").data('price') * quantity );

          $(this).find(".quantity-price").text($(this).find(".price").data('price') * quantity);
        });
          $('.price-total span').text(price);
          $('.total-amount-price span').text(price + del);
      
          if (price == 0) {
            $('.price-delivery').text('P 0');
            $('.total-amount-price span').text('P 0');

            $('.mobile-nav').fadeIn(1000);
            $("button.close").click(function() {
            $(".mobile-nav").fadeOut(1000);
        });
        // var r = confirm("Cart Empty Would You like to go to Menu page?");
        //     if (r == true) {
        //         window.location.href= 'menu.html';
        //     } else {
        //         x = "You pressed Cancel!";
        //     }

      }
      $(".remove").click(function(){
        var produclength = $('.product-container').length;
          if (produclength != 0) {
            $(this).parent().remove();
          }
      });
    },

    dropDown: function(el, multiple) {
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
    },

    // promptMsg : function() {
    //    $("button.main-nav").click(function() {
    //         $(".mobile-nav").fadeIn(1000);
    //     });
    //     $("button.close").click(function() {
    //         $(".mobile-nav").fadeOut(1000);
    //     });
    // },
    
  };

  setjs.menuBar();
  setjs.aboutNav();
  setjs.cartCompute();
  setjs.viewGMap();
  // setjs.dropDown($('#accordion'), false);
  // setjs.promptMsg();
  google.maps.event.addDomListener(window, 'load', setjs.viewGMap);
})(jQuery)