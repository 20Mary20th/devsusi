$(document).ready(function() {

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
});
$(document).ready(
  function() {
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

      
  });