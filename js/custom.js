//carousel
$(document).ready(function(){
             $("#mycarousel").carousel( { interval: 3000 } );
                           $("#carousel-pause").click(function(){
                 $("#mycarousel").carousel('pause');
             });
                         $("#carousel-play").click(function(){
                 $("#mycarousel").carousel('cycle');
             });
         });    

//tooltip
         $('li.fom').mouseenter(function(){
         var pos = $(this).position();
         $(this).find('div').css('top', (pos.top)+35 + 'px').fadeIn();
         }).mouseleave(function(){
         $(this).find('div').fadeOut();
         });

//card flipping
         $(".card").flip({
         axis: 'x',
         trigger: 'hover'
         });

//scroll transition
  $(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
    });
  });

// Get the modal
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('myImg');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}

//parallax
$(function(){

  var parallax = document.querySelectorAll(".parallax"),
      speed = 0.5;

  window.onscroll = function(){
    [].slice.call(parallax).forEach(function(el,i){

      var windowYOffset = window.pageYOffset,
          elBackgrounPos = "50% " + (windowYOffset * speed) + "px";

      el.style.backgroundPosition = elBackgrounPos;
$("#fade").css("opacity", 1 - $(window).scrollTop() / 350);
    });
  };

});

//pop out when scrolling
$(document).foundation();  
      $(document).animateScroll();
    

//delay onload
$(document).ready(function(){
    $("nav").hide(0).delay(500).fadeIn(3000)
});

function loading(){
$("#loader").delay(300).fadeOut(2000);
    $("#loader div").delay(500).hide(0);
}
