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

    viewGMap : function() {
     var mapCanvas =  document.getElementById('map-canvas');
     var map = new google.maps.Map(mapCanvas);

     var mapOptions = {
       center: new google.maps.LatLng(14.5401828, 121.0415443,14),
       zoom: 8,
       mapTypeId: google.maps.MapTypeId.ROADMAP
     }
     var map = new google.maps.Map(mapCanvas, mapOptions);
    }
    
  };

  setjs.menuBar();
  setjs.aboutNav();
  
  setjs.viewGMap();
  google.maps.event.addDomListener(window, 'load', init);
})(jQuery)