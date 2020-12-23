$(function(){
    var slide_box;
    slide_box = setInterval(function(){
        $('#arti .alarm > li:nth-child(1)').animate({
            'margin-top':'-2em'},600,function(){
                $('#arti .alarm').append($('#arti .alarm > li:nth-child(1)'));
                $('.#arti .alarm > li:nth-child(4)').css({'margin-top':'-2em'});//first-child,last-child 도 가능함
            });
    },2000);
})