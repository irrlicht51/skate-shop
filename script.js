$(function() {
  $('.slider').slick( {
    dots: true,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 4,
    centerMode: true,
    centerPadding: '100px',
    responsive: [{
      breakpoint: 769,
      settings: {
        slidesToShow: 3,
        centerPadding: '50px',
      }
    },{
      breakpoint: 481,
      settings: {
        slidesToShow: 1,
        centerPadding: '30px',
      }
    }]
  });
});

$(function() {
  var pageTop = $('#page-top');
  pageTop.hide();
  $(window).on('scroll', function() {
    if ($(this).scrollTop() > 100) {
      pageTop.slideDown();
    } else {
      pageTop.slideUp();
    }
  });

  pageTop.on('click', function() {
    $('body, html').animate( {
      scrollTop: 0
    }, 500);
    return false;
  });
});

$(function() {
  $('.header-navi > li').hover(
    function() {
    $(this).find(".header-sub-navi").stop(true).slideDown(300);
    },
    function() {
      $(this).find('.header-sub-navi').slideUp(300);
    }
  );
});


$(function() {
  $('.next-sub').hover(
    function() {
    $(this).find(".next-sub-navi").stop(true).slideDown(300);
    },
    function() {
      $(this).find('.next-sub-navi').slideUp(300);
    }
  );
});

$('.header-serch').on('click', function() {
  $('.serch-wrapper').fadeIn(500);
});

$('.serch-wrapper').on('click', function() {
  $(this).fadeOut(500);
});

$('.burger-btn').on('click', function() {
  $('.serch-navi-wrapper').fadeIn(500);
});

$('.navi-close-btn').on('click', function() {
  $('.serch-navi-wrapper').fadeOut(500);
});

$('.sub-link-btn').on('click', function() {
  $(this).toggleClass('clicked');
  $('.sub-category').slideToggle(500);
});
