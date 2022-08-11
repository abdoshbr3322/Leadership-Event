$(document).ready(function () {
  $(".nav-toggle").click(toggleNav);
  $(".day").click(selectDay);
  $(window).scroll(checkPosition);
  $(".scroll-top").click(function () {
    window.scroll({
      top: 0,
      behavior: "smooth",
    })
  })
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

function checkPosition() {
  let sectionsLinks = $("header .nav li a");
  sectionsLinks.removeClass("active")
  let currentSectionLink = sectionsLinks.filter(function (_ind, _el) {
    let section = $($(_el).attr("href"));
    return (section.offset().top + section.height()) >= $(window).scrollTop();
  })[0];
  $(currentSectionLink).addClass("active");
}
