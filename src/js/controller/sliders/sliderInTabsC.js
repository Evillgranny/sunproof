import $ from 'jquery'
import { sliderInTabsV } from "../../view/slidersV/sliderInTabsV";
import { SliderInTabs } from "../../model/sliders/SliderInTabs";

let sliderInTabsF = false

if ($(window).width() <= 991) {
    sliderInTabsF = new SliderInTabs(sliderInTabsV, '.catalog-card')
    sliderInTabsF.sliderInit()
}

export { sliderInTabsF }
