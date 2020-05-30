import $ from 'jquery'
import {LastNewsSlider } from "./LastNewsSlider";

class CertificatesSlider extends LastNewsSlider{
    constructor(slider) {
        super(slider);
    }

    sliderInit () {
        if (this.slider && !this.slider.classList.contains('slick-initialized')) {
            $(this.slider).slick({
                slidesToShow: 1,
                nextArrow: `<button class="default-btn-next"></button>`,
                prevArrow: `<button class="default-btn-prev"></button>`,
            })
        }
    }
}

export { CertificatesSlider }
