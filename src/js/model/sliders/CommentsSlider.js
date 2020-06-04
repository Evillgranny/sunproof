import $ from "jquery";
import {Slider321} from "./Slider-3-2-1";

class CommentsSlider extends Slider321{
    constructor(slider) {
        super(slider);
    }

    sliderInit () {
        if (this.slider && !this.slider.classList.contains('slick-initialized')) {
            $(this.slider).slick({
                slidesToShow: 2,
                slidesToScroll: 2,
                nextArrow: `<button class="default-btn-next"></button>`,
                prevArrow: `<button class="default-btn-prev"></button>`,
                responsive: [
                    {
                        breakpoint: 767,
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

export { CommentsSlider }
