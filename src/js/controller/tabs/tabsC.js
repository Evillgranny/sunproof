import { Tabs } from "../../model/Tabs/Tabs";
import { allTabsMarquises, allContainersMarquises, allTabsPergolas, allContainersPergolas } from "../../view/tabsV/tabsV";

let tabsMarquises = new Tabs(allTabsMarquises, allContainersMarquises)
let tabsPePergolas = new Tabs(allTabsPergolas, allContainersPergolas)

tabsMarquises.tabClick()
tabsPePergolas.tabClick()

export { tabsMarquises, tabsPePergolas }
