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

  // ===== ====

  // $(function() {
  //   $('a[href*=#]').on('click', function(e) {
  //     e.preventDefault();
  //     $('html, body').animate({
  //       scrollTop: $($(this).attr('href')).offset().top
  //     }, 500, 'linear');
  //   });
  // });



  // addition for swipebox, closing img on click on bg
  // $(function(){
  //   $(document.body)
  //       .on('click touchend','#swipebox-slider .current img', function(e){
  //           return false;
  //           console.log("test");
  //       })
  //       .on('click touchend','#swipebox-slider .current', function(e){
  //           $('#swipebox-close').trigger('click');
  //           console.log("test2");
  //
  //       });
  // });
  // addition for swipebox, closing img on click on bg

  // jQuery(function(){
  //
  // "use strict";
  //
  // jQuery(document.body)
  //
  // // closes when bg clicked
  //
  // .on('click','#swipebox-slider .current img', function(){
  //
  // return false;
  //
  // })
  //
  // .on('click','#swipebox-slider .current', function(){
  //
  // jQuery('#swipebox-close').click();
  //
  // });
  //
  // });
});
