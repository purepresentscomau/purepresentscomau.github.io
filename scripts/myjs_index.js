$(window).bind('DOMContentLoaded load resize', function () {
  var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  if (isMobile) {
    $(".companylogo").addClass("mobmargin");
    $(".companylogo").addClass("large_logo_size");
    $(".mainrow").removeClass("medium_font");
    $(".mainrow").addClass("large_font");
  } else {
    if ($(".companylogo").hasClass("mobmargin")) {
      $(".companylogo").removeClass("mobmargin");
      $(".companylogo").removeClass("large_logo_size");
      $(".mainrow").addClass("medium_font");
      $(".mainrow").removeClass("large_font");
    }
  }
 });
