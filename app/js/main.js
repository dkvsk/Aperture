$(function () {
  /**
   * Burger
   */

  const $burger = $(".js-burger");
  const $nav = $(".js-nav");

  
  $burger.on("click", function () {
    $(this).toggleClass("active");
    $nav.slideToggle(); 
  });

  $(window).on("resize", function () {
    if ($(window).width() > 991) {
      $burger.removeClass("active");
      $nav.removeAttr("style");
    }
  });

  $(document).on("click", function (event) {
    if ($(event.target).closest(".js-nav, .js-burger").length === 0) {
      $burger.removeClass("active");
      $nav.slideUp();
    }
  });
});

