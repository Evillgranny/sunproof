import $ from "jquery";
import {Slider321} from "./Slider-3-2-1";

class Slider111 extends Slider321{
    sliderInit () {
        if ($(this.slider) && !$(this.slider).hasClass('slick-initialized')) {
            $(this.slider).slick({
                slidesToShow: 1,
                nextArrow: `<button class="default-btn-next"></button>`,
                prevArrow: `<button class="default-btn-prev"></button>`,
            })
        }
    }
}

export { Slider111 }
