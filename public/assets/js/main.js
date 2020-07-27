!(function ($) {
  "use strict";

  // preloader
  $(window).on('load', function () {
    if ($('#preloader').length) {
      $('#preloader').delay(100).fadeOut('slow', function () {
        $(this).remove();
      });
    }
  });

  // hamburger menu show navigation
  $(document).ready(function () {
    $(".menu-icon").on("click", function () {
      $("nav ul").toggleClass("showing");
    });
  });

  // menu scrolling effect to solid color
  $(window).on("scroll", function () {
    if ($(window).scrollTop()) {
      $('nav').addClass('primary-color');
    } else {
      $('nav').removeClass('primary-color');
    }
  })

})(jQuery);

