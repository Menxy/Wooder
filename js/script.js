$(document).ready(function(){
    $('.wooder__left').slick({
        arrows: false,
        dots: true,
        adaptiveHeight: false, // true для slick-list
        slidesToShow: 1, //Количество отображаемых слайдов
        slidesToScroll: 1, //Количество слайдов перемотки
        speed: 1000, // 300 умолчание в ms
        easing: "ease", //как в анимации css
        infinite: false, // бесконечная перемотка (false)
        initialSlide: 2, //стартовый слайд
        autoplay: false,  
        autoplaySpeed: 2000, //ms, к autoplay
        pauseOnFocus: true, // к autoplay
        pauseOnHover: true, // к autoplay
        pauseOnDotsHover: true, // к autoplay
        draggable: true, //перетаскивание мышкой
        swipe: true, //перетаскивание тачскрином
        touchTheshold: 5, //ширина свайпа
        touchMove: true, //Включение передвижения тачскрином
        waitForAnimate: true, // Быстро кликаешь - ждёт анимацию
        centerMode: false, //Активный слайд по центру. Показывает 3 слайда. Получает класс .slick-center
        variableWidth: false, // Сбрасывает width.
        rows: 1, //Можно больше. Ряды слайдов.
        slidesPerRow: 1,
        vertical: true, //Вертикальный слайдер


    });
})