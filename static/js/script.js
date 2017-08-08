$(document).ready(function(){
    $('#webpage').fadeIn(600);
    $('#nav').fadeIn(600);
    $('#andrew-pic').fadeIn(900);
    $('#about').fadeIn(1500);
    $('#everything-else').fadeIn(1500);
    $('#footing').fadeIn(1500);

    $('.about-sec').click( function() {
     $('html, body').animate({
          scrollTop: $('#about').offset().top
     }, 700);
   });

   $('.project-sec').click( function() {
     $('html, body').animate({
          scrollTop: $('#projects').offset().top
     }, 1200);
   });

   $('.contact-sec').click( function() {
     $('html, body').animate({
          scrollTop: $('#contact').offset().top
     }, 1500);
   });

});
