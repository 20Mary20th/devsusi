(function($) {
  var win = $(window).width(),
      modalsha = $('div.shadow1'),
      heightsha = modalsha.height(),
      footer = $('div.bottom-black'),
      modalall = $('div.overall-modal1'),
      modalfav = $('div.modal-entree-fav'),
      modalrec = $('div.modal-entree-rec'),
      modalshare = $('div.modal-entree-share'),
      showsocial1 = $('div.social-containers1');
      minus = heightsha * 2 - footer.height();
      
      modalsha.css({'height' : minus });
      modalfav.removeClass('settop');
      modalrec.removeClass('settop');
      modalshare.removeClass('settop');
      
  var show = {
      top1 : function() {
        window.scrollTo(0, 1);
      },
      showModal : function(fav1, rec1, share1, close) {
        fav1.on('click', function(){
          show.top1();
          modalsha.fadeIn(300);
          modalall.fadeIn(500).css({'display' : 'block'});
          modalfav.addClass('settop').fadeIn(300);
          modalrec.removeClass('settop').css({'display': 'none'});
          modalshare.removeClass('settop').css({'display': 'none'});
        });
        rec1.on('click', function(){
          show.top1();
          modalsha.fadeIn(300);
          modalall.fadeIn(500).css({'display' : 'block'});
          modalrec.addClass('settop').fadeIn(300);
          modalfav.removeClass('settop').css({'display': 'none'});
          modalshare.removeClass('settop').css({'display': 'none'});
        });
        share1.on('click', function(){
          show.top1();
          modalsha.fadeIn(300);
          modalall.fadeIn(500).css({'display' : 'block'});
          modalshare.addClass('settop').fadeIn(300);
          modalrec.removeClass('settop').css({'display': 'none'});
          modalfav.removeClass('settop').css({'display': 'none'});
        });
        close.on('click', function(){
          modalsha.fadeOut(300);
          modalall.fadeIn(300).css({'display' : 'none'});
        });
      },
      showSocial : function(fb, twitter, pin, insta) {
        fb.on('click', function() {
          modalsha.fadeOut(300);
          modalall.fadeIn(300).css({'display' : 'none'});
          showsocial1.show().load('http://www.facebook.com');
        });

        twitter.on('click', function() {
          console.log('twitter');
          modalsha.fadeOut(300);
          modalall.fadeIn(300).css({'display' : 'none'});
          showsocial1.show().load('www.twitter.com');
        });

        pin.on('click', function() {
          console.log('pin');
          modalsha.fadeOut(300);
          modalall.fadeIn(300).css({'display' : 'none'});
          showsocial1.show().load('www.pinterest.com');
        });

        insta.on('click', function() {
          console.log('insta');
          modalsha.fadeOut(300);
          modalall.fadeIn(300).css({'display' : 'none'});
          showsocial1.show().load('www.instagram.com');
        });
      }
  };
  show.showModal($('li.fav'), $('li.recommend'), $('li.share-ayee'), $('div.wrapper-close'));
  show.showSocial($('img.selectfb'), $('img.selecttwitter'), $('img.selectpin'), $('img.selectinsta'));
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