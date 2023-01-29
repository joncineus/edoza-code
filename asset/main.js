let navToggle = document.querySelector(".nav__toggle");
let navWrapper = document.querySelector(".nav__wrapper");

navToggle.addEventListener("click", function () {
  if (navWrapper.classList.contains("active")) {
    this.setAttribute("aria-expanded", "false");
    this.setAttribute("aria-label", "menu");
    navWrapper.classList.remove("active");
  } else {
    navWrapper.classList.add("active");
    this.setAttribute("aria-label", "close menu");
    this.setAttribute("aria-expanded", "true");
  }
});


jQuery(function($) {
  $(window).on('scroll', function() {
  if ($(this).scrollTop() >= 200) {
    $('.navbar').addClass('fixed-top');
  } else if ($(this).scrollTop() == 0) {
    $('.navbar').removeClass('fixed-top');
  }
});

function adjustNav() {
  var winWidth = $(window).width(),
    dropdown = $('.dropdown'),
    dropdownMenu = $('.dropdown-menu');
  
  if (winWidth >= 768) {
    dropdown.on('mouseenter', function() {
      $(this).addClass('show')
        .children(dropdownMenu).addClass('show');
    });
    
    dropdown.on('mouseleave', function() {
      $(this).removeClass('show')
        .children(dropdownMenu).removeClass('show');
    });
  } else {
    dropdown.off('mouseenter mouseleave');
  }
}

$(window).on('resize', adjustNav);

adjustNav();
});
