(function ($) {
  'use strict';

  // Spinner
  var spinner = function () {
    setTimeout(function () {
      if ($('#spinner').length > 0) {
        $('#spinner').removeClass('show');
      }
    }, 1);
  };
  spinner();

  // Initiate the wowjs
  new WOW().init();

  // Navbar on scrolling
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $('.navbar').fadeIn('slow').css('display', 'flex');
    } else {
      $('.navbar').fadeOut('slow').css('display', 'none');
    }
  });

  // Smooth scrolling on the navbar links
  $('.navbar-nav a').on('click', function (event) {
    if (this.hash !== '') {
      event.preventDefault();

      $('html, body').animate(
        {
          scrollTop: $(this.hash).offset().top - 45,
        },
        1500,
        'easeInOutExpo'
      );

      if ($(this).parents('.navbar-nav').length) {
        $('.navbar-nav .active').removeClass('active');
        $(this).closest('a').addClass('active');
      }
    }
  });

  // Typed Initiate
  if ($('.typed-text-output').length == 1) {
    var typed_strings = $('.typed-text').text();
    var typed = new Typed('.typed-text-output', {
      strings: typed_strings.split(', '),
      typeSpeed: 100,
      backSpeed: 20,
      smartBackspace: false,
      loop: true,
    });
  }

  // Modal Video
  var $videoSrc;
  $('.btn-play').click(function () {
    $videoSrc = $(this).data('src');
  });
  console.log($videoSrc);
  $('#videoModal').on('shown.bs.modal', function (e) {
    $('#video').attr('src', $videoSrc + '?autoplay=1&amp;modestbranding=1&amp;showinfo=0');
  });
  $('#videoModal').on('hide.bs.modal', function (e) {
    $('#video').attr('src', $videoSrc);
  });

  // Facts counter
  $('[data-toggle="counter-up"]').counterUp({
    delay: 10,
    time: 2000,
  });

  // Skills
  $('.skill').waypoint(
    function () {
      $('.progress .progress-bar').each(function () {
        $(this).css('width', $(this).attr('aria-valuenow') + '%');
      });
    },
    { offset: '80%' }
  );

  // Portfolio isotope and filter
  var portfolioIsotope = $('.portfolio-container').isotope({
    itemSelector: '.portfolio-item',
    layoutMode: 'fitRows',
  });
  $('#portfolio-flters li').on('click', function () {
    $('#portfolio-flters li').removeClass('active');
    $(this).addClass('active');

    portfolioIsotope.isotope({ filter: $(this).data('filter') });
  });

  // Testimonials carousel
  $('.testimonial-carousel').owlCarousel({
    autoplay: true,
    smartSpeed: 1000,
    items: 1,
    dots: true,
    loop: true,
  });
})(jQuery);

// akhir

// Smooth scrolling on the navbar links
$('.footerbutton a').on('click', function (event) {
  if (this.hash !== '') {
    event.preventDefault();

    $('html, body').animate(
      {
        scrollTop: $(this.hash).offset().top - 45,
      },
      1500,
      'easeInOutExpo'
    );

    if ($(this).parents('.footerbutton').length) {
      $('.footerbutton .active').removeClass('active');
      $(this).closest('a').addClass('active');
    }
  }
});

// animasi digital
const techLinesContainer = document.querySelector('.tech-lines-container');

function createTechLine() {
  const techLine = document.createElement('div');
  techLine.classList.add('tech-line');

  // Posisi acak di sepanjang lebar area carousel
  techLine.style.left = Math.random() * 98 + 'vw'; // 100vw agar posisi garis lebih variatif

  // Memilih secara acak antara "0" atau "1"
  const number = Math.random() < 0.5 ? '0' : '1';
  techLine.textContent = number; // Menetapkan teks

  // Durasi acak untuk animasi jatuh
  techLine.style.animationDuration = Math.random() * 3 + 2 + 's';

  // Tambahkan garis teknologi ke dalam container garis teknologi di dalam carousel
  techLinesContainer.appendChild(techLine);

  // Hapus setelah animasi selesai
  setTimeout(() => {
    techLine.remove();
  }, 5000); // Hapus garis setelah 5 detik
}

// Buat garis teknologi setiap 300ms
setInterval(createTechLine, 100);
