$(window).bind('DOMContentLoaded load resize', function () {
  if ($(window).innerWidth() <= 600) {
    $(".eventgallery").removeClass("eventgallery").addClass("inmobile");
    $(".gallery").addClass("mobilegallery");
  }
  if ($(window).innerWidth() > 600) {
    $(".inmobile").removeClass("inmobile").addClass("eventgallery");
    $(".mobilegallery").removeClass("mobilegallery");
  }
 });
