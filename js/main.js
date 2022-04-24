$(window).on("scroll", function () {
  if ($(window).scrollTop() < 2 00) {
    $("header").addClass("removeHead");
  } else {
    $("header").removeClass("removeHead");
    $("header").addClass("white");
  }
});
