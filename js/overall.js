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

    cartCompute : function() {
      console.log('cart');
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

    },

    cartShowMsg: function() {
      $(".remove").click(function() {
        var productlength = $('.product-container').length;
          if (productlength != 0) {
            $(this).parent().remove();
          }
          setjs.cartCompute();
      });
    },

    
  };

  setjs.menuBar();
  setjs.aboutNav();
  setjs.cartCompute();
  setjs.cartShowMsg();
})(jQuery)