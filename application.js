


document.addEventListener("DOMContentLoaded", function() {
  document.querySelector(".ottawa").addEventListener("click", function(event){
  event.preventDefault();
  $('.ottawa_update').show();
  $('body').animate({scrollTop:$('.ottawa_update').offset().top},900)
  }, false);
