import { Tabs } from "../../model/Tabs/Tabs";
import { allTabs } from "../../view/tabsV/tabsV";
import $ from 'jquery'
import { sliderInTabsV } from "../../view/slidersV/sliderInTabsV";
import { SliderInTabs } from "../../model/sliders/SliderInTabs";
import { slider111 } from "../../view/slidersV/slider-1-1-1V";
import { SliderInTabs111 } from "../../model/sliders/SliderInTab111";

let sliderInTabsF = false
let allTabsF = new Tabs(allTabs)

allTabs.forEach(i => {
    if (i.classList.contains('slider-0-2-1-init')) {
        i.addEventListener('click', (event) => {
            allTabsF.tabClick(event, i)
            if ($(window).width() <= 991) {
                sliderInTabsF = new SliderInTabs(sliderInTabsV, '.slider-0-2-1__slide')
                sliderInTabsF.sliderInit()
            }
        })
    } else if (i.classList.contains('slider-1-1-1-init')) {
        i.addEventListener('click', (event) => {
            allTabsF.tabClick(event, i)
            sliderInTabsF = new SliderInTabs111(slider111, '.default-slider__item')
            sliderInTabsF.sliderInit()
        })
    } else {
        i.addEventListener('click', (event) => {
            allTabsF.tabClick(event, i)
        })
    }
})

export { allTabsF }
