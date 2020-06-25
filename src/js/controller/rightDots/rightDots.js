import { dotsContainer, sections, dotClass, blackBg, blackBgClass } from "../../view/rightDotsV/rightDotsV";
import { RightDots } from "../../model/RightDots/RightDots";

let rd = false
if (window.innerWidth > 991) {
    let rd = new RightDots(dotsContainer, sections, dotClass, blackBg, blackBgClass)
    rd.dotsToDOM()
}



export { rd }
