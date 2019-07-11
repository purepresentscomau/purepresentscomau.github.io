$(window).bind('DOMContentLoaded load resize', function () {
  if ($(window).innerWidth() > $(window).innerHeight() ) {
    document.getElementById("arrow").style.display = "block";
  } else {
    document.getElementById("arrow").style.display = "none";
  }
});
