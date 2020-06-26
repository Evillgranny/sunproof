import $ from "jquery";

class SliderInTabs111 {
    constructor(slider, slideClass) {
        this.slider = slider
        this.slideClass = slideClass
    }

    sliderInit () {
        this.slider.forEach(i => {
            let slidesArray = $(i).find(this.slideClass)

            if (slidesArray.length > 1) {
                if ($(i) && !$(i).hasClass('slick-initialized')) {
                    $(i).slick({

                        nextArrow: `<button class="default-btn-next"></button>`,
                        prevArrow: `<button class="default-btn-prev"></button>`,
                    })
                } else {
                    $(i).slick('destroy')
                    $(i).slick({
                        nextArrow: `<button class="default-btn-next"></button>`,
                        prevArrow: `<button class="default-btn-prev"></button>`,
                    })
                }
            }
        })
    }
}

export { SliderInTabs111 }
