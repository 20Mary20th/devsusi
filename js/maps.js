(function($){
  function init() {
   var mapCanvas =  document.getElementById('map-canvas');
   var map = new google.maps.Map(mapCanvas);

   var mapOptions = {
       center: new google.maps.LatLng(14.5401828, 121.0415443,14),
       zoom: 8,
       mapTypeId: google.maps.MapTypeId.ROADMAP
     }
   var map = new google.maps.Map(mapCanvas, mapOptions);
  }
  google.maps.event.addDomListener(window, 'load', init);

})(jQuery);

