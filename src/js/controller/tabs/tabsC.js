import { Tabs } from "../../model/Tabs/Tabs";
import { allTabs } from "../../view/tabsV/tabsV";
import $ from 'jquery'
import { sliderInTabsV } from "../../view/slidersV/sliderInTabsV";
import { SliderInTabs } from "../../model/sliders/SliderInTabs";

let sliderInTabsF = false
let allTabsF = new Tabs(allTabs)

allTabs.forEach(i => {
    if (i.classList.contains('slider-0-2-1-init')) {
        i.addEventListener('click', (event) => {
            allTabsF.tabClick(event, i)
            if ($(window).width() <= 991) {
                sliderInTabsF = new SliderInTabs(sliderInTabsV, '.catalog-card')
                sliderInTabsF.sliderInit()
            }
        })
    } else {
        i.addEventListener('click', (event) => {
            allTabsF.tabClick(event, i)
        })
    }
})

export { allTabsF }
