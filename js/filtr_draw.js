//==== Filtr ====
$(function() {
  //Simple filter bar controls
  $('.filtrSkill li').click(function() {
    $('.filtrSkill li').removeClass('filtr-active');
    $(this).addClass('filtr-active');
  });
});

// var options = [{
//   selector: '#image-test',
//   offset: 500,
//   callback: function(el) {}
// }];

// Materialize.scrollFire(options);
// var filterizd = $('.filtr-container').filterizr('setOptions', {
//   layout: 'sameSize'
// });

// ========

// Default options
var options = {
     animationDuration: 0.5, // in seconds
     filter: 'all', // Initial filter
     callbacks: { 
        onFilteringStart: function() { },
        onFilteringEnd: function() { },
        onShufflingStart: function() { },
        onShufflingEnd: function() { },
        onSortingStart: function() { },
        onSortingEnd: function() { }
     },
     controlsSelector: '', // Selector for custom controls
     delay: 0, // Transition delay in ms
     delayMode: 'progressive', // 'progressive' or 'alternate'
     easing: 'ease-out',
     filterOutCss: { // Filtering out animation
        opacity: 1,
        transform: 'scale(0.5)'
     },
     filterInCss: { // Filtering in animation
        opacity: 1,
        transform: 'scale(1)'
     },
     layout: 'sameWidth', // See layouts
     multifilterLogicalOperator: 'or',
     selector: '.filtr-container',
     setupControls: true // Should be false if controlsSelector is set 
  } 
  // You can override any of these options and then call...
  var filterizd = $('.filtr-container').filterizr(options);
  // If you have already instantiated your Filterizr then call...
  filterizd.filterizr('setOptions', options);
                  
