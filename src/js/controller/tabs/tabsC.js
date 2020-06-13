import { Tabs } from "../../model/Tabs/Tabs";
import { allTabsMarquises, allContainersMarquises, allTabsPergolas, allContainersPergolas, allTabsGlazing, allContainersGlazing } from "../../view/tabsV/tabsV";

let tabsMarquises = new Tabs(allTabsMarquises, allContainersMarquises)
let tabsPePergolas = new Tabs(allTabsPergolas, allContainersPergolas)
let tabsGlazing = new Tabs(allTabsGlazing, allContainersGlazing)

tabsMarquises.tabClick()
tabsPePergolas.tabClick()
tabsGlazing.tabClick()

export { tabsMarquises, tabsPePergolas, tabsGlazing }
