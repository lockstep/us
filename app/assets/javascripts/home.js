$(function() {
  $('a[href^="#"]').on('click', function () {
    $('.nav-link').removeClass('active');
    $(this).addClass('active');
    var element = $($(this).attr('href'));
    $('html,body').animate({ scrollTop: element.offset().top },'normal', 'swing');
    return false;
  });

  var $w = $(window).scroll(function() {
    if ( $('body.home').length ) {
      if ($w.scrollTop() > 100) {
        $(".application-header").removeClass('home-header');
        $(".application-header").addClass('show-shadow');
      } else {
        $(".application-header").addClass('home-header');
        $(".application-header").removeClass('show-shadow');
      }
    }
  });

  if ($('body.work-index').length > 0) {
    var $wo = $(window).scroll(function() {
      if ($('.split-layout-secondary').css('display') !== "none") {
        if ( $wo.scrollTop() > ($("a#trustbooks").offset().top - 350) ) {
          $(".bg-default").css("opacity", 1);
          $(".pathgather-image").css("opacity", 0);
          $(".bungalow-image").css("opacity", 0);
        }
        if ( $wo.scrollTop() > ($("a#pathgather").offset().top - 350) ) {
          $(".bg-default").css("opacity", 0);
          $(".pathgather-image").css("opacity", 1);
          $(".bungalow-image").css("opacity", 0);
        }
        if ( $wo.scrollTop() > ($("a#bungalow").offset().top - 350) ) {
          $(".bg-default").css("opacity", 0);
          $(".pathgather-image").css("opacity", 0);
          $(".bungalow-image").css("opacity", 1);
        }
      }
    });
  }
});
