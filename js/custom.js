         $(document).ready(function(){
             $("#mycarousel").carousel( { interval: 5000 } );
                           $("#carousel-pause").click(function(){
                 $("#mycarousel").carousel('pause');
             });
                         $("#carousel-play").click(function(){
                 $("#mycarousel").carousel('cycle');
             });
         });      
         $('li.fom').mouseenter(function(){
         var pos = $(this).position();
         $(this).find('div').css('top', (pos.top)+40 + 'px').fadeIn();
         }).mouseleave(function(){
         $(this).find('div').fadeOut();
         });
         $(".card").flip({
         axis: 'x',
         trigger: 'hover'
         });
