$(function(){
    const window_width = $(window).width();
    $('.p-service__slider').slick({
        arrows: true,
        autoplay:true,
        speed:1500,
        easing: 'swing',
        centerMode: true,
        centerPadding:'25%',
        prevArrow:'<div class="c-slide__btn c-slide__prevBtn"></div>',
        nextArrow:'<div class="c-slide__btn c-slide__nextBtn"></div>',
        responsive: [
            {
                breakpoint:768,
                settings:{
                    centerPadding:'0%',
                    slidesToShow:1,
                    slidesToScroll:1,
                }
            }
        ]
    });
    let runScroll = function() {
        $('a[href^="#"]').click(function() {
            let speed = 400;
            let href = $(this).attr("href");
            let $target = $(href == "#" || href == "" ? 'html' : href);
            let position = $target.offset().top - 100;

            $('body,html').animate({
                scrollTop: position
            }, speed, 'swing');
            return false;
        });
    };
    $('.l-header__menuTrigger').on('click',function(){
        $(this).toggleClass('is-active');
        $('.l-header__links ').toggleClass('is-active');
    })
    let unlockCheckBox = function() {
        let $trigger = $('.l-header__links a');
        let $target = $('.l-header__menuTrigger');

        $trigger.click(function() {
            $target.trigger('click');
        });
    }

    runScroll();
    unlockCheckBox();
});

//ころりん
$(window).on("scroll",function() {
    if( $(window).scrollTop() > 100) {
        $('.l-header__mail').addClass('is-over');
    }else{
        $('.l-header__mail').removeClass('is-over');
    }
    if( $(window).scrollTop() > $( '#c-contact').offset().top - 1000){
        $('.l-header__mail').removeClass('is-over');
    }
})