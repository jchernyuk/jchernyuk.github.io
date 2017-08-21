$('.technique_slider').slick({
  dots: false,
  infinite: false,
  arrows: false,
  speed: 300,
  slidesToShow: 1,
  adaptiveHeight: true
});



//Проверка работы jQuery
//$(document).ready(function(){
// alert(jQuery.fn.jquery);
// });

//Получаем список
$('.wrapper').on('click', 'a[href*=#technique]', function() {
    alert($(this).parent().index());

})