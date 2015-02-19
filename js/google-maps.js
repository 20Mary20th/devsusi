jQuery(function($) {
  // Asynchronously Load the map API
  var script = document.createElement('script');
  script.src = "http://maps.googleapis.com/maps/api/js?sensor=false&callback=initialize";
  document.body.appendChild(script);
});

function initialize() {
  var q = jQuery('#q_hidden').val();
  var dir = jQuery('.dir').val();
  if(q == "MANILA" || q == "manila") {
plus = 0; // 2000
minus = 0; //2550
}else {
plus = 0;
minus = 0;
}

  jQuery.getJSON(dir + "/json-store.php?q=" + q, function(data)
  {
    var data_length = data.length;

    var map;
    var bounds = new google.maps.LatLngBounds();
    var mapOptions = {
      mapTypeId: 'roadmap',
      disableDefaultUI: true,
      panControl: true,
      panControlOptions: {
          position: google.maps.ControlPosition.RIGHT_CENTER
      },
      zoomControl: true,
      zoomControlOptions: {
          position: google.maps.ControlPosition.RIGHT_CENTER
      },
      scaleControl: true,
      mapTypeControl: true,
      mapTypeControlOptions: {
          position: google.maps.ControlPosition.TOP_RIGHT
      },
    };

    // Display a map on the page
    map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);
    map.setTilt(45);

    // Multiple Markers
    var markers = [];
    var infoWindowContent = [];
    var category_img = jQuery('.dir').val() + "/assets/img/";

!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');

    for(var x=0;x<data_length;x++){
      var img_src = data[x].post_image;
      var category = data[x].category;
      markers.push([category, data[x].latitude, data[x].longitude]);
      infoWindowContent.push(['<div class="info_content"> <p class="right"><b>Store Hours:</b> <br/>'+ data[x].store_hours +'<br/><br/> <b>Drive Thru Hours:</b><br/>'+ data[x].drive_hours +' </p> <img src="'+ category_img +'pins.png'+'" width="55"><span class="address"><a href="'+ data[x].guid +'" style="color: rgb(0, 112, 74)">'+data[x].place+'</a></span><p class="full-address">'+data[x].address+'<br/>Phone: (0905) 426 2913</p><p class="share-this"><span>Share This:</span> &nbsp;<a href="https://twitter.com/share" class="twitter-share-button" data-count="none" target="_blank"><img src="'+category_img+'twitter-icon.png" width="22"></a><a href="https://www.facebook.com/dialog/share?app_id=449242831880154&display=popup&href='+ location.href +'&redirect_uri='+location.href+'" data-share="true" target="_blank" class="icon fbFeed"><img src="'+category_img+'facebook-icon.png" width="22"></a></p><p class="readmore"><a href="https://www.google.com.ph/maps/place/'+ data[x].place +'" target="blank">Get Directions </a></p></div>']);

      // Here Ye Here Ye
      jQuery('.result-container').append('<div class="result row large-12 medium-12 columns"> <div class="large-2 medium-2 small-2 columns"><img src="'+category_img+'pins.png"></div> <div class="large-10 medium-10 small-10 columns"><span class="address" lat="'+data[x].latitude+'" lng="'+data[x].longitude+'"><a href="'+ data[x].guid +'" style="color: rgb(0, 112, 74)">'+ data[x].place +'</a></span><p class="full-address">'+ data[x].address +'<br/> Phone: (0905) 426 2913</p><p class="readmore"><a href="https://www.google.com.ph/maps/place/'+ data[x].place +'" target="_blank">Get Directions </a></p></div> </div> <div class="clear-both"><hr/></div>');
    }

    // Display multiple markers on a map
    var infoWindow = new google.maps.InfoWindow(), marker, i;

    // Loop through our array of markers & place each one on the map
    for( i = 0; i < markers.length; i++ ) {
      var pin = markers[i][0];
        var position = new google.maps.LatLng(markers[i][1], markers[i][2]);
        bounds.extend(position);
        marker = new google.maps.Marker({
            position: position,
            map: map,
            title: markers[i][0],
            icon: category_img + 'pins' + '.png'
        });

        // Allow each marker to have an info window
        google.maps.event.addListener(marker, 'click', (function(marker, i) {
            return function() {

			jQuery('.co-lo-check').hide();
			jQuery('.locator').css({'top': '-425px'});
			jQuery('.co-lo').css({'top': '440px'});
			jQuery('.my-header').css({'z-index': '96'});
			jQuery('.co-lo').find('.text').text('Show Locator');

// map.panTo({lat: (marker.position.k + 2), lng: (marker.position.B - 3)});

var new_k = marker.position.k.toString();
var new_k_arr = new_k.split('.');
var new_k_arr_2nd = new_k_arr[1] * 1 + plus;
var newk = parseFloat(new_k_arr[0] + "." + new_k_arr_2nd);

var new_B = marker.position.B.toFixed(5).toString();
var new_B_arr = new_B.split('.');
var new_B_arr_2nd = new_B_arr[1] * 1 - minus;
var newB = parseFloat(new_B_arr[0] + "." + new_B_arr_2nd);

                map.panTo({lat: (marker.position.k), lng: (marker.position.B)});
                infoWindow.setContent(infoWindowContent[i][0]);
                infoWindow.open(map, marker);
            }
        })(marker, i));

        // Automatically center the map fitting all markers on the screen
        map.fitBounds(bounds);
    }

    //Override our map zoom level once our fitBounds function runs (Make sure it only runs once)
    var boundsListener = google.maps.event.addListener((map), 'bounds_changed', function(event) {
        if(window.location.pathname != "/locate/") {
          this.setZoom(18);
          google.maps.event.removeListener(boundsListener);
        }

    });

    jQuery(document).on('click', '.co-lo', function()
    {
	infoWindow.close();
    })

  });
}