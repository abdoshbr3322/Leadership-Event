$(document).ready(function () {
  $(".nav-toggle").click(toggleNav);
  $(".day").click(selectDay);
});

function toggleNav() {
  $(this).toggleClass("nav-active");
  $(".mobile-nav").slideToggle();
}

function selectDay() {
  let $clicked = $(this);
  $(".day").removeClass("active");
  $clicked.addClass("active");
  $(`.shedules .event:not(${$clicked.attr("data-day")})`).fadeOut();
  $($clicked.attr("data-day")).fadeIn();
}