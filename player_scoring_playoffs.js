console.log('alert');

// document.querySelector(".main_header").addEventListener("click", function(event){
//             alert("preventDefault will stop you from checking this checkbox!")
//             event.preventDefault();
//         }, false);


document.addEventListener("DOMContentLoaded", function() {
  document.querySelector(".main_header").addEventListener("click", function(event){
  event.preventDefault();
  $('.col-md-3').show();
  $('body').animate({scrollTop:$('.col-md-3').offset().top},900)
  }, false);




document.querySelector(".hide_off_the_dribble").addEventListener("click", function(event){
event.preventDefault();
$('.col-md-3').none();
$('body').animate({scrollTop:$('body').offset().top},900)
}, false);

});


// $(document).on("click",".main_header",function(event){
//   alert('hello');
//   event.preventDefault();
//   $('.col-md-3').show();
//   $('body').animate({scrollTop:$('.col-md-3').offset().top},900)
// });
