/////////////////////////////////////////
//           ROYAL SLIDER              //
/////////////////////////////////////////

$(document).ready(function($) {
  $(".royalSlider").royalSlider({
        keyboardNavEnabled: true
    });
});

/* =========================================================================
    Body Class
========================================================================= */


// $(document).on('click', '.js-body-add-class', function() {
//     $('body').addClass($(this).data('body-class'));
// });
//
// $(document).on('click', '.js-body-remove-class', function() {
//     $('body').removeClass($(this).data('body-class'));
// });
//
// $(document).on('click', '.js-body-toggle-class', function() {
//     $('body').toggleClass($(this).data('body-class'));
// });

$('.desktop-view-more-trigger').on('click', function() {
  $('.view-more').toggleClass('view-more-open')
})
