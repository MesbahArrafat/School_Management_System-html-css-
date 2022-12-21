$(function () {
  "use strict";

  // fixed menu js

  let nav = $('nav');
  let win = $(window);
  win.on('scroll', function () {
    let scroll = win.scrollTop();
    if (scroll < 100) {
      nav.removeClass("fixed");
    } else {
      nav.addClass("fixed");
    }
  });


  // fixed mobile menu js

  let mobileNav = $('.mobile-menu');
  let mobilWin = $(window);
  mobilWin.on('scroll', function () {
    let scroll = mobilWin.scrollTop();
    if (scroll < 100) {
      mobileNav.removeClass("show-mobile-menu");
    } else {
      mobileNav.addClass("show-mobile-menu");
    }
  });

  // back to top js
  let btn = $('#button');

  $(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
      btn.addClass('show');
    } else {
      btn.removeClass('show');
    }
  });

  btn.on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: 0
    }, '300');
  });

  // banner slider js
  $('.banner').slick({
    dots: false,
    infinite: true,
    arrows: true,
    speed: 1000,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<i class="bi bi-chevron-left icon left"></i>',
    nextArrow: '<i class="bi bi-chevron-right icon right"></i>',
    responsive: [{
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
      }
    }]
  });


  // venobox js
  new VenoBox({
    selector: '.my-image-links',
    numeration: true,
    infinigall: true,
    share: true,
    spinner: 'rotating-plane'
  });

  // Animation on scroll
  window.addEventListener('load', () => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    })
  });

  $('.vidplay').magnificPopup({
    type: 'iframe',
    iframe: {
      markup: '<div class="mfp-iframe-scaler">' +
        '<div class="mfp-close"></div>' +
        '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
        '</div>',
      patterns: {
        youtube: {
          index: 'youtube.com/',
          id: 'v=',
          src: 'https://www.youtube.com/embed/%id%?autoplay=1'
        },
      },
      srcAction: 'iframe_src',
    }
  });

  // mobile menu js
  $('.mobile-icon').click(function () {
    $('.aside').toggleClass('show-aside')
  })

  $('.sub-menu ul').hide();
  $(".sub-menu a").click(function () {
    $(this).parent(".sub-menu").children("ul").slideToggle("100");
    $(this).find(".right").toggleClass("fa-caret-up fa-caret-down");
  });
})

// blog related post part slider start
$('.related_content').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 2000,
  arrows: true,
  centerMode: true,
  centerPadding: "0px",
  initialSlide: 1,
  prevArrow: '.prv-arrow',
  nextArrow: '.nxt-arrow',
  });
// blog related post part slider end


jQuery('.skillbar').each(function(){
	jQuery(this).find('.skillbar-bar').animate({
		width:jQuery(this).attr('data-percent')
	},2000);
});