$(document).ready(function() {
    var classList = ['first', 'second', 'third'];
    var slider = new Swiper('.my-slider-container .swiper-container', {
        loop: false,
        autoplay: false,
        slidesPerView: 1,
        observer: true,
        observeParents: true,
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true
        },
        on: {
            init: function() {
                var index = this.activeIndex; // current slide index
                $('.my-slider-container')
                    .removeClass(classList)
                    .addClass(classList[index]);

                $('.my-slider-container .img-wrapper')
                    .removeClass('active')
                    .eq(index)
                    .addClass('active');
            }
        }
    }).on('slideChange', function() {
        var index = this.activeIndex; // current slide index
        $('.my-slider-container')
            .removeClass(classList)
            .addClass(classList[index]);
        $('.my-slider-container .img-wrapper')
            .removeClass('active')
            .eq(index)
            .addClass('active');
    });
    $(window).on('resize', function() {
        slider.update();
    });
});