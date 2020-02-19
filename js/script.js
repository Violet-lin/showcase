$(document).ready(function() {
  // ==== Fade animation ====
  $(function() { // $(document).ready shorthand
    $('#hero').fadeIn('slow');
  });
  /* Every time the window is scrolled ... */
  $(window).scroll(function() {

    /* Check the location of each desired element */
    $('.hideme').each(function(i) {

      var bottom_of_object = $(this).position().top + $(this).outerHeight();
      var bottom_of_window = $(window).scrollTop() + $(window).height();

      /* If the object is completely visible in the window, fade it it */
      if (bottom_of_window > bottom_of_object) {

        $(this).animate({
          'opacity': '1'
        }, 1500);

      }

    });

  });
  // ==== Parallax animation ====
  $('.parallax2').parallax();
  $('.swipebox').swipebox();
  $('h1').css({
    'width': '100%',
    'text-align': 'center'
  });
  var h1 = $('h1').height();
  var h = h1 / 2;
  var w1 = $(window).height();
  var w = w1 / 2;
  var m = w - h
  $('h1').css("margin-top", m + "px")

  // ===== ? ====

  // $(function() {
  //   $('a[href*=#]').on('click', function(e) {
  //     e.preventDefault();
  //     $('html, body').animate({
  //       scrollTop: $($(this).attr('href')).offset().top
  //     }, 500, 'linear');
  //   });
  // });

  //==== Filtr ====
  $(function() {
    //Simple filter controls
    $('.filtrSkill li').click(function() {
      $('.filtrSkill li').removeClass('filtr-active');
      $(this).addClass('filtr-active');
    });
  });

  var options = [{
    selector: '#image-test',
    offset: 500,
    callback: function(el) {}
  }];

  Materialize.scrollFire(options);
  var filterizd = $('.filtr-container').filterizr({
    layout: 'sameHeight'
  });

  // addition for swipebox, closing img on click on bg
  // jQuery(function() {
  //   jQuery(document.body)
  //     .on('click touchend', '#swipebox-slider .current img', function(e) {
  //       console.log("called")
  //       return false;
  //     })
  //     .on('click touchend', '#swipebox-slider .current', function(e) {
  //       jQuery('#swipebox-close').trigger('click');
  //       console.log("called")
  //     });
  // });

});
