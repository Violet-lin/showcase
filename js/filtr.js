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
// ========
