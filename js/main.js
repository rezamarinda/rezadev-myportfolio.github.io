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

  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });
  $('.back-to-top').click(function () {
    $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
    return false;
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

document.addEventListener('DOMContentLoaded', function () {
  var toggleButton = document.getElementById('toggleButton');
  var audioPlayer = document.getElementById('audioPlayer');
  var pointingHand = document.getElementById('pointingHand');

  // Mulai memutar audio saat tombol musik ditekan
  toggleButton.addEventListener('click', function () {
    if (audioPlayer.paused) {
      audioPlayer.play(); // Memulai pemutaran audio
      toggleButton.innerHTML = '<i class="fa fa-pause"></i>'; // Mengubah ikon ke naga (sesuai request sebelumnya)
      toggleButton.classList.add('shaking'); // Menambahkan kelas animasi
      pointingHand.style.visibility = 'hidden'; // Sembunyikan tombol tangan dengan mengatur visibilitas
    } else {
      audioPlayer.pause(); // Menghentikan pemutaran audio
      toggleButton.innerHTML = '<i class="fa fa-music"></i>'; // Mengubah ikon ke musik
      toggleButton.classList.remove('shaking'); // Menghapus kelas animasi
      pointingHand.style.visibility = 'visible'; // Tampilkan tombol tangan dengan mengatur visibilitas
    }
  });

  audioPlayer.addEventListener('ended', function () {
    toggleButton.classList.remove('shaking'); // Menghapus kelas animasi saat audio selesai
    toggleButton.innerHTML = '<i class="fa fa-music"></i>'; // Mengubah ikon ke musik saat audio selesai
    pointingHand.style.visibility = 'visible'; // Tampilkan kembali tombol tangan setelah lagu selesai
  });

  // Menambahkan fungsi klik pada tombol tangan yang akan menekan tombol musik
  pointingHand.addEventListener('click', function () {
    toggleButton.click();
  });
});
