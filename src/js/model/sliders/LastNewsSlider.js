import $ from "jquery";

class LastNewsSlider {
    constructor(slider) {
        this.slider = slider
    }

    sliderInit () {
        if (this.slider && !this.slider.classList.contains('slick-initialized')) {
            $(this.slider).slick({
                slidesToShow: 3,
                slidesToScroll: 3,
                nextArrow: `<button class="default-btn-next"></button>`,
                prevArrow: `<button class="default-btn-prev"></button>`,
                responsive: [
                    {
                        breakpoint: 991,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 2
                        }
                    },
                    {
                        breakpoint: 575,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    },
                ]
            })
        }
    }
}

export { LastNewsSlider }
