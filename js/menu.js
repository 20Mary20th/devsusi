(function($){

  var nav_menu_width = 0;

  $('div.nav-menu ul.selection li').each(function(e){
    nav_menu_width += $(this).innerWidth();

  });
  
  $('div.nav-menu ul.selection').css({'width' : nav_menu_width});

})(jQuery);