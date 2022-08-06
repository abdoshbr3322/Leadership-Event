$(document).ready(function () {
  $(".nav-toggle").click(toggleNav);
  $(".day").click(selectDay);
});

function toggleNav() {
  $(this).toggleClass("nav-active");
  $(".mobile-nav").slideToggle();
}

function selectDay() {
  let clicked = $(this);
  $(".day").removeClass("active");
  clicked.addClass("active");
  $(".shedule").fadeOut()
  $(".shedule").filter(function (_ind ,_el) {
    return _el.attr("data-day") === clicked.attr("data-day");
  }).fadeIn()
}
