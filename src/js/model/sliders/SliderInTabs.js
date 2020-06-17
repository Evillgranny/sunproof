import $ from "jquery";

class SliderInTabs {
    constructor(slider, slideClass) {
        this.slider = slider
        this.slideClass = slideClass
    }

    sliderInit () {
        if ($(window).width() <= 991) {
            this.slider.forEach(i => {
                let slidesArray = $(i).find(this.slideClass)

                if (slidesArray.length > 1) {
                    if ($(i) && !$(i).hasClass('slick-initialized')) {
                        $(i).slick({
                            slidesToShow: 2,
                            slidesToScroll: 2,
                            nextArrow: `<button class="default-btn-next"></button>`,
                            prevArrow: `<button class="default-btn-prev"></button>`,
                            responsive: [
                                {
                                    breakpoint: 575,
                                    settings: {
                                        slidesToShow: 1,
                                        slidesToScroll: 1
                                    }
                                },
                            ]
                        })
                    } else {
                        $(i).slick('destroy')
                        $(i).slick({
                            slidesToShow: 2,
                            slidesToScroll: 2,
                            nextArrow: `<button class="default-btn-next"></button>`,
                            prevArrow: `<button class="default-btn-prev"></button>`,
                            responsive: [
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
            })
        }
    }
}

export { SliderInTabs }
