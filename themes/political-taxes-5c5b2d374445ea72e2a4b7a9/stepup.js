$(document).ready(function($) {
  new WOW().init();

  $('button.hamburger').click(function(){
    $(this).toggleClass('is-active');
  });

});
