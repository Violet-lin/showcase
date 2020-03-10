
$(document).ready(function(){

  var controller = new ScrollMagic.Controller();

  var homeScrollScene = new ScrollMagic.Scene({
    triggerElement: '.pDesign',
    triggerHook:0.5,
    duration: 916
  })

  .setPin("#pDesign")

  // .setClassToggle('.pDesign','fade-in')
  // .addIndicators({name: "1 (duration: 900)"})
  .addTo(controller);

  var homeScrollScene2 = new ScrollMagic.Scene({
    triggerElement: '.pDev',
    triggerHook:0.5,
    duration: 300
  })
  .setPin("#pDev")
  // .addIndicators({name: "2 (duration: 300)"})
  .addTo(controller);

  new ScrollMagic.Scene({
							triggerElement: "#trigger1",
							triggerHook: 0.9, // show, when scrolled 10% into view
							duration: "80%", // hide 10% before exiting view (80% + 10% from bottom)
							offset: 50 // move trigger to center of element
						})
						.setClassToggle("#reveal1", "visible") // add class to reveal
						// .addIndicators() // add indicators (requires plugin)
						.addTo(controller);
  // ==== Parallax animation ====

});
$('.parallax_area').parallax();
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
