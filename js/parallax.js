
$(document).ready(function(){

  var controller = new ScrollMagic.Controller();

  var homeScrollScene = new  ScrollMagic.Scene({
    triggerElement: '.nav-wrapper',
    triggerHook:0.5
  })
  .setClassToggle('.nav-wrapper','fade-in')
  // .addIndicators()
  .addTo(controller);

  // ==== Parallax animation ====

});
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
