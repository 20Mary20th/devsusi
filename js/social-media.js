(function($) {
   
   var win = $(window).width();
   $('div.overall-modal1').css({'width': win});
   $('div.modal-entree-fav').removeClass('settop');
   $('div.modal-entree-rec').removeClass('settop');
   $('div.modal-entree-share').removeClass('settop');

   $('li.fav').on('click', function(){
     // $(this).removeClass('share');
     // console.log('remove!');
     $('div.modal-entree-fav').addClass('settop').fadeIn(300);
     $('div.modal-entree-rec').removeClass('settop').css({'display': 'none'});
     $('div.modal-entree-share').removeClass('settop').css({'display': 'none'});

   });

   $('li.recommend').on('click', function(){
     console.log('favorite');
     $('div.modal-entree-rec').css({'top' : '0', 'width' : '100%'}).fadeIn(300);
     $('div.modal-entree-fav').removeClass('settop').css({'display': 'none'});
     $('div.modal-entree-share').removeClass('settop').css({'display': 'none'});
   });

   $('li.share-ayee').on('click', function(){
     console.log('recommend');
     $('div.modal-entree-share').css({'top' : '0', 'width' : '100%'}).fadeIn(300);
     $('div.modal-entree-rec').removeClass('settop').css({'display': 'none'});
     $('div.modal-entree-share-fav').removeClass('settop').css({'display': 'none'});
   });



})(jQuery)

/*  (function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&appId=807063136013927&version=v2.0";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

  window.fbAsyncInit = function() {
    FB.init({
      appId      : '807063136013927',
      xfbml      : true,
      version    : 'v2.2'
    });
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "//connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));

  FB.ui({
  method: 'share',
  href: 'https://developers.facebook.com/docs/',
  }, function(response){});

*/