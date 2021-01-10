$(function(){
    var slide_box;
    slide_box = setInterval(function(){
        $('#arti .alarm li:nth-child(1)').animate({
            'margin-top':'-2em'},600,function(){
                $('#arti .alarm ul').append($('#arti .alarm li:nth-child(1)'));
                $('#arti .alarm li:last-child').css({'margin-top':'0'});
            });
    },2000);

    var slide_box;
    slide_box = setInterval(function(){
        $('#arti .search li:nth-child(1)').animate({
            'margin-top':'-2em'},600,function(){
                $('#arti .search ul').append($('#arti .search li:nth-child(1)'));
                $('#arti .search li:last-child').css({'margin-top':'0'});
            });
    },2000);

      $(window).scroll(function(){
          if($(document).scrollTop() >= 1200 && $(document).scrollTop() <= $('#footer').offset().top - 800){
              $('#quickmenu').fadeIn(200)
          }else {$('#quickmenu').fadeOut(200)}
      })//scroll

      $('#header .all_nav').click(function(){
          $('#nav_pop').fadeIn();
      })

     $('#nav_pop .nav_close').click(function(){
         $('#nav_pop').fadeOut();
     })
     
     $('#top_popup .close').click(function(){
         $('#top_popup').slideUp();
     })
})//jq end

