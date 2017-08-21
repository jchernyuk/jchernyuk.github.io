$('.technique_slider').slick({
    dots: false,
    infinite: false,
    arrows: false,
    draggable: false,
    fade: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
    cssEase: 'linear'
});



//Проверка работы jQuery
//$(document).ready(function(){
// alert(jQuery.fn.jquery);
// });

//Получаем список
var $set = $('.technique_left .cell');
$('.cell').on('click', function (e) {
    e.preventDefault();
    var n=$set.index(this);    
    console.log(n);
    $('.technique_slider').slick('slickGoTo', n)
});