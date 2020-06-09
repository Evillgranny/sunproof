import $ from "jquery";
import {Slider321} from "./Slider-3-2-1";

class Slider221 extends Slider321{
    sliderInit () {
        if ($(this.slider) && !$(this.slider).hasClass('slick-initialized')) {
            $(this.slider).slick({
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
}

export { Slider221 }
